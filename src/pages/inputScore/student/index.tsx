import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style";
import {
  WriteAddPoint,
  WriteAttendance,
  WriteGrade,
  WriteVolunteer,
} from "../../../components";
import {
  defaultGrades,
  type AddPointState,
  type AttendanceState,
  type FreeSemType,
  type GradesType,
  type VolunteerState,
} from "../../../types/write";
import Body from "../../../components/common/Body";

const StudentWritePage = () => {
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
        freeSem,
        grades,
        attendance,
        volunteerTime,
        addPoint,
        studentType: "student",
      },
    });
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
