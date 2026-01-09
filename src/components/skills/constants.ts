const getAge = (birthYear: number, birthMonth: number) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // getMonth() is 0-indexed
  const age =
    currentMonth >= birthMonth
      ? currentYear - birthYear
      : currentYear - birthYear - 1;
  return `${age} years old`;
};

export const SKILLS = [
  {
    title: "Personal Information",
    skills: [
      {
        label: "Name",
        value: "Kathia Romero Paredes Castillo",
      },
      {
        label: "Age",
        value: getAge(1994, 11),
      },
      {
        label: "Location",
        value: "Mexico, CDMX",
      },
      {
        label: "Languages",
        value: "Spanish native / Advanced English",
      },
    ],
  },
  {
    title: "Work Experience",
    skills: [
      {
        label: "Pico Love",
        value: "2021 - 2023",
      },
      {
        label: "Trender",
        value: "2020 - 2021",
      },
      {
        label: "Ferrer",
        value: "2019 - 2020",
      },
      {
        label: "Carambola",
        value: "2018 - 2019",
      },
      {
        label: "BBDO",
        value: "2017 - 2018",
      },
      {
        label: "Government of Mexico City",
        value: "2014 - 2017",
      },
    ],
  },
  {
    title: "Experience",
    skills: [
      {
        label: "Creative concepts",
        value: "",
      },
      {
        label: "Idea brainstorming",
        value: "",
      },
      {
        label: "Content calendars",
        value: "",
      },
      {
        label: "Shooting planning",
        value: "",
      },
      {
        label: "Shooting direction",
        value: "",
      },
      {
        label: "Photography",
        value: "",
      },
      {
        label: "Photo correction",
        value: "",
      },
      {
        label: "Digital strategy creation",
        value: "",
      },
      {
        label: "Creative direction",
        value: "",
      },
      {
        label: "Tagline writing",
        value: "",
      },
      {
        label: "Leadership in creative projects",
        value: "",
      },
      {
        label: "Paid media campaigns",
        value: "",
      },
    ],
  },
  {
    title: "Skills",
    skills: [
      {
        label: "Leadership",
        value: "",
      },
      {
        label: "Storytelling",
        value: "",
      },
      {
        label: "Conceptual thinking",
        value: "",
      },
      {
        label: "Digital content",
        value: "",
      },
      {
        label: "Creative direction",
        value: "",
      },
    ],
  },
  {
    title: "Education",
    skills: [
      {
        label: "Diploma in After Effects - Edu Mac",
        value: "2022 - 2022",
      },
      {
        label: "Diploma in Video Editing - Edu Mac",
        value: "2021 - 2021",
      },
      {
        label: "Diploma in Photography - Edu Mac",
        value: "2020 - 2020",
      },
      {
        label: "Diploma in Graphic Design - Edu Mac",
        value: "2019 - 2019",
      },
      {
        label: "Diploma in Product Photography - Amerike",
        value: "2018 - 2018",
      },
      {
        label: "Bachelor’s Degree in Advertising - Amerike",
        value: "2014 - 2017",
      },
    ],
  },
];
