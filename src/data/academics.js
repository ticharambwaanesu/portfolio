// Grade point mapping for the chart (4.0-style local scale)
const GRADE_POINTS = {
  "A": 4.0, "A-": 3.7,
  "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0, "C-": 1.7,
};

export const academicResults = [
  { level: 1, semester: "1 (Aug–Dec 2023)", course: "Single Variable Calculus", grade: "C+" },
  { level: 1, semester: "1 (Aug–Dec 2023)", course: "Engineering Graphics", grade: "A-" },
  { level: 1, semester: "1 (Aug–Dec 2023)", course: "Communication and Information Technology", grade: "B-" },
  { level: 1, semester: "1 (Aug–Dec 2023)", course: "Engineering Physics", grade: "C+" },
  { level: 1, semester: "2 (Mar–Jun 2024)", course: "Discrete Mathematics", grade: "B-" },
  { level: 1, semester: "2 (Mar–Jun 2024)", course: "Computer Organization and Architecture", grade: "A-" },
  { level: 1, semester: "2 (Mar–Jun 2024)", course: "Multi-Variable Calculus", grade: "C+" },
  { level: 1, semester: "2 (Mar–Jun 2024)", course: "Introduction to Manufacturing Processes", grade: "B" },
  { level: 2, semester: "1 (Aug–Dec 2024)", course: "Fundamentals of Engineering, Electromagnetics and Semiconductors", grade: "B+" },
  { level: 2, semester: "1 (Aug–Dec 2024)", course: "Digital Electronics and Logic Design", grade: "C+" },
  { level: 2, semester: "1 (Aug–Dec 2024)", course: "Engineering Numerical Analysis and Modelling", grade: "B-" },
  { level: 2, semester: "1 (Aug–Dec 2024)", course: "Engineering Design Principles", grade: "A-" },
  { level: 2, semester: "2 (Mar–Jun 2025)", course: "Microprocessors and Microcontrollers Interfacing", grade: "C-" },
  { level: 2, semester: "2 (Mar–Jun 2025)", course: "Object Oriented Programming", grade: "A-" },
  { level: 2, semester: "2 (Mar–Jun 2025)", course: "Data Communications and Networks", grade: "A-" },
  { level: 2, semester: "2 (Mar–Jun 2025)", course: "Instrumentation and Embedded Control", grade: "A" },
  { level: 3, semester: "1 (Aug–Dec 2025)", course: "Functional Programming", grade: "B" },
  { level: 3, semester: "1 (Aug–Dec 2025)", course: "Embedded Systems Engineering", grade: "B+" },
  { level: 3, semester: "1 (Aug–Dec 2025)", course: "Technopreneurship", grade: "B-" },
  { level: 3, semester: "1 (Aug–Dec 2025)", course: "Engineering Research Methods and Statistics", grade: "A-" },
  { level: 3, semester: "2 (Mar–Jun 2026)", course: "Data Structures and Algorithms", grade: "B+" },
  { level: 3, semester: "2 (Mar–Jun 2026)", course: "Optoelectronics and Nano-Electronics", grade: "A-" },
  { level: 3, semester: "2 (Mar–Jun 2026)", course: "Parallel Computing and Mobile Systems", grade: "A" },
  { level: 3, semester: "2 (Mar–Jun 2026)", course: "Computer Aided Engineering", grade: "C" },
];

export const gradePoints = GRADE_POINTS;

export const isTopGrade = (grade) => grade === "A" || grade === "A-";
