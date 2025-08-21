import React from "react";
import * as S from "./style";

interface Step {
  id: number;
  label: string;
  path?: string;
}

interface NavigateBarProps {
  currentStep: number;
}

const steps: Step[] = [
  { id: 1, label: "학력 정보" },
  { id: 2, label: "성적 입력" },
  { id: 3, label: "점수 확인" },
];

export const NavigateBar: React.FC<NavigateBarProps> = ({ currentStep }) => {
  return (
    <S.NavigateContainer>
      <S.StepsWrapper>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <S.StepItem>
              <S.StepCircle $isActive={currentStep === step.id}>
                {step.id}
              </S.StepCircle>
              <S.StepLabel $isActive={currentStep === step.id}>
                {step.label}
              </S.StepLabel>
            </S.StepItem>
            {index < steps.length - 1 && <S.StepLine />}
          </React.Fragment>
        ))}
      </S.StepsWrapper>
    </S.NavigateContainer>
  );
};

export default NavigateBar;
