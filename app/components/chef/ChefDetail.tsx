'use client';

import { useEffect, useState } from "react";
import { getChefById } from "./getChefById";
import { getDishesByChef } from "./getDishesByChef";
import Image from "next/image";
import AddDishModal from "../dishes/AddDishModal";

export default function ChefDetail({ id }: { id: string }) {
  const [chef, setChef] = useState<{ name: string; skill: string } | null>(null);
  const [dishes, setDishes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const chefData = await getChefById(id);
    const chefDishes = await getDishesByChef(id);
    setChef(chefData);
    setDishes(chefDishes);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading || !chef) return <div className="p-6">Cargando...</div>;

  return (
    <div className="space-y-6 p-6 bg-white rounded shadow max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold">{chef.name}</h1>
        <p className="text-gray-600">Especialidad: {chef.skill}</p>
      </div>

      <div className="flex justify-end mb-4">
        <AddDishModal chefId={id} onDishCreated={loadData} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Platos</h2>
        {dishes.length === 0 ? (
          <p className="text-gray-500">Este chef aún no tiene platos registrados.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dishes.map((dish) => (
              <div key={dish.id} className="border rounded p-4 bg-gray-50 shadow-sm flex flex-col">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="text-xl font-bold mt-2">{dish.name}</h3>
                <p className="text-gray-600 text-sm">{dish.description}</p>
                <p className="mt-1 text-blue-600 font-semibold">${dish.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
