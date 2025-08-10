import { cn } from "@/lib/utils";

function Container({ children, className }) {
  return <div className={cn("container mx-auto px-4 lg:px-28", className)}>{children}</div>;
}

export default Container;
