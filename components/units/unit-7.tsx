import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function Unit7() {
  return (
    <section id="unit7" className="mb-12 scroll-mt-20">
      <div className="mb-6">
        <Badge className="mb-3 bg-primary text-primary-foreground">Unidad 7</Badge>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Sistema de Entrada / Salida (E/S)</h2>
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Función principal</h3>
          <p className="text-foreground mb-4">
            El <strong>Sistema de Entrada/Salida</strong> es responsable de la transferencia de información entre la
            computadora y el mundo exterior, permitiendo la interacción entre el procesador, la memoria y los
            periféricos.
          </p>
          <div className="bg-secondary p-4 rounded-lg">
            <p className="font-semibold mb-2">Se divide en dos unidades:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <strong>Unidad de Entrada:</strong> Recibe datos y programas desde el exterior.
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <strong>Unidad de Salida:</strong> Entrega resultados procesados.
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Arquitectura de buses</h3>
          <div className="space-y-4">
            <p className="text-foreground">
              El sistema está compuesto por CPU, Memoria, Periféricos e interconexión de buses.
            </p>

            <p className="font-semibold text-foreground">Tres tipos de buses:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>Bus de datos
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>Bus de direcciones
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>Bus de control
              </li>
            </ul>

            <p className="font-semibold text-foreground mt-4">Estándares de bus:</p>
            <div className="overflow-x-auto mt-2">
              <Table className="text-sm">
                <TableHeader>
                  <TableRow>
                    <TableHead>Bus</TableHead>
                    <TableHead>Descripción</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">ISA</TableCell>
                    <TableCell>8/16 bits, usado en IBM PC (4.77–13 MHz)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">PCI</TableCell>
                    <TableCell>32/64 bits, 33–133 MHz. Reemplazado por PCIe</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">USB</TableCell>
                    <TableCell>Bus serie universal, plug & play, alta velocidad</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Técnicas de comunicación con dispositivos</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold">E/S programada (polling)</p>
              <p className="text-sm text-muted-foreground">
                El CPU consulta continuamente el estado del dispositivo. Sencillo, pero ineficiente.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-4">
              <p className="font-semibold">E/S por interrupciones</p>
              <p className="text-sm text-muted-foreground">
                El dispositivo notifica al CPU cuando requiere atención. Mejor aprovechamiento del procesador.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold">Acceso Directo a Memoria (DMA)</p>
              <p className="text-sm text-muted-foreground">
                El dispositivo transfiere datos directamente a memoria sin intervención constante del CPU.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Interrupciones</h3>
          <div className="space-y-4">
            <p className="text-foreground">
              Mecanismo que suspende temporalmente el programa en ejecución para atender un evento externo o interno.
            </p>

            <p className="font-semibold text-foreground">Tipos:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <strong>Síncronas (excepciones):</strong> Provocadas por errores o condiciones internas.
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <strong>Asíncronas:</strong> Generadas por hardware o periféricos.
              </li>
            </ul>

            <div className="bg-secondary p-4 rounded-lg mt-4">
              <p className="font-semibold mb-3">Proceso de atención:</p>
              <ol className="space-y-1 text-sm list-decimal list-inside">
                <li>El dispositivo solicita interrupción.</li>
                <li>El CPU verifica y reconoce la señal.</li>
                <li>Se ejecuta la rutina de servicio de interrupción (ISR).</li>
                <li>Se restaura el programa principal.</li>
              </ol>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Acceso Directo a Memoria (DMA)</h3>
          <div className="space-y-4">
            <p className="text-foreground">
              Permite que los dispositivos transfieran datos directamente con la memoria sin intervención del CPU.
              Mejora la velocidad y libera recursos del procesador.
            </p>

            <p className="font-semibold text-foreground">Funcionamiento básico:</p>
            <ol className="space-y-2 text-sm list-decimal list-inside">
              <li>CPU inicializa parámetros de transferencia.</li>
              <li>El controlador DMA toma control del bus mediante señales HOLD/HLDA.</li>
              <li>Realiza la transferencia entre el periférico y la memoria.</li>
              <li>Envía una interrupción de fin de transferencia (EOT) al CPU.</li>
            </ol>

            <p className="font-semibold text-foreground mt-4">Modos de transferencia DMA:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>Ráfaga (burst)
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>Robo de ciclo (cycle stealing)
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>I/O a memoria o memoria a I/O
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 bg-accent/10 border-accent">
          <h3 className="text-lg font-semibold mb-4 text-foreground">📌 Resumen de la Unidad 7</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>El sistema de E/S conecta la computadora con el entorno externo.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Los buses y estándares garantizan compatibilidad entre dispositivos.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Los métodos de comunicación incluyen programación, interrupciones y DMA.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>La gestión eficiente de interrupciones y canales optimiza el rendimiento global.</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
