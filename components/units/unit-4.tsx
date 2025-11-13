import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function Unit4() {
  return (
    <section id="unit4" className="mb-12 scroll-mt-20">
      <div className="mb-6">
        <Badge className="mb-3 bg-primary text-primary-foreground">Unidad 4</Badge>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Unidad de Ejecución</h2>
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Función de procesamiento</h3>
          <p className="text-foreground mb-4">
            La <strong>Unidad de Ejecución (UE)</strong> es el componente encargado de realizar las operaciones de
            cálculo dentro del procesador. Corresponde al órgano de cálculo de la arquitectura de Von Neumann e incluye:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <strong>ALU (Unidad Aritmética y Lógica)</strong>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <strong>Registros de propósito general (GPR)</strong>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <strong>Circuitos de cálculo adicionales</strong>, como la FPU (Unidad de Punto Flotante)
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Representación de números enteros</h3>
          <div className="space-y-4">
            <p className="text-foreground">
              El procesador solo manipula patrones de bits. Los datos se representan mediante una{" "}
              <strong>palabra</strong>, que es la cantidad de bits procesados simultáneamente por la CPU.
            </p>

            <div className="overflow-x-auto">
              <Table className="text-sm">
                <TableHeader>
                  <TableRow>
                    <TableHead>Método</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead>Características</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">Signo-Magnitud</TableCell>
                    <TableCell>El MSB indica el signo (0 = +, 1 = -)</TableCell>
                    <TableCell>Dos ceros posibles (+0 y -0)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Complemento a 1</TableCell>
                    <TableCell>Se niegan todos los bits</TableCell>
                    <TableCell>Requiere sumar el acarreo final</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Complemento a 2</TableCell>
                    <TableCell>Se niegan los bits y se suma 1</TableCell>
                    <TableCell>Es el más usado; solo un cero</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Unidad Aritmética y Lógica (ALU)</h3>
          <div className="space-y-4">
            <p className="text-foreground">
              La ALU realiza las operaciones aritméticas y lógicas del procesador. Está formada por:
            </p>
            <div className="bg-secondary p-4 rounded-lg space-y-3">
              <div>
                <p className="font-semibold">Unidad Aritmética</p>
                <p className="text-sm text-muted-foreground">Maneja suma, resta, multiplicación, división.</p>
              </div>
              <div>
                <p className="font-semibold">Unidad Lógica</p>
                <p className="text-sm text-muted-foreground">Maneja comparaciones, operaciones AND, OR, NOT, etc.</p>
              </div>
            </div>

            <p className="text-foreground font-semibold">Tipos de sumadores:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <strong>Sumador completo (Full Adder):</strong> Suma dos bits con acarreo.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <strong>Sumador en serie:</strong> Enlaza varios sumadores completos para manejar n bits, pero sufre
                  retrasos por propagación del acarreo.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <div>
                  <strong>Sumador con anticipación de acarreo (CLA):</strong> Calcula los acarreos de forma paralela
                  mediante funciones generadoras y de propagación.
                </div>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Registros de Propósito General (GPR)</h3>
          <div className="space-y-4">
            <p className="text-foreground">
              Los GPR almacenan temporalmente los operandos y resultados intermedios dentro del CPU. Algunos permiten
              realizar operaciones de desplazamiento o rotación de bits.
            </p>

            <p className="text-foreground font-semibold">Tipos de desplazamiento:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <strong>Lógico:</strong> Mueve los bits e inserta ceros.
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <strong>Aritmético:</strong> Conserva el bit de signo (MSB).
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <strong>Rotación:</strong> Rota los bits a la izquierda o derecha, con o sin acarreo.
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 bg-accent/10 border-accent">
          <h3 className="text-lg font-semibold mb-4 text-foreground">📌 Resumen de la Unidad 4</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>La Unidad de Ejecución integra la ALU, los registros y la circuitería de cálculo.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Los datos deben representarse en forma binaria, utilizando diferentes sistemas según el tipo.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>
                La ALU combina operaciones aritméticas y lógicas, optimizadas mediante técnicas como el Carry Lookahead
                Adder.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Los registros permiten mantener y manipular datos de manera rápida dentro del procesador.</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
