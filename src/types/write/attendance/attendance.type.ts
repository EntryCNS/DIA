export interface AttendanceType {
  absence: string; // 결석
  late: string; // 지각
  earlyLeave: string; // 조퇴
  tardy: string; // 결과
}

export interface AttendanceState {
  grade1: AttendanceType;
  grade2: AttendanceType;
  grade3: AttendanceType;
}
