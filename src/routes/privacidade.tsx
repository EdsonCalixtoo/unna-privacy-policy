import { createFileRoute, Link } from "@tanstack/react-router";
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

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-6 py-6">
          <img src={logo} alt="UNNA Social App" className="h-14 w-14 rounded-lg object-contain" />
          <div>
            <h1 className="text-2xl font-bold">UNNA Social App</h1>
            <p className="text-sm text-muted-foreground">Política de Privacidade</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <article className="prose-like space-y-8 leading-relaxed">
          <section>
            <p className="text-sm text-muted-foreground">
              Última atualização: 12 de maio de 2026
            </p>
            <p className="mt-4">
              Esta Política de Privacidade descreve como o <strong>UNNA Social App</strong>{" "}
              ("UNNA", "nós", "nosso") coleta, utiliza, armazena e protege as informações dos
              usuários ("você") ao utilizar nosso aplicativo e serviços relacionados. Ao usar o
              UNNA, você concorda com as práticas descritas nesta Política.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">1. Informações que coletamos</h2>
            <ul className="ml-6 mt-3 list-disc space-y-2">
              <li>
                <strong>Dados de cadastro:</strong> nome, e-mail, nome de usuário, foto de perfil
                e data de nascimento.
              </li>
              <li>
                <strong>Conteúdo gerado:</strong> publicações, mensagens, comentários, curtidas e
                mídias enviadas.
              </li>
              <li>
                <strong>Dados de uso:</strong> interações no app, páginas visitadas, tempo de uso
                e preferências.
              </li>
              <li>
                <strong>Dados do dispositivo:</strong> modelo, sistema operacional, identificador
                único, idioma e dados de rede.
              </li>
              <li>
                <strong>Localização:</strong> apenas quando você concede permissão expressa.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Como usamos suas informações</h2>
            <ul className="ml-6 mt-3 list-disc space-y-2">
              <li>Fornecer, manter e melhorar as funcionalidades do UNNA.</li>
              <li>Personalizar sua experiência e recomendar conteúdo relevante.</li>
              <li>Garantir a segurança da conta e prevenir fraudes ou abusos.</li>
              <li>Enviar notificações, novidades e comunicações sobre o serviço.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. Compartilhamento de dados</h2>
            <p className="mt-3">
              Não vendemos seus dados pessoais. Podemos compartilhar informações com:
            </p>
            <ul className="ml-6 mt-3 list-disc space-y-2">
              <li>Provedores de infraestrutura, armazenamento em nuvem e analytics.</li>
              <li>Autoridades competentes, quando exigido por lei.</li>
              <li>Outros usuários, conforme as configurações de privacidade do seu perfil.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Armazenamento e segurança</h2>
            <p className="mt-3">
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso
              não autorizado, perda ou alteração, incluindo criptografia em trânsito, controles
              de acesso e monitoramento contínuo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Seus direitos</h2>
            <p className="mt-3">
              Em conformidade com a LGPD (Lei nº 13.709/2018) e o GDPR, você pode:
            </p>
            <ul className="ml-6 mt-3 list-disc space-y-2">
              <li>Acessar, corrigir ou atualizar seus dados.</li>
              <li>Solicitar a exclusão da sua conta e dos dados associados.</li>
              <li>Revogar consentimentos previamente concedidos.</li>
              <li>Solicitar a portabilidade dos dados.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Retenção de dados</h2>
            <p className="mt-3">
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas
              nesta Política ou conforme exigido por lei. Após esse período, os dados são
              excluídos ou anonimizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Privacidade de menores</h2>
            <p className="mt-3">
              O UNNA não é destinado a menores de 13 anos. Caso identifiquemos cadastro de
              menores sem autorização dos responsáveis, a conta será removida.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Alterações nesta Política</h2>
            <p className="mt-3">
              Podemos atualizar esta Política periodicamente. Notificaremos sobre alterações
              relevantes pelo aplicativo ou por e-mail.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">9. Contato</h2>
            <p className="mt-3">
              Para dúvidas, solicitações ou exercício de direitos, entre em contato:
            </p>
            <p className="mt-2">
              <strong>E-mail:</strong>{" "}
              <a href="mailto:privacidade@unnaapp.com" className="text-primary underline">
                privacidade@unnaapp.com
              </a>
            </p>
          </section>
        </article>

        <div className="mt-12 border-t border-border pt-6">
          <Link to="/" className="text-sm text-primary underline">
            ← Voltar para a página inicial
          </Link>
        </div>
      </main>

      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} UNNA Social App. Todos os direitos reservados.
      </footer>
    </div>
  );
}
