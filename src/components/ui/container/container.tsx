import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("od-shell", className)}>{children}</div>;
};

Container.displayName = "Container";
