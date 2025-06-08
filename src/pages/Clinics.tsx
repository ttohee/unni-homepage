import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import banner_img from "../assets/banner-img.svg";
import { theme } from "../styles/theme";
import obgyn_img from "../assets/obgyn img.svg";
import VisualFooter from "../components/parts/VisualFooter";
import health_img from "../assets/health img.svg";
import lgbt_img from "../assets/lgbtq_img.svg";
import international_img from "../assets/international_img.svg";

// styled-components props 타입 정의
interface BoxProps {
  $isVisible: boolean;
  $direction: "left" | "right";
}

const Clinics = () => {
  const [visibleBoxes, setVisibleBoxes] = useState(new Set<number>());
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLElement).dataset.index || "0"
            );
            setVisibleBoxes((prev) => new Set([...prev, index]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px",
      }
    );

    boxRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setBoxRef = (el: HTMLDivElement | null, index: number): void => {
    boxRefs.current[index] = el;
  };

  return (
    <Container>
      <Banner>
        <TextContainer>
          <BannerTitle>진료 과목 소개</BannerTitle>
          <Phrase>" 작은 언니같은 따뜻한 마음으로 진료하겠습니다. "</Phrase>
          <Hr />
        </TextContainer>
      </Banner>
      <Section>
        <Box
          ref={(el) => setBoxRef(el, 0)}
          data-index="0"
          $isVisible={visibleBoxes.has(0)}
          $direction="right"
        >
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
            <img src={obgyn_img} alt="산부인과" />
          </Content>
        </Box>

        <Box
          ref={(el) => setBoxRef(el, 1)}
          data-index="1"
          $isVisible={visibleBoxes.has(1)}
          $direction="left"
        >
          <Title>건강증진클리닉</Title>
          <PinkHr />
          <LeftContent>
            <img src={health_img} alt="건강증진" />
            <List>
              <li>여성암검진</li>
              <li>공단 자궁암검진 무료</li>
              <li>웨딩검진</li>
              <li>예방접종</li>
              <li>항노화클리닉</li>
            </List>
          </LeftContent>
        </Box>

        <Box
          ref={(el) => setBoxRef(el, 2)}
          data-index="2"
          $isVisible={visibleBoxes.has(2)}
          $direction="right"
        >
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
            <img src={lgbt_img} alt="성소수자" />
          </Content>
        </Box>

        <Box
          ref={(el) => setBoxRef(el, 3)}
          data-index="3"
          $isVisible={visibleBoxes.has(3)}
          $direction="left"
        >
          <Title>인터내셔널 클리닉</Title>
          <PinkHr />
          <LeftContent>
            <img src={international_img} alt="인터내셔널" />
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

  /* 태블릿 */
  @media (max-width: 1024px) {
    line-height: 32px;
  }

  /* 모바일 */
  @media (max-width: 768px) {
    line-height: 28px;
  }
`;

const List = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 20px;
  font-weight: 400;
  padding-left: 12px;

  /* 태블릿 */
  @media (max-width: 1024px) {
    font-size: 18px;
    gap: 14px;
    padding-left: 8px;
  }

  /* 모바일 */
  @media (max-width: 768px) {
    font-size: 16px;
    gap: 12px;
    padding-left: 0;
  }

  /* 작은 모바일 */
  @media (max-width: 480px) {
    font-size: 14px;
    gap: 10px;
  }
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

  /* 모바일 */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;

    img {
      width: 80%;
      max-width: 300px;
    }
  }

  /* 작은 모바일 */
  @media (max-width: 480px) {
    img {
      width: 100%;
      max-width: 250px;
    }
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

  /* 모바일 */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;

    img {
      width: 80%;
      max-width: 300px;
      order: -1; /* 이미지를 텍스트 위로 이동 */
    }
  }

  /* 작은 모바일 */
  @media (max-width: 480px) {
    img {
      width: 100%;
      max-width: 250px;
    }
  }
`;

const PinkHr = styled.hr`
  width: 100%;
  border: 2px solid ${theme.color.main[2]};
  margin: 0;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin: 0;

  /* 태블릿 */
  @media (max-width: 1024px) {
    font-size: 28px;
  }

  /* 모바일 */
  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }

  /* 작은 모바일 */
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Box = styled.div<BoxProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: flex-start;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* 애니메이션 초기 상태 */
  opacity: 0;
  transform: translateX(
    ${(props) => (props.$direction === "right" ? "100px" : "-100px")}
  );
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  /* 보이는 상태 */
  ${(props) =>
    props.$isVisible &&
    `
    opacity: 1;
    transform: translateX(0);
  `}

  img {
    border-radius: 20px;
  }

  /* 태블릿 */
  @media (max-width: 1024px) {
    gap: 28px;
    padding: 16px;
    transform: translateX(
      ${(props) => (props.$direction === "right" ? "60px" : "-60px")}
    );

    ${(props) =>
      props.$isVisible &&
      `
      transform: translateX(0);
    `}
  }

  /* 모바일 */
  @media (max-width: 768px) {
    gap: 20px;
    padding: 12px;
    align-items: center;
    transform: translateY(50px);

    ${(props) =>
      props.$isVisible &&
      `
      transform: translateY(0);
    `}
  }

  /* 작은 모바일 */
  @media (max-width: 480px) {
    gap: 16px;
    padding: 8px;
  }
`;

const Section = styled.section`
  width: 100vw;
  padding: 160px 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 132px;

  /* 대형 데스크톱 */
  @media (max-width: 1440px) {
    padding: 120px 200px;
    gap: 100px;
  }

  /* 데스크톱 */
  @media (max-width: 1200px) {
    padding: 100px 100px;
    gap: 80px;
  }

  /* 태블릿 */
  @media (max-width: 1024px) {
    padding: 80px 60px;
    gap: 60px;
  }

  /* 모바일 */
  @media (max-width: 768px) {
    padding: 60px 40px;
    gap: 40px;
  }

  /* 작은 모바일 */
  @media (max-width: 480px) {
    padding: 40px 20px;
    gap: 30px;
  }
`;

const Hr = styled.hr`
  width: min(70vw, 400px);
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);

  @media (min-width: 768px) {
    width: min(70vw, 500px);
  }
`;

const Phrase = styled.h3`
  font-size: clamp(18px, 3vw, 28px);
  font-family: "GowunBatang";
  font-weight: lighter;
  text-align: center;
  margin: 0;
  line-height: 1.4;
  padding: 0 20px;
`;

const BannerTitle = styled.p`
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 600;
  margin: 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 3vw, 24px);
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 20px;
  max-width: 800px;

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

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export default Clinics;
