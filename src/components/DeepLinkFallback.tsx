import logo from "@/assets/unna-logo.jpg";
import { ExternalLink, Download } from "lucide-react";

export function DeepLinkFallback({ 
  type, 
  id 
}: { 
  type: "event" | "profile" | "post" | "community", 
  id: string 
}) {
  const appScheme = `unna-social-app://${type === 'profile' ? 'u' : type}/${id}`;
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.bolt.starter";
  
  const handleOpenApp = () => {
    window.location.href = appScheme;
    
    // Fallback if app is not installed
    setTimeout(() => {
      window.location.href = playStoreLink;
    }, 2500);
  };

  const titleMap = {
    event: "Evento no UNNA",
    profile: "Perfil no UNNA",
    post: "Publicação no UNNA",
    community: "Comunidade no UNNA"
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background flex items-center justify-center p-6 text-foreground">
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

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-border bg-card/80 p-8 backdrop-blur-xl shadow-2xl text-center">
        <img
          src={logo}
          alt="UNNA"
          className="mx-auto h-24 w-24 rounded-3xl object-contain ring-2 ring-border shadow-lg mb-6"
        />
        
        <h1 className="text-2xl font-bold tracking-tight mb-2">
          {titleMap[type]}
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Abra este link no aplicativo UNNA para ver todos os detalhes e interagir.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleOpenApp}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95"
            style={{ background: "var(--gradient-unna)" }}
          >
            <ExternalLink className="h-4 w-4" />
            Abrir no Aplicativo
          </button>

          <a
            href={playStoreLink}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-6 py-4 text-sm font-semibold text-foreground transition-all hover:bg-muted"
          >
            <Download className="h-4 w-4" />
            Baixar UNNA
          </a>
        </div>
      </div>
    </div>
  );
}
