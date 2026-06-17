import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import logo from "@/assets/unna-logo.jpg";

export const Route = createFileRoute("/sucesso")({
  component: SuccessPage,
  head: () => ({
    meta: [
      { title: "E-mail Confirmado! — UNNA Social App" },
    ],
  }),
});

function SuccessPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
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
      </div>

      <img
        src={logo}
        alt="UNNA Social App"
        className="h-20 w-20 rounded-3xl object-contain ring-1 ring-border shadow-lg mb-8"
      />

      <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
        <CheckCircle2 className="h-10 w-10" />
      </div>

      <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
        E-mail Confirmado! 🎉
      </h1>
      <p className="max-w-md text-lg text-muted-foreground mb-8">
        Sua conta no UNNA Social App foi ativada com sucesso. Você já pode fechar esta tela e voltar para o aplicativo para começar a explorar as melhores experiências!
      </p>
    </div>
  );
}
