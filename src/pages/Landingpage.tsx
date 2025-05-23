import styled from "styled-components";
import banner_img from "../assets/banner-img.svg";
import Intro from "../components/parts/Intro";
import Directions from "../components/parts/Directions";
import VisualFooter from "../components/parts/VisualFooter";

const Landingpage = () => {
  return (
    <Container>
      <Banner>
        <Title>
          <p>YS Unni Women’s Clinic</p>
          <MainTitle>유성언니여성의원</MainTitle>
          <Phrase>“ 함께 건강한 삶을, 유성언니여성의원입니다. ”</Phrase>
        </Title>
      </Banner>

      <Intro />

      <Directions />

      <VisualFooter />
    </Container>
  );
};

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 2px;
`;
const MainTitle = styled.p`
  font-size: 44px;
`;
const Phrase = styled.p`
  font-family: "GowunBatang";
  font-weight: lighter;
  font-size: 28px;
`;
const Banner = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 300px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
    url(${banner_img});
  background-size: cover;
  background-position: center;
`;

const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Landingpage;
