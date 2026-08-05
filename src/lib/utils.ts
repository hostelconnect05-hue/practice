import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function normalizeOutput(value: string): string {
  return value.replace(/\r\n/g, "\n").trim();
}
