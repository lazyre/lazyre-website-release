"use client";

import { useState, useEffect, useRef } from "react";
import ContentWrapper from "@/components/ContentWrapper";
import HeroHeading from "@/components/HeroHeading";
import Link from "next/link";
import Image from "next/image";
import ArrowButton from "@/components/buttons/ArrowButton";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronDown, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

type WorkItem = {
  id: string;
  title: string;
  client: string;
  tags: string[];
  image: string;
};

type Props = {
  workData: WorkItem[];
};

function AllWork({ workData }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [tagSearchTerm, setTagSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredWork, setFilteredWork] = useState<WorkItem[]>(workData);

  const inputRef = useRef<HTMLInputElement>(null);
  const filterButtonRef = useRef<HTMLButtonElement>(null);

  const allTags = Array.from(new Set(workData.flatMap((work) => work.tags)));

  useEffect(() => {
    const filtered = workData.filter(
      (work) =>
        work.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) => work.tags.includes(tag)))
    );
    setFilteredWork(filtered);
  }, [searchTerm, selectedTags, workData]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredTags = allTags.filter((tag) =>
    tag.toLowerCase().includes(tagSearchTerm.toLowerCase())
  );

  const scrollToElement = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const headerHeight = 96; // h-24 is equivalent to 6rem, which is 96px
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <ContentWrapper>
      <section className="relative min-h-screen" aria-labelledby="All Work">
        <HeroHeading
          title="All works"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan consectetur posuere. Vestibulum fermentum iaculis libero, non venenatis nibh mattis sit amet."
          workHero
        />
        <div className="container mb-8 flex flex-col sm:flex-row gap-4">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow shadow-none border-0 border-b-2 border-b-foreground rounded-none focus-visible:border-b-primary focus-visible:ring-0"
            onClick={() => scrollToElement(inputRef)}
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                ref={filterButtonRef}
                variant="outline"
                className="rounded-full"
                onClick={() => scrollToElement(filterButtonRef)}
              >
                Filter by Tags <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Search tags..."
                  value={tagSearchTerm}
                  onChange={(e) => setTagSearchTerm(e.target.value)}
                />
                <ScrollArea className="h-[300px]">
                  {filteredTags.map((tag) => (
                    <div key={tag} className="flex items-center space-x-2 p-2">
                      <Checkbox
                        id={tag}
                        checked={selectedTags.includes(tag)}
                        onCheckedChange={() => handleTagToggle(tag)}
                      />
                      <Label htmlFor={tag}>{tag}</Label>
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="container mb-4 min-h-[40px] flex flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
              <Button
                variant="ghost"
                size="sm"
                className="ml-1 h-auto p-0 text-muted-foreground"
                onClick={() => handleTagToggle(tag)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
        <div className="container grid grid-cols-1 xl:grid-cols-3 gap-8">
          {filteredWork.map((work) => (
            <Link
              key={work.id}
              href={`/work/${work.id}`}
              className="w-full flex flex-col overflow-hidden rounded-xl p-6 bg-foreground text-background group cursor-pointer"
            >
              <div className="relative w-full h-[200px] xl:h-[300px] rounded-xl overflow-hidden">
                <Image
                  src={work.image}
                  fill
                  alt={`${work.title} project image`}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div>
                <ArrowButton buttonText={work.title} justifyBetween={true} />
              </div>
              <div className="w-full flex flex-wrap flex-grow text-lg text-text/80 font-light">
                {work.tags.slice(0, 4).map((tag, index) => (
                  <div key={index} className="relative flex opacity-80 w-full">
                    <span className="w-full">{tag}</span>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </ContentWrapper>
  );
}

export default AllWork;
