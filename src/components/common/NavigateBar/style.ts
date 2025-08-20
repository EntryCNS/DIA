import styled from 'styled-components';

export const NavigateContainer = styled.div`
  width: 100%;
  padding: 60px 20px 82px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 40px 16px 60px 16px;
  }
    
`;

export const StepsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const StepCircle = styled.div<{ $isActive: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  margin-right: 8px;
  position: relative;
  z-index: 3;
  
  ${({ $isActive }) => $isActive ? `
    background-color: #2196F3;
    color: white;
    border-color: #2196F3;
  ` : `
    border: 1px solid #D8DAE0;
    color: #D8DAE0;
  `}
`;

export const StepLabel = styled.span<{ $isActive: boolean }>`
  font-size: 14px;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  color: ${({ $isActive }) => ($isActive ? '#000000' : '#666')};
  white-space: nowrap;
`;

export const StepLine = styled.div`
  width: 23px;
  height: 1px;
  background-color: #D8DAE0;
  margin: 0 200px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 40px;
    margin: 0 10px;
  }
`;
