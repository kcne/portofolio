"use server";
import { z } from "zod";
import { formSchema } from "./page";

export async function sendEmail(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_KEY}`,
      },
      body: JSON.stringify({
        from: `Portofolio Form <onboarding@resend.dev>`,
        to: "kocanmn.dev@gmail.com",
        subject: `${values.subject} - ${values.email}`,
        text: values.message,
      }),
    })
}