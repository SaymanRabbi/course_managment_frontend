import { FaClipboard, FaRegStar } from "react-icons/fa";
import { FaRegBookmark, FaRegMessage } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { GiTeacher } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdAssignment, MdManageAccounts, MdQuiz } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscFileSubmodule } from "react-icons/vsc";
interface DContentinterface {
  id: number;
  name: string;
  description: string;
  isborder?: boolean;
  borderButtom?: boolean;
  borderRight?: boolean;
  borderSmall?: boolean;
}
export const DetailsContent: DContentinterface[] = [
  {
    id: 1,
    name: "150+ videos in 15 modules",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem facilis! Dolor nam quaerat nemo asperiores blanditiis non, corporis commodi.",
    isborder: true,
  },
  {
    id: 2,
    name: "151+ videos in 15 modules",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem facilis! Dolor nam quaerat nemo asperiores blanditiis non, corporis commodi.",
    borderRight: true,
    isborder: true,
  },
  {
    id: 3,
    name: "150+ videos in 15 modules",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem facilis! Dolor nam quaerat nemo asperiores blanditiis non, corporis commodi.",
  },
  {
    id: 4,
    name: "150+ videos in 15 modules",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem facilis! Dolor nam quaerat nemo asperiores blanditiis non, corporis commodi.",
    borderButtom: true,
    borderRight: true,
    isborder: true,
  },
  {
    id: 5,
    name: "150+ videos in 15 modules",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem facilis! Dolor nam quaerat nemo asperiores blanditiis non, corporis commodi.",
    borderButtom: true,
    isborder: true,
  },
  {
    id: 6,
    name: "150+ videos in 15 modules",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem facilis! Dolor nam quaerat nemo asperiores blanditiis non, corporis commodi.",
    borderButtom: true,
    borderRight: true,
    borderSmall: true,
  },
];
interface AccordionInterface {
  title: string;
  description: string;
}

export const accordionsContent: AccordionInterface[] = [
  {
    title: "What people want to know?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quaerat porro, temporibus aliquid dolor nam ullam, maxime quas nulla enim reprehenderit consequuntur dolorem nesciunt, amet itaque ad?",
  },
  {
    title: "What people want to know?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quaerat porro, temporibus aliquid dolor nam ullam, maxime quas nulla enim reprehenderit consequuntur dolorem nesciunt, amet itaque ad?",
  },
  {
    title: "What people want to know?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quaerat porro, temporibus aliquid dolor nam ullam, maxime quas nulla enim reprehenderit consequuntur dolorem nesciunt, amet itaque ad?",
  },
  {
    title: "What people want to know?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quaerat porro, temporibus aliquid dolor nam ullam, maxime quas nulla enim reprehenderit consequuntur dolorem nesciunt, amet itaque ad?",
  },
];

interface feedbackDataInterface {
  name: string;
  enrolled: number;
  rating: number;
}

export const feedbackData: feedbackDataInterface[] = [
  {
    name: "Javascript",
    enrolled: 1100,
    rating: 4.5,
  },
  {
    name: "PHP",
    enrolled: 700,
    rating: 5,
  },
  {
    name: "Python",
    enrolled: 1200,
    rating: 4.5,
  },
  {
    name: "Java",
    enrolled: 900,
    rating: 4,
  },
];
interface CourseDataInterface {
  registrationDate: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  expart: string;
  biography: string;
}
export const ProfileData: CourseDataInterface[] = [
  {
    registrationDate: "20, January 2024 9:00 PM",
    firstName: "Sayman",
    lastName: "Rabbi",
    userName: "sayman009",
    email: "sayman@gmail.com",
    phoneNumber: "01700000000",
    expart: "Web Developer",
    biography:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, voluptates?",
  },
];
interface ReviewDataInterface {
  name: string;
  rating: number;
}
export const ReviewData: ReviewDataInterface[] = [
  {
    name: "How to Write Your First Novel",
    rating: 4,
  },
  {
    name: "How to Web Design",
    rating: 5,
  },
  { name: "English", rating: 4 },
];

interface Messageinterface {
  id: number;
  img: string;
  name: string;
  sms: string;
  time: string;
}
export const Messages: Messageinterface[] = [
  {
    id: 1,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    sms: "How are you?",
    time: "4:15 pm",
  },
  {
    id: 2,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    sms: "How are you?",
    time: "4:15 pm",
  },
  {
    id: 3,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    sms: "How are you?",
    time: "4:15 pm",
  },
  {
    id: 4,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    sms: "How are you?",
    time: "4:15 pm",
  },
  {
    id: 5,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    sms: "How are you?",
    time: "4:15 pm",
  },
  {
    id: 6,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    sms: "How are you?",
    time: "4:15 pm",
  },
  {
    id: 7,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    sms: "How are you?",
    time: "4:15 pm",
  },
];

interface QuizDataInterface {
  date: string;
  des: string;
  name: string;
  qus: number;
  tm: number;
  ca: number;
  res: string;
}
export const QuizData: QuizDataInterface[] = [
  {
    date: "December 26, 2023",
    des: "Write a on yourself using the 5",
    name: "Student: Mice Jerry",
    qus: 4,
    tm: 8,
    ca: 4,
    res: "cancel",
  },
  {
    date: "December 26, 2023",
    des: "Write a on yourself using the 5",
    name: "Student: Mice Jerry",
    qus: 4,
    tm: 8,
    ca: 4,
    res: "over",
  },
  {
    date: "December 26, 2023",
    des: "Write a on yourself using the 5",
    name: "Student: Mice Jerry",
    qus: 4,
    tm: 8,
    ca: 4,
    res: "pass",
  },
  {
    date: "December 26, 2023",
    des: "Write a on yourself using the 5",
    name: "Student: Mice Jerry",
    qus: 4,
    tm: 8,
    ca: 4,
    res: "pass",
  },
];
interface AssignmentsDataInterface {
  title: string;
  courseName: string;
  marks: number;
  submit: number;
}
export const AssignmentsData: AssignmentsDataInterface[] = [
  {
    title: "Write a the 5",
    courseName: "Fundamentals",
    marks: 60,
    submit: 4,
  },
  {
    title: "Write a the 5",
    courseName: "Fundamentals",
    marks: 60,
    submit: 4,
  },
  {
    title: "Write a the 5",
    courseName: "Fundamentals",
    marks: 60,
    submit: 4,
  },
  {
    title: "Write a the 5",
    courseName: "Fundamentals",
    marks: 60,
    submit: 4,
  },
];

interface popularInstructorsinterface {
  id: number;
  img: string;
  name: string;
  students: number;
  courses: number;
  reviews: number;
}
export const popularInstructors: popularInstructorsinterface[] = [
  {
    id: 1,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    students: 600,
    courses: 5,
    reviews: 5000,
  },
  {
    id: 2,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    students: 600,
    courses: 5,
    reviews: 5000,
  },
  {
    id: 3,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    students: 600,
    courses: 5,
    reviews: 5000,
  },
  {
    id: 4,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    students: 600,
    courses: 5,
    reviews: 5000,
  },
  {
    id: 5,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    students: 600,
    courses: 5,
    reviews: 5000,
  },
  {
    id: 6,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    students: 600,
    courses: 5,
    reviews: 5000,
  },
];
interface noticesinterface {
  id: number;
  img: string;
  des: string;
}
export const notices: noticesinterface[] = [
  {
    id: 1,
    img: "../../public/images/notice/notice.png",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, recusandae atque? Consectetur repellendus quibusdam, cupiditate tenetur similique nobis dicta id!",
  },
  {
    id: 2,
    img: "../../public/images/notice/notice.png",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, recusandae atque? Consectetur repellendus quibusdam, cupiditate tenetur similique nobis dicta id!",
  },
  {
    id: 3,
    img: "../../public/images/notice/notice.png",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, recusandae atque? Consectetur repellendus quibusdam, cupiditate tenetur similique nobis dicta id!",
  },
  {
    id: 4,
    img: "../../public/images/notice/notice.png",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, recusandae atque? Consectetur repellendus quibusdam, cupiditate tenetur similique nobis dicta id!",
  },
];

interface SidebarInterface {
  name: string;
  icon: JSX.Element;
  link: string;
  admin?: boolean;
  student?: boolean;
}
export const SideBaritem: SidebarInterface[] = [
  {
    name: "Dashboard",
    icon: <RxDashboard />,
    link: "/dashboard",
    student: true,
  },
  {
    name: "admin-dashboard",
    icon: <RxDashboard />,
    link: "/dashboard/admin-dashboard",
    admin: true,
  },
  {
    name: "Profile",
    icon: <LuUser />,
    link: "/dashboard/profile",
    student: true,
    admin: true,
  },
  {
    name: "Message",
    icon: <FaRegMessage />,
    link: "/dashboard/message",
    student: true,
    admin: true,
  },
  {
    name: "Enrolled Courses",
    icon: <FaRegBookmark />,
    link: "/dashboard/enrolled-courses",
    student: true,
    admin: true,
  },

  {
    name: "Reviews",
    icon: <FaRegStar />,
    link: "/dashboard/reviews",
    student: true,
    admin: true,
  },
  {
    name: "My Quiz Attempts",
    icon: <MdQuiz />,
    link: "/dashboard/quiz",
    student: true,
    admin: true,
  },
  {
    name: "My Assignments",
    icon: <MdAssignment />,
    link: "/dashboard/assignments",
    student: true,
    admin: true,
  },

  {
    name: "Popular-Instructor",
    icon: <GiTeacher />,
    link: "/dashboard/popular-instructor",
    admin: true,
  },
  {
    name: "Notice-Board",
    icon: <FaClipboard />,
    link: "/dashboard/notice-board",
    admin: true,
  },
  {
    name: "Notifications",
    icon: <IoIosNotifications />,
    link: "/dashboard/notifications",
    student: true,
    admin: true,
  },
  {
    name: "Manage-Role",
    icon: <MdManageAccounts />,
    link: "/dashboard/manageRole",
    admin: true,
  },
  {
    name: "All-Assignment",
    icon: <MdAssignment />,
    link: "/dashboard/allAssignment",
    admin: true,
  },
  {
    name: "Add Module",
    icon: <VscFileSubmodule />,
    link: "/dashboard/add-module",
    admin: true,
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline />,
    link: "/dashboard/setting",
    admin: true,
    student: true,
  },
  {
    name: "Logout",
    icon: <FiLogOut />,
    link: "/login",
  },
];
export interface IModule {
  id: number;
  name: string;
  url: string;
  itWatched?: boolean;
  type:
    | "video"
    | "quiz"
    | "assignment"
    | "text"
    | "audio"
    | "pdf"
    | "image"
    | "code"
    | "other";
}
interface IDummyData {
  id: number;
  name: string;
  module: IModule[];
}

export const dummyData: IDummyData[] = [
  {
    id: 1,
    name: "Introduction",
    module: [
      {
        id: 0,
        name: "Introduction to Python",
        url: "https://res.cloudinary.com/dnr5u3jpb/video/upload/v1704521580/mt33rqkjeqopbcslutbr.mp4",
        itWatched: false,
        type: "video",
      },
      {
        id: 1,
        name: "Its Music so relax some time",
        url: "https://res.cloudinary.com/dnr5u3jpb/video/upload/v1707495557/Untitled_Project_vd25j6.mp4",
        itWatched: false,
        type: "video",
      },
      {
        id: 2,
        name: "Paython 100 days challenge",
        url: "https://res.cloudinary.com/dnr5u3jpb/video/upload/v1707497233/049_Using_the_for_loop_with_Python_Lists_cjirlp.mp4",
        itWatched: false,
        type: "video",
      },
      {
        id: 3,
        name: "Python 100 days challenge qiuz",
        url: "",
        itWatched: false,
        type: "quiz",
      },
    ],
  },
  {
    id: 2,
    name: "Introduction",
    module: [
      {
        id: 0,
        name: "Introduction to Python",
        url: "https://res.cloudinary.com/dnr5u3jpb/video/upload/v1704521580/mt33rqkjeqopbcslutbr.mp4",
        itWatched: false,
        type: "video",
      },
      {
        id: 1,
        name: "Its Music so relax some time",
        url: "https://res.cloudinary.com/dnr5u3jpb/video/upload/v1707495557/Untitled_Project_vd25j6.mp4",
        itWatched: false,
        type: "video",
      },
      {
        id: 2,
        name: "Paython 100 days challenge",
        url: "https://res.cloudinary.com/dnr5u3jpb/video/upload/v1707497233/049_Using_the_for_loop_with_Python_Lists_cjirlp.mp4",
        itWatched: false,
        type: "video",
      },
      {
        id: 3,
        name: "Python 100 days challenge qiuz",
        url: "",
        itWatched: false,
        type: "quiz",
      },
    ],
  },
];

interface QuizItem {
  id: number;
  text: string;
  answer: boolean;
}

interface EcosystemQuestion {
  id: number;
  tittle: string;
  quiz: QuizItem[];
}

export const quizData: EcosystemQuestion[][] = [
  [
    {
      id: 0,
      tittle:
        "Who is the current President of the United States as of September 2023?",
      quiz: [
        {
          id: 1,
          text: "Joe Biden",
          answer: true,
        },
        {
          id: 2,
          text: "Donald Trump",
          answer: false,
        },
        {
          id: 3,
          text: "Hillary Clinton",
          answer: false,
        },
        {
          id: 4,
          text: " George W. Bush",
          answer: false,
        },
      ],
    },
  ],
  [
    {
      id: 1,
      tittle:
        "What is the term for a system of government in which power is held by a small group of people?",
      quiz: [
        {
          id: 1,
          text: "Democracy",
          answer: false,
        },
        {
          id: 2,
          text: "Oligarchy",
          answer: true,
        },
        {
          id: 3,
          text: "Monarchy",
          answer: false,
        },
        {
          id: 4,
          text: "Autocracy",
          answer: false,
        },
      ],
    },
  ],
  [
    {
      id: 2,
      tittle:
        "In which country did the Arab Spring movement begin in late 2010?",
      quiz: [
        {
          id: 1,
          text: "Egypt",
          answer: false,
        },
        {
          id: 2,
          text: "Tunisia",
          answer: true,
        },
        {
          id: 3,
          text: "Syria",
          answer: false,
        },
        {
          id: 4,
          text: "Saudi Arabia",
          answer: false,
        },
      ],
    },
  ],
  [
    {
      id: 3,
      tittle:
        "Which of the following is not a branch of the United States government?",
      quiz: [
        {
          id: 1,
          text: "Executive",
          answer: false,
        },
        {
          id: 2,
          text: "Legislative",
          answer: false,
        },
        {
          id: 3,
          text: "Judicial",
          answer: false,
        },
        {
          id: 4,
          text: "Parliamentary",
          answer: true,
        },
      ],
    },
  ],
  [
    {
      id: 4,
      tittle:
        "What is the term for a government ruled by a single individual with absolute power and authority?",
      quiz: [
        {
          id: 1,
          text: "Democracy",
          answer: false,
        },
        {
          id: 2,
          text: "Monarchy",
          answer: false,
        },
        {
          id: 3,
          text: "Autocracy",
          answer: true,
        },
        {
          id: 4,
          text: "Republic",
          answer: false,
        },
      ],
    },
  ],
  [
    {
      id: 5,
      tittle:
        'Who is often referred to as the "Father of Modern Political Science" and wrote "The Prince" in the 16th century?',
      quiz: [
        {
          id: 1,
          text: "Karl Marx",
          answer: false,
        },
        {
          id: 2,
          text: "John Locke",
          answer: false,
        },
        {
          id: 3,
          text: "Niccolò Machiavelli",
          answer: true,
        },
        {
          id: 4,
          text: "Thomas Hobbes",
          answer: false,
        },
      ],
    },
  ],
  [
    {
      id: 6,
      tittle: "What is the maximum number of terms a U.S. President can serve?",
      quiz: [
        {
          id: 1,
          text: "One",
          answer: false,
        },
        {
          id: 2,
          text: "Two",
          answer: true,
        },
        {
          id: 3,
          text: "Three",
          answer: false,
        },
        {
          id: 4,
          text: "Unlimited",
          answer: false,
        },
      ],
    },
  ],
];
interface recentCoursesinterface {
  id: number;
  img: string;
  courseName: string;
  insName: string;
  duration: string;
  Lesson: string;
}
export const recentCourses: recentCoursesinterface[] = [
  {
    id: 1,
    img: "../../public/images/notice/notice.png",
    courseName: "Complte Web Development Course",
    insName: "John Roe",
    Lesson: "3",
    duration: "3 hr 13 min",
  },
  {
    id: 2,
    img: "../../public/images/notice/notice.png",
    courseName: "Complte Web Development Course",
    insName: "John Roe",
    Lesson: "3",
    duration: "3 hr 13 min",
  },
  {
    id: 3,
    img: "../../public/images/notice/notice.png",
    courseName: "Complte Web Development Course",
    insName: "John Roe",
    Lesson: "3",
    duration: "3 hr 13 min",
  },
  {
    id: 4,
    img: "../../public/images/notice/notice.png",
    courseName: "Complte Web Development Course",
    insName: "John Roe",
    Lesson: "3",
    duration: "3 hr 13 min",
  },
];

interface notificationsinterface {
  id: number;
  title: string;
  time: string;
}
export const notifications: notificationsinterface[] = [
  {
    id: 1,
    title: "Password has been changed two times",
    time: "50 min ago",
  },
  {
    id: 2,
    title: "Password has been changed two times",
    time: "50 min ago",
  },
  {
    id: 3,
    title: "Password has been changed two times",
    time: "50 min ago",
  },
  {
    id: 4,
    title: "Password has been changed two times",
    time: "50 min ago",
  },
];

interface quizAdmininterface {
  id: number;
  img: string;
  courseName: string;
  insName: string;
  purchase: number;
}
export const quizAdmin: quizAdmininterface[] = [
  {
    id: 1,
    img: "../../public/images/notice/notice.png",
    courseName: "Complte Web Development Course",
    insName: "John Roe",
    purchase: 5000,
  },
  {
    id: 2,
    img: "../../public/images/notice/notice.png",
    courseName: "Complte Web Development Course",
    insName: "John Roe",
    purchase: 5000,
  },
  {
    id: 3,
    img: "../../public/images/notice/notice.png",
    courseName: "Complte Web Development Course",
    insName: "John Roe",
    purchase: 5000,
  },
  {
    id: 4,
    img: "../../public/images/notice/notice.png",
    courseName: "Complte Web Development Course",
    insName: "John Roe",
    purchase: 5000,
  },
];

interface managerolesinterface {
  id: number;
  img: string;
  name: string;
  designation: string;
}
export const manageroles: managerolesinterface[] = [
  {
    id: 1,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    designation: "Instructor",
  },
  {
    id: 2,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    designation: "Student",
  },
  {
    id: 3,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    designation: "Student",
  },
  {
    id: 4,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    designation: "Instructor",
  },
  {
    id: 5,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    designation: "Instructor",
  },
  {
    id: 6,
    img: "../../public/images/message/teacher.png",
    name: "Mr. Harby",
    designation: "Instructor",
  },
];

interface courseInfointerface {
  id: number;
  moduleNo: number;
  title: string;
  videos: string;
  assignment: string;
  quizes: string;
}
export const courseInfo: courseInfointerface[] = [
  {
    id: 1,
    moduleNo: 1,
    title: "Module-1",
    videos: "3 videos",
    assignment: "1 Assignment",
    quizes: "10 Quizes",
  },
  {
    id: 2,
    moduleNo: 2,
    title: "Module-2",
    videos: "3 videos",
    assignment: "1 Assignment",
    quizes: "10 Quizes",
  },
  {
    id: 3,
    moduleNo: 3,
    title: "Module-3",
    videos: "3 videos",
    assignment: "1 Assignment",
    quizes: "10 Quizes",
  },
];
