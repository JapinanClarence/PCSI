import React from "react";
import LoginForm from "@/components/forms/auth/LoginForm";
import { images } from "@/constants/images";


const Login = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="">
            <img src={images.logo_landscape} className="max-h-14 md:max-h-16" />
        </div>
      <LoginForm />
    </div>
  );
};

export default Login;
