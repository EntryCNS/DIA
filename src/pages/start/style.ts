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
  padding-left: calc((100vw - 802px) / 2);
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 40px;
`

export const Wrap = styled.div`
  display: flex;
  gap: 42px;
`

export const ContentWrap = styled.div`
  width: 718px;
  height: 168px;
  background-color: #f8fafd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 34px;
  gap: 14px;
`;

export const RadioWrap = styled.div`
  display: flex;
  gap: 13px;
`;

export const ContentTitle = styled.p`
  font-size: 22px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
