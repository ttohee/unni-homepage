import styled from "styled-components";
import { theme } from "../../styles/theme";
import subject_img from "../../assets/subject-img.svg";
import doctor_img from "../../assets/doctor.svg";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

interface TitleProps {
  $isvisible: boolean;
}

interface SubjectProps {
  $isvisible: boolean;
  $direction: "left" | "right";
}

const Intro = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [firstSubjectVisible, setFirstSubjectVisible] = useState(false);
  const [secondSubjectVisible, setSecondSubjectVisible] = useState(false);

  const titleRef = useRef<HTMLDivElement>(null);
  const firstSubjectRef = useRef<HTMLDivElement>(null);
  const secondSubjectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "-50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            setTitleVisible(true);
          } else if (entry.target === firstSubjectRef.current) {
            setFirstSubjectVisible(true);
          } else if (entry.target === secondSubjectRef.current) {
            setSecondSubjectVisible(true);
          }
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (firstSubjectRef.current) observer.observe(firstSubjectRef.current);
    if (secondSubjectRef.current) observer.observe(secondSubjectRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Container>
      <Title ref={titleRef} $isvisible={titleVisible}>
        <Phrase>함께 건강한 병원, 사귀고 돌보는 병원</Phrase>
        <p>YS Unni Women's Clinic</p>
        <MainTitle>유성언니여성의원</MainTitle>
      </Title>

      <Section>
        <Subject
          ref={firstSubjectRef}
          $isvisible={firstSubjectVisible}
          $direction="left"
        >
          <ImgContainer src={subject_img} alt="환자 진료 이미지" />
          <InfoContainer>
            <TextContainer>
              <BigText>따뜻한 진료</BigText>
              <p>작은 언니같은 따뜻한 마음으로 진료하겠습니다. </p>
            </TextContainer>
            <Link to={"/clinics"} style={{ textDecoration: "none" }}>
              <Button text="진료 과목 보러가기" />
            </Link>
          </InfoContainer>
        </Subject>

        <Subject
          ref={secondSubjectRef}
          $isvisible={secondSubjectVisible}
          $direction="right"
        >
          <InfoContainer>
            <TextContainer>
              <BigText>전문성을 갖춘 의료진</BigText>
              <p>
                다년간의 진료 경험을 지닌 산부인과 여의사 서백경 선생님이
                진료합니다.
              </p>
            </TextContainer>
            <Link to={"/staff"} style={{ textDecoration: "none" }}>
              <Button text="의료진 소개 보러가기" />
            </Link>
          </InfoContainer>
          <ImgContainer src={doctor_img} alt="의료진 이미지" />
        </Subject>
      </Section>
    </Container>
  );
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 400;
  color: ${theme.color.gray1};
  gap: 20px;
  word-break: keep-all;
`;

const InfoContainer = styled.div`
  display: flex;
  max-width: 500px;
  flex: 1;
  flex-direction: column;
  gap: 40px;
`;

const BigText = styled.h4`
  font-size: 28px;
  font-weight: 600;
  color: black;
`;

const ImgContainer = styled.img`
  flex: 1;
  max-width: 520px;
  border: none;
  border-radius: 20px;
  object-fit: cover;
`;

const Subject = styled.div<SubjectProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10%;

  opacity: ${(props) => (props.$isvisible ? 1 : 0)};
  transform: translateX(
    ${(props) => {
      if (!props.$isvisible) {
        return props.$direction === "left" ? "-100px" : "100px";
      }
      return "0px";
    }}
  );
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const Title = styled.div<TitleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 2px;
  gap: 12px;
  font-size: 28px;
  font-weight: 600;

  opacity: ${(props) => (props.$isvisible ? 1 : 0)};
  transform: translateY(${(props) => (props.$isvisible ? "0px" : "50px")});
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
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
  gap: 200px;
`;

export default Intro;
