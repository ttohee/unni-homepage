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
          <p>YS Unni Women's Clinic</p>
          <MainTitle>유성언니여성의원</MainTitle>
          <Phrase>" 함께 건강한 삶을, 유성언니여성의원입니다. "</Phrase>
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
  text-align: center;

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

  /* 태블릿 */
  @media (max-width: 1024px) {
    font-size: 20px;
    gap: 10px;
    letter-spacing: 1.5px;
  }

  /* 모바일 */
  @media (max-width: 768px) {
    font-size: 16px;
    gap: 8px;
    letter-spacing: 1px;
  }

  /* 작은 모바일 */
  @media (max-width: 480px) {
    font-size: 14px;
    gap: 6px;
    letter-spacing: 0.5px;
  }
`;

const MainTitle = styled.p`
  font-size: 44px;
  margin: 0;

  /* 태블릿 */
  @media (max-width: 1024px) {
    font-size: 36px;
  }

  /* 모바일 */
  @media (max-width: 768px) {
    font-size: 28px;
  }

  /* 작은 모바일 */
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Phrase = styled.p`
  font-family: "GowunBatang";
  font-weight: lighter;
  font-size: 28px;
  margin: 0;

  /* 태블릿 */
  @media (max-width: 1024px) {
    font-size: 24px;
  }

  /* 모바일 */
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.4;
  }

  /* 작은 모바일 */
  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 1.3;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: clamp(60vh, 80vh, 90vh);
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
    url(${banner_img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden; /* 가로 스크롤 방지 */
`;

export default Landingpage;
