import { pathPages } from "./pathPages";

export const buttonText = [
  {
    text: {
      en: "Home",
      ua: "Головна",
    },
    path: "/",
  },
  {
    text: {
      en: "Books",
      ua: "Книги",
    },
    path: "/books",
  },
];

export const buttonAuthText = [
  {
    text: {
      en: "Sign up",
      ua: "Реєстрація",
    },
    path: "/signup",
  },
  {
    text: {
      en: "Sign in",
      ua: "Увійти",
    },
    path: "/signin",
  },
];

export const buttonScheduleText = [
  {
    text: {
      en: "English with Jill",
      ua: "Англійська з Джил",
    },
    path: `${pathPages.lessonsWithJill}`,
  },
];
