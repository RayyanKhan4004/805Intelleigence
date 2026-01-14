import { type TypographyProps } from "@/types";
import React from "react";
import { TypographyEnums } from "@/components/enums/index";
function Typography({ variant, children }: TypographyProps) {
    function GetVariantStyles(type: string) {
        switch (type) {
            case TypographyEnums.HEADING1:
                return "text-[36px] font-bold"

            case TypographyEnums.HEADING2:
                return "text-[24px] font-regular";

            case TypographyEnums.TABLETEXT:
                return "text-[16px] font-bold";

            case TypographyEnums.TABLETEXTSIZE:
                return "text-[14px] font-medium";

            case TypographyEnums.POPUPHEADING:
                return "text-[24px] font-semibold";

            case TypographyEnums.POPUPTEXT:
                return "text-[16px] font-medium";

            case TypographyEnums.PAGEHEADING:
                return "text-[30px] font-semibold";

            case TypographyEnums.PAGESECONDTEXT:
                return "text-[16px] font-regular";

            default:
                return "";
        }
    }
    return <div className={`${GetVariantStyles(variant)}`}>{children}</div>;
}

export default Typography;