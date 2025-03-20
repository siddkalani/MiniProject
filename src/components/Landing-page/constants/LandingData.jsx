// import { BotMessageSquare } from "lucide-react";
// import { BatteryCharging } from "lucide-react";
// import { Fingerprint } from "lucide-react";
// import { ShieldHalf } from "lucide-react";
// import { PlugZap } from "lucide-react";
import { GlobeLock , UserRound,MessagesSquare ,LayoutPanelLeft , Medal,FolderKanban, Search } from "lucide-react";

export const navItems = [
  { label: "Intro", href: "#I" },
  { label: "New", href: "#N" },
  { label: "Story", href: "#S" },
  { label: "Features", href: "#F" },
];
export const features = [
  {
    icon: <MessagesSquare />,
    text: "Communication Tool",
    description:
      "Users can engage in real-time discussions, ask questions, share code snippets, and provide feedback on each other's projects.",
  },
  {
    icon: <UserRound />,
    text: "User Profiles",
    description:
      "Users register on the platform and create profiles highlighting their coding skills, experience level, and areas of expertise. They can upload their resume or portfolio to showcase their work.",
  },
  {
    icon: <Search  />,
    text: "Search and Discovery Features",
    description:
      "Users can search for other developers based on specific criteria such as programming languages, project experience, location, availability, and more.",
  },
  {
    icon: <FolderKanban />, 
    text: "Project Collaboration",
    description:
      "Users can form teams or join existing projects based on their interests and skill sets.",
  },
  {
    icon: <Medal />,
    text: "Contests",
    description:
      "Users can participate in coding competitions, quiz, and compare among themselves to accelerate their learning journey.",
  },
  {
    icon: <LayoutPanelLeft />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Skill-Based Leaderboard",
    description:
      "Ranking users based on their proficiency in specific skills or technologies, providing recognition to those who excel in certain areas.",
  },
  {
    title: "Top Contributors",
    description:
      "Highlighting users who have made significant contributions to the platform, such as posting helpful content, answering questions, or sharing valuable resources.",
  },
  {
    title: "Progress Tracking",
    description:
      "Allowing users to track their own progress over time and compare their achievements with others on the leaderboard, motivating them to set and achieve goals.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
