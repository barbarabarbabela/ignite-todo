import logo from "../../assets/todo-logo.svg";
import { HeaderContainer } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Todo Logo" />
    </HeaderContainer>
  );
};
