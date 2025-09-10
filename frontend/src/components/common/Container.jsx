import { cn } from "@/lib/utils";

function Container({ children, className }) {
  return (
    <div className={cn("container mx-auto px-4 lg:px-40", className)}>
      {children}
    </div>
  );
}

export default Container;
