import { z } from "zod";

export const AddDishSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  price: z.coerce.number().min(0, "El precio debe ser positivo"),
  description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
  image: z.string().url("Debe ser una URL válida").min(10),
});

export type AddDishFormValues = z.infer<typeof AddDishSchema>;
