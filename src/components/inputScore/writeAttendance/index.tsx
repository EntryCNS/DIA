import React from "react";
import type {
  AttendanceState,
  AttendanceType,
} from "../../../types/write/attendance/attendance.type";

interface WriteAttendanceProps {
  attendance: AttendanceState;
  setAttendance: React.Dispatch<React.SetStateAction<AttendanceState>>;
}

const WriteAttendance = ({
  attendance,
  setAttendance,
}: WriteAttendanceProps) => {
  const handleChange = (
    gradeKey: keyof AttendanceState,
    field: keyof AttendanceType,
    value: string
  ) => {
    if (/^\d*$/.test(value)) {
      setAttendance((prev) => ({
        ...prev,
        [gradeKey]: {
          ...prev[gradeKey],
          [field]: value,
        },
      }));
    }
  };

  const handleBlur = (
    gradeKey: keyof AttendanceState,
    field: keyof AttendanceType
  ) => {
    setAttendance((prev) => ({
      ...prev,
      [gradeKey]: {
        ...prev[gradeKey],
        [field]: prev[gradeKey][field] === "" ? "0" : prev[gradeKey][field],
      },
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
          <th>학년</th>
          <th colSpan={2}>결석</th>
          <th colSpan={2}>지각</th>
          <th colSpan={2}>조퇴</th>
          <th colSpan={2}>결과</th>
        </tr>
      </thead>
      <tbody>
        {grades.map(({ key, label }) => (
          <tr key={key}>
            <td>{label}</td>
            <td colSpan={2}>
              <input
                type="text"
                value={attendance[key].absence}
                onChange={(e) => handleChange(key, "absence", e.target.value)}
                onBlur={() => handleBlur(key, "absence")}
              />
            </td>
            <td colSpan={2}>
              <input
                type="text"
                value={attendance[key].tardiness}
                onChange={(e) => handleChange(key, "tardiness", e.target.value)}
                onBlur={() => handleBlur(key, "tardiness")}
              />
            </td>
            <td colSpan={2}>
              <input
                type="text"
                value={attendance[key].earlyDeparture}
                onChange={(e) =>
                  handleChange(key, "earlyDeparture", e.target.value)
                }
                onBlur={() => handleBlur(key, "earlyDeparture")}
              />
            </td>
            <td colSpan={2}>
              <input
                type="text"
                value={attendance[key].partialAttendance}
                onChange={(e) => handleChange(key, "partialAttendance", e.target.value)}
                onBlur={() => handleBlur(key, "partialAttendance")}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default WriteAttendance;
