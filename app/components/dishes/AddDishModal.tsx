'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddDishSchema, AddDishFormValues } from "./AddDishSchema";
import { createDish } from "./createDish";
import { toast } from "sonner";
import { useState } from "react";

export default function AddDishModal({
  chefId,
  onDishCreated,
}: {
  chefId: string;
  onDishCreated: () => void;
}) {
  const form = useForm<AddDishFormValues>({
    resolver: zodResolver(AddDishSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      image: "",
    },
  });

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: AddDishFormValues) => {
    try {
      setLoading(true);
      await createDish(chefId, data);
      toast.success("Plato creado exitosamente");
      form.reset();
      setOpen(false);
      onDishCreated(); // Notifica al padre para recargar la lista
    } catch (error) {
      toast.error("Error al crear el plato");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Agregar Plato</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nuevo Plato</DialogTitle>
          <DialogDescription>
            Completa los campos para registrar un nuevo plato para este chef.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre del plato" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imagen (URL)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={loading}>
              {loading ? "Guardando..." : "Guardar Plato"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
