import type { VolunteerState } from "../types/write/volunteer/volunteer.type";

export const calcVolunteerTimeScore = (volunteerTime: VolunteerState) => {
  const getScoreForHours = (hours: number): number => {
    if (hours >= 10) return 2;
    if (hours >= 7) return 1.6;
    return 1.2;
  };

  const grade1Score = getScoreForHours(Number(volunteerTime.grade1));
  const grade2Score = getScoreForHours(Number(volunteerTime.grade2));
  const grade3Score = getScoreForHours(Number(volunteerTime.grade3));

  return grade1Score + grade2Score + grade3Score;
};
