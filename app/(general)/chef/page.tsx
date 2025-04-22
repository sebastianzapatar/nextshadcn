// app/chef/[id]/page.tsx


import ChefList from "@/app/components/chef/ChefList";

interface Props {
  params: { id: string };
}

export default function ChefList2() {
  return <ChefList />
}
