import AuthHeader from "../Shared/AuthHeader";
import ResetPasswordForm from "./ResetPasswordForm";

export default function RequestResetPage() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 ">
          <AuthHeader header={"Reset Your Password"} />
          <ResetPasswordForm />
        </div>
      </div>
    </>
  );
}
