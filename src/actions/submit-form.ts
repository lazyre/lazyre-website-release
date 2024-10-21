"use server";

import { Resend } from "resend";
import { EmailTemplate } from "../components/EmailTemplate";
import { FormData } from "../components/Contact/ContactForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitForm(
  formData: FormData & {
    inquiryNumber: string;
    files: { url: string; sharableLink: string }[];
  }
) {
  try {
    await resend.emails.send({
      from: "Lazyre Project Inquiry <hello@contact.lazyre.com>",
      to: "info@lazyre.com",
      subject: "New Contact Form Submission",
      react: EmailTemplate(formData),
    });

    return { success: true, message: "Form submitted successfully" };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "An error occurred while submitting the form",
    };
  }
}
