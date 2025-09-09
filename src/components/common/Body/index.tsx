import type React from "react";
import styled from "styled-components";
import { Header } from "../Header";
import NavigateBar from "../NavigateBar";
import { Footer } from "../Footer";
import { Button } from "../Button";

interface BodyProps {
  children: React.ReactNode;
  currentStep: number;
  handleNext: () => void;
  handlePrev?: () => void;
  text: string;
}

const Body = ({ children, currentStep, text, handleNext, handlePrev }: BodyProps) => {
  return (
    <PageWrapper>
      <Header />

      <BodyWrapper>
        <NavigateBar currentStep={currentStep} />
        <Wrap>
          <p>{text}</p>
          <ContentWrapper>
            <ContentContainer>{children}</ContentContainer>
            <ButtonWrapper>
              <Button text="다음" variant="primary" onClick={handleNext} />
              {handlePrev && <Button text="이전" variant="gray" onClick={handlePrev} />}
            </ButtonWrapper>
          </ContentWrapper>
        </Wrap>
      </BodyWrapper>

      <Footer />
    </PageWrapper>
  );
};

export default Body;

const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyWrapper = styled.div`
  width: 1000px;
  padding: 82px 0 160px;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;

  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: #1e2f44;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`;

const ContentContainer = styled.div`
  background-color: #f8fafd;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 8px;
  padding: 40px 35px;
  flex-grow: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
