import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Body from "../../../components/common/Body";

const ScorePage = () => {
  const navigate = useNavigate();
  const [grades, setGrades] = useState({
    korean: "0",
    english: "0",
    math: "0",
    society: "0",
    science: "0",
    elective: "0",
  });

  const handleChange = (subject: string, value: string) => {
    if (/^\d*$/.test(value)) {
      setGrades((prev) => ({ ...prev, [subject]: value }));
    }
  };

  const handleNext = () => {
    const allScoresEntered = Object.values(grades).every(score => score !== "0" && score !== "");
    
    if (!allScoresEntered) {
      alert("점수를 모두 입력해주세요.");
      return;
    }
    
    navigate("/result", {
      state: { grades, studentType: "highSchoolEntranceExamTaker" },
    });
  };

  return (
    <Body currentStep={2} text="점수를 확인해 주세요" handleNext={handleNext}>
      <S.Table>
        <thead>
          <tr>
            <th>과목</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>사회</th>
            <th>과학</th>
            <th>선택과목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="check-title">점수</td>
            <td>
              <S.ScoreInput
                type="number"
                value={grades.korean}
                onChange={(e) => handleChange("korean", e.target.value)}
              />
            </td>
            <td>
              <S.ScoreInput
                type="number"
                value={grades.english}
                onChange={(e) => handleChange("english", e.target.value)}
              />
            </td>
            <td>
              <S.ScoreInput
                type="number"
                value={grades.math}
                onChange={(e) => handleChange("math", e.target.value)}
              />
            </td>
            <td>
              <S.ScoreInput
                type="number"
                value={grades.society}
                onChange={(e) => handleChange("society", e.target.value)}
              />
            </td>
            <td>
              <S.ScoreInput
                type="number"
                value={grades.science}
                onChange={(e) => handleChange("science", e.target.value)}
              />
            </td>
            <td>
              <S.ScoreInput
                type="number"
                value={grades.elective}
                onChange={(e) => handleChange("elective", e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </S.Table>
    </Body>
  );
};

export default ScorePage;
