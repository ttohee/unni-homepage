import styled from "styled-components";
import { theme } from "../styles/theme";

interface Prop {
  text: string;
}

const Button = ({ text }: Prop) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 30px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.color.main[2]};
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export default Button;
