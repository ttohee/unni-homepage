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
  padding: 20px 36px;
  border: none;
  border-radius: 10px;
  background-color: ${theme.color.main[2]};
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

export default Button;
