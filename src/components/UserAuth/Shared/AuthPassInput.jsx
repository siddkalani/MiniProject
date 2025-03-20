/* eslint-disable react/prop-types */
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AuthPassInput({ label, forgotPass, passRef }) {
  const [textType, setTextType] = useState("password");
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);

  const showPassword = () => {
    setTextType("text");
    setShowPasswordToggle(true);
  };
  const hidePassword = () => {
    setTextType("password");
    setShowPasswordToggle(false);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-black"
        >
          {label}
        </label>

        {forgotPass ? (
          <div className="text-sm">
            <Link
              to='/request/reset/password'
              className="font-semibold text-[#052560]"
            >
              Forgot password?
            </Link>
          </div>
        ) : null}
      </div>
      <div className="mt-2 relative">
        <input
          // name="password"
          type={textType}
          autoComplete="current-password"
          required
          ref={passRef}
          className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {!showPasswordToggle ? (
          <FaEyeSlash
            onClick={showPassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
          />
        ) : (
          <FaEye
            onClick={hidePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
          />
        )}
      </div>
    </div>
  );
}
