import styled from "styled-components";

export const Wrap = styled.div`
  width: 208px;
  height: 48px;
  background-color: #FFFFFF;
  border: 1px solid #D8DAE0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 18px;
  transition: all 0.2s ease;

  p{
    font-size: 16px;
    color: #8B939C;
  }

  input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid #8B939C;
    border-radius: 50%;
    position: relative;
    transition: border-color 0.2s ease;
    
    &::after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #1485EE;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.2s ease;
    }
    
    &:checked {
      border-color: #1485EE;
      
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
`