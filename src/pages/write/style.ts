import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Wrap = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media (max-width: 768px) {
    gap: 24px;
  }

  p {
    font-family: "Pretendard", sans-serif;
    font-weight: 600;
    font-size: 28px;
    color: #333;
    text-align: left;

    @media (max-width: 768px) {
      font-size: 24px;
      text-align: center;
    }
  }
`;

export const Contents = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 12px;
  }
`;

export const TableWrapper = styled.div`
  background-color: #f8fafd;
  border-radius: 8px;
  padding: 40px 35px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 34px;

  @media (max-width: 768px) {
    padding: 20px 16px;
    overflow-x: auto;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #d8dae0;
  table-layout: auto;
  min-width: 652px;

  thead {
    background-color: #1485ee;

    th {
      font-family: "Pretendard", sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #fff;
      border-right: 1px solid #d8dae0;
      border-bottom: 1px solid #d8dae0;
      width: 92px;
      height: 54px;
      padding: 8px 4px;

      &:last-child {
        border-right: none;
      }

      &.gray {
        background-color: #f9f9f9;
        color: #424344;
      }

      &.white {
        background-color: #fff;
      }

      @media (max-width: 768px) {
        font-size: 14px;
        height: 48px;
        padding: 6px 2px;
      }
    }
  }

  tbody {
    td {
      font-family: "Pretendard", sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #424344;
      text-align: center;
      border-right: 1px solid #d8dae0;
      border-bottom: 1px solid #d8dae0;
      background-color: #fff;
      width: 108px;
      height: 54px;
      padding: 8px 4px;

      &:last-child {
        border-right: none;
      }

      &.check-title {
        background-color: #f9f9f9;
      }

      @media (max-width: 768px) {
        font-size: 14px;
        height: 48px;
        padding: 6px 2px;
      }

      input {
        width: 85%;
        height: 90%;
        border-radius: 6px;
        border: 1px solid #c6c9d2;
        text-align: center;

        &:focus {
          outline: none;
        }
      }
    }

    tr:last-child td {
      border-bottom: none;
    }
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  background-color: #fff;
  border-radius: 8px;
  color: #8b939c;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 16px;

  ul {
    margin: 16px;
  }
`;
