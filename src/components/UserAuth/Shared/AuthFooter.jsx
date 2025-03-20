/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function AuthFooter({ mainText, text, link }) {
  return (
    <p className="mt-10 text-center text-sm text-gray-500">
      {mainText}
      <Link
        to={link}
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >
        {text}
      </Link>
    </p>
  );
}
