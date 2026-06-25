import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Desarrollo Full Stack",
    description:
      "Construcción de aplicaciones web y móviles completas, desde la interfaz hasta la lógica de negocio y la base de datos.",
  },
  {
    icon: Rocket,
    title: "Arquitecturas Escalables",
    description:
      "Diseño de sistemas seguros, eficientes y preparados para crecer junto con las necesidades del proyecto.",
  },
  {
    icon: Users,
    title: "Bases de Datos",
    description:
      "Modelado, optimización y administración de bases de datos relacionales para garantizar rendimiento e integridad de la información.",
  },
  {
    icon: Lightbulb,
    title: "IoT e Innovación",
    description:
      "Integración de hardware y software mediante soluciones IoT, automatización y tecnologías emergentes.",
  },
];


export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Construyendo soluciones,
              <span className="font-serif italic font-normal text-white">
                {" "}
                desde la idea hasta la implementación.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy Juan Javier Castillo Bretón, Ingeniero en Software especializado
                en el desarrollo de aplicaciones web, móviles e IoT. Mi pasión por la
                tecnología me ha llevado a diseñar y construir soluciones completas,
                integrando interfaces modernas, arquitecturas escalables y bases de
                datos robustas.
              </p>

              <p>
                Trabajo con tecnologías frontend y backend, desarrollando sistemas que
                priorizan el rendimiento, la seguridad y la experiencia del usuario.
                Tengo experiencia en JavaScript, TypeScript, React, Vue, Angular,
                Flutter, Python, Java, PostgreSQL y diversas tecnologías orientadas al
                desarrollo de software moderno.
              </p>

              <p>
                Además del desarrollo tradicional, disfruto explorar áreas como IoT,
                automatización, análisis de datos y arquitecturas de software. Siempre
                busco aprender nuevas tecnologías y enfrentar desafíos que me permitan
                crear productos innovadores con impacto real.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi objetivo es transformar ideas en soluciones tecnológicas escalables,
                seguras y eficientes, creando software que aporte valor tanto a las
                empresas como a las personas que lo utilizan."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
