import styled from "styled-components";
import loby_img from "../../assets/유언여 사진 2.svg";

const VisualFooter = () => {
  return (
    <Section>
      <Container>
        <TextContainer>
          <HosName>
            <p>UNNI</p>
            <Sub>Women’s Clinic</Sub>
          </HosName>
          <Phrase>“ 여성의 시간을 함께하는 다정한 동반자 ”</Phrase>
        </TextContainer>
      </Container>
    </Section>
  );
};

const Phrase = styled.div`
  font-family: "GowunBatang";
  font-size: 28px;
  letter-spacing: 5px;
  opacity: 0.8;
`;
const HosName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 15px;
`;
const Sub = styled.h1`
  opacity: 0.8;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 12px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const Section = styled.section`
  width: 100vw;
  height: 600px;
  overflow: hidden;
`;
const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
    url(${loby_img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  color: white;
`;

export default VisualFooter;
