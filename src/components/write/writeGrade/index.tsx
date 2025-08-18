import React from "react";
import {
  defaultGrades,
  type FreeSemType,
  type GradesType,
  type Score,
} from "../../../types/write/grade/grade.type";
import WriteGradeListItem from "./writeGradeListItem";
import styled from "styled-components";

interface GradePropsType {
  freeSem: FreeSemType;
  setFreeSem: React.Dispatch<React.SetStateAction<FreeSemType>>;
  grades: GradesType;
  setGrades: React.Dispatch<React.SetStateAction<GradesType>>;
}

// 학기 키 매핑
const semesterMap = [
  "grade11",
  "grade12",
  "grade21",
  "grade22",
  "grade31",
  "grade32",
] as const;

const freeSemMap = [
  "freeSem11",
  "freeSem12",
  "freeSem21",
  "freeSem22",
  "freeSem31",
  "freeSem32",
] as const;

const WriteGrade = ({
  freeSem,
  setFreeSem,
  grades,
  setGrades,
}: GradePropsType) => {
  const handleGradesCallback = (
    semesterIndex: number,
    value: Score,
    subject: keyof GradesType
  ) => {
    setGrades((prev) => {
      const updated = { ...prev };
      const subjectGrade = { ...updated[subject] };

      subjectGrade[semesterMap[semesterIndex]] = value;
      updated[subject] = subjectGrade;
      return updated;
    });
  };

  // 자유학기제 토글 핸들러
  const toggleFreeSem = (index: number) => {
    const semKey = freeSemMap[index];
    const gradeKey = semesterMap[index];

    const next = !freeSem[semKey];

    setFreeSem({
      ...freeSem,
      [semKey]: next,
    });

    // 자유학기제 활성화 시 성적 초기화
    if (next) {
      setGrades((prev) => {
        const updated = { ...prev };
        (Object.keys(updated) as (keyof GradesType)[]).forEach((subject) => {
          updated[subject] = {
            ...updated[subject],
            [gradeKey]: defaultGrades[subject][gradeKey],
          };
        });
        return updated;
      });
    }
  };

  return (
    <>
      <thead>
        <tr>
          <th rowSpan={3}>과목</th>
          <th colSpan={2}>1학년</th>
          <th colSpan={2}>2학년</th>
          <th colSpan={2}>3학년</th>
          <th
            rowSpan={3}
            onClick={() => {
              setGrades(defaultGrades);
              setFreeSem({
                freeSem11: false,
                freeSem12: false,
                freeSem21: false,
                freeSem22: false,
                freeSem31: false,
                freeSem32: false,
              });
            }}
          >
            삭제
          </th>
        </tr>
        <tr>
          <th className="gray">1학기</th>
          <th className="gray">2학기</th>
          <th className="gray">1학기</th>
          <th className="gray">2학기</th>
          <th className="gray">1학기</th>
          <th className="gray">2학기</th>
        </tr>
        <tr>
          {freeSemMap.map((semKey, idx) => (
            <th key={semKey} className="white">
              <ToggleButton
                className={freeSem[semKey] ? "on" : "off"}
                onClick={() => toggleFreeSem(idx)}
              >
                자유학기제
              </ToggleButton>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(Object.keys(defaultGrades) as (keyof GradesType)[]).map((subject) => (
          <WriteGradeListItem
            key={subject}
            subject={subject}
            grades={grades[subject]}
            freeSem={freeSem}
            onChange={handleGradesCallback}
          />
        ))}
      </tbody>
    </>
  );
};

export default WriteGrade;

export const ToggleButton = styled.button`
  width: 85%;
  height: 92%;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid #d8dae0;
  color: #8b939c;
  user-select: none;
  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 12px;

  &.on {
    border: 1px solid #1485ee;
    background-color: #1485ee;
    color: #fff;
  }
`;
