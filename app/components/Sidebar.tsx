'use client';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Acerca", href: "/about" },
  { name: "Contacto", href: "/contact" },
];

export default function Sidebar() {
  return (
    <div>
      {/* Botón hamburguesa para móvil */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 bg-blue-700 text-white">
          <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold">MiSitio</h2>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded hover:bg-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      {/* Menú fijo en pantallas grandes */}
      <div className="hidden md:block p-4 space-y-4 bg-blue-700 text-white h-full">
        <h2 className="text-2xl font-bold">MiSitio</h2>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded hover:bg-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
