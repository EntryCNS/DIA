export type Score = "A" | "B" | "C" | "D" | "E" | "NONE";

export interface FreeSemType {
  freeSem11: boolean;
  freeSem12: boolean;
  freeSem21: boolean;
  freeSem22: boolean;
  freeSem31: boolean;
  freeSem32: boolean;
}

export interface GradeType {
  grade11: Score;
  grade12: Score;
  grade21: Score;
  grade22: Score;
  grade31: Score;
  grade32: Score;
}

export interface GradesType {
  korean: GradeType;
  society: GradeType;
  history: GradeType;
  //도덕
  morality: GradeType;
  math: GradeType;
  science: GradeType;
  //정보
  cs: GradeType;
  english: GradeType;
}

export const defaultGrade: GradeType = {
  grade11: "NONE",
  grade12: "NONE",
  grade21: "NONE",
  grade22: "NONE",
  grade31: "NONE",
  grade32: "NONE",
};
export const defaultGrades: GradesType = {
  korean: { ...defaultGrade },
  society: { ...defaultGrade },
  history: { ...defaultGrade },
  morality: { ...defaultGrade },
  math: { ...defaultGrade },
  science: { ...defaultGrade },
  cs: { ...defaultGrade },
  english: { ...defaultGrade },
};
