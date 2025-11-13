import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Unit5() {
  return (
    <section id="unit5" className="mb-12 scroll-mt-20">
      <div className="mb-6">
        <Badge className="mb-3 bg-primary text-primary-foreground">Unidad 5</Badge>
        <h2 className="text-4xl font-bold mb-2 text-foreground">Unidad de Control</h2>
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Función principal</h3>
          <p className="text-foreground mb-4">
            La <strong>Unidad de Control (UC)</strong> es el componente del procesador encargado de dirigir y coordinar
            la ejecución de las instrucciones. Actúa como el <strong>"titiritero" del sistema</strong>: controla cuándo
            y cómo cada parte del CPU debe actuar, activando las señales de control adecuadas en el momento preciso.
          </p>
          <div className="bg-secondary p-4 rounded-lg">
            <p className="font-semibold mb-3">Su función fundamental es gestionar el ciclo de instrucción:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <strong>FETCH (búsqueda):</strong> Obtener la próxima instrucción desde memoria.
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <strong>EXECUTE (ejecución):</strong> Decodificarla y realizar la operación correspondiente.
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">El ciclo de instrucción</h3>
          <div className="space-y-4">
            <div className="bg-secondary p-4 rounded-lg">
              <p className="font-semibold mb-3">Fase FETCH</p>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>Cargar la dirección del PC (Program Counter) al MAR.</li>
                <li>Activar la señal de lectura (READ).</li>
                <li>Incrementar el PC (+1).</li>
                <li>Transferir la instrucción del MDR al IR.</li>
                <li>Decodificar la instrucción.</li>
              </ol>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="font-semibold mb-3">Fase EXECUTE</p>
              <p className="text-sm text-foreground mb-2">
                Depende del tipo de instrucción, pero generalmente incluye:
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>Carga de operandos.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>Ejecución de la operación en la ALU.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>Almacenamiento del resultado.
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>Verificación de interrupciones.
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Implementación de la Unidad de Control</h3>
          <div className="space-y-4">
            <p className="text-foreground">Existen dos grandes enfoques para implementar la Unidad de Control:</p>

            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold">1. Unidad de Control Fija (Hardwired)</p>
              <ul className="space-y-2 text-sm text-muted-foreground mt-2">
                <li>• Construida con circuitos lógicos cableados.</li>
                <li>• Alta velocidad, pero poca flexibilidad.</li>
                <li>• Se implementa con circuitos combinacionales o PLAs.</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent pl-4">
              <p className="font-semibold">2. Unidad de Control Microprogramada</p>
              <ul className="space-y-2 text-sm text-muted-foreground mt-2">
                <li>• Usa una memoria de control que almacena microinstrucciones.</li>
                <li>• Permite ampliar el repertorio de instrucciones fácilmente.</li>
                <li>• Facilita la modificación o actualización del conjunto de instrucciones.</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Control del PC y Banderas</h3>
          <div className="space-y-4">
            <p className="text-foreground font-semibold">Incrementar el PC:</p>
            <p className="text-sm text-muted-foreground">
              El PC se incrementa según el tamaño de la instrucción. Puede hacerse usando la ALU o con un sumador
              dedicado para el PC.
            </p>

            <p className="text-foreground font-semibold">Modificar el PC (Saltos):</p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <strong>Absoluto:</strong> PC ← d
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <strong>Relativo:</strong> PC ← [PC] + d
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <strong>Condicional:</strong> Depende de una bandera.
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 bg-accent/10 border-accent">
          <h3 className="text-lg font-semibold mb-4 text-foreground">📌 Resumen de la Unidad 5</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>La Unidad de Control coordina todo el funcionamiento del CPU.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Gestiona el ciclo de instrucción mediante señales de control.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Puede implementarse de forma fija (hardware) o microprogramada (software interno).</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              <span>Su diseño determina la velocidad, flexibilidad y capacidad de expansión del procesador.</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
