// app/(general)/chef/[id]/page.tsx

import ChefDetail from "@/app/components/chef/ChefDetail";

export default async function Page(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params; 

  return <ChefDetail id={id} />;
}
