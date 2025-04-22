// components/chefs/getChefs.ts
// components/chefs/getChefs.ts
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export interface Chef {
  id: number;
  name: string;
  skill: string;
}

export async function getChefs(): Promise<Chef[]> {
  try {
    const response = await axios.get(baseUrl+"/chef", {
      headers: {
        "Cache-Control": "no-cache", // forzar que no se cachee en SSR
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Error al obtener chefs");
  }
}
