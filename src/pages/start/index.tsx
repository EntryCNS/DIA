import React from "react";
import * as S from "./style";
import { Button } from "../../components/common/Button";
import RadioBox from "../../components/start";

const Start = () => {
  return (
    <>
      <S.Title>학력을 입력해주세요.</S.Title>
      <S.Wrap>
        <S.ContentWrap>
          <S.ContentTitle>졸업구분</S.ContentTitle>
          <S.RadioWrap>
            <RadioBox text="졸업예정" value="expected" />
            <RadioBox text="졸업생" value="graduate" />
            <RadioBox text="고입검정" value="highschool" />
          </S.RadioWrap>
        </S.ContentWrap>
        <S.ButtonWrap>
          <Button text="다음" />
          <Button text="이전" variant="gray" />
        </S.ButtonWrap>
      </S.Wrap>
    </>
  );
};

export default Start;
