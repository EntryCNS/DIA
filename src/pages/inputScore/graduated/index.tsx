import * as S from "../style";
import { useNavigate } from "react-router-dom";
import {
  WriteAddPoint,
  WriteAttendance,
  WriteGrade,
  WriteVolunteer,
} from "../../../components";
import Body from "../../../components/common/Body";
import { useFormContext } from "../../../contexts/FormContext";

const GraduatedWritePage = () => {
  const navigate = useNavigate();
  const [freeSem, setFreeSem] = useState<FreeSemType>({
    freeSem11: false,
    freeSem12: false,
    freeSem21: false,
    freeSem22: false,
    freeSem31: false,
    freeSem32: false,
  });
  const [grades, setGrades] = useState<GradesType>(defaultGrades);
  const [attendance, setAttendance] = useState<AttendanceState>({
    grade1: { absence: "0", tardiness: "0", earlyDeparture: "0", partialAttendance: "0" },
    grade2: { absence: "0", tardiness: "0", earlyDeparture: "0", partialAttendance: "0" },
    grade3: { absence: "0", tardiness: "0", earlyDeparture: "0", partialAttendance: "0" },
  });
  const [volunteerTime, setVolunteerTime] = useState<VolunteerState>({
    grade1: "0",
    grade2: "0",
    grade3: "0",
  });
  const [addPoint, setAddPoint] = useState<AddPointState>({
    leaderShip: {
      leader11: false,
      leader12: false,
      leader21: false,
      leader22: false,
      leader31: false,
      leader32: false,
    },
    modelAward: "0",
  });

  const handleNext = () => {
    navigate("/result", {
      state: {
        // 순서대로 학기별 자율학기제 여부, 성적, 출결, 봉사시간, 가산점
        freeSem,
        grades,
        attendance,
        volunteerTime,
        addPoint,
        studentType: "graduated",
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
          setFreeSem={setGraduatedFreeSem}
          grades={grades}
          setGrades={setGraduatedGrades}
          isStudent={false}
        />
      </S.Table>
      <S.Table>
        <WriteAttendance
          attendance={attendance}
          setAttendance={setGraduatedAttendance}
        />
      </S.Table>
      <S.Table>
        <WriteVolunteer
          volunteer={volunteerTime}
          setVolunteer={setGraduatedVolunteerTime}
        />
      </S.Table>
      <WriteAddPoint addPoint={addPoint} setAddPoint={setGraduatedAddPoint} />
    </Body>
  );
};

export default GraduatedWritePage;
