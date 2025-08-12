import * as S from "./style";
import { Button } from "../../components/common/Button";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";
// import NavigateBar from "../../components/common/NavigateBar";
import { GedTaker } from "../../lib/gedTaker";
import { useState, useEffect } from "react";

const ScorePage = () => {
  const [sujbjectScore, setSubjectScore] = useState(0);
  const [attendanceScore, setAttendanceScore] = useState(0);
  const [volunteerScore, setVolunteerScore] = useState(0);
  const [bonusScore, setBonusScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const { state } = useLocation();
  const { scores, studentType } = state || { scores: {}, studentType: "" };

  useEffect(() => {
    if (studentType == "gedStu") {
      const calculatedScore = GedTaker({ scores });
      setSubjectScore(calculatedScore);
    } else if (studentType == "normalStu") {
      // const calculatedScore = GedTaker({ scores });
      // setSubjectScore(calculatedScore);
    }
  }, [studentType, scores]);

  useEffect(() => {
    setTotalScore(
      (sujbjectScore || 0) +
        (attendanceScore || 0) +
        (volunteerScore || 0) +
        (bonusScore || 0)
    );
  }, [sujbjectScore, attendanceScore, volunteerScore, bonusScore]);

  const handlePrev = () => {
    window.history.back();
  };

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
                      <td>{sujbjectScore.toFixed(1)}</td>
                      <td>{attendanceScore.toFixed(1)}</td>
                      <td>{volunteerScore.toFixed(1)}</td>
                      <td>{bonusScore.toFixed(1)}</td>
                      <td>{totalScore.toFixed(1)}</td>
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
              <Button text="이전" variant="gray" onClick={handlePrev} />
            </S.ButtonsWrap>
          </S.Contents>
        </S.Wrap>
      </S.Body>
      <Footer />
    </>
  );
};

export default ScorePage;
