import { type TypographyProps } from "@/types";
import { TypographyVariants } from "@/components/enums/index";

export default function Typography({ variant, children }: TypographyProps) {
  const defaultSize = 16;
  const variants = TypographyVariants as Record<string, number>;
  const size = variant && typeof variants[variant] === "number" ? variants[variant] : defaultSize;
  return <p className={`text-[${size}px]`}>{children}</p>;
}