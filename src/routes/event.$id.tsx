import { createFileRoute } from "@tanstack/react-router";
import { DeepLinkFallback } from "@/components/DeepLinkFallback";

export const Route = createFileRoute("/event/$id")({
  component: EventPage,
});

function EventPage() {
  const { id } = Route.useParams();
  
  return <DeepLinkFallback type="event" id={id} />;
}
