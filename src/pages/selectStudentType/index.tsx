import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import RadioBox from "../../components/selectStudentType";
import Body from "../../components/common/Body";
import { useScore } from "../../contexts/ScoreContext";

const Select = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const navigate = useNavigate();
  const { resetAllData } = useScore();

  // 페이지 진입 시 모든 데이터 초기화
  useEffect(() => {
    resetAllData();
  }, [resetAllData]);

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleNext = () => {
    if (!selectedValue) {
      alert("학력을 선택해주세요.");
      return;
    }

    navigate(`/input/${selectedValue}`);
  };

  return (
    <Body currentStep={1} text="학력을 입력해주세요." handleNext={handleNext}>
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
    </Body>
  );
};

export default Select;
