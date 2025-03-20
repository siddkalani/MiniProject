import { useRef, useState } from "react";
import AuthPassInput from "../Shared/AuthPassInput";
import AuthButton from "../Shared/AuthButton";
import axios from "axios";
import FailureAlert from "../Shared/FailureAlert";
import SuccessAlert from "../Shared/SuccessAlert";
import { useLocation } from "react-router-dom";

export default function ResetPasswordForm() {
  const passRef = useRef("");
  const confirmPassRef = useRef("");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const id = queryParams.get("id");

  const [isDisabled, setIsDisabled] = useState(false);
  const [alert, setAlert] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const password = passRef.current.value;
    const confirm_password = confirmPassRef.current.value;

    setAlert("");
    if (password !== confirm_password) {
      setAlert({ type: "failure" });
      return;
    }
    try {
      await axios.post("http://localhost:3000/user/reset/password", {
        password,
        token,
        id,
      });
      setAlert({ type: "success" });
      passRef.current.value = "";
      confirmPassRef.current.value = "";
      setIsDisabled(true);
    } catch (error) {
      console.log(error);
      setAlert({ type: "failed" });
    }
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleOnSubmit}>
        <AuthPassInput
          label={"New Password"}
          forgotPass={false}
          passRef={passRef}
          disabled={isDisabled}
        />
        <AuthPassInput
          label={"Confirm Password"}
          forgotPass={false}
          passRef={confirmPassRef}
          disabled={isDisabled}
        />

        <AuthButton text={"Reset Password"} />
      </form>
      <div className="mt-10">
        {alert.type === "success" ? (
          <SuccessAlert label1={"Password reset successful"} />
        ) : alert.type === "failure" ? (
          <FailureAlert label1={"Password reset failed"} />
        ) : null}
      </div>
    </div>
  );
}
