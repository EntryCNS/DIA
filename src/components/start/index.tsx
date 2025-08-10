import React from "react";
import * as S from './style'

interface RadioProps {
  text: string;
  value: string;
}

const RadioBox = ({ text, value }: RadioProps) => {
  return (
    <>
      <S.Wrap as="label">
        <p>{text}</p>
        <input type="radio" name="radio" value={value} />
      </S.Wrap>
    </>
  );
};

export default RadioBox;
