// components/chefs/ChefList.tsx
import { getChefs } from "./getChefs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function ChefList() {
  const chefs = await getChefs();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {chefs.map((chef) => (
        <Card key={chef.id} className="p-4">
          <CardContent className="space-y-2">
            <h2 className="text-lg font-bold">{chef.name}</h2>
            <p className="text-gray-600">Habilidad: {chef.skill}</p>
            <Link href={`/chefs/${chef.id}`}>
              <Button>Ver Detalles</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
