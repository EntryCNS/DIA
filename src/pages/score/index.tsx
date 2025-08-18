import { useState, useEffect } from "react";
import * as S from "./style";
import { Button } from "../../components/common/Button";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";
// import NavigateBar from "../../components/common/NavigateBar";
import { GedTaker } from "../../lib/gedTaker";
import { calcReenrolledScore } from "../../lib/PreGrad";
import { formatScore } from "../../utils/formatScore";

const ScorePage = () => {
  const [sujbjectScore, setSubjectScore] = useState(0);
  const [attendanceScore, setAttendanceScore] = useState(0);
  const [volunteerScore, setVolunteerScore] = useState(0);
  const [bonusScore, setBonusScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const { state } = useLocation();
  // const { scores, studentType } = state || { scores: {}, studentType: "normalStu" };
  const {freeSem, grades, attendance, volunteerTime, addPoint, studentType} = state || {
    freeSem: {},
    grades: {},
    attendance: {},
    volunteerTime: {},
    addPoint: {},
    studentType: "",
  };

  useEffect(() => {
    if (!studentType) {
      console.error("studentType is not defined in state");
      return;
    }
    
    console.log("입려된 데이터 ",freeSem, grades, attendance, volunteerTime, addPoint, studentType)

    if (studentType == "gedStu") {
      const calculatedScore = GedTaker({ scores: grades });
      setSubjectScore(calculatedScore);
    } else if (studentType == "normalStu") {
      const normalCalculatedScore = calcReenrolledScore(grades);
      setSubjectScore(
        typeof normalCalculatedScore === "number"
          ? normalCalculatedScore
          : normalCalculatedScore.score
      );
    } else if (stu)
  }, [studentType, grades]);


  useEffect(() => {
    setTotalScore(
      (sujbjectScore || 0) +
        (attendanceScore || 0) +
        (volunteerScore || 0) +
        (bonusScore || 0)
    );
  }, [sujbjectScore, attendanceScore, volunteerScore, bonusScore]);

  return (
    <>
      <Header />
      {/* <NavigateBar /> */}
      <S.Body>
        <S.Wrap>
          <S.Title>점수를 확인해 주세요</S.Title>
          <S.Contents>
            <S.ScoreContainer>
              <S.TableWrapper>
                <S.Table>
                  <thead>
                    <tr>
                      <th>전형구분</th>
                      <th>교과성적</th>
                      <th>출결상황</th>
                      <th>봉사활동</th>
                      <th>가산점</th>
                      <th>총점</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="check-title">점수확인</td>
                      <td>{formatScore(sujbjectScore)}</td>
                      <td>{formatScore(attendanceScore)}</td>
                      <td>{formatScore(volunteerScore)}</td>
                      <td>{formatScore(bonusScore)}</td>
                      <td>{formatScore(totalScore)}</td>
                    </tr>
                  </tbody>
                </S.Table>
              </S.TableWrapper>
            </S.ScoreContainer>

            <S.ButtonsWrap>
              <Button
                text="홈페이지로 이동하기"
                href="https://dgsw.dge.hs.kr/dgswh/main.do"
                variant="primary"
              />
              <Button text="이전" variant="gray" />
            </S.ButtonsWrap>
          </S.Contents>
        </S.Wrap>
      </S.Body>
      <Footer />
    </>
  );
};

export default ScorePage;
