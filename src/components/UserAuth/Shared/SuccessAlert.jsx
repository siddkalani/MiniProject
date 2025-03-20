/* eslint-disable react/prop-types */

export default function SuccessAlert({ label1, label2, resendOption }) {
  return (
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
      <p className="text-lg font-semibold">{label1}</p>
      <p>{label2}</p>
      {resendOption && (
        <p className="mt-2">
          <a
            href="#"
            className="text-green-700 font-semibold underline"
            onClick={resendOption.onClick}
          >
            {resendOption.text}
          </a>
        </p>
      )}
    </div>
  );
}
