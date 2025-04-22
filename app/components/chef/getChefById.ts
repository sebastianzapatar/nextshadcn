// components/chefs/getChefById.ts
import axios from "axios";

export interface Dish {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface Chef {
  id: string;
  name: string;
  skill: string;
  dishes: Dish[];
}

export async function getChefById(id: string): Promise<Chef> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/chef/${id}`);
  return response.data;
}
