import axios from "axios";
import { AddDishFormValues } from "./AddDishSchema";

export async function createDish(chefId: string, data: AddDishFormValues) {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/manuelacancele/${chefId}`, data);
  return response.data;
}
