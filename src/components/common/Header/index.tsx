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

const LogoImage = styled.img`
  height: 23px;
  object-fit: contain;
`;

export function Header() {
  return (
    <HeaderContainer>
      <LogoImage src={defaultLogo}/>
    </HeaderContainer>
  );
}