import { createFileRoute } from "@tanstack/react-router";
import { DeepLinkFallback } from "@/components/DeepLinkFallback";

export const Route = createFileRoute("/community/$id")({
  component: CommunityPage,
});

function CommunityPage() {
  const { id } = Route.useParams();
  
  return <DeepLinkFallback type="community" id={id} />;
}
