import React from "react";

const TextField = ({
  label,
  id,
  type,
  errors,
  register,
  required,
  message,
  className,
  min,
  value,
  placeholder,
}) => {
  const validationRules = {
    required: { value: required, message },
    minLength: min
      ? {
          value: min,
          message:
            "Password must consist of characters and number",
        }
      : null,
  };

  if (type === "email") {
    validationRules.pattern = {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email",
    };
  } else if (type === "url") {
    validationRules.pattern = {
      value:
        /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
      message: "Please enter a valid URL",
    };
  } else if (type === "password") {
    validationRules.pattern = {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message:
        "Password must consist of characters and number ",
    };
  }

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={`${className ? className : ""} font-semibold text-md`}
      >
        {label}
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${
          className ? className : ""
        } px-2 py-2 border outline-none bg-transparent text-slate-700 rounded-md ${
          errors[id]?.message ? "border-red-500" : "border-slate-600"
        }`}
        {...register(id, validationRules)}
      />

      {errors[id]?.message && (
        <p className="text-sm font-semibold text-red-600 mt-0">
          {errors[id]?.message}*
        </p>
      )}
    </div>
  );
};

export default TextField;
