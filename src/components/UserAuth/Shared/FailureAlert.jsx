/* eslint-disable react/prop-types */

export default function FailureAlert({ label1, label2 }) {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
      <p className="text-lg font-semibold">{label1}</p>
      <p>{label2}</p>
    </div>
  );
}
