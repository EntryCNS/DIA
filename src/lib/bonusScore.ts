import type { AddPointState } from "../types/calcTypes";

export const calcBonusScore = (addPoint: AddPointState) => {
  const { leaderShip, modelAward } = addPoint;

  // 리더십 점수 계산
  let leadershipScore = Object.values(leaderShip).filter(Boolean).length * 0.5; // 각 리더십 항목당 0.5점
  leadershipScore = Math.min(leadershipScore, 2);

  // 모델상 점수 계산
  let modelAwardScore = Number(modelAward) || 0; //상 숫자로 변환, 없으면 0점
  modelAwardScore = Math.min(modelAwardScore, 2); // 최대 2점

  const totalBonusScore = leadershipScore + modelAwardScore;

  return totalBonusScore;
};
