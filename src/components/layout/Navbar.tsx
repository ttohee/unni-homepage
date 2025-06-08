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

interface MobileMenuProps {
  $isOpen: boolean;
  $isScrolled: boolean;
}

interface HamburgerProps {
  $isScrolled: boolean;
  $isOpen: boolean;
}

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const bannerHeight = window.innerHeight;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // 스크롤 시 모바일 메뉴 닫기
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

  // 모바일 메뉴 토글
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 메뉴 클릭 시 모바일 메뉴 닫기
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 화면 크기 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Nav $isVisible={isVisible} $isScrolled={isScrolled}>
        <Logo $isScrolled={isScrolled}>
          <img src={isScrolled ? logoBlack : logo} alt="YS Unni Logo" />
          <Title>YS Unni Women's Clinic</Title>
        </Logo>

        {/* 데스크톱 메뉴 */}
        <Items $isScrolled={isScrolled}>
          <Link to="/">
            <p>홈</p>
          </Link>

          <Link to="/clinics">
            <p>진료 과목</p>
          </Link>

          <Link to="/staff">
            <p>의료진 소개</p>
          </Link>
        </Items>

        {/* 모바일 햄버거 버튼 */}
        <HamburgerButton
          $isScrolled={isScrolled}
          $isOpen={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
      </Nav>

      {/* 모바일 메뉴 */}
      <MobileMenu $isOpen={isMobileMenuOpen} $isScrolled={isScrolled}>
        <MobileMenuItems>
          <Link to="/" onClick={closeMobileMenu}>
            <p>홈</p>
          </Link>

          <Link to="/clinics" onClick={closeMobileMenu}>
            <p>진료 과목</p>
          </Link>

          <Link to="/staff" onClick={closeMobileMenu}>
            <p>의료진 소개</p>
          </Link>
        </MobileMenuItems>
      </MobileMenu>

      {/* 모바일 메뉴 배경 오버레이 */}
      {isMobileMenuOpen && <Overlay onClick={closeMobileMenu} />}
    </>
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
  z-index: 1000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 300px;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};

  @media (max-width: 1024px) {
    padding: 0 60px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 80px;
  }
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

  @media (max-width: 768px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const Title = styled.p`
  font-size: 22px;
  margin-left: 12px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    display: none;
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

  @media (max-width: 1024px) {
    gap: 40px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerButton = styled.button<HamburgerProps>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  span {
    width: 30px;
    height: 3px;
    background: ${(props) => (props.$isScrolled ? "#000" : "#fff")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${(props) => (props.$isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.$isOpen ? 0 : 1)};
      transform: ${(props) =>
        props.$isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${(props) => (props.$isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? "0" : "-100%")};
  width: 280px;
  height: 100vh;
  background: ${(props) =>
    props.$isScrolled
      ? "rgba(255, 255, 255, 0.98)"
      : "rgba(246, 185, 174, 0.95)"};
  backdrop-filter: blur(10px);
  z-index: 999;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 40px;

  a {
    text-decoration: none;

    p {
      font-size: 20px;
      font-weight: 500;
      color: inherit;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 15px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      &:hover {
        opacity: 0.7;
        transform: translateX(10px);
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Navbar;
