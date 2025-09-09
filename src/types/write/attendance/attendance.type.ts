export interface AttendanceType {
  absence: string; // 결석
  tardiness: string; // 지각
  earlyDeparture: string; // 조퇴
  partialAttendance: string; // 결과
}

export interface AttendanceState {
  grade1: AttendanceType;
  grade2: AttendanceType;
  grade3: AttendanceType;
}
