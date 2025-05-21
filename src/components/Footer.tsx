import styled from "styled-components";
import { theme } from "../styles/theme";
import logo_gray from "../assets/ysunni-logo-gray.svg";
import naver_cafe from "../assets/naver-cafe.svg";
import insta from "../assets/insta.svg";
import dot from "../assets/dot.svg";
import copyright from "../assets/copyright.svg";

const Footer = () => {
  return (
    <Container>
      <Seciton>
        <TopPart>
          <Information>
            <Logo>
              <img src={logo_gray} />
              <TextContainer>
                <Title>유성언니여성의원</Title>
                <p>YS Unni Women’s Clinic</p>
              </TextContainer>
            </Logo>
            <InfoContainer>
              <p>대표자명 : 서백경 | 사업자등록번호 : 000-00-00000</p>
              <p>연락처 : 042-719-8375 | 이메일 : unni@example.com</p>
              <p>주소 : 대전광역시 유성구 계룡로 114, 202호</p>
            </InfoContainer>
          </Information>

          <SNSLink>
            <img src={naver_cafe} />
            <img src={dot} />
            <img src={insta} />
          </SNSLink>
        </TopPart>

        <Hr />

        <Copyright>
          <p>Copyright</p>
          <img src={copyright} />
          <p>유성언니여성의원</p>
        </Copyright>
      </Seciton>
    </Container>
  );
};

const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  font-size: 20px;
  font-weight: 400;
  color: ${theme.color.gray1};
`;
const Hr = styled.hr`
  width: 100%;
  border: 1px solid ${theme.color.gray1};
`;
const SNSLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TopPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 20px;
  font-weight: 400;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 25px;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 17px;
  font-weight: 500;
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  color: ${theme.color.gray1};
`;
const Seciton = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;
const Container = styled.div`
  width: 100vw;
  padding: 68px 170px 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
