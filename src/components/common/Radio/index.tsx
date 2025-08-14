import styled from "styled-components";

interface RadioProps {
  data: boolean;
  handleDataChange: () => void;
}

const Radio = ({ data, handleDataChange }: RadioProps) => {
  return (
    <RadioContainer $data={data} onClick={() => handleDataChange()}>
      <div />
    </RadioContainer>
  );
};

export default Radio;

const RadioContainer = styled.div<{ $data: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 1px solid #c6c9d2;
  padding: 2px;
  display: block;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
    border-radius: 3px;
  }

  div {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background-color: ${({ $data }) => $data && "#1485EE"};
  }
`;
