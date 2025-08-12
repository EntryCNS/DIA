//검정고시합격자

type ScoreProps = {
  korean: string;
  english: string;
  math: string;
  society: string;
  science: string;
  elective: string;
  [key: string]: string;
};

export function GedTaker({scores}: {scores: ScoreProps}) {
  const getScorePoint = (score: number): number => {
    if (score >= 98 && score <= 100) return 5;
    if (score >= 94 && score < 98) return 4;
    if (score >= 90 && score < 94) return 3;
    if (score >= 86 && score < 90) return 2;
    return 1;
  };

  const scoreValues = Object.values(scores).map(score => parseInt(score));
  const totalScore = scoreValues.reduce((sum, score) => sum + getScorePoint(score), 0);
  const count = scoreValues.length;
  
  if (count === 0) return 0;
  return (totalScore / count) * 20;
}