import styled from "styled-components";
import { useState, useEffect } from "react";
import logo from "../../assets/ysunni-logo-white.svg";
import logoBlack from "../../assets/ysunni-logo-black.svg";
import { Link } from "react-router-dom";

interface NavProps {
  $isVisible: boolean;
  $isScrolled: boolean;
}

interface LogoProps {
  $isScrolled: boolean;
}

interface ItemsProps {
  $isScrolled: boolean;
}

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
      <Logo $isScrolled={isScrolled}>
        <img src={isScrolled ? logoBlack : logo} alt="YS Unni Logo" />
        <Title>YS Unni Women's Clinic</Title>
      </Logo>

      <Items $isScrolled={isScrolled}>
        <Link to="/">
          <p>홈</p>
        </Link>

        <Link to="/services">
          <p>진료 과목</p>
        </Link>

        <Link to="/medical-staff">
          <p>의료진 소개</p>
        </Link>
      </Items>
    </Nav>
  );
};

const Nav = styled.nav<NavProps>`
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
`;

const Logo = styled.div<LogoProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.$isScrolled ? "#000" : "#fff")};

  img {
    width: 52px;
    height: 52px;
    transition: all 0.3s ease;
  }
`;

const Items = styled.div<ItemsProps>`
  display: flex;
  flex-direction: row;
  gap: 80px;
  font-size: 20px;
  font-weight: 500;

  p {
    cursor: pointer;
    transition: all 0.3s ease;
    color: ${(props) => (props.$isScrolled ? "#000" : "#fff")};

    &:hover {
      opacity: 0.7;
    }
  }

  a {
    text-decoration: none;

    p {
      color: ${(props) => (props.$isScrolled ? "#000" : "#fff")};
    }
  }
`;

const Title = styled.p`
  font-size: 22px;
`;

export default Navbar;
