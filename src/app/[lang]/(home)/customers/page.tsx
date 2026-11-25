import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { CustomersDirectoryView } from "./_components/customers-directory-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Customer stories",
  description:
    "How restaurant groups, restaurant brands, and delivery businesses run ordering, delivery, and loyalty operations on OPERO.",
  path: "/customers",
});

export default function CustomersPage() {
  return <CustomersDirectoryView />;
}
