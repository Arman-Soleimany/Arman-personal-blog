import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Arman Soleimany for your next web development project.",
};

export default function ContactPage() {
  return <ContactContent />;
}
