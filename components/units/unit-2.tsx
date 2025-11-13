import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Unit2() {
  return (
    <section id="unit2" className="mb-12 scroll-mt-20">
      <div className="mb-6">
        <Badge className="mb-3 bg-primary text-primary-foreground">Unidad 2</Badge>
        <h2 className="text-4xl font-bold mb-2 text-foreground">El Procesador</h2>
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">¿Qué es y qué hace el procesador?</h3>
          <div className="prose prose-sm max-w-none text-foreground space-y-4">
            <p>
              El <strong>procesador (CPU)</strong> es el cerebro del computador. Su función principal es{" "}
              <strong>ejecutar instrucciones</strong>, siguiendo un procedimiento organizado conocido como{" "}
              <strong>ciclo de instrucción</strong>, compuesto por dos fases principales:
            </p>
            <div className="bg-secondary p-4 rounded-lg border-l-4 border-primary space-y-3">
              <div>
                <p className="font-semibold">1. Fetch (búsqueda)</p>
                <p className="text-sm">
                  Carga la siguiente instrucción desde la memoria, incrementa el contador del programa (PC) e interpreta
                  la instrucción.
                </p>
              </div>
              <div>
                <p className="font-semibold">2. Execute (ejecución)</p>
                <p className="text-sm">
                  Carga los operandos, realiza la operación, guarda los resultados y verifica si hay interrupciones.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Elementos fundamentales del procesador</h3>
          <div className="space-y-4">
            <p className="text-sm text-foreground">
              El CPU está formado por varios <strong>componentes electrónicos digitales</strong> interconectados
              mediante buses de <strong>datos, direcciones y control</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-semibold text-sm">PC (Program Counter)</p>
                <p className="text-xs text-muted-foreground">Indica la dirección de la siguiente instrucción.</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-semibold text-sm">MAR (Memory Address Register)</p>
                <p className="text-xs text-muted-foreground">Contiene la dirección en memoria que se va a acceder.</p>
              </div>
              <div className="border-l-4 border-accent pl-4 py-2">
                <p className="font-semibold text-sm">MDR (Memory Data Register)</p>
                <p className="text-xs text-muted-foreground">Almacena los datos leídos o a escribir.</p>
              </div>
              <div className="border-l-4 border-accent pl-4 py-2">
                <p className="font-semibold text-sm">IR (Instruction Register)</p>
                <p className="text-xs text-muted-foreground">Guarda la instrucción actual.</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-semibold text-sm">ALU (Unidad Aritmética y Lógica)</p>
                <p className="text-xs text-muted-foreground">Realiza operaciones matemáticas y lógicas.</p>
              </div>
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="font-semibold text-sm">Unidad de Control</p>
                <p className="text-xs text-muted-foreground">Interpreta las instrucciones y genera las señales.</p>
              </div>
              <div className="border-l-4 border-accent pl-4 py-2">
                <p className="font-semibold text-sm">Registros de propósito general</p>
                <p className="text-xs text-muted-foreground">Almacenan temporalmente los operandos y resultados.</p>
              </div>
              <div className="border-l-4 border-accent pl-4 py-2">
                <p className="font-semibold text-sm">FLAGS / PSW</p>
                <p className="text-xs text-muted-foreground">
                  Indicadores del estado (cero, negativo, desbordamiento).
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">El ciclo de instrucción</h3>
          <div className="space-y-3">
            <p className="text-sm text-foreground">
              Durante la ejecución de un programa, el CPU repite el siguiente ciclo:
            </p>
            <div className="bg-secondary p-4 rounded-lg space-y-2">
              {[
                "1. Cargar instrucción (Fetch)",
                "2. Incrementar secuenciador (PC)",
                "3. Interpretar instrucción (Decoder)",
                "4. Cargar operandos",
                "5. Ejecutar operación (ALU)",
                "6. Guardar resultados (Registros o Memoria)",
                "7. Verificar interrupciones (INT)",
              ].map((step, idx) => (
                <div key={idx} className="flex gap-3 text-sm">
                  <span className="text-primary font-semibold min-w-fit">{step.split(".")[0]}.</span>
                  <span>{step.split(". ")[1]}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic mt-4">
              Este proceso se repite millones de veces por segundo, permitiendo el funcionamiento continuo del sistema.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Arquitecturas del procesador</h3>
          <div className="space-y-4">
            <p className="text-sm text-foreground">
              Existen tres tipos principales de arquitectura, según la forma de manejar los operandos:
            </p>

            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-4 py-3">
                <p className="font-semibold text-sm mb-2">1. Arquitectura de Acumulador</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    • Usa un único registro llamado <strong>acumulador</strong>.
                  </li>
                  <li>• Las operaciones se realizan directamente con él.</li>
                  <li>
                    • Ejemplo: <code className="bg-secondary px-2 py-1 rounded text-xs">ADD X → Acc ← Acc + M(X)</code>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-4 py-3">
                <p className="font-semibold text-sm mb-2">2. Arquitectura de Pila</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>
                    • Los operandos se almacenan en una estructura de <strong>pila (Stack)</strong>.
                  </li>
                  <li>
                    • Utiliza el registro <strong>SP (Stack Pointer)</strong>.
                  </li>
                  <li>
                    • Operaciones:{" "}
                    <code className="bg-secondary px-2 py-1 rounded text-xs">PUSH, POP, ADD, SUB, MUL, DIV</code>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4 py-3">
                <p className="font-semibold text-sm mb-2">3. Arquitectura de Registros</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Emplea varios registros internos (R0…Rn) para almacenar operandos.</li>
                  <li>
                    • <strong>Dos direcciones:</strong>{" "}
                    <code className="bg-secondary px-2 py-1 rounded text-xs">ADD Rf, Rd → Rd = Rf + Rd</code>
                  </li>
                  <li>
                    • <strong>Tres direcciones:</strong>{" "}
                    <code className="bg-secondary px-2 py-1 rounded text-xs">ADD Rd, Rf1, Rf2 → Rd = Rf1 + Rf2</code>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Estructura interna del CPU</h3>
          <div className="space-y-3">
            <p className="text-sm text-foreground">El procesador se divide en dos grandes secciones:</p>
            <div className="bg-secondary p-4 rounded-lg space-y-3">
              <div>
                <p className="font-semibold text-sm">Datapath</p>
                <p className="text-xs text-muted-foreground">
                  Camino por donde circulan los datos (registros, buses, ALU).
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm">Unidad de control</p>
                <p className="text-xs text-muted-foreground">
                  Genera las señales que coordinan las operaciones internas.
                </p>
              </div>
            </div>
            <p className="text-sm text-foreground italic mt-3">
              Ambas trabajan en conjunto para que las instrucciones se ejecuten correctamente.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Interrupciones</h3>
          <div className="space-y-3">
            <p className="text-sm text-foreground">
              Las <strong>interrupciones</strong> son señales externas o internas que detienen temporalmente la
              ejecución normal del CPU para atender eventos prioritarios (como entrada/salida).
            </p>
            <p className="text-sm text-muted-foreground italic">
              Una vez atendida la interrupción, el procesador regresa al punto donde fue interrumpido.
            </p>
          </div>
        </Card>

        <Card className="p-6 bg-accent/10 border-accent">
          <h3 className="text-lg font-semibold mb-4 text-foreground">📌 Resumen de la Unidad 2</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>
                El procesador <strong>ejecuta instrucciones</strong> mediante un ciclo constante de búsqueda y
                ejecución.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>
                Está compuesto por <strong>registros, ALU, unidad de control y buses de comunicación</strong>.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>
                Utiliza diferentes <strong>arquitecturas</strong> según cómo gestiona los operandos.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>
                Permite la <strong>interacción con memoria, dispositivos y periféricos</strong> a través de
                interrupciones.
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
