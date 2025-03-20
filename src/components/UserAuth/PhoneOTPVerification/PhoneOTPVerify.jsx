import OTPVerification from "../Shared/OTPVerification";

export default function PhoneOTPVerify() {
  return (
    <OTPVerification
      label1={"Mobile Phone Verification"}
      label2={
        "Enter the 4-digit verification code that was sent to your phone number."
      }
    />
  );
}
