import { cn } from "@/lib/utils";

function Container({ children, className }) {
  return (
    <div className={cn("container mx-auto px-8 lg:px-10 xl:px-30", className)}>
      {children}
    </div>
  );
}

export default Container;
