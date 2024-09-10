"use server";

import { Resend } from "resend";
import { EmailTemplate } from "../components/EmailTemplate";
import { FormData } from "../components/Contact/ContactForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitForm(formData: FormData) {
  // const turnstileResponse = await fetch(
  //   "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       secret: process.env.TURNSTILE_SECRET_KEY,
  //       response: turnstileToken,
  //     }),
  //   }
  // );

  // const turnstileData = await turnstileResponse.json();

  // if (!turnstileData.success) {
  //   throw new Error("Turnstile verification failed");
  // }

  try {
    await resend.emails.send({
      from: "Lazyre Project Inquiry<hello@contact.lazyre.com>",
      to: "lazyre.tech@gmail.com",
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

// "use server";

// import { Resend } from "resend";
// import { EmailTemplate } from "../components/EmailTemplate";
// import { FormData } from "../components/Contact/ContactForm";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function submitForm(formData: FormData & { files?: string[] }) {
//   try {
//     await resend.emails.send({
//       from: "Lazyre Project Inquiry<hello@contact.lazyre.com>",
//       to: "lazyre.tech@gmail.com",
//       subject: "New Contact Form Submission",
//       react: EmailTemplate({ ...formData, files: formData.files || [] }),
//     });

//     return { success: true, message: "Form submitted successfully" };
//   } catch (error) {
//     console.error("Error submitting form:", error);
//     return {
//       success: false,
//       message: "An error occurred while submitting the form",
//     };
//   }
// }
