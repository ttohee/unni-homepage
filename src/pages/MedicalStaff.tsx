import styled from "styled-components";
import banner_img from "../assets/banner-img.svg";
import doctor_full from "../assets/유언여 원장님 2.svg";
import VisualFooter from "../components/parts/VisualFooter";
import { theme } from "../styles/theme";
import { useEffect, useState } from "react";

interface FadeInItemProps {
  isvisible: boolean;
  delay: number;
}

const MedicalStaff = () => {
  const [visibleItems, setVisibleItems] = useState(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-item");
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
          setVisibleItems((prev) => {
            if (prev.has(index)) {
              return prev; // 이미 존재하면 기존 Set 반환 (불필요한 리렌더링 방지)
            }
            const newSet = new Set([...prev, index]);
            return newSet;
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 로드 시에도 실행

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 의존성 배열을 빈 배열로 변경

  return (
    <Container>
      <Banner>
        <TextContainer>
          <BannerTitle>의료진 소개</BannerTitle>
          <Phrase>" 작은 언니같은 따뜻한 마음으로 진료하겠습니다. "</Phrase>
          <Hr />
        </TextContainer>
      </Banner>
      <Section>
        <Wrap>
          <ImageContainer>
            <img src={doctor_full} alt="서백경 원장" />
          </ImageContainer>
          <TextSection>
            <Title>
              <Name>서백경 원장</Name>
              <Position>언니여성의원 대표원장</Position>
            </Title>
            <Vita>
              <PinkText>약력</PinkText>
              <ListContainer>
                <List>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(0)}
                    delay={0}
                  >
                    삼성제일병원 산부인과 전문의
                  </FadeInItem>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(1)}
                    delay={100}
                  >
                    인천 삼성산부인과 원장
                  </FadeInItem>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(2)}
                    delay={200}
                  >
                    부천 미애로 여성의원 부원장
                  </FadeInItem>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(3)}
                    delay={300}
                  >
                    대전 미즈여성병원 원장
                  </FadeInItem>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(4)}
                    delay={400}
                  >
                    대전 유성미즈제일 여성병원 원장
                  </FadeInItem>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(5)}
                    delay={500}
                  >
                    카이스트 여성의원 원장
                  </FadeInItem>
                </List>
                <List>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(6)}
                    delay={600}
                  >
                    대한 산부인과 학회
                  </FadeInItem>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(7)}
                    delay={700}
                  >
                    대한 산부인과 의사회
                  </FadeInItem>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(8)}
                    delay={800}
                  >
                    대전 폐경학회
                  </FadeInItem>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(9)}
                    delay={900}
                  >
                    대한 생식면역학 연구회
                  </FadeInItem>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(10)}
                    delay={1000}
                  >
                    대한 비만 체형학회
                  </FadeInItem>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(11)}
                    delay={1100}
                  >
                    대한 여성 성의학회
                  </FadeInItem>
                  <FadeInItem
                    className="fade-in-item"
                    isvisible={visibleItems.has(12)}
                    delay={1200}
                  >
                    대한 여성 비만 노화방지 학회
                  </FadeInItem>
                </List>
              </ListContainer>
            </Vita>
          </TextSection>
        </Wrap>
      </Section>
      <VisualFooter />
    </Container>
  );
};

const FadeInItem = styled.li<FadeInItemProps>`
  opacity: ${(props) => (props.isvisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isvisible ? "0" : "20px")});
  transition: opacity 0.6s ease-out ${(props) => props.delay}ms,
    transform 0.6s ease-out ${(props) => props.delay}ms;
  font-size: clamp(20px, 2.5vw, 24px);
  line-height: 1.4;
  font-weight: 300;
  word-break: keep-all;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.5vw, 16px);
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 4vw, 52px);

  @media (min-width: 768px) {
    flex-direction: row;
    gap: clamp(32px, 5vw, 80px);

    ${List} {
      flex: 1;
    }
  }
`;

const PinkText = styled.h2`
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 500;
  color: ${theme.color.main[1]};
  margin: 0;
`;

const Vita = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.5vw, 12px);
  color: black;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1.5vw, 12px);
  padding-bottom: clamp(16px, 2.5vw, 24px);
  border-bottom: 2px solid ${theme.color.gray1};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const Position = styled.span`
  font-size: clamp(16px, 2.5vw, 24px);
  color: ${theme.color.gray1};
  font-weight: 400;

  @media (min-width: 768px) {
    margin-bottom: 6px;
  }
`;

const Name = styled.h1`
  font-size: clamp(28px, 4vw, 40px);
  font-family: GowunBatang;
  font-weight: lighter;
  color: black;
  margin: 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    max-width: none;
    flex: 0 0 40%;
    margin: 0;
  }

  @media (min-width: 1200px) {
    flex: 0 0 35%;
  }
`;

const TextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: clamp(24px, 4vw, 52px);
  padding-top: clamp(16px, 2.5vw, 20px);

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 4vw, 32px);

  @media (min-width: 768px) {
    flex-direction: row;
    gap: clamp(32px, 5vw, 80px);
  }
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(60px, 10vw, 160px) clamp(20px, 5vw, 10%);
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

export default MedicalStaff;
