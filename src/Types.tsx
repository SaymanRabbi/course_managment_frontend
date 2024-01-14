export interface User {
  name?: string;
  email?: string;
  courses?: string[];
  quizs?: string[];
  role?: string;
  activeDevice?: string[];
  isVerified?: boolean;
  token?: string;
  _id?: string;
}
