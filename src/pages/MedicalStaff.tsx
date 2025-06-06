import styled from "styled-components";
import banner_img from "../assets/banner-img.svg";
import doctor_full from "../assets/유언여 원장님 2.svg";

const MedicalStaff = () => {
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
          <TextSection></TextSection>
        </Wrap>
      </Section>
    </Container>
  );
};

const TextSection = styled.div`
  display: flex;
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
