import styled from "styled-components";
import defaultLogo from "../../../assets/DGSW.svg";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0 20px 140px;
  position: relative;

  @media (max-width: 1200px) {
    padding: 18px 0 18px 80px;
  }

  @media (max-width: 768px) {
    padding: 16px 0 16px 40px;
  }

  @media (max-width: 480px) {
    padding: 14px 0 14px 20px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #e7e9ed;
  }
`;

const LogoImage = styled.img`
  height: 23px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 20px;
  }

  @media (max-width: 480px) {
    height: 18px;
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <LogoLink href="https://dgsw.dge.hs.kr/dgswh/main.do" target="_blank" rel="noopener noreferrer">
        <img src={defaultLogo} alt="대구소프트웨어마이스터고등학교 로고"/>
      </LogoLink>
    </HeaderContainer>
  );
}
