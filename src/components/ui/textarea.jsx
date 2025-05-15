import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({
  className,
  variant = "default", // default or underline
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

        variant === "default" &&
          "border border-input rounded-md",

        variant === "underline" &&
          "border-b border-black rounded-none",

        className
      )}
      {...props}
    />
  );
}

export { Textarea };
