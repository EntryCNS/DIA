import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { Header, Footer, Button, NavigateBar } from "../../components/index";
import RadioBox from "../../components/select";

const Select = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const navigate = useNavigate();

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleNext = () => {
    if (!selectedValue) {
      alert("학력을 선택해주세요.");
      return;
    }

    navigate(`/input/${selectedValue}`, {
      state: {
        studentType: selectedValue,
      },
    });
  };

  return (
    <S.PageContainer>
      <Header />
      <NavigateBar currentStep={1} />
      <S.MainContent>
        <S.Title>학력을 입력해주세요.</S.Title>
        <S.Wrap>
          <S.ContentWrap>
            <S.ContentTitle>졸업구분</S.ContentTitle>
            <S.RadioWrap>
              <RadioBox
                text="졸업예정"
                value="student"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
              <RadioBox
                text="졸업생"
                value="graduated"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
              <RadioBox
                text="고입검정"
                value="highSchoolEntranceExamTaker"
                selectedValue={selectedValue}
                onChange={handleRadioChange}
              />
            </S.RadioWrap>
          </S.ContentWrap>
          <S.ButtonWrap>
            <Button text="다음" onClick={handleNext} />
            <Button text="이전" variant="gray" />
          </S.ButtonWrap>
        </S.Wrap>
      </S.MainContent>
      <Footer />
    </S.PageContainer>
  );
};

export default Select;
