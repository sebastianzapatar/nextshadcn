import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-50 text-center px-4">
      <div className="max-w-md space-y-6">
        <img
          src="https://i.gifer.com/yH.gif"
          alt="Travolta Confundido"
          className="mx-auto w-64 rounded"
        />
        <h1 className="text-5xl font-bold text-yellow-600">404</h1>
        <p className="text-lg font-semibold text-gray-800">
          ¡Oops! No sabemos dónde está esta página...
        </p>
        <p className="text-gray-600">
          John Travolta tampoco 😵‍💫
        </p>
        <Link href="/">
          <Button className="mt-4">Volver al menú principal</Button>
        </Link>
      </div>
    </div>
  );
}
