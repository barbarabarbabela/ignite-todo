import { InputHTMLAttributes } from "react";
import { Radiogroup } from "./RadioGroup.styled";

interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onToggle: (isChecked: boolean) => void;
}

export const RadioGroup = ({ checked, onToggle, ...props }: RadioGroupProps) => {
  const handleClick = () => {
    onToggle(!checked);
  };

  return <Radiogroup type="radio" checked={checked} onClick={handleClick} {...props} />;
};
