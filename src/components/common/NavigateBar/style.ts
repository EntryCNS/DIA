import styled from "styled-components";

export const NavigateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 50px 16px 70px 16px;
  }

  @media (max-width: 768px) {
    padding: 40px 16px 60px 16px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px 50px 12px;
  }
`;

export const StepsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: nowrap;
  gap: 0;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    padding: 0 5px;
  }
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  flex-shrink: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
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
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
    margin-right: 0;
    margin-bottom: 4px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    font-size: 12px;
    margin-right: 0;
    margin-bottom: 4px;
  }

  ${({ $isActive }) =>
    $isActive
      ? `
    background-color: #2196F3;
    color: white;
    border-color: #2196F3;
  `
      : `
    border: 1px solid #D8DAE0;
    color: #D8DAE0;
  `}
`;

export const StepLabel = styled.span<{ $isActive: boolean }>`
  font-size: 14px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  color: ${({ $isActive }) => ($isActive ? "#000000" : "#666")};
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 12px;
    white-space: normal;
    text-align: center;
    line-height: 1.2;
    max-width: 60px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    max-width: 50px;
  }
`;

export const StepLine = styled.div`
  height: 1px;
  background-color: #d8dae0;
  position: relative;
  z-index: 1;
  width: 23px;
  margin: 0 20px;
`;
