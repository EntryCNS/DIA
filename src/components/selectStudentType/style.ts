import styled from "styled-components";

export const Wrap = styled.div`
  width: 150px;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #d8dae0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  transition: all 0.2s ease;
  cursor: pointer;

  p {
    font-size: 14px;
    color: #8b939c;
    transition: color 0.2s ease;
  }

  input[type="radio"]:checked + p,
  input[type="radio"]:checked ~ p {
    color: #1485ee;
  }

  &:has(input[type="radio"]:checked) {
    border-color: #1485ee;

    p {
      color: #1485ee;
    }
  }

  input[type="radio"] {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid #8b939c;
    border-radius: 50%;
    position: relative;
    transition: border-color 0.2s ease;

    &::after {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #1485ee;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.2s ease;
    }

    &:checked {
      border-color: #1485ee;

      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
`;
