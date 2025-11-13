"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const SECTIONS = [
  {
    id: "unit1",
    title: "Unidad 1",
    subtitle: "Introducción",
  },
  {
    id: "unit2",
    title: "Unidad 2",
    subtitle: "El Procesador",
  },
  {
    id: "unit3",
    title: "Unidad 3",
    subtitle: "Conjunto de Instrucciones",
  },
  {
    id: "unit4",
    title: "Unidad 4",
    subtitle: "Unidad de Ejecución",
  },
  {
    id: "unit5",
    title: "Unidad 5",
    subtitle: "Unidad de Control",
  },
  {
    id: "unit6",
    title: "Unidad 6",
    subtitle: "Sistema de Memoria",
  },
  {
    id: "unit7",
    title: "Unidad 7",
    subtitle: "Sistema E/S",
  },
]

interface SidebarProps {
  onNavigate?: () => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const [activeSection, setActiveSection] = useState("unit1")
  const [expandedUnit, setExpandedUnit] = useState<string | null>("unit1")

  const handleSectionClick = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    onNavigate?.()
  }

  return (
    <nav className="flex flex-col h-full bg-sidebar">
      {/* Logo/Header */}
      <div className="p-6 border-b border-border">
        <h2 className="text-lg font-bold text-primary">Documentación</h2>
        <p className="text-sm text-muted-foreground mt-1">Contenido Educativo</p>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-3 space-y-2">
          {SECTIONS.map((section) => (
            <Button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              variant={activeSection === section.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start text-left h-auto py-3 px-4 rounded-lg",
                activeSection === section.id
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent",
              )}
            >
              <div>
                <div className="font-semibold text-sm">{section.title}</div>
                <div className="text-xs opacity-75">{section.subtitle}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border text-xs text-muted-foreground">
        <p>Contenido educativo</p>
        <p className="mt-1">Arquitectura de Computadoras</p>
      </div>
    </nav>
  )
}
