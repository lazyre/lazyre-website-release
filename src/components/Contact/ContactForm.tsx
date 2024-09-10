"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitForm } from "@/actions/submit-form";
import { uploadToS3 } from "@/actions/s3-upload";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  CircleAlert,
  CirclePlus,
  FileIcon,
  Trash,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingLabelInput } from "../FloatingInput";
import { CustomInputButton } from "../CustomInputButton";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/plain",
  "text/csv",
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/bmp",
  "image/tiff",
  "application/zip",
  "application/x-tar",
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  mobileNumber: z
    .object({
      country: z.string(),
      code: z.string(),
      number: z.string().regex(/^\d+$/, "Invalid phone number").optional(),
    })
    .optional(),
  companyName: z.string().optional(),
  projectIdea: z
    .string()
    .min(10, { message: "Please provide more details about your idea" }),
  // budget: z.enum([
  //   "<$50K",
  //   "$50K - $100K",
  //   "$100K - $200K",
  //   ">$200K",
  //   "LET'S DISCUSS",
  // ]),
  services: z
    .array(
      z.enum([
        "Branding",
        "Site from scratch",
        "Mobile development",
        "Designing",
        "Product design",
        "Digital marketing",
        "Photography",
        "Others",
      ])
    )
    .min(1, { message: "Please select at least one service" }),
  referral: z.array(
    z.enum(["Social media", "Referral", "Internet", "Others"]).optional()
  ),
  deadline: z.enum(["ASAP", "1 month", "3+ months", "no deadline"]),
});

export type FormData = z.infer<typeof formSchema>;

interface FileInfo {
  name: string;
  size: number;
  type: string;
  file: File;
}

interface Country {
  value: string;
  label: string;
  code: string;
  flag: string;
}

export default function ContactForm() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);
  const [step, setStep] = useState<number>(1);
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [uploadProgress, setUploadProgress] = useState<{
    [key: string]: number;
  }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const turnstileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  // const [isTurnstileVisible, setIsTurnstileVisible] = useState(false);

  // const [turnstileWidgetId, setTurnstileWidgetId] = useState<
  //   string | null | void
  // >(null);

  // useEffect(() => {
  //   if (step === 2) {
  //     setIsTurnstileVisible(true);
  //   } else {
  //     setIsTurnstileVisible(false);
  //     if (turnstileWidgetId) {
  //       window.turnstile.remove(turnstileWidgetId);
  //       setTurnstileWidgetId(null);
  //     }
  //   }
  // }, [step, turnstileWidgetId]);

  // useEffect(() => {
  //   if (isTurnstileVisible) {
  //     renderTurnstile();
  //   }
  // }, [isTurnstileVisible]);

  // const renderTurnstile = () => {
  //   if (
  //     typeof window !== "undefined" &&
  //     window.turnstile &&
  //     turnstileRef.current
  //   ) {
  //     if (turnstileWidgetId) {
  //       window.turnstile.remove(turnstileWidgetId);
  //     }
  //     const widgetId = window.turnstile.render(turnstileRef.current, {
  //       sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  //       theme: "light",
  //     });
  //     console.log(typeof widgetId);
  //     setTurnstileWidgetId(widgetId);
  //   }
  // };

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch("/api/countries");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setIsLoadingCountries(false);
      }
    }

    fetchCountries();
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      projectIdea: "",
      // budget: "<$50K",
      services: [],
      referral: [],
      deadline: "ASAP",
    },
  });

  const onSubmit = useCallback(
    async (data: FormData) => {
      setIsSubmitting(true);
      // const turnstileElement = turnstileRef.current?.querySelector(
      //   'input[name="cf-turnstile-response"]'
      // ) as HTMLInputElement | null;
      // const token = turnstileElement?.value;

      // if (!token) {
      //   setSubmitResult({
      //     success: false,
      //     message: "Please complete the Turnstile challenge",
      //   });
      //   setIsSubmitting(false);
      //   return;
      // }

      try {
        const uploadedFiles = await Promise.all(
          files.map(async (file) => {
            const { url } = await uploadToS3(file.file, (progress) => {
              setUploadProgress((prev) => ({
                ...prev,
                [file.name]: progress,
              }));
            });
            return url;
          })
        );

        const formDataWithFiles = {
          ...data,
          files: uploadedFiles,
        };

        const result = await submitForm(formDataWithFiles);
        setSubmitResult(result);

        if (result.success) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          router.push("/");
        }
      } catch (error) {
        setSubmitResult({
          success: false,
          message: "An error occurred while submitting the form",
        });
      }
      setIsSubmitting(false);
    },
    [files, router]
  );

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target.files;
      if (selectedFiles) {
        const newFiles = Array.from(selectedFiles).map((file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
          file,
        }));
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      }
    },
    []
  );

  const removeFile = useCallback((index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  }, []);

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.currentTarget.classList.add("border-primary");
  };

  const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    event.currentTarget.classList.remove("border-primary");
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.currentTarget.classList.remove("border-primary");
    if (event.dataTransfer.files) {
      const newFiles = Array.from(event.dataTransfer.files)
        .filter((file) => file.size <= MAX_FILE_SIZE)
        .map((file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
          file,
        }));
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const formatFileSize = useCallback((bytes: number) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  }, []);

  const isFirstStepValid =
    form.watch(["name", "email"]).every(Boolean) &&
    !form.formState.errors.name &&
    !form.formState.errors.email;

  const [openCountryPopover, setOpenCountryPopover] = useState(false);

  return (
    <div className="bg-white text-black h-full p-6 xl:p-20 font-bold overflow-y-hidden">
      <h2 className="text-black text-4xl lg:text-6xl xl:text-6xl">
        Lets begin something great together
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div aria-live="polite" className="sr-only">
            {step === 1
              ? "Step 1 of 2: Personal Information"
              : "Step 2 of 2: Project Details"}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput
                          label="Your Name *"
                          id="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput
                          label="Email *"
                          id="email"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FloatingLabelInput
                          label="Company Name"
                          id="companyName"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobileNumber"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <div className="flex space-x-2">
                        <Popover
                          open={openCountryPopover}
                          onOpenChange={setOpenCountryPopover}
                        >
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={openCountryPopover}
                                className={cn(
                                  "text-black h-16 xl:w-[200px] justify-between rounded-none",
                                  !field.value?.country &&
                                    "text-muted-foreground"
                                )}
                                disabled={isLoadingCountries}
                              >
                                {field.value?.country ? (
                                  <>
                                    <Image
                                      src={
                                        countries.find(
                                          (c) =>
                                            c.value === field.value?.country
                                        )?.flag || ""
                                      }
                                      alt={`Flag of ${
                                        countries.find(
                                          (c) =>
                                            c.value === field.value?.country
                                        )?.label
                                      }`}
                                      width={20}
                                      height={15}
                                      className="mr-2"
                                    />
                                    {
                                      <div className="hidden xl:block">
                                        {
                                          countries.find(
                                            (c) =>
                                              c.value === field.value?.country
                                          )?.label
                                        }
                                      </div>
                                    }
                                  </>
                                ) : (
                                  <>
                                    <span className="hidden xl:block">
                                      Select country
                                    </span>
                                    <span className="block xl:hidden text-xs  ">
                                      Country
                                    </span>
                                  </>
                                )}
                                <ChevronsUpDown className="ml-2 h-3 w-3 xl:h-4 xl:w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0 z-[60] rounded-none">
                            <Command>
                              <CommandInput placeholder="Search country..." />
                              <CommandList>
                                <CommandEmpty>No country found.</CommandEmpty>
                                <CommandGroup>
                                  {countries.map((country) => (
                                    <CommandItem
                                      value={country.label}
                                      key={country.value}
                                      onSelect={() => {
                                        form.setValue(
                                          "mobileNumber",
                                          {
                                            ...field.value,
                                            code: country.code,
                                            country: country.value,
                                          },
                                          {
                                            shouldValidate: true,
                                            shouldDirty: true,
                                            shouldTouch: true,
                                          }
                                        );
                                        setOpenCountryPopover(false);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          country.value === field.value?.country
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      <Image
                                        src={country.flag}
                                        alt={`Flag of ${country.label}`}
                                        width={20}
                                        height={15}
                                        className="mr-2"
                                      />
                                      {country.label} ({country.code})
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        <FormControl>
                          <div className="flex-1 flex relative h-16">
                            <div className="bg-muted text-slate-500 border-b-2 border-slate-200 px-3 py-2 flex items-center">
                              {countries.find(
                                (c) => c.value === field.value?.country
                              )?.code || <span className="opacity-0">+</span>}
                            </div>
                            <Input
                              placeholder="Mobile"
                              className="h-16 border-slate-200"
                              value={field.value?.number || ""}
                              onChange={(e) => {
                                form.setValue(
                                  "mobileNumber",
                                  {
                                    country: field.value?.country || "",
                                    code: field.value?.code || "",
                                    number: e.target.value,
                                  },
                                  {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                    shouldTouch: true,
                                  }
                                );
                              }}
                            />
                          </div>
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="button"
                  className="disabled:bg-slate-500 disabled:cursor-not-allowed"
                  onClick={() => setStep(2)}
                  disabled={!isFirstStepValid}
                >
                  Explain Project Idea
                  <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <Button
                  type="button"
                  className="bg-slate-300 text-gray-700"
                  onClick={() => setStep(1)}
                >
                  <ChevronLeft className="mr-2" />
                  <span>Back</span>
                </Button>
                <FormField
                  control={form.control}
                  name="projectIdea"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Explain your idea</FormLabel>
                      <FormControl>
                        <Textarea
                          className="border-b-2 border-b-slate-200"
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormItem>
                  <FormLabel className="flex flex-col space-y-4">
                    <span className="text-lg font-semibold text-primary">
                      Upload
                    </span>
                    <label
                      htmlFor="fileUpload"
                      className="cursor-pointer rounded-md p-4 space-y-2 text-slate-600 flex justify-center items-center flex-col border-slate-200 border-2 border-dotted transition-colors duration-200 focus-within:border-primary hover:border-primary"
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <CirclePlus className="h-6 w-6 text-primary" />
                      <p className="text-sm">
                        Drag & drop or click to upload files
                      </p>
                      <div className="flex space-x-2 items-center text-warning">
                        <CircleAlert className="h-4 w-4" />
                        <p className="text-xs">Max file size: 5 MB</p>
                      </div>
                    </label>
                    <div className="text-slate-400 text-xs text-center">
                      Accepted formats: Text, Images, PDF, Word, Excel, Zip
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      id="fileUpload"
                      className="sr-only"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept={ACCEPTED_FILE_TYPES.join(",")}
                      multiple
                      aria-label="File upload"
                    />
                  </FormControl>
                  <AnimatePresence>
                    {files.length > 0 && (
                      <motion.ul
                        className="space-y-2 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {files.map((file, index) => (
                          <motion.li
                            key={file.name}
                            className="flex justify-between items-center gap-2 border py-2 px-4 rounded-md bg-background"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FileIcon className="h-6 w-6 text-primary" />
                            <div className="flex items-center gap-2">
                              <div>
                                <div className="text-xs font-normal text-slate-800">
                                  {file.name.split(".")[0]}
                                </div>
                                <div className="text-xs font-light text-slate-500">
                                  .{file.name.split(".")[1]} |{" "}
                                  {formatFileSize(file.size)}
                                </div>
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="destructive"
                              className="rounded-full h-12 w-12"
                              onClick={() => removeFile(index)}
                              aria-label={`Remove ${file.name}`}
                            >
                              <Trash />
                            </Button>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </FormItem>

                {/* <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base mb-4">Budget</FormLabel>
                      <div className="flex flex-wrap gap-2">
                        {(
                          [
                            "<$50K",
                            "$50K - $100K",
                            "$100K - $200K",
                            ">$200K",
                            "LET'S DISCUSS",
                          ] as const
                        ).map((option) => (
                          <FormItem key={option}>
                            <FormControl>
                              <CustomInputButton
                                type="radio"
                                label={option.toUpperCase()}
                                checked={field.value === option}
                                onChange={() => field.onChange(option)}
                              />
                            </FormControl>
                          </FormItem>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

                <FormField
                  control={form.control}
                  name="services"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-base mb-4">
                        Services Needed
                      </FormLabel>
                      <div className="flex flex-wrap gap-2">
                        {(
                          [
                            "Branding",
                            "Site from scratch",
                            "Mobile development",
                            "Designing",
                            "Product design",
                            "Digital marketing",
                            "Photography",
                            "Others",
                          ] as const
                        ).map((item) => (
                          <FormField
                            key={item}
                            control={form.control}
                            name="services"
                            render={({ field }) => (
                              <FormItem key={item}>
                                <FormControl>
                                  <CustomInputButton
                                    type="checkbox"
                                    label={item.toUpperCase()}
                                    checked={field.value?.includes(item)}
                                    onChange={(e) => {
                                      const checked = e.target.checked;
                                      const updatedValue = checked
                                        ? [...(field.value || []), item]
                                        : (field.value || []).filter(
                                            (value) => value !== item
                                          );
                                      field.onChange(updatedValue);
                                    }}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base mb-4">Deadline</FormLabel>
                      <div className="flex flex-wrap gap-2">
                        {(
                          [
                            "ASAP",
                            "1 month",
                            "3+ months",
                            "no deadline",
                          ] as const
                        ).map((option) => (
                          <FormItem key={option}>
                            <FormControl>
                              <CustomInputButton
                                type="radio"
                                label={option.toUpperCase()}
                                checked={field.value === option}
                                onChange={() => field.onChange(option)}
                              />
                            </FormControl>
                          </FormItem>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referral"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-base mb-4">
                        Where did you hear about us?
                      </FormLabel>
                      <div className="flex flex-wrap gap-2">
                        {(
                          [
                            "Social media",
                            "Referral",
                            "Internet",
                            "Others",
                          ] as const
                        ).map((item) => (
                          <FormField
                            key={item}
                            control={form.control}
                            name="referral"
                            render={({ field }) => (
                              <FormItem key={item}>
                                <FormControl>
                                  <CustomInputButton
                                    type="checkbox"
                                    label={item.toUpperCase()}
                                    checked={field.value?.includes(item)}
                                    onChange={(e) => {
                                      const checked = e.target.checked;
                                      const updatedValue = checked
                                        ? [...(field.value || []), item]
                                        : (field.value || []).filter(
                                            (value) => value !== item
                                          );
                                      field.onChange(updatedValue);
                                    }}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Send"}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          {/* {isTurnstileVisible && <div ref={turnstileRef}></div>} */}

          {isSubmitting &&
            files.map((file, index) => (
              <motion.li className=" list-none" key={file.name}>
                <Progress value={uploadProgress[file.name] || 0} max={100} />
                <p className="text-xs text-slate-500">
                  {uploadProgress[file.name]
                    ? `${uploadProgress[file.name].toFixed(0)}%`
                    : "Waiting..."}
                </p>
              </motion.li>
            ))}

          {submitResult && submitResult.success && (
            <Alert>
              <AlertTitle>Thank You!</AlertTitle>
              <AlertDescription>
                Your form has been submitted successfully.
              </AlertDescription>
            </Alert>
          )}

          {submitResult && !submitResult.success && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{submitResult.message}</AlertDescription>
            </Alert>
          )}
        </form>
      </Form>
    </div>
  );
}
