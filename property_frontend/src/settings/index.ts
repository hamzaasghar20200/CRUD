export enum Status {
  APPROVED = "approved",
  PENDING = "pending",
  REJECTED = "rejected",
}

export enum ProfileStatus {
  COMPLETED = "completed",
  PENDING = "pending",
  UNINITIALIZED = "uninitialized",
}

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export enum Profile {
  MENTOR = "MENTOR",
  STUDENT = "STUDENT",
  BOTH = "BOTH",
}

export enum EducationLevel {
  FRESHMAN = "freshman",
  SOPHOMORE = "sophomore",
  JUNIOR = "junior",
  SENIOR = "senior",
  GRADUATE = "graduate",
  NOT_SPECIFIED = "not-specified",
}

export const educationLevelList = [
  { value: "freshman", label: "Freshman" },
  { value: "sophomore", label: "Sophomore" },
  { value: "junior", label: "Junior" },
  { value: "senior", label: "Senior" },
  { value: "graduate", label: "Graduate" },
  { value: "not-specified", label: "Not Specified" },
];

export const GenderPronounsList = [
  { value: "he", label: "He/Him/His" },
  { value: "he", label: "He/Him/His" },
  { value: "he", label: "He/Him/His" },
  { value: "he", label: "He/Him/His" },
];

export const InstitutionList = [
  { value: "stanford", label: "Stanford University" },
  { value: "oxford", label: "Oxford University" },
];

export const MeetingOptions = [
  { value: "", label: "Select Meeting Method", default: true },
  { value: 1, label: "Online" },
  { value: 0, label: "In-person" },
];
