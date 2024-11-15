import { InputHTMLAttributes } from "react";
import { InputStyle } from "./Input.styled";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {

  return <InputStyle {...props} />;
};
