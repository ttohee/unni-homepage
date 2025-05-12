import styled from "styled-components";
import { theme } from "../../styles/theme";
import subject_img from "../../assets/subject-img.svg";
import doctor_img from "../../assets/doctor.svg";
import Button from "../Button";

const Intro = () => {
  return (
    <Container>
      <Title>
        <Phrase>함께 건강한 병원, 사귀고 돌보는 병원</Phrase>
        <p>YS Unni Women’s Clinic</p>
        <MainTitle>유성언니여성의원</MainTitle>
      </Title>

      <Section>
        <Subject>
          <ImgContainer>
            <img src={subject_img} />
          </ImgContainer>
          <InfoContainer>
            <TextContainer>
              <BigText>따뜻한 진료</BigText>
              <p>작은 언니같은 따뜻한 마음으로 진료하겠습니다. </p>
            </TextContainer>
            <Button text="진료 과목 보러가기" />
          </InfoContainer>
        </Subject>

        <Subject>
          <InfoContainer>
            <TextContainer>
              <BigText>전문성을 갖춘 의료진</BigText>
              <p style={{ wordBreak: "keep-all" }}>
                다년간의 진료 경험을 지닌 산부인과 여의사 서백경 선생님이
                진료합니다.
              </p>
            </TextContainer>
            <Button text="의료진 소개 보러가기" />
          </InfoContainer>
          <ImgContainer>
            <img src={doctor_img} />
          </ImgContainer>
        </Subject>
      </Section>
    </Container>
  );
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 400;
  color: ${theme.color.gray1};
  gap: 20px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const BigText = styled.h4`
  font-size: 32px;
  font-weight: 600;
  color: black;
`;
const ImgContainer = styled.div`
  width: 540px;
  height: 380px;
  border: none;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Subject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 92px;
`;
const Section = styled.section`
  width: 100%;
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
