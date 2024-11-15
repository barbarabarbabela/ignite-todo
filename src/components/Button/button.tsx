import { PlusCircle } from "phosphor-react";
import { ButtonStyle } from "./Button.styled";
import { ButtonHTMLAttributes } from "react";



export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ButtonStyle {...props}>
      Criar <PlusCircle size={20} />{" "}
    </ButtonStyle>
  );
};
