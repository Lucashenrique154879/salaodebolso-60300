import SiteLayout from "@/components/SiteLayout";
import { ChevronLeft, ChevronRight, Monitor } from "lucide-react";
import { useState } from "react";
import dashboardImg from "@/assets/screenshots/dashboard.png";
import agendamentosImg from "@/assets/screenshots/agendamentos.png";
import clientesImg from "@/assets/screenshots/clientes.png";
import financeiroImg from "@/assets/screenshots/financeiro.png";
import marketingImg from "@/assets/screenshots/marketing.png";
import agendaImg from "@/assets/screenshots/agenda.png";

const screenshots = [
  { img: dashboardImg, title: "Dashboard — Meu Salão", desc: "Visualize tudo em tempo real com gráficos e métricas" },
  { img: agendamentosImg, title: "Gestão de Agendamentos", desc: "Organize todos os horários sem conflitos" },
  { img: agendaImg, title: "Agenda Profissional", desc: "Visualização diária, semanal e mensal" },
  { img: clientesImg, title: "Gestão de Clientes", desc: "Histórico completo e detalhado de cada cliente" },
  { img: financeiroImg, title: "Controle Financeiro", desc: "Receitas, despesas e gráficos avançados" },
  { img: marketingImg, title: "Programa de Fidelidade", desc: "Aumente o retorno de clientes em até 40%" },
];

export default function Telas() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % screenshots.length);
  const prev = () => setCurrent((p) => (p - 1 + screenshots.length) % screenshots.length);

  return (
    <SiteLayout>
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-14 space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/8 rounded-full border border-primary/20">
              <Monitor className="w-4 h-4 text-primary" />
              <span className="text-primary font-raleway font-semibold text-sm">Telas</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-raleway font-black text-foreground">
              Conheça o{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Sistema por Dentro
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto font-lora">
              Interface moderna, intuitiva e profissional que funciona em qualquer dispositivo.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative animate-fade-in">
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-border shadow-2xl shadow-primary/10 hover:border-primary/40 transition-colors duration-500">
                <img
                  src={screenshots[current].img}
                  alt={screenshots[current].title}
                  className="w-full h-auto transition-all duration-500"
                />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Prev / Next */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-primary p-3 rounded-full shadow-lg border border-border transition-all duration-200 hover:scale-110 hover:shadow-xl"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-primary p-3 rounded-full shadow-lg border border-border transition-all duration-200 hover:scale-110 hover:shadow-xl"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Caption */}
              <div className="mt-8 text-center space-y-2" key={current}>
                <h3 className="text-2xl font-raleway font-bold text-foreground animate-fade-in">
                  {screenshots[current].title}
                </h3>
                <p className="text-muted-foreground font-lora animate-fade-in">
                  {screenshots[current].desc}
                </p>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    aria-label={`Ir para tela ${index + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      index === current
                        ? "bg-primary w-8 h-3"
                        : "bg-border hover:bg-primary/40 w-3 h-3"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-3">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                    i === current
                      ? "border-primary shadow-md shadow-primary/20"
                      : "border-border hover:border-primary/40 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={s.img} alt={s.title} className="w-full h-auto" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
