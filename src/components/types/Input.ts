import { Dispatch, SetStateAction } from "react";

export interface props {
  placehoder ?: string;
  value : string | number ;
  required ?: boolean  ;
  onChange : Dispatch<SetStateAction<string | number>>;
  className ?: string;
  type ?: "password" | "text"  | string;
}
