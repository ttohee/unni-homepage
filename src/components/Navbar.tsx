import styled from "styled-components";
import { useState, useEffect } from "react";
import logo from "../assets/ysunni-logo-white.svg";
import logoBlack from "../assets/ysunni-logo-black.svg"; // 검은색 로고 필요
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const bannerHeight = window.innerHeight;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY > bannerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Nav $isVisible={isVisible} $isScrolled={isScrolled}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Logo>
          <img src={isScrolled ? logoBlack : logo} alt="logo" />
          <div>
            <Title>유성언니여성의원</Title>
            <p>YS Unni Women's Clinic</p>
          </div>
        </Logo>
      </Link>

      <Items>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <p>홈</p>
        </Link>

        <Link to={"/clinics"} style={{ textDecoration: "none" }}>
          <p>진료 과목</p>
        </Link>

        <p>의료진 소개</p>
        <p>오시는길</p>
      </Items>
    </Nav>
  );
};

const Items = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  font-size: 20px;
  font-weight: 500;

  p {
    cursor: pointer;
    transition: opacity 0.3s ease;
    color: white;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Title = styled.p`
  font-size: 22px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: 500;

  img {
    width: 52px;
    height: 52px;
    transition: all 0.3s ease;
  }
`;

const Nav = styled.nav`
  width: 100vw;
  height: 112px;
  border-bottom: 1px solid
    ${(props) => (props.$isScrolled ? "#e0e0e0" : "white")};
  background: ${(props) =>
    props.$isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"};
  backdrop-filter: ${(props) => (props.$isScrolled ? "blur(10px)" : "none")};
  position: fixed;
  top: ${(props) => (props.$isVisible ? "0" : "-112px")};
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 300px;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};

  ${Items} {
    color: ${(props) => (props.$isScrolled ? "#000" : "#fff")};
  }

  ${Logo} {
    color: ${(props) => (props.$isScrolled ? "#000" : "#fff")};
  }
`;

export default Navbar;
