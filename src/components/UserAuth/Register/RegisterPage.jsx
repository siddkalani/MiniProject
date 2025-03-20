import AuthLogo from "../Shared/AuthLogo";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 ">
        <AuthLogo header={"Create new account"} />
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
}
