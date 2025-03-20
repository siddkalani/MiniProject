import AuthLogo from "../Shared/AuthLogo";
import LoginForm from "./LoginForm";
import { NavLink } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <NavLink to="/">
        <div className="absolute top-5 left-5">
          <IoMdArrowBack color="black" size="2rem" />
        </div>
      </NavLink>

      <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8  text-black">
        <AuthLogo header={"Sign in to your account"} />
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
