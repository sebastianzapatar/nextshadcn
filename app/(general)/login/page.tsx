'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/lib/auth-store";
import LoginForm from "@/app/components/auth/LoginForm";

export default function LoginPage() {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/chef/list"); // Redirige si ya está logueado
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) return null; // opcional: evita ver el form si ya está autenticado

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <LoginForm />
    </div>
  );
}
