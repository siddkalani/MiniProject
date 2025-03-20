import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import AuthButton from "../Shared/AuthButton";

export default function EmailVerify() {
  const location = useLocation();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const userId = query.get("id");

    let isMounted = true; // This will be used to check if the component is still mounted

    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/verify/email?id=${userId}`
        );
        if (response.data.success) {
          if (isMounted) {
            setStatus("success");
          }
        } else {
          if (isMounted) {
            setStatus("failure");
          }
        }
      } catch (error) {
        if (isMounted) {
          setStatus("failure");
        }
      }
    };

    if (userId) {
      verifyEmail();
    } else {
      setStatus("failure");
    }

    return () => {
      isMounted = false; // Cleanup function to set isMounted to false
    };
  }, [location]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg text-white mx-auto border-2 border-white">
        <div className="px-6 py-4">
          {status === "loading" && (
            <div className="font-bold text-xl mb-2">Verifying...</div>
          )}
          {status === "success" && (
            <>
              <div className="font-bold text-xl mb-2">
                You have successfully verified!
              </div>
              <div className="px-6 pb-2 text-center">
                <Link to="/login">
                  <AuthButton text={"Click here to log in to your account!"} />
                </Link>
              </div>
            </>
          )}
          {status === "failure" && (
            <>
              <div className="font-bold text-xl mb-2">
                Verification failed. Please try again.
              </div>
              <div className="px-6 pb-2 text-center">
                <Link to="/login">
                  <AuthButton text={"Go to login"} />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
