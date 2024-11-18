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
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
};
