import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  
  export function EmailField({ control }: { control: any }) {
    return (
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Correo</FormLabel>
            <FormControl>
              <Input type="email" placeholder="ejemplo@correo.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }