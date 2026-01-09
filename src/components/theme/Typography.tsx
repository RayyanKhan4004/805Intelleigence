import React from "react";
import { type TypographyProps } from "@/types";
import {TypographyEnums} from "@/components/enums/index"
import {TypographyVariants} from "@/components/enums/index"
function Typography({ variant, children }: TypographyProps) {
    function getsize(variant:string){
 const ennum = TypographyEnums?.variant || "";
 return TypographyVariants.ennum || "";
    }
    return <p className={`test-[${getsize(variant)}px]`}></p>
}
 