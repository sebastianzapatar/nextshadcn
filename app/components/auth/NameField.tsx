import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  
  export function NameField({ control }: { control: any }) {
    return (
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre</FormLabel>
            <FormControl>
              <Input placeholder="Tu nombre completo" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }