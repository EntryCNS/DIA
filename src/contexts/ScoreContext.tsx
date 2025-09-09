import { createContext, useContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";
import {
  defaultGrades,
  type AddPointState,
  type AttendanceState,
  type FreeSemType,
  type GradesType,
  type VolunteerState,
} from "../types/write";

type GedGradesType = {
  korean: string;
  english: string;
  mathematics: string;
  socialStudies: string;
  science: string;
  electiveSubject: string;
};

interface ScoreContextType {
  freeSem: FreeSemType;
  setFreeSem: Dispatch<SetStateAction<FreeSemType>>;
  grades: GradesType;
  setGrades: Dispatch<SetStateAction<GradesType>>;
  gedGrades: GedGradesType;
  setGedGrades: Dispatch<SetStateAction<GedGradesType>>;
  attendance: AttendanceState;
  setAttendance: Dispatch<SetStateAction<AttendanceState>>;
  volunteerTime: VolunteerState;
  setVolunteerTime: Dispatch<SetStateAction<VolunteerState>>;
  addPoint: AddPointState;
  setAddPoint: Dispatch<SetStateAction<AddPointState>>;
  studentType: string;
  setStudentType: Dispatch<SetStateAction<string>>;
  resetAllData: () => void;
}

const defaultFreeSem: FreeSemType = {
  freeSem11: false,
  freeSem12: false,
  freeSem21: false,
  freeSem22: false,
  freeSem31: false,
  freeSem32: false,
};

const defaultAttendance: AttendanceState = {
  grade1: { absence: "0", tardiness: "0", earlyDeparture: "0", partialAttendance: "0" },
  grade2: { absence: "0", tardiness: "0", earlyDeparture: "0", partialAttendance: "0" },
  grade3: { absence: "0", tardiness: "0", earlyDeparture: "0", partialAttendance: "0" },
};

const defaultVolunteerTime: VolunteerState = {
  grade1: "0",
  grade2: "0",
  grade3: "0",
};

const defaultAddPoint: AddPointState = {
  leaderShip: {
    leader11: false,
    leader12: false,
    leader21: false,
    leader22: false,
    leader31: false,
    leader32: false,
  },
  modelAward: "0",
};

const defaultGedGrades: GedGradesType = {
  korean: "0",
  english: "0",
  mathematics: "0",
  socialStudies: "0",
  science: "0",
  electiveSubject: "0",
};

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

const useScore = () => {
  const context = useContext(ScoreContext);
  if (context === undefined) {
    throw new Error("useScore must be used within a ScoreProvider");
  }
  return context;
};

const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [freeSem, setFreeSem] = useState<FreeSemType>(defaultFreeSem);
  const [grades, setGrades] = useState<GradesType>(defaultGrades);
  const [gedGrades, setGedGrades] = useState<GedGradesType>(defaultGedGrades);
  const [attendance, setAttendance] = useState<AttendanceState>(defaultAttendance);
  const [volunteerTime, setVolunteerTime] = useState<VolunteerState>(defaultVolunteerTime);
  const [addPoint, setAddPoint] = useState<AddPointState>(defaultAddPoint);
  const [studentType, setStudentType] = useState<string>("");

  const resetAllData = () => {
    setFreeSem(defaultFreeSem);
    setGrades(defaultGrades);
    setGedGrades(defaultGedGrades);
    setAttendance(defaultAttendance);
    setVolunteerTime(defaultVolunteerTime);
    setAddPoint(defaultAddPoint);
    setStudentType("");
  };

  const value: ScoreContextType = {
    freeSem,
    setFreeSem,
    grades,
    setGrades,
    gedGrades,
    setGedGrades,
    attendance,
    setAttendance,
    volunteerTime,
    setVolunteerTime,
    addPoint,
    setAddPoint,
    studentType,
    setStudentType,
    resetAllData,
  };

  return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>;
};

export { useScore, ScoreProvider };