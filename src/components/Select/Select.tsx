import { Option } from "../../interfaces/interfaces";
import { SelectProps } from "../../interfaces/interfaces";

export const Select = ({
  label,
  value,
  onChange,
  options,
  name,
}: SelectProps) => {
  return (
    <label>
      {label}:{" "}
      <select name={name} value={value} onChange={onChange}>
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
