import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: calc((100vw - 600px) / 2);
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`

export const Wrap = styled.div`
  display: flex;
  gap: 30px;
`

export const ContentWrap = styled.div`
  width: 500px;
  height: 120px;
  background-color: #f8fafd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 24px;
  gap: 12px;
`;

export const RadioWrap = styled.div`
  display: flex;
  gap: 13px;
`;

export const ContentTitle = styled.p`
  font-size: 18px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
