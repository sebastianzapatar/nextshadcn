import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  
  export function PasswordField({ control }: { control: any }) {
    return (
      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contraseña</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Tu contraseña" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }