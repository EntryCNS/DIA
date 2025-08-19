import React from 'react';
import * as S from './style';

interface Step {
  id: number;
  label: string;
  path?: string;
}

interface NavigateBarProps {
  steps: Step[];
  currentStep: number;
}

export const NavigateBar: React.FC<NavigateBarProps> = ({ steps, currentStep }) => {
  return (
    <S.NavigateContainer>
      <S.StepsWrapper>
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <S.StepItem>
              <S.StepCircle 
                $isActive={currentStep === step.id}
              >
                {step.id}
              </S.StepCircle>
              <S.StepLabel $isActive={currentStep === step.id}>
                {step.label}
              </S.StepLabel>
            </S.StepItem>
            {index < steps.length - 1 && (
              <S.StepLine />
            )}
          </React.Fragment>
        ))}
      </S.StepsWrapper>
    </S.NavigateContainer>
  );
};

export default NavigateBar;
