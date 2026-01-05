import React from "react";
import { type ButtonProps } from "@/types";
import {ButtonEnums} from "@/components/enums/index"
function Button({ variant, children }: ButtonProps) {
  function GetVariantStyles(type: string) {
    switch (type) {
      case ButtonEnums.primary:
        return "w-full";
    }
  }
  return <div className={`${GetVariantStyles(variant)}`}>{children}</div>;
}

export default Button;
