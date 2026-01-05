import React from "react";
import { type ButtonProps } from "@/types";
import {ButtonEnums} from "@/components/enums/index"
function Button({ variant, children }: ButtonProps) {
  function GetVariantStyles(type: string) {
     switch (type) {
      case ButtonEnums.PRIMARY:
        return "w-full bg-blue-600 text-white";

      case ButtonEnums.SECONDARY:
        return "w-full bg-gray-600 text-white";

      case ButtonEnums.OUTLINE:
        return "w-full border border-blue-600 text-blue-600";

      default:
        return "";
    }
  }
  return <div className={`${GetVariantStyles(variant)}`}>{children}</div>;
}

export default Button;
