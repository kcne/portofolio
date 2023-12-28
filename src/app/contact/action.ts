'use server'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'This field is required.').max(50),
  email: z.string().email('Please enter valid email address.'),
  subject: z.string().min(2, 'This field is required.').max(50),
  message: z.string().min(10, 'This field is required.').max(200)
})

export async function sendEmail (values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_KEY}`
    },
    body: JSON.stringify({
      from: `Portofolio Form <onboarding@resend.dev>`,
      to: process.env.FORM_RECIPIENT,
      subject: `${values.subject} - ${values.email}`,
      text: values.message
    })
  })
}
