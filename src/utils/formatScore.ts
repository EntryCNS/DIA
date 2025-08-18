export const formatScore = (score: number) => {
  return score % 1 === 0 ? score.toString() : score.toFixed(1);
};
