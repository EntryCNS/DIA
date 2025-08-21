import type { AttendanceState } from "../types/write/attendance/attendance.type";

export const calcAttendanceScore = (attendance: AttendanceState) => {
  const getAttendanceDate = (attendance: AttendanceState) => {
    const absence =
      Number(attendance.grade1.absence) +
      Number(attendance.grade2.absence) +
      Number(attendance.grade3.absence);
    const late =
      Number(attendance.grade1.late) +
      Number(attendance.grade2.late) +
      Number(attendance.grade3.late);
    const earlyLeave =
      Number(attendance.grade1.earlyLeave) +
      Number(attendance.grade2.earlyLeave) +
      Number(attendance.grade3.earlyLeave);
    const tardy =
      Number(attendance.grade1.tardy) +
      Number(attendance.grade2.tardy) +
      Number(attendance.grade3.tardy);
    return Math.min(absence + Math.floor((late + earlyLeave + tardy) / 3), 5);
  };
  const attendanceDate = getAttendanceDate(attendance);

  return 10 - attendanceDate * 2;
};
