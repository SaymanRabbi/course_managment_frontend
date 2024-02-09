import { MdQuiz } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { LuUser } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
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
interface SidebarInterface {
  name: string;
  icon: JSX.Element;
  link: string;
}
export const SideBaritem: SidebarInterface[] = [
  {
    name: "Dashboard",
    icon: <RxDashboard />,
    link: "/dashboard",
  },
  {
    name: "Profile",
    icon: <LuUser />,
    link: "/dashboard/profile",
  },
  {
    name: "Message",
    icon: <FaRegMessage />,
    link: "/dashboard/message",
  },
  {
    name: "Enrolled Courses",
    icon: <FaRegBookmark />,
    link: "/dashboard/enrolled-courses",
  },

  {
    name: "Reviews",
    icon: <FaRegStar />,
    link: "/dashboard/reviews",
  },
  {
    name: "My Quiz Attempts",
    icon: <MdQuiz />,
    link: "/dashboard/quiz",
  },
  {
    name: "My Assignments",
    icon: <MdAssignment />,
    link: "/dashboard/assignments",
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline />,
    link: "/dashboard/setting",
  },
  {
    name: "Logout",
    icon: <FiLogOut />,
    link: "/logout",
  },
];
