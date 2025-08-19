import type { Grade, Input, SemesterKey, SubjectKey, FreeSemesterFlags } from "../types/calcTypes";

// 성취도 환산: A=5, B=4, C=3, D=2, E=1 (P/NONE은 미반영)
const gradePoint: Record<Exclude<Grade,"P"|"NONE">, number> = {
  A: 5, B: 4, C: 3, D: 2, E: 1,
};

// 과목 가중: 수학·과학·정보(cs) 2배, 그 외 1배
const subjectWeight: Record<SubjectKey, number> = {
  korean: 1, society: 1, history: 1, morality: 1,
  math: 2, science: 2, cs: 2, english: 1,
};

// 학기 가중치
const termWeight: Partial<Record<SemesterKey, number>> = {
  grade11: 2, grade12: 2,
  grade21: 3, grade22: 3,
  grade31: 5, grade32: 5,
};

export function calcGradScore(input: Input, freeSem: FreeSemesterFlags) {
  const semesters: SemesterKey[] = [
    "grade11","grade12","grade21","grade22","grade31","grade32"
  ];

  // 학기별 합산 값
  const termA: Record<SemesterKey, number> = {
    grade11:0, grade12:0, grade21:0, grade22:0, grade31:0, grade32:0
  };
  const termN: Record<SemesterKey, number> = {
    grade11:0, grade12:0, grade21:0, grade22:0, grade31:0, grade32:0
  };

  // 과목별 성취도 → 점수 변환 + 학기별 합산
  for (const subj of Object.keys(input) as SubjectKey[]) {
    for (const sem of semesters) {
      // 자유학기면 성적 제외
      if (
        (sem === "grade11" && freeSem.freeSem11) ||
        (sem === "grade12" && freeSem.freeSem12) ||
        (sem === "grade21" && freeSem.freeSem21) ||
        (sem === "grade22" && freeSem.freeSem22) ||
        (sem === "grade31" && freeSem.freeSem31) ||
        (sem === "grade32" && freeSem.freeSem32)
      ) {
        continue;
      }

      const g = input[subj][sem];
      if (!g || g === "P" || g === "NONE") continue;

      const p = gradePoint[g as Exclude<Grade,"P"|"NONE">];
      const w = subjectWeight[subj];

      termA[sem] += p * w;
      termN[sem] += w;
    }
  }

  // 가중 평균 계산
  let weightedSum = 0;
  let presentWsum = 0;

  for (const sem of semesters) {
    const w = (termWeight[sem] ?? 0);
    if (w === 0) continue;
    if (termN[sem] > 0) {
      const avg = termA[sem] / termN[sem]; // 학기 평균
      weightedSum += w * avg;
      presentWsum += w;
    }
  }

  if (presentWsum === 0) return { score: 0 };

  // 자유학기 제외 후 남은 학기만 100% 비율로 환산
  const normalizedTo100 = weightedSum * (20 / presentWsum); // 최대 100
  const score = 0.8 * normalizedTo100;                      // 최대 80

  return { score };
}