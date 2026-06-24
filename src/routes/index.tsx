import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Users,
  Zap,
  Globe,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import logo from "@/assets/unna-logo.jpg";

export const Route = createFileRoute("/")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "UNNA Social App — Conectando pessoas" },
      {
        name: "description",
        content:
          "Conheça o UNNA Social App, a plataforma feita para criar conexões verdadeiras.",
      },
    ],
  }),
});

const features = [
  {
    icon: Users,
    title: "Comunidade Vibrante",
    body: "Encontre e conecte-se com pessoas incríveis que compartilham as mesmas paixões, ideias e interesses que você.",
  },
  {
    icon: MessageCircle,
    title: "Conexões Reais",
    body: "Interaja de forma autêntica através de mensagens, posts e interações pensadas para aproximar as pessoas.",
  },
  {
    icon: Globe,
    title: "Sem Fronteiras",
    body: "O UNNA aproxima o mundo de você, permitindo explorar novas culturas e fazer amizades onde quer que esteja.",
  },
  {
    icon: Heart,
    title: "Espaço Seguro",
    body: "Seu bem-estar é essencial. Promovemos um ambiente respeitoso, onde todos podem se expressar livremente.",
  },
];

function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="unna-blob absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--unna-cyan)" }}
        />
        <div
          className="unna-blob absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--unna-magenta)", animationDelay: "3s" }}
        />
        <div
          className="unna-blob absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--unna-cyan)", animationDelay: "6s" }}
        />
      </div>

      {/* Nav */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="UNNA Social App"
              className="h-14 w-14 rounded-2xl object-contain ring-1 ring-border shadow-lg transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-bold tracking-tight">UNNA</span>
          </div>
          <a
            href="/privacidade"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-12 pb-20 text-center">
        <div
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md"
          style={{ background: "var(--gradient-unna-soft)" }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          A Nova Era das Redes Sociais
        </div>
        <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-7xl">
          Conectando você ao que{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-unna)" }}
          >
            realmente importa
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
          O <span className="font-semibold text-foreground">UNNA</span> foi criado para ser mais que um app:
          é um espaço desenhado para que suas ideias tenham voz e para que as conexões sejam profundas,
          positivas e verdadeiras.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#explore"
            className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: "var(--gradient-unna)" }}
          >
            Explorar o UNNA
          </a>
        </div>
      </section>

      {/* Features grid */}
      <main id="explore" className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Por que escolher o UNNA?</h2>
          <p className="mt-4 text-muted-foreground">Tudo o que você precisa para uma experiência social única.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-[var(--shadow-unna)]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "var(--gradient-unna-soft)" }}
              />
              <div className="relative">
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-xl"
                  style={{ background: "var(--gradient-unna)" }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight">{title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Highlight Section */}
        <div
          className="relative mt-16 overflow-hidden rounded-[2rem] border border-border p-10 sm:p-16 text-center"
          style={{ background: "var(--gradient-unna)" }}
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 flex flex-col items-center">
            <Zap className="h-12 w-12 text-white/90 mb-6" />
            <h2 className="text-3xl font-bold text-white sm:text-5xl">Pronto para a evolução?</h2>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              Faça parte da nossa comunidade e descubra um novo jeito de compartilhar a vida,
              fazer amigos e se expressar.
            </p>
            <button className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-foreground shadow-xl transition-transform hover:scale-105">
              Baixe agora (Em breve)
            </button>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border/50 py-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={logo} alt="UNNA" className="h-6 w-6 rounded-md object-contain" />
          <span className="font-bold tracking-tight">UNNA</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} UNNA Social App · Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
