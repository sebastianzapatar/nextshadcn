'use client';

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/lib/auth-store";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  const handleLogout = () => {
    localStorage.removeItem("token");         
    setAuthenticated(false);                  
    router.push("/login");                    
  };

  return (
    <Button onClick={handleLogout} variant="destructive">
      Cerrar sesión
    </Button>
  );
}
