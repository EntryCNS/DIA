import styled from "styled-components";
import defaultLogo from "../../../assets/DGSWLogo.svg";
import githubLogo from "../../../assets/GitHubLogo.svg";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #F8FAFD;
  padding: 40px 140px;
  box-sizing: border-box;
  margin-top: auto;
  
  @media (max-width: 1400px) {
    padding: 40px 200px;
  }
  
  @media (max-width: 1024px) {
    padding: 40px 100px;
  }
  
  @media (max-width: 768px) {
    padding: 30px 40px;
  }
  
  @media (max-width: 480px) {
    padding: 20px 20px;
  }
    
`;

const LogoImage = styled.img`
  height: 24px;
  object-fit: contain;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    height: 20px;
    margin-bottom: 12px;
  }
`;

const GitHubLink = styled.a`
  display: inline-block;
  cursor: pointer;
  
  img {
    height: 24px;
    object-fit: contain;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 0.7;
    }
    
    @media (max-width: 768px) {
      height: 20px;
    }
  }
`;

const FooterText = styled.div`
  font-size: 12px;
  color: #8B939C;
  line-height: 1.5;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 1.4;
    margin-bottom: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
    word-break: keep-all;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <LogoImage src={defaultLogo}/>
      
      <FooterText>
        원서접수처 주소 : 대구광역시 달성군 구지면 창리로 11길 93 대구소프트웨어마이스터고등학교 ( 43010 )
      </FooterText>
      
      <FooterText>
        교무실 : 053-231-9226 | 행정실 : 053-231-9215 | FAX : 053-614-0709
      </FooterText>
      
      <FooterText>
        대구소프트웨어마이스터고등학교 동아리 CNS
      </FooterText>
      <GitHubLink href="https://github.com/EntryCNS/DIA" target="_blank">
        <img src={githubLogo}/>
      </GitHubLink>
    </FooterContainer>
  );
}