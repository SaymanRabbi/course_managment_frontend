export interface User {
  name?: string;
  email?: string;
  courses?: string[];
  quizs?:
    | [
        {
          title: string;
          quizLength: number;
          score: number;
        }
      ]
    | undefined;
  role?: string;
  activeDevice?: string[];
  isVerified?: boolean;
  token?: string;
  _id?: string;
  lastname?: string;
  UserName?: string;
  PhoneNumber?: string;
  ExpartIn?: string;
  Biography?: string;
  displayName?: string;
}
export interface Video {
  title: string;
  type: string;
  url: string;
  isWatched: boolean;
}
interface quizOptions {
  id: number;
  text: string;
  answer: boolean;
}
interface QuizQuestion {
  id: number;
  options: quizOptions[];
  title: string;
}
interface QuizDetails {
  title: string;
  questions: QuizQuestion[];
}
export interface Quiz {
  title: string;
  type: string;
  iswatched: boolean;
  quizDetails: QuizDetails[];
}
export interface Assignment {
  title: string;
  type: string;
  isWatched: boolean;
  assignmentDetails: {
    deadline: string;
    instructions: string;
  };
}

export interface FormData {
  title: string;
  lessons: [
    | {
        title: string;
        type: string;
        url: string;
        isWatched: boolean;
      }
    | {
        title: string;
        type: string;
        iswatched: boolean;
        quizDetails: QuizDetails[];
      }
    | {
        title: string;
        type: string;
        isWatched: boolean;
        assignmentDetails: {
          deadline: string;
          instructions: string;
        };
      }
  ];
}
