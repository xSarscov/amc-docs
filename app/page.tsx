import { DocumentationLayout } from "@/components/documentation-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arquitectura de Máquinas II - Documentación Educativa",
  description:
    "Documentación completa sobre Arquitectura y Organización de Computadoras, incluyendo conjunto de instrucciones, unidades de ejecución, control y memoria.",
}

export default function Page() {
  return <DocumentationLayout />
}
