import styled from "styled-components";
import banner_img from "../assets/banner-img.svg";
import doctor_full from "../assets/유언여 원장님 2.svg";
import VisualFooter from "../components/parts/VisualFooter";
import { theme } from "../styles/theme";
import { useEffect, useState } from "react";

const MedicalStaff = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-item");
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          setVisibleItems((prev) => {
            const newSet = new Set([...prev, index]);
            return newSet;
          });
        }
      });

      if (visibleItems.size >= 13) {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleItems]);

  return (
    <Container>
      <Banner>
        <TextContainer>
          <p>의료진 소개</p>
          <Phrase>“ 작은 언니같은 따뜻한 마음으로 진료하겠습니다. “</Phrase>
          <Hr />
        </TextContainer>
      </Banner>
      <Section>
        <Wrap>
          <img src={doctor_full} />
          <TextSection>
            <Title>
              <Name>서백경 원장</Name>
              <span>언니여성의원 대표원장</span>
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

const FadeInItem = styled.li`
  opacity: ${(props) => (props.isvisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isvisible ? "0" : "20px")});
  transition: opacity 0.6s ease-out ${(props) => props.delay}ms,
    transform 0.6s ease-out ${(props) => props.delay}ms;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;
const PinkText = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: ${theme.color.main[1]};
`;
const Vita = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 28px;
  font-weight: 300;
  color: black;
`;
const Title = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  font-size: 24px;
  color: ${theme.color.gray1};
  font-weight: 400;
  padding-bottom: 24px;
  border-bottom: 2px solid ${theme.color.gray1};

  span {
    margin-bottom: 6px;
  }
`;
const Name = styled.h1`
  font-size: 40px;
  font-family: GowunBatang;
  font-weight: lighter;
  color: black;
`;
const TextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 52px;
  padding-top: 20px;
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8%;
`;
const Section = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 160px 10%;
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

export default MedicalStaff;
