export type Grade = "A"|"B"|"C"|"D"|"E"|"P"|"NONE";

export type SemesterKey = "grade11"|"grade12"|"grade21"|"grade22"|"grade31"|"grade32";

export type SubjectKey =
  "korean"|"society"|"history"|"morality"|
  "math"|"science"|"cs"|"english";

export type Input = Record<SubjectKey, Record<SemesterKey, Grade>>;

//bonus 점수 타입
export interface AddPointState {
  leaderShip: {
    leader11: boolean;
    leader12: boolean;
    leader21: boolean;
    leader22: boolean;
    leader31: boolean;
    leader32: boolean;
  };
  modelAward: string;
}

//자유 학기제 여부
export type FreeSemesterFlags = {
  freeSem11: boolean;
  freeSem12: boolean;
  freeSem21: boolean;
  freeSem22: boolean;
  freeSem31: boolean;
  freeSem32: boolean;
};