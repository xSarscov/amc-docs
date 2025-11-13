import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function Unit3() {
  return (
    <section id="unit3" className="mb-12 scroll-mt-20">
      <div className="mb-6">
        <Badge className="mb-3 bg-primary text-primary-foreground">Unidad 3</Badge>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Diseño del Conjunto de Instrucciones</h2>
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">¿Qué es el conjunto de instrucciones?</h3>
          <p className="text-foreground mb-4">
            El conjunto de instrucciones (<strong>ISA – Instruction Set Architecture</strong>) es el conjunto total de
            operaciones que un procesador puede ejecutar. Representa el principal atributo de una arquitectura, ya que
            habilita al programador a interactuar directamente con el procesador. También se conoce como{" "}
            <strong>repertorio de instrucciones</strong>.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Características del conjunto de instrucciones</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold">Completitud</p>
              <p className="text-sm text-muted-foreground">
                Debe permitir ejecutar todas las operaciones que el procesador es capaz de realizar.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <p className="font-semibold">Ortogonalidad</p>
              <p className="text-sm text-muted-foreground">
                Todas las operaciones deben poder realizarse con todos los tipos de datos aplicables.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold">Eficiencia</p>
              <p className="text-sm text-muted-foreground">
                Debe evitar redundancias, es decir, no debe existir más de una instrucción para realizar la misma
                operación.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Tipos de instrucciones</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Uso principal</TableHead>
                  <TableHead>Ejemplos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">Transferencia</TableCell>
                  <TableCell>Mover datos entre operandos</TableCell>
                  <TableCell className="font-mono text-sm">MOVE, LOAD, STORE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Aritméticas</TableCell>
                  <TableCell>Operaciones matemáticas</TableCell>
                  <TableCell className="font-mono text-sm">ADD, SUB, MUL, DIV</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Lógicas / Bitwise</TableCell>
                  <TableCell>Operaciones lógicas y de bits</TableCell>
                  <TableCell className="font-mono text-sm">AND, OR, NOT, RSH</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Comparación</TableCell>
                  <TableCell>Comparar valores de operandos</TableCell>
                  <TableCell className="font-mono text-sm">CMP</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Control de flujo</TableCell>
                  <TableCell>Modificar la secuencia del programa</TableCell>
                  <TableCell className="font-mono text-sm">JP, CALL, RET</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Modos de direccionamiento</h3>
          <div className="space-y-4">
            <p className="text-foreground">
              El modo de direccionamiento define cómo se obtiene la dirección efectiva del operando (
              <strong>EA – Effective Address</strong>). Indica dónde está el operando y cómo acceder a él.
            </p>

            <div className="bg-secondary p-4 rounded-lg">
              <p className="font-semibold mb-3">Modos básicos:</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong className="text-primary">Inmediato:</strong> El operando está dentro de la instrucción (MOV
                  R5, 5)
                </li>
                <li>
                  <strong className="text-primary">Directo (registro):</strong> El operando está en un registro (MOV R5,
                  R7)
                </li>
                <li>
                  <strong className="text-primary">Absoluto:</strong> El operando está en una dirección de memoria (MOV
                  R5, (1000))
                </li>
                <li>
                  <strong className="text-primary">Indirecto de registro:</strong> Un registro apunta al operando en
                  memoria (MOV R5, (R3))
                </li>
                <li>
                  <strong className="text-primary">Indirecto de memoria:</strong> Una dirección de memoria apunta a otra
                  donde está el operando (MOV R5, ((1000)))
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-accent/10 border-accent">
          <h3 className="text-lg font-semibold mb-4 text-foreground">📌 Resumen de la Unidad 3</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>El conjunto de instrucciones define qué puede hacer un procesador.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Su diseño debe ser completo, ortogonal y eficiente.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Las instrucciones incluyen operación y operandos, representadas mediante códigos binarios.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Existen múltiples modos de direccionamiento que determinan cómo acceder a los datos.</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
