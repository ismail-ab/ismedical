import React from "react";

interface IInputProps {
  property: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.SFC<IInputProps> = ({ property, value, onChange }) => (
  <>
    <label htmlFor={property}>{property.toUpperCase()}</label>
    <input
      value={value}
      onChange={onChange}
      type="text"
      placeholder={property}
    />
  </>
);

export default Input;
