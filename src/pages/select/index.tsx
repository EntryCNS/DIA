import { useState } from "react";
import * as S from "./style";
import { Header, Footer, Button } from "../../components/index";
import RadioBox from "../../components/select";

const Select = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const getNextButtonHref = () => {
    if (selectedValue === "highschool") {
      return "/gedScore";
    } else if (selectedValue === "expected" || selectedValue === "graduate") {
      return "/write";
    }
    return undefined;
  };

  return (
    <S.PageContainer>
        <Header />
      <S.MainContent>
        <S.Title>학력을 입력해주세요.</S.Title>
        <S.Wrap>
          <S.ContentWrap>
            <S.ContentTitle>졸업구분</S.ContentTitle>
            <S.RadioWrap>
              <RadioBox text="졸업예정" value="expected" selectedValue={selectedValue} onChange={handleRadioChange} />
              <RadioBox text="졸업생" value="graduate" selectedValue={selectedValue} onChange={handleRadioChange} />
              <RadioBox text="고입검정" value="highschool" selectedValue={selectedValue} onChange={handleRadioChange} />
            </S.RadioWrap>
          </S.ContentWrap>
          <S.ButtonWrap>
            <Button text="다음" href={getNextButtonHref()} />
            <Button text="이전" variant="gray" />
          </S.ButtonWrap>
        </S.Wrap>
      </S.MainContent>
      <Footer />
    </S.PageContainer>
  );
};

export default Select;
