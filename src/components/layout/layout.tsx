import { LayoutClient } from "./layout-client";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutClient>{children}</LayoutClient>;
};

Layout.displayName = "Layout";
