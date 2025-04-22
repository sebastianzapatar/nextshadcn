import axios from "axios";

export interface Dish {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export async function getDishesByChef(chefId: string): Promise<Dish[]> {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/chef/${chefId}/dishes`);
  return res.data;
}
