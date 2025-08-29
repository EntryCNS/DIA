import type { AttendanceState } from "../types/write/attendance/attendance.type";

export const calcAttendanceScore = (attendance: AttendanceState) => {
  const getAttendanceDate = (attendance: AttendanceState) => {
    const absence =
      Number(attendance.grade1.absence) +
      Number(attendance.grade2.absence) +
      Number(attendance.grade3.absence);
    const late =
      Number(attendance.grade1.tardiness) +
      Number(attendance.grade2.tardiness) +
      Number(attendance.grade3.tardiness);
    const earlyLeave =
      Number(attendance.grade1.earlyDeparture) +
      Number(attendance.grade2.earlyDeparture) +
      Number(attendance.grade3.earlyDeparture);
    const tardy =
      Number(attendance.grade1.partialAttendance) +
      Number(attendance.grade2.partialAttendance) +
      Number(attendance.grade3.partialAttendance);
    return Math.min(absence + Math.floor((late + earlyLeave + tardy) / 3), 5);
  };
  const attendanceDate = getAttendanceDate(attendance);

  return 10 - attendanceDate * 2;
};
