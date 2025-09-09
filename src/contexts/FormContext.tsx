import React, { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";
import {
  defaultGrades,
  type AddPointState,
  type AttendanceState,
  type FreeSemType,
  type GradesType,
  type VolunteerState,
} from "../types/write";

interface FormState {
  freeSem: FreeSemType;
  grades: GradesType;
  attendance: AttendanceState;
  volunteerTime: VolunteerState;
  addPoint: AddPointState;
  studentType: string;
}

interface FormContextType {
  graduatedForm: FormState;
  studentForm: FormState;
  setGraduatedFreeSem: Dispatch<SetStateAction<FreeSemType>>;
  setGraduatedGrades: Dispatch<SetStateAction<GradesType>>;
  setGraduatedAttendance: Dispatch<SetStateAction<AttendanceState>>;
  setGraduatedVolunteerTime: Dispatch<SetStateAction<VolunteerState>>;
  setGraduatedAddPoint: Dispatch<SetStateAction<AddPointState>>;
  setStudentFreeSem: Dispatch<SetStateAction<FreeSemType>>;
  setStudentGrades: Dispatch<SetStateAction<GradesType>>;
  setStudentAttendance: Dispatch<SetStateAction<AttendanceState>>;
  setStudentVolunteerTime: Dispatch<SetStateAction<VolunteerState>>;
  setStudentAddPoint: Dispatch<SetStateAction<AddPointState>>;
}

const defaultFormState: FormState = {
  freeSem: {
    freeSem11: false,
    freeSem12: false,
    freeSem21: false,
    freeSem22: false,
    freeSem31: false,
    freeSem32: false,
  },
  grades: defaultGrades,
  attendance: {
    grade1: { absence: "0", late: "0", earlyLeave: "0", tardy: "0" },
    grade2: { absence: "0", late: "0", earlyLeave: "0", tardy: "0" },
    grade3: { absence: "0", late: "0", earlyLeave: "0", tardy: "0" },
  },
  volunteerTime: {
    grade1: "0",
    grade2: "0",
    grade3: "0",
  },
  addPoint: {
    leaderShip: {
      leader11: false,
      leader12: false,
      leader21: false,
      leader22: false,
      leader31: false,
      leader32: false,
    },
    modelAward: "0",
  },
  studentType: "",
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [graduatedForm, setGraduatedFormState] = useState<FormState>(defaultFormState);
  const [studentForm, setStudentFormState] = useState<FormState>(defaultFormState);

  const setGraduatedFreeSem = (freeSem: FreeSemType | ((prev: FreeSemType) => FreeSemType)) => {
    setGraduatedFormState(prev => ({ 
      ...prev, 
      freeSem: typeof freeSem === 'function' ? freeSem(prev.freeSem) : freeSem 
    }));
  };

  const setGraduatedGrades = (grades: GradesType | ((prev: GradesType) => GradesType)) => {
    setGraduatedFormState(prev => ({ 
      ...prev, 
      grades: typeof grades === 'function' ? grades(prev.grades) : grades 
    }));
  };

  const setGraduatedAttendance = (attendance: AttendanceState | ((prev: AttendanceState) => AttendanceState)) => {
    setGraduatedFormState(prev => ({ 
      ...prev, 
      attendance: typeof attendance === 'function' ? attendance(prev.attendance) : attendance 
    }));
  };

  const setGraduatedVolunteerTime = (volunteerTime: VolunteerState | ((prev: VolunteerState) => VolunteerState)) => {
    setGraduatedFormState(prev => ({ 
      ...prev, 
      volunteerTime: typeof volunteerTime === 'function' ? volunteerTime(prev.volunteerTime) : volunteerTime 
    }));
  };

  const setGraduatedAddPoint = (addPoint: AddPointState | ((prev: AddPointState) => AddPointState)) => {
    setGraduatedFormState(prev => ({ 
      ...prev, 
      addPoint: typeof addPoint === 'function' ? addPoint(prev.addPoint) : addPoint 
    }));
  };

  const setStudentFreeSem = (freeSem: FreeSemType | ((prev: FreeSemType) => FreeSemType)) => {
    setStudentFormState(prev => ({ 
      ...prev, 
      freeSem: typeof freeSem === 'function' ? freeSem(prev.freeSem) : freeSem 
    }));
  };

  const setStudentGrades = (grades: GradesType | ((prev: GradesType) => GradesType)) => {
    setStudentFormState(prev => ({ 
      ...prev, 
      grades: typeof grades === 'function' ? grades(prev.grades) : grades 
    }));
  };

  const setStudentAttendance = (attendance: AttendanceState | ((prev: AttendanceState) => AttendanceState)) => {
    setStudentFormState(prev => ({ 
      ...prev, 
      attendance: typeof attendance === 'function' ? attendance(prev.attendance) : attendance 
    }));
  };

  const setStudentVolunteerTime = (volunteerTime: VolunteerState | ((prev: VolunteerState) => VolunteerState)) => {
    setStudentFormState(prev => ({ 
      ...prev, 
      volunteerTime: typeof volunteerTime === 'function' ? volunteerTime(prev.volunteerTime) : volunteerTime 
    }));
  };

  const setStudentAddPoint = (addPoint: AddPointState | ((prev: AddPointState) => AddPointState)) => {
    setStudentFormState(prev => ({ 
      ...prev, 
      addPoint: typeof addPoint === 'function' ? addPoint(prev.addPoint) : addPoint 
    }));
  };

  return (
    <FormContext.Provider
      value={{
        graduatedForm,
        studentForm,
        setGraduatedFreeSem,
        setGraduatedGrades,
        setGraduatedAttendance,
        setGraduatedVolunteerTime,
        setGraduatedAddPoint,
        setStudentFreeSem,
        setStudentGrades,
        setStudentAttendance,
        setStudentVolunteerTime,
        setStudentAddPoint,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};