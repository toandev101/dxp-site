import type { Metadata } from "next";
import { buildPageMetadata } from "@/utils/metadata";
import { BuildVsBuyView } from "./_components/build-vs-buy-view";

export const metadata: Metadata = buildPageMetadata({
  title: "Build vs buy an ordering platform",
  description:
    "Skip the choice between building from scratch and a closed SaaS: build on 12+ years of OPERO technology with the API, MCP, and frontend source code.",
  path: "/developers/build-vs-buy",
});

export default function BuildVsBuyPage() {
  return <BuildVsBuyView />;
}
