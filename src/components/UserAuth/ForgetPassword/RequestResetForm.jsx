import { useRef, useState } from "react";
import AuthInput from "../Shared/AuthInput";
import AuthButton from "../Shared/AuthButton";
import FailureAlert from "../Shared/FailureAlert";
import SuccessAlert from "../Shared/SuccessAlert";
import axios from "axios";

export default function RequestResetForm() {
  const emailRef = useRef("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [alert, setAlert] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setAlert("");

    const email = emailRef.current.value;
    try {
      await axios.post("http://localhost:3000/user/reset/password/request", {
        email,
      });
      setAlert({ type: "success" });
      emailRef.current.value = "";
      setIsDisabled(true);
    } catch (errro) {
      setAlert({ type: "failure" });
    }
  };

  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleOnSubmit}>
          <AuthInput
            label={"Email"}
            type={"email"}
            inputRef={emailRef}
            disabled={isDisabled}
          />
          <AuthButton text={"Next"} />
        </form>
        <div className="mt-10">
          {alert.type == "success" ? (
            <SuccessAlert
              label2={
                "Please check your email inbox for a link to complete the reset."
              }
            />
          ) : alert.type == "failure" ? (
            <FailureAlert
              label2={
                "Error sending reset link to your email. Check your email id or try again later"
              }
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
