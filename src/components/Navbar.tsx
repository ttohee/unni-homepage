import styled from "styled-components";
import logo from "../assets/ysunni-logo-white.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo>
          <img src={logo} />
          <div>
            <Title>유성언니여성의원</Title>
            <p>YS Unni Women’s Clinic</p>
          </div>
        </Logo>
        <Items>
          <p>홈</p>
          <p>진료 과목</p>
          <p>의료진 소개</p>
          <p>오시는길</p>
        </Items>
      </Nav>
    </>
  );
};

const Items = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  font-size: 20px;
  font-weight: 500;
  color: white;
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
  color: white;
  img {
    width: 52px;
    height: 52px;
  }
`;
const Nav = styled.nav`
  width: 100vw;
  height: 112px;
  border-bottom: 1px solid white;
  background: transparent;
  position: fixed;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 300px;
`;

export default Navbar;
