import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// feature/auth 
//  1.components 2. hooks 3. utils 
// feature/setting 
// 1.components 2.hooks 