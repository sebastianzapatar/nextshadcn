import ChefDetail from "@/app/components/chef/ChefDetail";
interface Props {
    params: { id: string };
  }
  
  export default async function ChefDetailPage({ params }: Props) {
    return <ChefDetail id={params.id} />;
  }