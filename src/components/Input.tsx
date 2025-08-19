interface InputProps {
  id?: string;
  value: string;
  name?: string;
  label?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  invalid?: string;
  error?: string;
  variant?: "filled" | "ghost";
  helperText?: string;
  size?: "sm" | "lg";
  type?: string;
  children?: React.ReactNode;
  handleToggle?: () => void;
}

const Input = ({
  id,
  value,
  name,
  label,
  placeholder,
  onChange,
  disabled,
  invalid,
  error,
  variant,
  helperText,
  size,
  type,
  children,
}: InputProps) => {
  return (
    <div className="w-full mb-4">
      <div className="relative">
        <label htmlFor={id}>{label}</label>
        <div className="z-50 justify-around items-center ml-42 top-5.5 md:ml-70 md:top-9 absolute">
          {children}
        </div>
        <input
          className={`p-2 dark:bg-zinc-800 bg-zinc-300 rounded-xl w-full outline-none focus:outline-none  ${
            invalid ? "border-2 border-red-500" : "border border-gray-300"
          }
          ${variant === "filled" ? "bg-gray-100" : ""}
          ${variant === "ghost" ? "bg-transparent border-none" : ""}
          ${size === "sm" ? "text-sm p-1" : ""}
          ${size === "lg" ? "text-lg p-3" : ""}`}
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
        {!invalid && helperText && (
          <p className="text-gray-500 text-xs">{helperText}</p>
        )}
        {invalid && error && value.length < 5 && (
          <p className="text-red-600 text-xs ">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Input;
