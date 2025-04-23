// components/chefs/getChefs.ts
import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export interface Chef {
  id: string;
  name: string;
  skill: string;
}

// getChefs.ts
export async function getChefs(token: string): Promise<Chef[]> {
  const response = await axios.get(`${baseUrl}/chef`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
