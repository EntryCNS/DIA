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

      const semesterMap = [
        "grade11",
        "grade12",
        "grade21",
        "grade22",
        "grade31",
        "grade32",
      ] as const;

      subjectGrade[semesterMap[semesterIndex]] = value;
      updated[subject] = subjectGrade;
      return updated;
    });
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
          <th className="white">
            <ToggleButton
              className={freeSem.freeSem11 ? "on" : "off"}
              onClick={() =>
                setFreeSem({
                  ...freeSem,
                  freeSem11: !freeSem.freeSem11,
                })
              }
            >
              자유학기제
            </ToggleButton>
          </th>
          <th className="white">
            <ToggleButton
              className={freeSem.freeSem12 ? "on" : "off"}
              onClick={() =>
                setFreeSem({
                  ...freeSem,
                  freeSem12: !freeSem.freeSem12,
                })
              }
            >
              자유학기제
            </ToggleButton>
          </th>
          <th className="white">
            <ToggleButton
              className={freeSem.freeSem21 ? "on" : "off"}
              onClick={() =>
                setFreeSem({
                  ...freeSem,
                  freeSem21: !freeSem.freeSem21,
                })
              }
            >
              자유학기제
            </ToggleButton>
          </th>
          <th className="white">
            <ToggleButton
              className={freeSem.freeSem22 ? "on" : "off"}
              onClick={() =>
                setFreeSem({
                  ...freeSem,
                  freeSem22: !freeSem.freeSem22,
                })
              }
            >
              자유학기제
            </ToggleButton>
          </th>
          <th className="white">
            <ToggleButton
              className={freeSem.freeSem31 ? "on" : "off"}
              onClick={() =>
                setFreeSem({
                  ...freeSem,
                  freeSem31: !freeSem.freeSem31,
                })
              }
            >
              자유학기제
            </ToggleButton>
          </th>
          <th className="white">
            <ToggleButton
              className={freeSem.freeSem32 ? "on" : "off"}
              onClick={() =>
                setFreeSem({
                  ...freeSem,
                  freeSem32: !freeSem.freeSem32,
                })
              }
            >
              자유학기제
            </ToggleButton>
          </th>
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

  &.on {
    border: 1px solid #1485ee;
    background-color: #1485ee;
    color: #fff;
  }
`;
