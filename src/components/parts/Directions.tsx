import styled from "styled-components";
import { theme } from "../../styles/theme";
import map_pin from "../../assets/map-pin.svg";
import phone from "../../assets/phone.svg";
import notice from "../../assets/notice.svg";
import parking from "../../assets/parking.svg";
import wifi from "../../assets/wifi.svg";
import toilet from "../../assets/toilet.svg";
import disabled from "../../assets/disabled.svg";
import { useEffect } from "react";

function Directions() {
  useEffect(() => {
    if (!window.naver || !window.naver.maps) return;

    const position = new window.naver.maps.LatLng(36.352744, 127.343028);

    const mapOptions = {
      center: position,
      zoom: 17,
      minZoom: 8,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new window.naver.maps.Map("map", mapOptions);
    var marker = new naver.maps.Marker({
      position: position,
      map: map,
    });

    const contentString = [
      '<div class="iw_inner" style="padding:5px; margin: 5px 0px 5px 0px; width: 150px; height: 45px; text-align: center; ">',
      '   <p style="foint-size: 2rem; margin: 0;">유성언니여성의원</p>',
      '   <p style="font-size: 0.8rem; margin: 0;">유성온천역 1번출구 <br> 2분거리 위치 BYC건물 2층</p>',
      "</div>",
    ].join("");
    const infowindow = new naver.maps.InfoWindow({
      content: contentString,
      maxWidth: 200,
      backgroundColor: "white",
      borderColor: "black",
      borderWidth: 2,
      disableAnchor: true,
      pixelOffset: new naver.maps.Point(0, -5),
    });
    naver.maps.Event.addListener(marker, "mouseover", function () {
      infowindow.open(map, marker);
    });

    naver.maps.Event.addListener(marker, "mouseout", function () {
      infowindow.close();
    });
  }, []);

  return (
    <Container>
      <Section>
        <Title>오시는길</Title>
        <Map id="map" />
        <Addrs>
          <p>유성언니여성의원</p>
          <PinkText>
            대전광역시 유성구 계룡로 114(유성BYC빌딩) 2층, 유성언니여성의원
          </PinkText>
        </Addrs>

        <Information>
          <InfoTitle>
            <img src={map_pin} alt="" />
            <p>오시는길</p>
          </InfoTitle>
          <SmallText>
            <p>유성온천역 1번출구 2분거리 위치 BYC건물 2층</p>
            <p>무료주차 가능(BYC빌딩 지하주차장)</p>
          </SmallText>
        </Information>

        <Information>
          <InfoTitle>
            <img src={phone} alt="" />
            <p>전화번호</p>
          </InfoTitle>
          <p>042-719-8375</p>
        </Information>

        <AmenityInfo>
          <InfoTitle>
            <img src={notice} alt="" />
            <p>이용안내</p>
          </InfoTitle>
          <Amenities>
            <Wrap>
              <img src={parking} alt="무료 주차" />
              <p>무료 주차</p>
            </Wrap>
            <Wrap>
              <img src={wifi} alt="와이파이" />
              <p>와이파이</p>
            </Wrap>
            <Wrap>
              <img src={toilet} alt="화장실" />
              <p>화장실</p>
            </Wrap>
            <Wrap>
              <img src={disabled} alt="장애인 편의시설" />
              <p>장애인 편의시설</p>
            </Wrap>
          </Amenities>
        </AmenityInfo>
      </Section>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  padding: 145px 314px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    padding: 120px 100px;
  }

  @media (max-width: 768px) {
    padding: 80px 40px;
  }

  @media (max-width: 480px) {
    padding: 60px 20px;
  }
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: black;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid ${theme.color.gray1};
  margin-bottom: 44px;

  @media (max-width: 768px) {
    font-size: 18px;
    padding-bottom: 15px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding-bottom: 12px;
    margin-bottom: 20px;
  }
`;

const Map = styled.div`
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 10px;
  background-color: gainsboro;

  @media (max-width: 768px) {
    height: 300px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    height: 250px;
    border-radius: 6px;
  }
`;

const Addrs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 52px 40px;
  font-size: 20px;
  font-weight: 400;
  color: ${theme.color.gray1};
  gap: 20px;

  @media (max-width: 768px) {
    padding: 40px 30px;
    font-size: 18px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    font-size: 16px;
    gap: 12px;
  }
`;

const PinkText = styled.h4`
  font-size: 32px;
  font-weight: 500;
  color: ${theme.color.main[1]};
  word-break: keep-all;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Information = styled.div`
  width: 100%;
  padding: 52px 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 48px;
  border-top: 1px solid ${theme.color.gray1};
  font-size: 20px;
  font-weight: 400;
  color: ${theme.color.gray1};

  @media (max-width: 768px) {
    padding: 40px 30px;
    gap: 30px;
    font-size: 18px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    gap: 20px;
    font-size: 16px;
  }
`;

const AmenityInfo = styled.div`
  width: 100%;
  padding: 50px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
  border-top: 1px solid ${theme.color.gray1};
  font-size: 20px;
  font-weight: 400;
  color: ${theme.color.gray1};

  @media (max-width: 768px) {
    padding: 40px 30px;
    gap: 30px;
    font-size: 18px;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    gap: 20px;
    font-size: 16px;
  }
`;

const InfoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  font-weight: 500;
  color: black;
  min-width: 150px;

  img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    gap: 15px;
    min-width: auto;

    img {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    font-size: 16px;
    gap: 12px;

    img {
      width: 18px;
      height: 18px;
    }
  }
`;

const SmallText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  word-break: keep-all;
  line-height: 1.5;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const Amenities = styled.div`
  display: flex;
  flex-direction: row;
  gap: 52px;

  @media (max-width: 768px) {
    gap: 30px;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 20px;
    justify-content: space-between;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  text-align: center;

  img {
    width: 52px;
    height: 52px;
  }

  p {
    word-break: keep-all;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    img {
      width: 40px;
      height: 40px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    flex: 1;
    min-width: 80px;

    img {
      width: 36px;
      height: 36px;
    }

    p {
      font-size: 11px;
    }
  }
`;

export default Directions;
