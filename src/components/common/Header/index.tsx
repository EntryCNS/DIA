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
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #E7E9ED;
  }
`;

const LogoLink = styled.a`
  cursor: pointer;
  
  img {
    height: 23px;
    object-fit: contain;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 0.8;
    }
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