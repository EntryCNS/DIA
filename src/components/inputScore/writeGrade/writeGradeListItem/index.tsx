import styled from "styled-components";
import type {
  FreeSemType,
  GradesType,
  GradeType,
  Score,
} from "../../../../types/write/grade/grade.type";

interface WriteGradeListItemProps {
  subject: keyof GradesType;
  grades: GradeType;
  freeSem: FreeSemType;
  onChange: (
    semesterIndex: number,
    value: Score,
    subject: keyof GradesType
  ) => void;
  isStudent: boolean;
}

const WriteGradeListItem = ({
  subject,
  grades,
  freeSem,
  onChange,
  isStudent,
}: WriteGradeListItemProps) => {
  const subjectName = {
    korean: "국어",
    socialStudies: "사회",
    history: "역사",
    ethics: "도덕",
    mathematics: "수학",
    science: "과학",
    informatics: "정보",
    english: "영어",
  };

  return (
    <ListItemContainer>
      <td>{subjectName[subject]}</td>
      <td>
        <Select $isDisabled={freeSem.freeSem11}>
          <select
            onChange={(e) => onChange(0, e.target.value as Score, subject)}
            value={grades.grade11}
            disabled={freeSem.freeSem11}
          >
            <option value="NONE">-</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </Select>
      </td>
      <td>
        <Select $isDisabled={freeSem.freeSem12}>
          <select
            onChange={(e) => onChange(1, e.target.value as Score, subject)}
            value={grades.grade12}
            disabled={freeSem.freeSem12}
          >
            <option value="NONE">-</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </Select>
      </td>
      <td>
        <Select $isDisabled={freeSem.freeSem21}>
          <select
            onChange={(e) => onChange(2, e.target.value as Score, subject)}
            value={grades.grade21}
            disabled={freeSem.freeSem21}
          >
            <option value="NONE">-</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </Select>
      </td>
      <td>
        <Select $isDisabled={freeSem.freeSem22}>
          <select
            onChange={(e) => onChange(3, e.target.value as Score, subject)}
            value={grades.grade22}
            disabled={freeSem.freeSem22}
          >
            <option value="NONE">-</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </Select>
      </td>
      <td>
        <Select $isDisabled={freeSem.freeSem31}>
          <select
            onChange={(e) => onChange(4, e.target.value as Score, subject)}
            value={grades.grade31}
            disabled={freeSem.freeSem31}
          >
            <option value="NONE">-</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </Select>
      </td>
      <td>
        <Select $isDisabled={freeSem.freeSem32 || isStudent}>
          <select
            onChange={(e) => onChange(5, e.target.value as Score, subject)}
            value={grades.grade32}
            disabled={freeSem.freeSem32 || isStudent}
          >
            <option value="NONE">-</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </Select>
      </td>
      <td />
    </ListItemContainer>
  );
};

export default WriteGradeListItem;

const ListItemContainer = styled.tr`
  td {
    width: 13%;
    height: 3rem;
    text-align: center;
  }
`;

const Select = styled.div<{ $isDisabled: boolean }>`
  padding-left: 1rem;
  display: block;
  margin: 0 auto;
  width: 85%;
  height: 92%;
  padding-right: 8px;
  border: 1px solid #c6c9d2;
  border-radius: 6px;
  background-color: ${({ $isDisabled }) => ($isDisabled ? "#F2F3F5" : "none")};
  select {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 8px;
    background-color: ${({ $isDisabled }) =>
      $isDisabled ? "#F2F3F5" : "none"};

    &:focus {
      outline: none;
    }
  }
`;
