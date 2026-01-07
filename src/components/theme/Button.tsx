import React from "react";
import { type ButtonProps } from "@/types";
import {ButtonEnums} from "@/components/enums/index"
function Button({ variant, children }: ButtonProps) {
  function GetVariantStyles(type: string) {
     switch (type) {
      case ButtonEnums.PRIMARY:
        return "bg-[var(--color-primary)] border rounded-[12px] px-[16px] py-[16px] text-[var(--color-white)]";

      case ButtonEnums.SECONDARY:
        return "";

      case ButtonEnums.OUTLINE:
        return "bg-transparent border border-[var(--color-primary)] rounded-[12px] px-[16px] py-[16px] text-[var(--color-primary)]";

            case ButtonEnums.ROUNDED:
        return "bg-[var(--color-primary)] bborder-rounded-[32px] px-[16px] py-[11px] text-[var(--color-white)]";

        case ButtonEnums.ROUNDEDOUTLINE:
        return "bg-transparent border border-[var(--color-primary)] rounded-[12px] px-[16px] py-[11px] text-[var(--color-primary)]";

         case ButtonEnums.DANGER:
        return "bg-transparent border border-[var(--color-danger)] rounded-[12px] px-[13px] py-[10px] text-[var(--color-danger)]";


      default:
        return "";
    }
  }
  return <div className={`${GetVariantStyles(variant)}`}>{children}</div>;
}

export default Button;
