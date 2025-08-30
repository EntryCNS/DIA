import { useNavigate } from "react-router-dom";
import * as S from "../style";
import {
  WriteAddPoint,
  WriteAttendance,
  WriteGrade,
  WriteVolunteer,
} from "../../../components";
import Body from "../../../components/common/Body";
import { useFormContext } from "../../../contexts/FormContext";

const StudentWritePage = () => {
  const navigate = useNavigate();
  const { 
    studentForm, 
    setStudentFreeSem,
    setStudentGrades,
    setStudentAttendance,
    setStudentVolunteerTime,
    setStudentAddPoint
  } = useFormContext();
  
  const { freeSem, grades, attendance, volunteerTime, addPoint } = studentForm;

  const handleNext = () => {
    navigate("/result", {
      state: {
        freeSem,
        grades,
        attendance,
        volunteerTime,
        addPoint,
        studentType: "student",
      },
    });
  };

  const handlePrev = () => {
    navigate("/select");
  };

  return (
    <Body
      currentStep={2}
      text="성적일람표를 작성해 주세요"
      handleNext={handleNext}
      handlePrev={handlePrev}
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
          setFreeSem={setStudentFreeSem}
          grades={grades}
          setGrades={setStudentGrades}
          isStudent={true}
        />
      </S.Table>
      <S.Table>
        <WriteAttendance
          attendance={attendance}
          setAttendance={setStudentAttendance}
        />
      </S.Table>
      <S.Table>
        <WriteVolunteer
          volunteer={volunteerTime}
          setVolunteer={setStudentVolunteerTime}
        />
      </S.Table>
      <WriteAddPoint addPoint={addPoint} setAddPoint={setStudentAddPoint} />
    </Body>
  );
};

export default StudentWritePage;
