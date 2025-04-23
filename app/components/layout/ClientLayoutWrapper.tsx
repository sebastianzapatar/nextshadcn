'use client';

import { useEffect } from "react";
import { useAuthStore } from "@/app/lib/auth-store";
import Sidebar from "@/app/components/Sidebar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true,token);
    }
  }, [setAuthenticated]);

  if (!isAuthenticated) {
    // Usuario no logueado: solo muestra el contenido principal
    return <main className="flex-1 p-6 bg-gray-100">{children}</main>;
  }

  // Usuario logueado: render completo con menú
  return (
    <>
      {/* Sidebar fijo en pantallas grandes */}
      <div className="hidden md:block w-64 bg-blue-700 text-white">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        <div className="md:hidden p-2">
          <Sidebar />
        </div>
        <Header />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
        <Footer />
      </div>
    </>
  );
}
