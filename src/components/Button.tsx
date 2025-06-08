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

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.08);
    animation: hover-glow 0.3s ease-out;
  }

  @keyframes hover-glow {
    0% {
      transform: scale(1);
      box-shadow: none;
    }
    50% {
      transform: scale(1.01);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }
    100% {
      transform: scale(1.02);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.08);
    }
  }
`;

export default Button;
