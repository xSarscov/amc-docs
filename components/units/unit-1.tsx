import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Unit1() {
  return (
    <section id="unit1" className="mb-12 scroll-mt-20">
      <div className="mb-6">
        <Badge className="mb-3 bg-primary text-primary-foreground">Unidad 1</Badge>
        <h2 className="text-4xl font-bold mb-2 text-foreground">
          Introducción a la Arquitectura y Organización de la Computadora
        </h2>
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">
            ¿Qué es la Arquitectura y Organización de Computadoras?
          </h3>
          <div className="prose prose-sm max-w-none text-foreground space-y-4">
            <p>
              La <strong>arquitectura de computadoras</strong> se refiere a los atributos visibles al programador, es
              decir, aquellos aspectos que influyen directamente en la forma en que el software interactúa con el
              hardware (como el conjunto de instrucciones, los modos de direccionamiento y los formatos de datos).
            </p>
            <p>
              En cambio, la <strong>organización</strong> se enfoca en la implementación física, es decir, cómo los
              componentes están construidos, conectados y trabajan en conjunto para ejecutar las instrucciones.
            </p>
            <div className="bg-secondary p-4 rounded-lg border-l-4 border-primary">
              <p className="font-semibold mb-2">Dos vistas principales:</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Arquitectura:</strong> Qué hace el sistema (diseño lógico y funcional).
                </li>
                <li>
                  <strong>Organización:</strong> Cómo se implementa físicamente (estructura interna, buses, componentes,
                  etc.).
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Proceso Constructivo de una Computadora</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold">1. Planificación y diseño</p>
              <p className="text-sm text-muted-foreground">Se definen la arquitectura y las funciones del sistema.</p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <p className="font-semibold">2. Implementación</p>
              <p className="text-sm text-muted-foreground">
                Se construye el hardware que materializa la arquitectura definida.
              </p>
            </div>
            <p className="text-sm text-foreground mt-4">
              Estas etapas permiten que los sistemas evolucionen de manera organizada, optimizando el rendimiento y la
              interacción entre sus componentes.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Máquina Secuencial de Programa Almacenado</h3>
          <div className="space-y-4">
            <p>
              Uno de los hitos más importantes en la historia de la computación fue la{" "}
              <strong>Máquina de Programa Almacenado</strong>, introducida por <strong>John von Neumann</strong>. Esta
              idea estableció que tanto los datos como las instrucciones se almacenan en la misma memoria, permitiendo
              que las computadoras puedan:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Leer y ejecutar instrucciones secuencialmente.
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Cargar programas directamente desde memoria.
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                Automatizar cálculos sin intervención humana constante.
              </li>
            </ul>

            <div className="bg-secondary p-4 rounded-lg mt-4">
              <p className="font-semibold mb-3">Componentes funcionales principales:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-semibold text-primary">1. Unidad de Cálculo (ALU)</p>
                  <p className="text-muted-foreground">Ejecuta las operaciones matemáticas y lógicas.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">2. Unidad de Control</p>
                  <p className="text-muted-foreground">Coordina la ejecución de las instrucciones.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">3. Memoria</p>
                  <p className="text-muted-foreground">Almacena datos e instrucciones.</p>
                </div>
                <div>
                  <p className="font-semibold text-primary">4. Entrada</p>
                  <p className="text-muted-foreground">Recibe la información desde el exterior.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-accent/10 border-accent">
          <h3 className="text-lg font-semibold mb-4 text-foreground">📌 Resumen de la Unidad 1</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>
                La arquitectura determina <strong>qué</strong> hace la computadora.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>
                La organización define <strong>cómo</strong> lo hace.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>
                El modelo de programa almacenado permitió que los datos y las instrucciones compartan la misma memoria.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>
                Toda computadora moderna se basa en cinco unidades funcionales: entrada, salida, memoria, control y
                cálculo.
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
