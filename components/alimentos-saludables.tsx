import { Card } from "@/components/ui/card"
import { Apple, Leaf, Fish, Droplet } from "lucide-react"

const categorias = [
  {
    titulo: "Frutas y Verduras",
    icon: Apple,
    color: "from-green-500 to-emerald-500",
    alimentos: [
      {
        nombre: "Arándanos",
        beneficio: "Ricos en antioxidantes que protegen las arterias",
      },
      {
        nombre: "Espinacas",
        beneficio: "Alto contenido de potasio que regula la presión arterial",
      },
      {
        nombre: "Aguacate",
        beneficio: "Grasas saludables que reducen el colesterol malo",
      },
      {
        nombre: "Tomates",
        beneficio: "Licopeno que protege contra enfermedades cardíacas",
      },
    ],
  },
  {
    titulo: "Pescados y Omega-3",
    icon: Fish,
    color: "from-blue-500 to-cyan-500",
    alimentos: [
      {
        nombre: "Salmón",
        beneficio: "Rico en omega-3 que reduce la inflamación",
      },
      {
        nombre: "Atún",
        beneficio: "Proteína magra con ácidos grasos esenciales",
      },
      {
        nombre: "Sardinas",
        beneficio: "Omega-3 y calcio para la salud cardiovascular",
      },
      {
        nombre: "Trucha",
        beneficio: "Bajo en mercurio y alto en nutrientes cardioprotectores",
      },
    ],
  },
  {
    titulo: "Frutos Secos y Semillas",
    icon: Leaf,
    color: "from-amber-500 to-orange-500",
    alimentos: [
      {
        nombre: "Nueces",
        beneficio: "Omega-3 vegetal y antioxidantes",
      },
      {
        nombre: "Almendras",
        beneficio: "Vitamina E que protege las células cardíacas",
      },
      {
        nombre: "Semillas de chía",
        beneficio: "Fibra y omega-3 para reducir el colesterol",
      },
      {
        nombre: "Semillas de lino",
        beneficio: "Lignanos que mejoran la salud arterial",
      },
    ],
  },
  {
    titulo: "Aceites Saludables",
    icon: Droplet,
    color: "from-yellow-500 to-amber-500",
    alimentos: [
      {
        nombre: "Aceite de oliva extra virgen",
        beneficio: "Grasas monoinsaturadas que protegen el corazón",
      },
      {
        nombre: "Aceite de aguacate",
        beneficio: "Alto punto de humo y grasas saludables",
      },
      {
        nombre: "Aceite de canola",
        beneficio: "Bajo en grasas saturadas, bueno para cocinar",
      },
      {
        nombre: "Aceite de linaza",
        beneficio: "Omega-3 vegetal para uso en frío",
      },
    ],
  },
]

export function AlimentosSaludables() {
  return (
    <section id="alimentacion" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Apple className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Alimentos que Previenen Problemas Cardiovasculares</h2>
          </div>
          <p className="text-muted-foreground">Nutrición inteligente para un corazón saludable</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categorias.map((categoria, index) => {
            const Icon = categoria.icon
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${categoria.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${categoria.color} rounded-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{categoria.titulo}</h3>
                  </div>

                  <div className="space-y-4">
                    {categoria.alimentos.map((alimento, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">{alimento.nombre}</h4>
                          <p className="text-sm text-muted-foreground">{alimento.beneficio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-center">Consejos Nutricionales</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-sm text-muted-foreground">Porciones de frutas y verduras al día</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2-3</div>
              <p className="text-sm text-muted-foreground">Porciones de pescado por semana</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30g</div>
              <p className="text-sm text-muted-foreground">De frutos secos diariamente</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
