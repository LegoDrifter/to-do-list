import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const labelClass = "font-bold";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className={labelClass}>{label}</label>
      {textarea ? (
        <textarea ref={ref} {...props} />
      ) : (
        <input ref={ref} className="w-96" {...props} />
      )}
    </p>
  );
});

export default Input;
