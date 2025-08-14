import { useEffect, useState } from "react";
import { Button } from "../../components/common/Button";
import * as S from "./style";
import {
  defaultGrades,
  type FreeSemType,
  type GradesType,
} from "../../types/write/grade/grade.type";
import WriteAttendance from "../../components/write/writeAttendance";
import type { AttendanceState } from "../../types/write/attendance/attendance.type";
import WriteVolunteer from "../../components/write/writeVolunteer";
import type { VolunteerState } from "../../types/write/volunteer/volunteer.type";
import WriteAddPoint from "../../components/write/writeAddPoint";
import type { AddPointState } from "../../types/write/addPoint/addPoint.type";
import WriteGrade from "../../components/write/writeGrade";
import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";
// import NavigateBar from "../../components/common/NavigateBar";

const WritePage = () => {
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
    grade1: { absence: "0", late: "0", earlyLeave: "0", tardy: "0" },
    grade2: { absence: "0", late: "0", earlyLeave: "0", tardy: "0" },
    grade3: { absence: "0", late: "0", earlyLeave: "0", tardy: "0" },
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

  useEffect(() => {
    console.log(grades);
  }, [grades]);

  return (
    <>
      <Header />
      {/* <NavigateBar /> */}
      <S.Body>
        <S.Wrap>
          <p>성적일람표를 작성해 주세요</p>
          <S.Contents>
            <S.ScoreContainer>
              <S.TableWrapper>
                <S.DescriptionContainer>
                  <ul>
                    <li>
                      자유학기제 등으로 교과 성적이 없는 학기일 경우, 모집
                      요강에 의거하여 해당학기의 성적을 인정하니, 테이블 상단의
                      '자유학기제'를 꼭 선택해 주세요.
                    </li>
                  </ul>
                </S.DescriptionContainer>
                <S.Table>
                  <WriteGrade
                    freeSem={freeSem}
                    setFreeSem={setFreeSem}
                    grades={grades}
                    setGrades={setGrades}
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
              </S.TableWrapper>
            </S.ScoreContainer>

            <S.ButtonsWrap>
              <Button text="다음" variant="primary" />
              <Button text="이전" variant="gray" />
            </S.ButtonsWrap>
          </S.Contents>
        </S.Wrap>
      </S.Body>
      <Footer />
    </>
  );
};

export default WritePage;
