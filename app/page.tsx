'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "./lib/auth-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cookies from "js-cookie";
export default function HomePage() {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token:", token);
    if (token) {
      setAuthenticated(true,token);
    }
  }, [setAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/chef/list");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) return null; // opcional: evitar flicker

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Bienvenido</h1>
      <p className="text-gray-600">Por favor inicia sesión o crea una cuenta</p>
      <div className="flex gap-4">
        <Link href="/login">
          <Button>Iniciar sesión</Button>
        </Link>
        <Link href="/register">
          <Button variant="outline">Registrarse</Button>
        </Link>
      </div>
    </main>
  );
}
