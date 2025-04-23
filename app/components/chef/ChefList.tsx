// components/chefs/ChefList.tsx
'use client';

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getChefs, Chef } from "./getChefs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuthStore } from "@/app/lib/auth-store";

export default function ChefList() {
  const [chefs, setChefs] = useState<Chef[]>([]);
  const token = useAuthStore((state) => state.token);
  
  useEffect(() => {
    if (token) {
      console.log("✅ Token disponible, llamando a getChefs:", token);
      getChefs(token).then(setChefs).catch(console.error);
    }
  }, [token]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {chefs.map((chef) => (
        <Card key={chef.id} className="p-4">
          <CardContent className="space-y-2">
            <h2 className="text-lg font-bold">{chef.name}</h2>
            <p className="text-gray-600">Habilidad: {chef.skill}</p>
            <Link href={`/chef/${chef.id}`}>
              <Button>Ver Detalles</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

