/* eslint-disable no-unused-vars */
import OTPVerification from "../Shared/OTPVerification";
import { useLocation, useNavigate } from "react-router-dom";
import FailureAlert from "../Shared/FailureAlert";
import SuccessAlert from "../Shared/SuccessAlert";
import { useState, useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function maskEmail(email) {
  const [localPart, domain] = email.split("@");
  const maskedLocalPart =
    localPart.slice(0, 2) + "*".repeat(localPart.length - 2);
  return `${maskedLocalPart}@${domain}`;
}

export default function EmailOTPVerify() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;
  const maskedEmail = email ? maskEmail(email) : "";
  const dispatch = useDispatch();

  const [alert, setAlert] = useState("");

  const otpRef1 = useRef(null);
  const otpRef2 = useRef(null);
  const otpRef3 = useRef(null);
  const otpRef4 = useRef(null);
  const otpRefs = [otpRef1, otpRef2, otpRef3, otpRef4];

  const clearOtpFields = () => {
    otpRefs.forEach((ref) => {
      if (ref.current) ref.current.value = "";
    });
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    console.log(email, otpRefs);
    const otp = otpRefs.map((ref) => ref.current.value).join("");
    try {
      const response = await axios.post(
        "http://localhost:3000/user/verify/email/otp",
        { email, otp }
      );
      if (response.data.success) {
        setAlert({ type: "success", message: "Email verified successfully" });
        clearOtpFields();
        // Navigate to the login page
        navigate("/login");
      } else {
        setAlert({
          type: "failure",
          message:
            response.data.message || "Failed to verify OTP. Please try again.",
        });
      }
    } catch (error) {
      setAlert({
        type: "failure",
        message:
          error.response?.data?.message ||
          "Failed to verify OTP. Please try again.",
      });
    }
  };

  // const handleResend = async () => {
  //   try {
  //     const response = await dispatch(
  //       resendVerification({
  //         url: "http://localhost:3000/user/resend/email/otp",
  //         userData: { email },
  //       })
  //     ).unwrap();
  //     setAlert({ type: "success", email, message: "Email otp sent successfull!" });
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setAlert({
  //       type: "failure",
  //       message:   error || "Failed to resend otp ",
  //     });
  //   }
  // };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <OTPVerification
        label1={"Email Verification"}
        label2={`Enter the 4-digit verification code that was sent to your email ${maskedEmail}`}
        handleOnClick={handleOnClick}
        otpRefs={otpRefs}
        // handleResend={handleResend}
      />
      <div className="mt-10">
        {alert.type === "success" ? (
          <SuccessAlert label1={"Successful"} label2={alert.message} />
        ) : alert.type === "failure" ? (
          <FailureAlert label1={"Failed!"} label2={alert.message} />
        ) : null}
      </div>
    </div>
  );
}
