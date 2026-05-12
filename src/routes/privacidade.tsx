import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Shield,
  Database,
  Share2,
  Lock,
  UserCheck,
  Clock,
  Baby,
  RefreshCw,
  Mail,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import logo from "@/assets/unna-logo.jpg";

export const Route = createFileRoute("/privacidade")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidade — UNNA Social App" },
      {
        name: "description",
        content:
          "Política de Privacidade do UNNA Social App: como coletamos, usamos e protegemos seus dados.",
      },
    ],
  }),
});

const sections = [
  {
    icon: Database,
    title: "1. Informações que coletamos",
    body: (
      <ul className="space-y-2.5">
        <li><span className="font-semibold text-foreground">Dados de cadastro:</span> nome, e-mail, nome de usuário, foto de perfil e data de nascimento.</li>
        <li><span className="font-semibold text-foreground">Conteúdo gerado:</span> publicações, mensagens, comentários, curtidas e mídias enviadas.</li>
        <li><span className="font-semibold text-foreground">Dados de uso:</span> interações, páginas visitadas, tempo de uso e preferências.</li>
        <li><span className="font-semibold text-foreground">Dispositivo:</span> modelo, sistema operacional, identificador único, idioma e dados de rede.</li>
        <li><span className="font-semibold text-foreground">Localização:</span> apenas quando você concede permissão expressa.</li>
      </ul>
    ),
  },
  {
    icon: Sparkles,
    title: "2. Como usamos suas informações",
    body: (
      <ul className="space-y-2.5 list-disc list-inside">
        <li>Fornecer, manter e melhorar as funcionalidades do UNNA.</li>
        <li>Personalizar sua experiência e recomendar conteúdo relevante.</li>
        <li>Garantir a segurança da conta e prevenir fraudes ou abusos.</li>
        <li>Enviar notificações e comunicações sobre o serviço.</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>
    ),
  },
  {
    icon: Share2,
    title: "3. Compartilhamento de dados",
    body: (
      <>
        <p className="mb-3">Não vendemos seus dados pessoais. Podemos compartilhar informações com:</p>
        <ul className="space-y-2.5 list-disc list-inside">
          <li>Provedores de infraestrutura, armazenamento em nuvem e analytics.</li>
          <li>Autoridades competentes, quando exigido por lei.</li>
          <li>Outros usuários, conforme as configurações de privacidade do seu perfil.</li>
        </ul>
      </>
    ),
  },
  {
    icon: Lock,
    title: "4. Armazenamento e segurança",
    body: (
      <p>
        Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não
        autorizado, perda ou alteração — incluindo criptografia em trânsito, controles de acesso
        e monitoramento contínuo.
      </p>
    ),
  },
  {
    icon: UserCheck,
    title: "5. Seus direitos",
    body: (
      <>
        <p className="mb-3">Em conformidade com a LGPD (Lei nº 13.709/2018) e o GDPR, você pode:</p>
        <ul className="space-y-2.5 list-disc list-inside">
          <li>Acessar, corrigir ou atualizar seus dados.</li>
          <li>Solicitar a exclusão da sua conta e dos dados associados.</li>
          <li>Revogar consentimentos previamente concedidos.</li>
          <li>Solicitar a portabilidade dos dados.</li>
        </ul>
      </>
    ),
  },
  {
    icon: Clock,
    title: "6. Retenção de dados",
    body: (
      <p>
        Mantemos seus dados pelo tempo necessário para cumprir as finalidades desta Política ou
        conforme exigido por lei. Após esse período, os dados são excluídos ou anonimizados.
      </p>
    ),
  },
  {
    icon: Baby,
    title: "7. Privacidade de menores",
    body: (
      <p>
        O UNNA não é destinado a menores de 13 anos. Caso identifiquemos cadastro de menores sem
        autorização dos responsáveis, a conta será removida.
      </p>
    ),
  },
  {
    icon: RefreshCw,
    title: "8. Alterações nesta Política",
    body: (
      <p>
        Podemos atualizar esta Política periodicamente. Notificaremos sobre alterações relevantes
        pelo aplicativo ou por e-mail.
      </p>
    ),
  },
];

function PrivacyPage() {
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
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="UNNA Social App"
              className="h-11 w-11 rounded-xl object-contain ring-1 ring-border transition-transform group-hover:scale-105"
            />
            <span className="text-lg font-bold tracking-tight">UNNA</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium backdrop-blur-md transition-colors hover:bg-card"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-12 pb-16 text-center">
        <div
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md"
          style={{ background: "var(--gradient-unna-soft)" }}
        >
          <Shield className="h-3.5 w-3.5" />
          Atualizado em 12 de maio de 2026
        </div>
        <h1 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl">
          Política de{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-unna)" }}
          >
            Privacidade
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          No <span className="font-semibold text-foreground">UNNA Social App</span>, sua
          privacidade é prioridade. Saiba como coletamos, usamos e protegemos seus dados de forma
          transparente.
        </p>
      </section>

      {/* Sections grid */}
      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {sections.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-[var(--shadow-unna)]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "var(--gradient-unna-soft)" }}
              />
              <div className="relative">
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg"
                  style={{ background: "var(--gradient-unna)" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mb-3 text-lg font-semibold tracking-tight">{title}</h2>
                <div className="text-sm leading-relaxed text-muted-foreground">{body}</div>
              </div>
            </article>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="relative mt-10 overflow-hidden rounded-3xl border border-border p-8 sm:p-10"
          style={{ background: "var(--gradient-unna)" }}
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative flex flex-col items-start justify-between gap-6 text-white sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">9. Fale com a gente</h2>
                <p className="mt-1 max-w-md text-sm text-white/85">
                  Dúvidas, solicitações ou exercício de direitos? Estamos à disposição.
                </p>
              </div>
            </div>
            <a
              href="mailto:privacidade@unnaapp.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-105"
            >
              privacidade@unnaapp.com
            </a>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} UNNA Social App · Todos os direitos reservados
      </footer>
    </div>
  );
}