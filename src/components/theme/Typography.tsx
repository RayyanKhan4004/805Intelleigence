import { type TypographyProps } from "@/types";
import { TypographyEnums, TypographyVariants } from "@/components/enums/index";

export default function Typography({ variant, children }: TypographyProps) {
  function getSize(v?: string) {
    const defaultSize = 16;
    if (!v) return defaultSize;
    const variants = TypographyVariants as Record<string, number>;
    if (typeof variants[v] === "number") return variants[v];
    const enums = TypographyEnums as Record<string, string>;
    const mapped = enums[v];
    if (mapped && typeof variants[mapped] === "number") return variants[mapped];
    return defaultSize;
  }

  return <p className={`text-[${getSize(variant)}px]`}>{children}</p>;
}