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
  flex-direction: row; /* 텍스트 옆으로 */
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
  margin-right: 8px; /* 텍스트와 간격 */
  position: relative;
  z-index: 3;
  
  ${({ $isActive }) => $isActive ? `
    background-color: #2196F3;
    color: white;
    box-shadow: 0 0 0 4px rgba(33, 150, 243, 0.2);
  ` : `
    background-color: #e0e0e0;
    color: #666;
  `}
`;

export const StepLabel = styled.span<{ $isActive: boolean }>`
  font-size: 14px;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  color: ${({ $isActive }) => ($isActive ? '#000000' : '#666')}; /* 현재 단계는 검정색 */
  white-space: nowrap;
`;

export const StepLine = styled.div`
  width: 23px; /* 선 길이 조정 가능 */
  height: 2px;
  background-color: #e0e0e0; /* 항상 회색 */
  margin: 0 200px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 40px;
    margin: 0 10px;
  }
`;
