"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClasses =
    "w-full rounded-lg border border-line bg-surface px-4 py-3 text-foreground placeholder:text-muted transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">Name</label>
        <input
          {...register("name")}
          id="name"
          className={inputClasses}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
        <input
          {...register("email")}
          id="email"
          type="email"
          className={inputClasses}
          placeholder="your@email.com"
        />
        {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium">Subject</label>
        <input
          {...register("subject")}
          id="subject"
          className={inputClasses}
          placeholder="Project inquiry"
        />
        {errors.subject && <p className="mt-1.5 text-sm text-red-500">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Tell me about your project..."
        />
        {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
      >
        {sending ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>

      {submitted && (
        <div className="flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-green-500">
          <CheckCircle size={20} />
          <span>Message sent successfully! I&apos;ll get back to you soon.</span>
        </div>
      )}
    </form>
  );
}
