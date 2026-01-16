'use client';
import { useState } from "react";
import { InputProps } from "../types";

function Input({
  placehoder,
  value,
  required,
  onChange,
  className,
  type,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputClass = 'h-[70px] border rounded-[16px] border-[var(--color-blacktext)/10] placeholder:bg-[#0000008/50] placeholder:text-[14px]'

  return (
    <div className="relative w-full">
      <input
        placeholder={placehoder}
        type={isPassword && showPassword ? "text" : type}
        value={value}
        className={`pr-10 ${className} ${inputClass}`} 
        onChange={()=>onChange}
        required={required}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      )}
    </div>
  );
}

export default Input;
