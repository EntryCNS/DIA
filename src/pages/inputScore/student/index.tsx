import { useNavigate } from "react-router-dom";
import * as S from "../style";
import {
  WriteAddPoint,
  WriteAttendance,
  WriteGrade,
  WriteVolunteer,
} from "../../../components";
import Body from "../../../components/common/Body";
import { useScore } from "../../../contexts/ScoreContext";

const StudentWritePage = () => {
  const navigate = useNavigate();
  const {
    freeSem,
    setFreeSem,
    grades,
    setGrades,
    attendance,
    setAttendance,
    volunteerTime,
    setVolunteerTime,
    addPoint,
    setAddPoint,
    setStudentType,
  } = useScore();

  const handleNext = () => {
    setStudentType("student");
    navigate("/result");
  };

  return (
    <Body
      currentStep={2}
      text="성적일람표를 작성해 주세요"
      handleNext={handleNext}
    >
      <S.DescriptionContainer>
        <ul>
          <li>
            자유학기제 등으로 교과 성적이 없는 학기일 경우, 모집 요강에 의거하여
            해당학기의 성적을 인정하니, 테이블 상단의 '자유학기제'를 꼭 선택해
            주세요.
          </li>
        </ul>
      </S.DescriptionContainer>
      <S.Table>
        <WriteGrade
          freeSem={freeSem}
          setFreeSem={setFreeSem}
          grades={grades}
          setGrades={setGrades}
          isStudent={true}
        />
      </S.Table>
      <S.Table>
        <WriteAttendance
          attendance={attendance}
          setAttendance={setAttendance}
        />
      </S.Table>
      <S.Table>
        <WriteVolunteer
          volunteer={volunteerTime}
          setVolunteer={setVolunteerTime}
        />
      </S.Table>
      <WriteAddPoint addPoint={addPoint} setAddPoint={setAddPoint} />
    </Body>
  );
};

export default StudentWritePage;
