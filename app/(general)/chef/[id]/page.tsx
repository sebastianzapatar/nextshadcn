// app/(general)/chef/[id]/page.tsx
import ChefDetail from "@/app/components/chef/ChefDetail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  console.log("params", params);
  const { id } = await params;
  return <ChefDetail id={id} />;  
}
