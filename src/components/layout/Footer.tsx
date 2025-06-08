import styled from "styled-components";
import { theme } from "../../styles/theme";
import logo_gray from "../../assets/ysunni-logo-gray.svg";
import naver_cafe from "../../assets/naver-cafe.svg";
import insta from "../../assets/insta.svg";
import dot from "../../assets/dot.svg";
import copyright from "../../assets/copyright.svg";

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
                <p>YS Unni Women's Clinic</p>
              </TextContainer>
            </Logo>
            <InfoContainer>
              <p>대표자명 : 서백경 | 사업자등록번호 : 371-16-01372</p>
              <p>연락처 : 042-719-8375 | 이메일 : happyofwomen78@naver.com</p>
              <p>주소 : 대전광역시 유성구 계룡로 114, 202호</p>
            </InfoContainer>
          </Information>

          <SNSLink>
            <a href="https://blog.naver.com/happyofwomen78" target="blank">
              <img src={naver_cafe} />
            </a>

            <img src={dot} />

            <a
              href="https://www.instagram.com/unniwomenclinic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="blank"
            >
              <img src={insta} />
            </a>
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

  @media (max-width: 768px) {
    font-size: 16px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Hr = styled.hr`
  width: 100%;
  border: 1px solid ${theme.color.gray1};

  @media (max-width: 768px) {
    border: 0.5px solid ${theme.color.gray1};
  }
`;

const SNSLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  img {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 768px) {
    gap: 6px;

    img {
      width: 28px;
      height: 28px;
    }
  }

  @media (max-width: 480px) {
    gap: 4px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const TopPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  word-break: keep-all;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    gap: 8px;

    p {
      word-break: break-all;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 12px;

  @media (max-width: 480px) {
    margin-left: 8px;
  }
`;

const Title = styled.div`
  font-size: 25px;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 17px;
  font-weight: 500;

  img {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 768px) {
    font-size: 16px;

    img {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    font-size: 15px;

    img {
      width: 45px;
      height: 45px;
    }
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  color: ${theme.color.gray1};
  flex: 1;

  @media (max-width: 768px) {
    gap: 20px;
    width: 100%;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const Seciton = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 24px;
  }
`;

const Container = styled.div`
  width: 100vw;
  padding: 68px 170px 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 60px 100px 50px;
  }

  @media (max-width: 768px) {
    padding: 50px 40px 40px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px 30px;
  }
`;

export default Footer;
