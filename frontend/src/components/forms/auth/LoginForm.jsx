import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "./schema"
import { useAuth } from "@/contexts/AuthContext"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { images } from "@/constants/images"

export default function LoginForm({ className, ...props }) {
  const { login } = useAuth();
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoginError("");
      const result = await login(data);
      
      if (!result.success) {
        // Login failed, show error
        setLoginError(result.error);
      }
      // If successful, AuthContext will handle the redirect
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("An unexpected error occurred. Please try again.");
    }
  };

  return (
     <div className={cn("flex flex-col gap-6", className)} {...props}>
     <Card className="overflow-hidden p-0">
       <CardContent className="grid p-0 md:grid-cols-2">
         <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8 md:py-20">
             <FieldGroup>
               <div className="flex flex-col items-center gap-2 text-center">
                 <h1 className="text-2xl font-bold">Welcome back</h1>
                 <p className="text-muted-foreground text-balance">
                   Login to your PCSI account
                 </p>
               </div>

               {loginError && (
                 <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                   {loginError}
                 </div>
               )}

               <FormField
                 control={form.control}
                 name="email"
                 render={({ field }) => (
                   <Field>
                     <FieldLabel htmlFor="email">Email</FieldLabel>
                     <FormControl>
                       <Input
                         id="email"
                         type="email"
                         placeholder=""
                         {...field}
                       />
                     </FormControl>
                     <FormMessage />
                   </Field>
                 )}
               />

               <FormField
                 control={form.control}
                 name="password"
                 render={({ field }) => (
                   <Field>
                     <div className="flex items-center">
                       <FieldLabel htmlFor="password">Password</FieldLabel>
                       <a
                         href="#"
                         className="ml-auto text-sm underline-offset-2 hover:underline"
                       >
                         Forgot your password?
                       </a>
                     </div>
                     <FormControl>
                       <div className="relative">
                         <Input 
                           id="password"
                           type={showPassword ? "text" : "password"}
                           placeholder=""
                           {...field}
                           className="pr-10"
                         />
                         <button
                           type="button"
                           onClick={() => setShowPassword(!showPassword)}
                           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm p-1"
                           aria-label={showPassword ? "Hide password" : "Show password"}
                           tabIndex={0}
                         >
                           {showPassword ? (
                             <EyeOff className="h-4 w-4" />
                           ) : (
                             <Eye className="h-4 w-4" />
                           )}
                         </button>
                       </div>
                     </FormControl>
                     <FormMessage />
                   </Field>
                 )}
               />

               <Field>
                 <Button 
                   type="submit" 
                   disabled={form.formState.isSubmitting}
                   className="w-full"
                 >
                   {form.formState.isSubmitting ? "Logging in..." : "Login"}
                 </Button>
               </Field>

               {/* <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                 Or continue with
               </FieldSeparator> */}


               {/* <FieldDescription className="text-center">
                 Don&apos;t have an account? <a href="#">Sign up</a>
               </FieldDescription> */}
             </FieldGroup>
           </form>
         </Form>

         <div className="bg-muted relative hidden md:block">
           <img
             src={images.logo_landscape}
             alt="PCSI Logo"
             className="absolute inset-0 h-full w-full object-contain p-8"
           />
         </div>
      </CardContent>
    </Card>
  </div>
  )
}
