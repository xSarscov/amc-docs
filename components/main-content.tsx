"use client"

import { Unit1 } from "@/components/units/unit-1"
import { Unit2 } from "@/components/units/unit-2"
import { Unit3 } from "@/components/units/unit-3"
import { Unit4 } from "@/components/units/unit-4"
import { Unit5 } from "@/components/units/unit-5"
import { Unit6 } from "@/components/units/unit-6"
import { Unit7 } from "@/components/units/unit-7"

export function MainContent() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8">
      <Unit1 />
      <Unit2 />
      <Unit3 />
      <Unit4 />
      <Unit5 />
      <Unit6 />
      <Unit7 />
    </div>
  )
}
