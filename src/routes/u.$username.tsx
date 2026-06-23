import { createFileRoute } from "@tanstack/react-router";
import { DeepLinkFallback } from "@/components/DeepLinkFallback";

export const Route = createFileRoute("/u/$username")({
  component: ProfilePage,
});

function ProfilePage() {
  const { username } = Route.useParams();
  
  return <DeepLinkFallback type="profile" id={username} />;
}
