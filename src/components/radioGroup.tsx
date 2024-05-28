import React, { useState } from "react";
import styles from "../styles/radioButton.module.css";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  legend: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<Props> = ({ options, legend, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className="srOnly">{legend}</legend>
      {options.map((option, index) => (
        <div key={index} className={styles.radioButton}>
          <label className={styles.label}>
            <input
              type="radio"
              id={`radio-${index}`}
              name="radio-group"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleChange}
              className="srOnly"
            />
            <i
              className={
                selectedValue >= option.value
                  ? "icon-star-full"
                  : "icon-star-empty"
              }
            ></i>
            <span className="srOnly">{option.label}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default RadioGroup;
