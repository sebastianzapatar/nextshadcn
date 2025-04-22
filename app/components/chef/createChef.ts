import axios from "axios";
import { ChefFormValues } from "./ChefFormSchema";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export async function createChef(data: ChefFormValues) {
  const response = await axios.post(baseUrl+"/chef", data); // Cambia al endpoint real
  return response.data;
}
