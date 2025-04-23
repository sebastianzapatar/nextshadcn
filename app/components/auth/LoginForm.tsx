'use client';

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { EmailField } from "./EmailField";
import { PasswordField } from "./PasswordField";
import { useAuthStore } from "@/app/lib/auth-store";
import Cookies from "js-cookie";

// Esquema de validación con zod
const loginSchema = z.object({
  email: z.string().email("Correo inválido"),
  password: z.string().min(12, "Contraseña incorrecta"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/dictator/login`, data);
      console.log(res.data);
      const token = res.data.token;

      // ✅ Guardar el token en una cookie para que lo lea el middleware
      Cookies.set("token", token, {
        path: "/",
        secure: true,
        sameSite: "strict",
      });

      // ✅ Actualizar estado global
      setAuthenticated(true);

      toast.success("Bienvenido");
      router.push("/chef/list");
    } catch (error) {
      toast.error("Credenciales incorrectas");
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
        <EmailField control={form.control} />
        <PasswordField control={form.control} />
        <Button type="submit">Iniciar sesión</Button>
      </form>
    </Form>
  );
}
