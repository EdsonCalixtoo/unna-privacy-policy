import { createFileRoute } from "@tanstack/react-router";
import { DeepLinkFallback } from "@/components/DeepLinkFallback";

export const Route = createFileRoute("/post/$id")({
  component: PostPage,
});

function PostPage() {
  const { id } = Route.useParams();
  
  return <DeepLinkFallback type="post" id={id} />;
}
