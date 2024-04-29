import Cookies from "js-cookie";
import { create } from "zustand";
import { User } from "../Types";
interface UserStoreState {
  tempUser: any;
  allusers: any;
  user: User | null;
  setUserData: (user: User) => void;
  isLoading: boolean;
  serverError: any;
  createUser: (user: User) => Promise<void>;
  getUser: (user: User) => Promise<void>;
  logout: () => void;
  success: null;
  messages: string;
  verifyToken: (token: string) => Promise<void>;
  clearMessages: () => void;
  passwordReset: (email: string) => Promise<void>;
  code: string;
  confirmPasswordReset: (formData: any) => Promise<void>;
  courses: any;
  getCourses: () => Promise<void>;
  token: string;
  courseId: string;
  quiz: any;
  getQuiz: (id: any, quizID: any, token: any) => Promise<void>;
  updateQuiz: (
    id: any,
    quizID: any,
    token: any,
    score: any,
    submitAnswerobg: any,
    title: any,
    quizLength: any
  ) => Promise<void>;
  updateUserProfile: (token: any, data: any) => Promise<void>;
  getUserByToken: () => Promise<void>;
  updateProfileProgress: (lessonId: any, title: any) => Promise<void>;
  addModule: (module: any) => void;
  getAllUsers: () => Promise<void>;
  makeAdmin: (id: any, role: string) => Promise<void>;
  changeImage: (image: any) => void;
  Notification: [];
  getNotification: () => Promise<void>;
  addAssignment: (assignment: any) => void;
  insTructor: any;
  getInstructor: (id: any) => Promise<void>;
  createNotification: (text: any) => void;
  assignments: any;
  getAssignmentswithID: () => void;
  allAssignments: any;
  getAllAssignments: () => void;
  updateAssignmentMarks: (assignmentId: any, marks: any) => void;
  leaderBoard: [];
  getLeaderBoard: () => void;
  RemoveUser: (id: any) => void;
}
export const useUserStore = create<UserStoreState>((set) => ({
  allusers: [],
  tempUser: [],
  userMessages: [],
  leaderBoard: [],
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user") as string) : null,
  isLoading: false,
  conversations: [],
  serverError: null,
  success: null,
  messages: "",
  courses: [],
  code: "",
  Notification: [],
  assignments: [],
  allAssignments: [],
  token: Cookies.get("token") || "",
  courseId: "",
  quiz: [],
  insTructor: [],
  updateQuiz: async (
    token,
    quizID,
    score,
    courseId,
    submitAnswerobg,
    title,
    quizLength
  ) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/update-quiz-score/${quizID}`;
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          courseId: courseId,
          score: score,
          submitAnswerobg,
          title,
          quizLength,
        }),
      });
      const data = await resp.json();
      if (data) {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
        Cookies.set("quiz", JSON.stringify(data.data));
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },

  createUser: async (userData) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/register`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await resp.json();
      if (data) {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  getUser: async (user: User) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/login`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await resp.json();
      if (data) {
        set({
          user: data.data,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
          token: data.token,
        });
        Cookies.set("token", data.token);
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  logout: () => set({ user: null }),
  verifyToken: async (token: string) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/verify-email/${token}`;
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      if (data?.status && data.message === "User verified successfully") {
        set((user: any) => {
          return {
            user: {
              ...user,
              user: {
                ...data.data.user,
                isVerified: true,
              },
            },
            isLoading: false,
            success: data?.status,
            messages: data.message,
            serverError: null,
          };
        });
      }
      if (!data?.status && data.message === "User already verified") {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
      if (!data?.status && data.message === "Invalid token") {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  clearMessages: () =>
    set({ messages: "", serverError: null, success: null, isLoading: false }),
  passwordReset: async (email: string) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/forgot-password/${email}`;
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      if (data) {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
          code: data.code,
          tempUser: data.user,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  confirmPasswordReset: async (formData: any) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/changes-password`;
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await resp.json();
      if (data) {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  getCourses: async () => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/course/getCourse`;
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      if (data) {
        set({
          courses: data.data,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
          courseId: data.data[0]._id,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  getQuiz: async (id: any, quizID: any, token) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/course/getQuiz/${id}`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ courseid: quizID }),
      });
      const data = await resp.json();
      if (data) {
        set({
          quiz: data.data,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
        Cookies.set("quiz", JSON.stringify(data.data));
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  setUserData: (user: User) => set({ user }),
  updateUserProfile: async (token, data) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/updateprofile`;
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const res = await resp.json();
      if (res) {
        set({
          user: res.data.user,
          isLoading: false,
          success: res?.status,
          messages: res.message,
          serverError: null,
        });
        Cookies.set("user", JSON.stringify(res.data));
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  getUserByToken: async () => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });

      const token = Cookies.get("token");
      if (!token) return set({ isLoading: false });
      const url = `http://localhost:5000/api/v1/user/login/token`;
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      const data = await resp.json();
      if (data) {
        set({
          user: data.data,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  updateProfileProgress: async (lessonId, title) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });

      const token = Cookies.get("token");
      const url = `http://localhost:5000/api/v1/user/profile/progress`;
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ lessonId, title }),
      });
      const data = await resp.json();
      if (data) {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  addModule: async (ModuleData) => {
    try {
      const url = `http://localhost:5000/api/v1/course/updateCourse/660064f53d5fc7b5c8a5267a`;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(ModuleData),
      });
      const data = await response.json();
      if (data) {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  getAllUsers: async () => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/getallusers`;
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      const data = await resp.json();
      if (data) {
        set({
          allusers: data.data,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  makeAdmin: async (id, role) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/update/${id}`;
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify({ role }),
      });
      const data = await resp.json();
      if (data) {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  changeImage: async (imageUrl) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/updateImgurl`;
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify({ imageUrl }),
      });
      const data = await resp.json();
      if (data) {
        set({
          user: data.data.user,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
        Cookies.set("user", JSON.stringify(data.data));
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  getNotification: async () => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/course/getNotification`;
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      const data = await resp.json();
      if (data) {
        set({
          Notification: data.data,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  addAssignment: async (assignment) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/course/assignment`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(assignment),
      });
      const data = await resp.json();
      if (data) {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },

  getInstructor: async (id) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/instructorInfo/${id}`;
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();

      if (data) {
        set({
          insTructor: data.data,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  createNotification: async (text) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/course/newNotification`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify({ text }),
      });
      const data = await resp.json();

      if (data) {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  getAssignmentswithID: async () => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/course/getAssignments`;
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      const data = await resp.json();
      if (data) {
        set({
          assignments: data.data,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  getAllAssignments: async () => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/course/AllAssignments`;
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      const data = await resp.json();
      if (data) {
        set({
          allAssignments: data?.data,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  updateAssignmentMarks: async (assignmentId, datas) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/course/updateAssignmentMark/${assignmentId}`;
      const resp = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify({ datas }),
      });
      const data = await resp.json();
      if (data) {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  getLeaderBoard: async () => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/leaderboard`;
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      const data = await resp.json();
      if (data) {
        set({
          leaderBoard: data.data,
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
  RemoveUser: async (id) => {
    try {
      set({ isLoading: true, success: null, messages: "", serverError: null });
      const url = `http://localhost:5000/api/v1/user/remove/${id}`;
      const resp = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      const data = await resp.json();
      if (data) {
        set({
          isLoading: false,
          success: data?.status,
          messages: data.message,
          serverError: null,
        });
      }
    } catch (error: any) {
      set({ serverError: error?.message, isLoading: false });
    }
  },
}));
