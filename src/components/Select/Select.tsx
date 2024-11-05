import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  name: string;
}

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
