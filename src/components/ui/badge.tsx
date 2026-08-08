import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-700 px-2.5 py-0.5 text-xs font-medium",
        className,
      )}
    >
      {children}
    </span>
  );
}
