import { useState } from "react";
import { Link } from "react-router-dom";
import CommonForm from "../../Components/common/form"; // <-- Make sure to import
import { loginFormControls, registerFormControls } from "../../config/config"; // <-- Import or define


const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit() {
   
  }


   
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
         Sign in to your account
        </h1>
        <p className="mt-2">
         Don't have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>

      <CommonForm
        formControls={loginFormControls} // <-- Make sure this is defined
        buttonText="Sign In"
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;
