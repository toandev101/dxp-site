import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { ContactPageView } from "./_components/contact-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Reach sales, support or partnerships. One form, routed by topic, answered by email. Support starts in the knowledge base and the status page.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageView />;
}
