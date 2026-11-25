import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { AboutPageView } from "./_components/about-view";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "OPERO is the ordering infrastructure for restaurants and local commerce: build the experience, operate every order, and connect your systems.",
  path: "/company/about",
});

export default function CompanyAboutPage() {
  return <AboutPageView />;
}
