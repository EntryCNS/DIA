import styled from "styled-components";

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
      height: 27px;
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

      &.small {
        font-size: 12px;
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
      font-size: 12px;
      color: #8b939c;
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
        color: #424344;
        font-size: 16px;
      }

      @media (max-width: 768px) {
        font-size: 14px;
        height: 48px;
        padding: 6px 2px;
      }

      input {
        width: 70%;
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
