import { InputProps } from "../../interfaces/interfaces";

export const Input = ({
  type,
  value,
  onChange,
  placeholder,
  name,
}: InputProps) => {
  return (
    <input
      className="m-4 p-4 bg-cardBg border-accentSilver border rounded"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
};
