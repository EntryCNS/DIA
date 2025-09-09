import { useState, useEffect } from "react";
import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import {
  GedTaker,
  calcPreGradScore,
  calcGradScore,
  calcBonusScore,
  calcVolunteerTimeScore,
  calcAttendanceScore,
} from "../../lib/index";
import { formatScore } from "../../utils/formatScore";
import Body from "../../components/common/Body";

const ScorePage = () => {
  const navigate = useNavigate();
  const [subjectScore, setSubjectScore] = useState(0);
  const [attendanceScore, setAttendanceScore] = useState(0); //출결점수
  const [volunteerScore, setVolunteerScore] = useState(0); //봉사점수
  const [bonusScore, setBonusScore] = useState(0); //가산점
  const [totalScore, setTotalScore] = useState(0); //총점

  const handleNext = () => {
    location.href = "https://dgsw.dge.hs.kr/dgswh/main.do";
  };

  const handlePrev = () => {
    const { studentType } = state || {};
    if (studentType === "graduated") {
      navigate("/input/graduated");
    } else if (studentType === "student") {
      navigate("/input/student");
    } else {
      navigate(-1);
    }
  };

  // 페이지에서 전달된 상태를 가져오기
  const { state } = useLocation();
  const { freeSem, grades, attendance, volunteerTime, addPoint, studentType } =
    state || {
      freeSem: {},
      grades: {},
      attendance: {},
      volunteerTime: {},
      addPoint: {},
      studentType: "",
    };

  //학생 타입에 따라 점수 계산
  useEffect(() => {
    if (!studentType) {
      console.error("studentType is not defined in state");
      return;
    }

    if (studentType == "highSchoolEntranceExamTaker") {
      const gedStuCalculatedScore = GedTaker({ scores: grades });
      setSubjectScore(gedStuCalculatedScore);
      return;
    } else if (studentType == "student") {
      //졸업 예정자 성적 계산
      const normalCalculatedScore = calcPreGradScore(grades);
      setSubjectScore(
        typeof normalCalculatedScore === "number"
          ? normalCalculatedScore
          : normalCalculatedScore.score
      );
    } else if (studentType === "graduated") {
      // 졸업생 성적 계산
      const GraduateCalculatedScore = calcGradScore(grades);
      setSubjectScore(
        typeof GraduateCalculatedScore === "number"
          ? GraduateCalculatedScore
          : GraduateCalculatedScore.score
      );
    }

    //가산점 계산
    const bonusScore = calcBonusScore(addPoint);
    setBonusScore(bonusScore);
    // 봉사 시간 점수 계산
    const volunteerScore = calcVolunteerTimeScore(volunteerTime);
    setVolunteerScore(volunteerScore);
    // 출결 점수 계산
    const attendanceScore = calcAttendanceScore(attendance);
    setAttendanceScore(attendanceScore);
  }, [freeSem, grades, attendance, volunteerTime, addPoint, studentType]);

  //총점 계산
  useEffect(() => {
    setTotalScore(
      (subjectScore || 0) +
        (attendanceScore || 0) +
        (volunteerScore || 0) +
        (bonusScore || 0)
    );
  }, [subjectScore, attendanceScore, volunteerScore, bonusScore]);

  return (
    <Body currentStep={3} text="점수를 확인해 주세요" handleNext={handleNext} handlePrev={handlePrev}>
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
            <td>{formatScore(subjectScore)}</td>
            <td>{formatScore(attendanceScore)}</td>
            <td>{formatScore(volunteerScore)}</td>
            <td>{formatScore(bonusScore)}</td>
            <td>{formatScore(totalScore)}</td>
          </tr>
        </tbody>
      </S.Table>
    </Body>
  );
};

export default ScorePage;
