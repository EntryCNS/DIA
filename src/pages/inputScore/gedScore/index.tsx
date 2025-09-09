import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Body from "../../../components/common/Body";
import { useScore } from "../../../contexts/ScoreContext";

const ScorePage = () => {
  const navigate = useNavigate();
  const { gedGrades, setGedGrades, setStudentType } = useScore();

  const handleChange = (subject: string, value: string) => {
    if (/^\d*$/.test(value)) {
      setGedGrades((prev) => ({ ...prev, [subject]: value }));
    }
  };

  const handleNext = () => {
    const allScoresEntered = Object.values(gedGrades).every(score => score !== "0" && score !== "");
    
    if (!allScoresEntered) {
      alert("점수를 모두 입력해주세요.");
      return;
    }
    
    setStudentType("highSchoolEntranceExamTaker");
    navigate("/result");
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
                value={gedGrades.korean}
                onChange={(e) => handleChange("korean", e.target.value)}
              />
            </td>
            <td>
              <S.ScoreInput
                type="number"
                value={gedGrades.english}
                onChange={(e) => handleChange("english", e.target.value)}
              />
            </td>
            <td>
              <S.ScoreInput
                type="number"
                value={gedGrades.mathematics}
                onChange={(e) => handleChange("mathematics", e.target.value)}
              />
            </td>
            <td>
              <S.ScoreInput
                type="number"
                value={gedGrades.socialStudies}
                onChange={(e) => handleChange("socialStudies", e.target.value)}
              />
            </td>
            <td>
              <S.ScoreInput
                type="number"
                value={gedGrades.science}
                onChange={(e) => handleChange("science", e.target.value)}
              />
            </td>
            <td>
              <S.ScoreInput
                type="number"
                value={gedGrades.electiveSubject}
                onChange={(e) => handleChange("electiveSubject", e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </S.Table>
    </Body>
  );
};

export default ScorePage;
