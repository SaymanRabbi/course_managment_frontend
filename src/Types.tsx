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
