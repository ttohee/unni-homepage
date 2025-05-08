import styled from "styled-components";
import { theme } from "../styles/theme";
import subject_img from "../assets/subject-img.svg";

const Intro = () => {
  return (
    <Container>
      <Title>
        <Phrase>함께 건강한 병원, 사귀고 돌보는 병원</Phrase>
        <p>YS Unni Women’s Clinic</p>
        <MainTitle>유성언니여성의원</MainTitle>
      </Title>

      <Section>
        <Subject></Subject>
      </Section>
    </Container>
  );
};

const Subject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 92px;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: flex-start;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 2px;
  gap: 12px;
  font-size: 28px;
  font-weight: 600;
`;
const MainTitle = styled.p`
  font-size: 44px;
  font-weight: 700;
  color: ${theme.color.main[2]};
  letter-spacing: normal;
`;
const Phrase = styled.p`
  font-family: "GowunBatang";
  font-weight: lighter;
  font-size: 28px;
  letter-spacing: normal;
`;
const Container = styled.section`
  width: 100vw;
  padding: 145px 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 140px;
`;

export default Intro;
