import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/event/$id')({
  component: EventPage,
  head: () => ({
    meta: [
      { title: "Evento no UNNA Social App" },
      { name: "description", content: "Abra o aplicativo para ver os detalhes deste evento e garantir sua participação!" },
      { property: "og:title", content: "Evento Exclusivo no UNNA" },
      { property: "og:description", content: "Clique para abrir no aplicativo UNNA Social App e ver todos os detalhes." },
      { property: "og:image", content: "https://unnasocialapp.com/og-default.png" }, // Pode ser substituído depois por uma imagem dinâmica
      { property: "og:type", content: "website" },
    ]
  })
})

function EventPage() {
  const { id } = Route.useParams()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="mb-8">
        {/* Placeholder for Logo */}
        <div className="h-24 w-24 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-2xl">U</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground">Evento no UNNA</h1>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Para visualizar os detalhes deste evento, ingressos e quem mais vai, abra o aplicativo UNNA.
        </p>
      </div>

      <a
        href={`https://unnasocialapp.com/event/${id}`}
        className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
      >
        Abrir no Aplicativo
      </a>
      
      <p className="mt-6 text-sm text-muted-foreground">
        Ainda não tem o app? Baixe agora nas lojas.
      </p>
    </div>
  )
}
