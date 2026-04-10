"use client"

import React, { useState } from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
// import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function BudgetSlider() {
  const [value, setValue] = useState([100])

  return (
    <div className="w-full max-w-md space-y-6 p-4">
     
      
      <SliderPrimitive.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        defaultValue={value}
        max={1000}
        step={1}
        onValueChange={setValue}
      >
        {/* The Track (the thin grey line) */}
        <SliderPrimitive.Track className="bg-slate-200 relative grow rounded-full h-[2px]">
          <SliderPrimitive.Range className="absolute bg-slate-200 h-full" />
        </SliderPrimitive.Track>

        {/* The Custom Thumb (The dark pill) */}
        <SliderPrimitive.Thumb
          className="flex items-center justify-between px-3 gap-1 h-10 min-w-[100px] bg-app-primary rounded-full border-none focus-visible:outline-none cursor-grab active:cursor-grabbing transition-colors"
          aria-label="Budget"
        >
          <ChevronLeft className="w-4 h-4 text-white/80" />
          <span className="text-white font-semibold text-lg">
            ${value[0]}
          </span>
          <ChevronRight className="w-4 h-4 text-white/80" />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  )
}