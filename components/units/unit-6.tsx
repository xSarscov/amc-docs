import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function Unit6() {
  return (
    <section id="unit6" className="mb-12 scroll-mt-20">
      <div className="mb-6">
        <Badge className="mb-3 bg-primary text-primary-foreground">Unidad 6</Badge>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Sistema de Memoria</h2>
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Función de almacenamiento</h3>
          <p className="text-foreground mb-4">
            El sistema de memoria permite almacenar y recuperar datos e instrucciones para el funcionamiento del
            computador. Existen distintos niveles según su velocidad, capacidad y función:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <strong>Registros del CPU:</strong> Almacenamiento temporal durante la ejecución.
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <strong>Memoria principal (RAM):</strong> Contiene programas y datos en uso.
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <strong>Memoria secundaria:</strong> Almacenamiento masivo y permanente.
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Jerarquía de memoria</h3>
          <p className="text-foreground mb-4">
            El sistema de memoria se organiza jerárquicamente para equilibrar velocidad, costo y capacidad:
          </p>
          <div className="overflow-x-auto">
            <Table className="text-sm">
              <TableHeader>
                <TableRow>
                  <TableHead>Nivel</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Características</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">L0</TableCell>
                  <TableCell>Registros (CPU)</TableCell>
                  <TableCell>Máxima velocidad, mínima capacidad</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">L1/L2</TableCell>
                  <TableCell>Caché</TableCell>
                  <TableCell>Rápida, pequeña, cercana al CPU</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">L3</TableCell>
                  <TableCell>Memoria principal (RAM)</TableCell>
                  <TableCell>Mayor capacidad, menor velocidad</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">L4</TableCell>
                  <TableCell>Memoria secundaria</TableCell>
                  <TableCell>Masiva, lenta, persistente</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Clasificación de memorias</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2 text-foreground">Según la tecnología:</p>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <strong>Semiconductora:</strong> SRAM (rápida), DRAM (densa)
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <strong>Magnética:</strong> Discos duros, cintas
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <strong>Óptica:</strong> CD, DVD, Blu-ray
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2 text-foreground">Según la retención del dato:</p>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <strong>Volátil:</strong> Pierde la información al apagar (RAM)
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <strong>Permanente:</strong> ROM, Flash, EEPROM
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Memoria caché</h3>
          <div className="space-y-4">
            <p className="text-foreground">
              La <strong>caché</strong> es una memoria intermedia rápida entre el CPU y la RAM. Almacena los datos e
              instrucciones más usados, reduciendo los tiempos de acceso.
            </p>

            <div className="bg-secondary p-4 rounded-lg">
              <p className="font-semibold mb-3">Principio de localidad:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <strong>Temporal:</strong> Un dato usado recientemente se reutilizará pronto.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <strong>Espacial:</strong> Los datos cercanos a uno usado tienden a ser accedidos pronto.
                </li>
              </ul>
            </div>

            <p className="font-semibold text-foreground">Tipos de correspondencia:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-accent font-bold">1.</span>
                <div>
                  <strong>Directa:</strong> Cada bloque tiene una única posición en caché (simple pero genera
                  conflictos).
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">2.</span>
                <div>
                  <strong>Asociativa:</strong> Cualquier bloque puede almacenarse en cualquier línea (flexible pero
                  costosa).
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">3.</span>
                <div>
                  <strong>Por conjuntos:</strong> Intermedia entre las anteriores (eficiente).
                </div>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 bg-accent/10 border-accent">
          <h3 className="text-lg font-semibold mb-4 text-foreground">📌 Resumen de la Unidad 6</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>El sistema de memoria permite almacenar y recuperar datos eficientemente.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Se organiza jerárquicamente para equilibrar velocidad y costo.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>La memoria caché mejora el rendimiento gracias al principio de localidad.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Los distintos métodos de correspondencia definen cómo se almacenan los bloques.</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
