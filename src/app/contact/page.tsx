"use client";
import Navbar from "@/components/shared/navbar";
import React from "react";
import Footer from "@/components/shared/footer";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "./action";
import { useToast } from "@/components/ui/use-toast";

interface Props {}

const formSchema = z.object({
  name: z.string().min(2, "This field is required.").max(50),
  email: z.string().email("Please enter valid email address."),
  subject: z.string().min(2, "This field is required.").max(50),
  message: z.string().min(5, "This field is required.").max(200),
});

const defaultValues = {
  name: "",
  subject: "",
  message: "",
  email: "",
};

function Contact({}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    sendEmail(values);
    form.reset(defaultValues);
    toast({
      description: "Form Submitted Successfully!",
    });
  }

  return (
    <div className="w-full min-h-page  bg-gradient-to-r from-rose-100 to-teal-100 pb-5">
      <Navbar />
      <div className="w-full h-full pt-20 min-h-screen">
        <div className="max-w-2xl mx-3 md:mx-auto shadow-xl rounded-xl mt-10 p-5 gap-5 bg-zinc-50/90">
          <h1 className="mb-5 text-2xl text-semibold">Contact Form</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@provider.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Web Application" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Hello, I would like to propose..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
