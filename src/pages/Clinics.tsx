import styled from "styled-components";
import banner_img from "../assets/banner-img.svg";
import { theme } from "../styles/theme";
import obgyn_img from "../assets/obgyn img.svg";
import VisualFooter from "../components/parts/VisualFooter";
import health_img from "../assets/health img.svg";
import lgbt_img from "../assets/lgbtq_img.svg";
import international_img from "../assets/international_img.svg";

const Clinics = () => {
  return (
    <Container>
      <Banner>
        <TextContainer>
          <p>진료 과목 소개</p>
          <Phrase>“ 작은 언니같은 따뜻한 마음으로 진료하겠습니다. “</Phrase>
          <Hr />
        </TextContainer>
      </Banner>
      <Section>
        <Box>
          <Title>산부인과 클리닉</Title>
          <PinkHr />
          <Content>
            <List>
              <li>산전/산후검사</li>
              <li>난임</li>
              <li>피임</li>
              <li>폐경</li>
              <li>생리불순</li>
              <li>질염</li>
              <li>만성가려움</li>
              <li>
                여성성형 <sub>(레이저 꽃잎성형/소음순 비대증/여성포경술)</sub>
              </li>
            </List>
            <img src={obgyn_img} />
          </Content>
        </Box>

        <Box>
          <Title>건강증진클리닉</Title>
          <PinkHr />
          <LeftContent>
            <img src={health_img} />
            <List>
              <li>여성암검진</li>
              <li>공단 자궁암검진 무료</li>
              <li>웨딩검진</li>
              <li>예방접종</li>
              <li>항노화클리닉</li>
            </List>
          </LeftContent>
        </Box>

        <Box>
          <Title>성소수자 클리닉</Title>
          <PinkHr />
          <Content>
            <List>
              <LongLi>
                유성언니여성의원 성소수자 클리닉은 트랜스젠더 및 성소수자 분들을
                위한 전문 진료를 제공합니다.{" "}
              </LongLi>
              <LongLi>
                주로 호르몬 치료, 관련 혈액검사 모니터링, 상담을 통해 안전하고
                지속 가능한 건강관리를 지원합니다.
              </LongLi>
            </List>
            <img src={lgbt_img} />
          </Content>
        </Box>

        <Box>
          <Title>산부인과 클리닉</Title>
          <PinkHr />
          <LeftContent>
            <img src={international_img} />
            <List>
              <LongLi>
                유성언니여성의원 인터내셔널 클리닉은 외국인 환자분들을 위한 영어
                진료 서비스를 제공합니다.
              </LongLi>
              <LongLi>
                {" "}
                산부인과 전문의가 간단한 부인과 질환 및 산과 관련 진료를
                친절하고 정확하게 진행합니다.
              </LongLi>
            </List>
          </LeftContent>
        </Box>
      </Section>
      <VisualFooter />
    </Container>
  );
};

const LongLi = styled.li`
  line-height: 40px;
  word-break: keep-all;
`;
const List = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 20px;
  font-weight: 400;
  padding-left: 12px;
`;
const LeftContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10%;

  img {
    width: 50%;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10%;

  img {
    width: 50%;
  }
`;
const PinkHr = styled.hr`
  width: 100%;
  border: 2px solid ${theme.color.main[2]};
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: flex-start;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  img {
    border-radius: 20px;
  }

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
const Section = styled.section`
  width: 100vw;
  padding: 160px 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 132px;
`;
const Hr = styled.hr`
  width: 70vw;
`;
const Phrase = styled.h3`
  font-size: 28px;
  font-family: "GowunBatang";
  font-weight: lighter;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  color: white;
  font-size: 36px;
  font-weight: 600;

  animation: slide_up 1s ease-out;

  @keyframes slide_up {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const Banner = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
    url(${banner_img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export default Clinics;
