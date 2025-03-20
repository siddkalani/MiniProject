// ********* REGISTER BY EMAIL VERIFICATION OTP *********
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthButton from "../Shared/AuthButton";
import AuthFooter from "../Shared/AuthFooter";
import AuthInput from "../Shared/AuthInput";
import AuthPassInput from "../Shared/AuthPassInput";
import { registerUser } from "../../../store/slices/userDetailSlice";
import FailureAlert from "../Shared/FailureAlert";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirm_passRef = useRef(null);

  const [alert, setAlert] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirm_passRef.current.value;

    if (password === confirmPassword) {
      setAlert("");
      try {
        const response = await dispatch(registerUser({ name, email, password })).unwrap();

        if (response.success) {
          setAlert({ type: "success", message : response.message });
          navigate('/verify/email/otp', { state: { email } });
        } else {
          setAlert({
            type: "failure",
            message: response.message || "Please check your information and try again.",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        setAlert({
          type: "failure",
          message: error || "Please check your information and try again.",
        });
      }
    } else {
      setAlert({ type: "failure", message: "Passwords do not match" });
    }
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        className="space-y-6"
        action="#"
        method="POST"
        onSubmit={handleOnSubmit}
      >
        <AuthInput inputRef={nameRef} label={"Full Name"} type={"text"} />
        <AuthInput inputRef={emailRef} label={"Email"} type={"email"} />
        <AuthPassInput
          label={"Password"}
          forgotPass={false}
          passRef={passwordRef}
        />
        <AuthPassInput
          label={"Confirm Password"}
          forgotPass={false}
          passRef={confirm_passRef}
        />
        <AuthButton text={"Create account"} />
      </form>
      <AuthFooter
        mainText={"Already Signed Up?"}
        text={" SIGN IN"}
        link={"/login"}
      />
      <div className="mt-10">
        {alert.type === "failure" ? (
          <FailureAlert
            label1={"Registration Failed!"}
            label2={alert.message || (alert.message == 'User already exists with this email id' )}
          />
        ) : null}
      </div>
    </div>
  );
}


// // ********* REGISTER BY EMAIL VERIFICATION LINK *********

// import AuthButton from "../Shared/AuthButton";
// import AuthFooter from "../Shared/AuthFooter";
// import AuthInput from "../Shared/AuthInput";
// import AuthPassInput from "../Shared/AuthPassInput";
// import { useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../../../store/Slices/userDetailSlice";
// import FailureAlert from "../Shared/FailureAlert";
// import SuccessAlert from "../Shared/SuccessAlert";
// import { resendVerification } from "../../../store/Slices/resendVerificationSlice";

// export default function RegisterForm() {
//   const dispatch = useDispatch();

//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const confirm_passRef = useRef(null);

//   const [alert, setAlert] = useState("");
//   const [email, setEmail] = useState("");

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     const name = nameRef.current.value;
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;
//     const confirmPassword = confirm_passRef.current.value;

//     if (password === confirmPassword) {
//       setAlert("");
//       try {
//         await dispatch(registerUser({ name, email, password })).unwrap();
//         setAlert({ type: "success" });
//         setEmail(email);
//         nameRef.current.value = "";
//         emailRef.current.value = "";
//         passwordRef.current.value = "";
//         confirm_passRef.current.value = "";
//       } catch (error) {
//         console.error("Error:", error);
//         setAlert({
//           type: "failure",
//           message: error || "Please check your information and try again.",
//         });
//       }
//     } else {
//       setAlert({ type: "failure", message: "Passwords do not match" });
//     }
//   };

//   const handleResend = async () => {
//     try {
//       await dispatch(
//         resendVerification({
//           url: "http://localhost:3000/user/resend/verification/link",
//           userData: { email },
//         })
//       ).unwrap();
//       setAlert({ type: "success", email });
//     } catch (error) {
//       console.error("Error:", error);
//       setAlert({
//         type: "failure",
//         message: "Failed to resend verification link. Please try again.",
//       });
//     }
//   };

//   return (
//     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//       <form
//         className="space-y-6"
//         action="#"
//         method="POST"
//         onSubmit={handleOnSubmit}
//       >
//         <AuthInput inputRef={nameRef} label={"Full Name"} type={"text"} />
//         <AuthInput inputRef={emailRef} label={"Email"} type={"email"} />
//         <AuthPassInput
//           label={"Password"}
//           forgotPass={false}
//           passRef={passwordRef}
//         />
//         <AuthPassInput
//           label={"Confirm Password"}
//           forgotPass={false}
//           passRef={confirm_passRef}
//         />
//         <AuthButton text={"Create account"} />
//       </form>
//       <AuthFooter
//         mainText={"Already Signed Up?"}
//         text={" SIGN IN"}
//         link={"/login"}
//       />
//       <div className="mt-10">
//         {alert.type === "success" ? (
//           <SuccessAlert
//             label1={"Registration successful"}
//             label2={"Please check your email to verify"}
//             resendOption={{
//               text: "Resend verification link",
//               onClick: () => handleResend(alert.email),
//             }}
//           />
//         ) : alert.type === "failure" ? (
//           <FailureAlert
//             label1={"Registration Failed!"}
//             label2={alert.message}
//           />
//         ) : null}
//       </div>
//     </div>
//   );
// }
