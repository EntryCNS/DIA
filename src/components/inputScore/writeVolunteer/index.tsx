import type { VolunteerState } from "../../../types/write/volunteer/volunteer.type";

interface WriteVolunteerProps {
  volunteer: VolunteerState;
  setVolunteer: React.Dispatch<React.SetStateAction<VolunteerState>>;
}

const WriteVolunteer = ({ volunteer, setVolunteer }: WriteVolunteerProps) => {
  // 숫자만 입력되게 처리
  const handleChange = (gradeKey: keyof VolunteerState, value: string) => {
    if (/^\d*$/.test(value)) {
      setVolunteer((prev) => ({
        ...prev,
        [gradeKey]: value,
      }));
    }
  };

  // blur 시 빈 값이면 0으로
  const handleBlur = (gradeKey: keyof VolunteerState) => {
    setVolunteer((prev) => ({
      ...prev,
      [gradeKey]: prev[gradeKey] === "" ? "0" : prev[gradeKey],
    }));
  };

  const grades = [
    { key: "grade1", label: "1학년" },
    { key: "grade2", label: "2학년" },
    { key: "grade3", label: "3학년" },
  ] as const;

  return (
    <>
      <thead>
        <tr>
          <th style={{ width: "92px" }}>학년</th>
          <th colSpan={4} style={{ width: "auto" }}>
            봉사활동 시간
          </th>
        </tr>
      </thead>
      <tbody>
        {grades.map(({ key, label }) => (
          <tr key={key}>
            <td style={{ width: "92px" }}>{label}</td>
            <td colSpan={4} style={{ width: "auto" }}>
              <input
                type="text"
                value={volunteer[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                onBlur={() => handleBlur(key)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default WriteVolunteer;
