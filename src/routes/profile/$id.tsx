import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/$id')({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "Perfil no UNNA Social App" },
      { name: "description", content: "Abra o aplicativo para ver o perfil completo desta pessoa e conectar-se!" },
      { property: "og:title", content: "Perfil no UNNA" },
      { property: "og:description", content: "Clique para abrir no aplicativo UNNA Social App e ver o perfil." },
      { property: "og:image", content: "https://unnasocialapp.com/og-default.png" },
      { property: "og:type", content: "profile" },
    ]
  })
})

function ProfilePage() {
  const { id } = Route.useParams()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="mb-8">
        <div className="h-24 w-24 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-2xl">U</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground">Perfil no UNNA</h1>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Para ver os posts, eventos e conectar-se com esse usuário, abra o aplicativo UNNA.
        </p>
      </div>

      <a
        href={`https://unnasocialapp.com/u/${id}`}
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
