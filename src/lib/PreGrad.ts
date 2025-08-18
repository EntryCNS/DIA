//졸업 예정자

type Grade = "A"|"B"|"C"|"D"|"E"|"P"|"NONE";
type SemesterKey = "grade11"|"grade12"|"grade21"|"grade22"|"grade31"|"grade32";
type SubjectKey =
  "korean"|"society"|"history"|"morality"|
  "math"|"science"|"cs"|"english";

type Input = Record<SubjectKey, Record<SemesterKey, Grade>>;

// 성취도 환산: A=5, B=4, C=3, D=2, E=1 (P/NONE은 미반영)
const gradePoint: Record<Exclude<Grade,"P"|"NONE">, number> = {
  A: 5, B: 4, C: 3, D: 2, E: 1,
};

// 과목 가중: 수학·과학·정보(=cs) 2배, 그 외 1배
const subjectWeight: Record<SubjectKey, number> = {
  korean: 1, society: 1, history: 1, morality: 1,
  math: 2, science: 2, cs: 2, english: 1,
};

// 재학생 학기 가중치
const termWeight: Partial<Record<SemesterKey, number>> = {
  grade11: 2, grade12: 2, grade21: 3, grade22: 3, grade31: 10,
  // 재학생은 grade32 미반영
};

export function calcReenrolledScore(input: Input) {
  // 학기별 A_ij, N_ij, 평균 계산
  const semesters: SemesterKey[] = ["grade11","grade12","grade21","grade22","grade31"];
  const termA: Record<SemesterKey, number> = {grade11:0,grade12:0,grade21:0,grade22:0,grade31:0,grade32:0};
  const termN: Record<SemesterKey, number> = {grade11:0,grade12:0,grade21:0,grade22:0,grade31:0,grade32:0};

  for (const subj of Object.keys(input) as SubjectKey[]) {
    for (const sem of semesters) {
      const g = input[subj][sem];
      if (!g || g === "P" || g === "NONE") continue;
      const p = gradePoint[g as Exclude<Grade,"P"|"NONE">];
      const w = subjectWeight[subj];
      termA[sem] += p * w; // 환산점수 합
      termN[sem] += w;     // 과목 수(가중 포함)
    }
  }

  // 가중 평균 합과 존재 가중합
  let weightedSum = 0;       // Σ w_ij * (A_ij/N_ij)
  let presentWsum = 0;       // Σ w_ij (해당 학기가 존재할 때만)

  for (const sem of semesters) {
    const w = (termWeight[sem] ?? 0);
    if (w === 0) continue;
    if (termN[sem] > 0) {
      const avg = termA[sem] / termN[sem]; // \bar{X}_{ij} (최대 5)
      weightedSum += w * avg;
      presentWsum += w;
    }
  }

  if (presentWsum === 0) return { score: 0};

  // 정규화(학기 결손 시 20/presentWsum 배), 80점 만점 환산
  const normalizedTo100 = weightedSum * (20 / presentWsum); // 최대 100
  const score = 0.8 * normalizedTo100;                      // 최대 80

  return score;
}