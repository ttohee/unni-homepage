import styled from "styled-components";
import banner_img from "../assets/banner-img.svg";
import { theme } from "../styles/theme";
import obgyn_img from "../assets/obgyn img.svg";

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
      </Section>
    </Container>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 20px;
  font-weight: 400;
  padding-left: 12px;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10%;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default Clinics;
