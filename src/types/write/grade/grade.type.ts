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
  socialStudies: GradeType;
  history: GradeType;
  //도덕
  ethics: GradeType;
  mathematics: GradeType;
  science: GradeType;
  //정보
  informatics: GradeType;
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
  socialStudies: { ...defaultGrade },
  history: { ...defaultGrade },
  ethics: { ...defaultGrade },
  mathematics: { ...defaultGrade },
  science: { ...defaultGrade },
  informatics: { ...defaultGrade },
  english: { ...defaultGrade },
};
