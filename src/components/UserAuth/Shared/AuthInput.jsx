/* eslint-disable react/prop-types */
export default function AuthInput({ inputRef, label, type, disabled }) {
  return (
    <div>
      <label
        htmlFor={type}
        className="block text-sm font-medium leading-6 text-black"
      >
        {label}
      </label>
      <div className="mt-2 ">
        <input
          type={type}
          required
          ref={inputRef}
          disabled={disabled}
          className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
