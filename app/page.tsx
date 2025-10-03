import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Calculator, Shield, Zap, CheckCircle2, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
              <Zap className="h-4 w-4 text-accent" />
              <span>Cotización instantánea y precisa</span>
            </div>

            <h1 className="mb-6 font-sans text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
              Termopaneles de alta calidad para tu hogar
            </h1>

            <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl">
              Obtén una cotización personalizada en minutos. Sistema automatizado con precios actualizados y
              especificaciones técnicas reales.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/cotizacion" className="gap-2">
                  <Calculator className="h-5 w-5" />
                  Cotizar Ahora
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Link href="/productos">Ver Productos</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Features Section */}
      <section className="border-b border-border bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-sans text-3xl font-bold text-foreground md:text-4xl">¿Por qué elegir TermoPro?</h2>
            <p className="text-lg text-muted-foreground">Calidad, precisión y servicio profesional</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-sans text-xl font-semibold text-card-foreground">Cotización Automatizada</h3>
                <p className="text-muted-foreground">
                  Sistema inteligente que calcula precios en tiempo real según tus medidas y especificaciones exactas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-sans text-xl font-semibold text-card-foreground">Calidad Garantizada</h3>
                <p className="text-muted-foreground">
                  Termopaneles con doble vidrio hermético, cámara de aire aislante y filtro UV del 99%.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-sans text-xl font-semibold text-card-foreground">Instalación Rápida</h3>
                <p className="text-muted-foreground">
                  Servicio profesional de instalación con garantía. Mejora el aislamiento térmico de tu hogar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 font-sans text-3xl font-bold text-foreground md:text-4xl">
                Beneficios de los termopaneles
              </h2>
              <div className="space-y-4">
                {[
                  "Reducción de hasta 50% en pérdida de calor",
                  "Aislamiento acústico superior",
                  "Filtro UV del 99% protege tus muebles",
                  "Elimina condensación y humedad",
                  "Ahorro energético significativo",
                  "Mayor confort térmico todo el año",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Card className="w-full border-border bg-card p-8 shadow-xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-sans text-2xl font-bold text-card-foreground">
                      Especificaciones Técnicas
                    </h3>
                    <p className="text-sm text-muted-foreground">Estándares de construcción moderna</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Grosor del vidrio</span>
                      <span className="font-medium text-card-foreground">4-6 mm</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Cámara de aire</span>
                      <span className="font-medium text-card-foreground">12-20 mm</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Material del marco</span>
                      <span className="font-medium text-card-foreground">PVC / Aluminio</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Filtro UV</span>
                      <span className="font-medium text-card-foreground">99%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Garantía</span>
                      <span className="font-medium text-card-foreground">5 años</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-sans text-3xl font-bold text-balance md:text-4xl">¿Listo para mejorar tu hogar?</h2>
          <p className="mb-8 text-lg text-primary-foreground/90 text-pretty">
            Obtén tu cotización personalizada en menos de 5 minutos
          </p>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link href="/cotizacion">
              <Calculator className="h-5 w-5" />
              Comenzar Cotización
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <span className="font-sans text-sm font-bold text-primary-foreground">TP</span>
                </div>
                <span className="font-sans text-lg font-semibold text-card-foreground">TermoPro</span>
              </div>
              <p className="text-sm text-muted-foreground">Termopaneles de alta calidad para construcción moderna.</p>
            </div>

            <div>
              <h4 className="mb-4 font-sans font-semibold text-card-foreground">Productos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/productos" className="hover:text-foreground">
                    Ventanas Correderas
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="hover:text-foreground">
                    Ventanas Proyectantes
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="hover:text-foreground">
                    Puertas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-sans font-semibold text-card-foreground">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/nosotros" className="hover:text-foreground">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/proyectos" className="hover:text-foreground">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-foreground">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-sans font-semibold text-card-foreground">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contacto@termopro.cl</li>
                <li>+56 9 1234 5678</li>
                <li>Santiago, Chile</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 TermoPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
