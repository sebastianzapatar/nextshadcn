'use client';

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NameField } from "./NameField";
import { EmailField } from "./EmailField";
import { PasswordField } from "./PasswordField";

const registerSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo inválido"),
  password: z.string().min(12, "La contraseña debe tener mínimo 12 caracteres"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/dictator`, data);
      toast.success("Registro exitoso, ahora puedes iniciar sesión");
      router.push("/login");
    } catch (error) {
      toast.error("Error al registrarse");
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
        <NameField control={form.control} />
        <EmailField control={form.control} />
        <PasswordField control={form.control} />
        <Button type="submit">Registrarse</Button>
      </form>
    </Form>
  );
}