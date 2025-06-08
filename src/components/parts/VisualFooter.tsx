import styled from "styled-components";
import loby_img from "../../assets/유언여 사진 2.svg";

const VisualFooter = () => {
  return (
    <Section>
      <Container>
        <TextContainer>
          <HosName>
            <p>UNNI</p>
            <Sub>Women's Clinic</Sub>
          </HosName>
          <Phrase>" 여성의 시간을 함께하는 다정한 동반자 "</Phrase>
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
  text-align: center;
  word-break: keep-all;
  line-height: 1.4;

  @media (max-width: 1024px) {
    font-size: 24px;
    letter-spacing: 3px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 2px;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    letter-spacing: 1px;
    padding: 0 15px;
  }
`;

const HosName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: 15px;

  @media (max-width: 1024px) {
    font-size: 32px;
    letter-spacing: 12px;
    gap: 24px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    letter-spacing: 8px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    letter-spacing: 4px;
    gap: 16px;
  }
`;

const Sub = styled.h1`
  opacity: 0.8;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 12px;

  @media (max-width: 1024px) {
    font-size: 18px;
    letter-spacing: 10px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    letter-spacing: 6px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    letter-spacing: 3px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const Section = styled.section`
  width: 100vw;
  height: 600px;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
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

  @media (max-width: 768px) {
    background-attachment: scroll;
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

export default VisualFooter;
