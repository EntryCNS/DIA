export const formatScore = (score: number) => {
  if (score % 1 === 0) {
    return score.toString();
  }
  return parseFloat(score.toFixed(2)).toString();
};
