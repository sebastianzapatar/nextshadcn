'use client';

import { useRouter } from "next/navigation";
import { useAuthStore } from "../lib/auth-store";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
export default function Header() {
  const router = useRouter();
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  const handleLogout = () => {
    Cookies.remove("token");
    setAuthenticated(false);
    router.push("/login");
  }

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Panel Principal</h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Usuario</span>
          <img
            src="https://previews.123rf.com/images/charlottebleijenberg/charlottebleijenberg1811/charlottebleijenberg181100339/112985177-mono-tit%C3%AD-de-cabeza-de-algod%C3%B3n-caminando-sobre-una-rama-una-rara-y-cr%C3%ADtica-especie-de-animal-ex%C3%B3tico.jpg"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full border"
          />
        </div>

        <Button onClick={handleLogout} variant="outline" size="sm">
          Cerrar sesión
        </Button>
      </div>
    </header>
  );
}
