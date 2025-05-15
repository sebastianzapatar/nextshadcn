// app/(general)/chef/[id]/page.tsx
import ChefDetail from "@/app/components/chef/ChefDetail";

export default async function Page({ params }: any) {
  const { id } = await params;
  return <ChefDetail id={id} />;
}