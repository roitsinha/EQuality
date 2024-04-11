import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  searchMd,
  sliders04,
  facebook,
  twitter,
  yourlogo,
  // github,
  pintu,
  aditi,
  rohit,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "Services",
    url: "#services",
  },
  {
    id: "2",
    title: "Features",
    url: "#features",
  },
  {
    id: "3",
    title: "Contact us",
    url: "#contact",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const EqualityServices = [
  "Easiser Preparing",
  "Best Notes",
  "Lecture referece",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const universityText =
  "Prepare Semesterws Smartly with EQuality and focus on skills rather than Semester";

export const university = [
  {
    id: "0",
    title: "Premium Notes",
    text: universityText,
  },
  {
    id: "1",
    title: "Smart Preparation",
  },
  {
    id: "2",
    title: "Refers to the best Lectures",
  },
];

export const benefits = [
  {
    id: "0",
    title: "Prepare Easily",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Notes",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Lectures",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "3",
    title: "Fast Preparation",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Doubt Solution",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve Marks",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/?lang=en",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/",
  },
  // {
  //   id: "3",
  //   title: "Github",
  //   iconUrl: github,
  //   url: "https://www.instagram.com/",
  // },

  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569849%7Cb%7Cfacebook%7C&placement=&creative=589460569849&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9153244%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=CjwKCAjwtqmwBhBVEiwAL-WAYfaeEm73nMQLYonGHfTOnC4w5uIDfcNfuXzB0ey8Cj880LrL5DN2vxoCE3oQAvD_BwE",
  },
];
// constants/index.js
export const universityContent = [
  {
    id: 1,
    title: "MAKAUT",
    text: "Maulana Abul Kalam Azad University of Technology",
  },
  {
    id: 2,
    title: "CBSE",
    text: "Central Board of Secondary Education",
  },
  // Add more universities here
];

export const branchContent = [
  {
    id: 1,
    title: "CSE",
    university: "MAKAUT",
  },
  {
    id: 2,
    title: "ECE",
    university: "MAKAUT",
  },
  {
    id: 3,
    title: "Branch 1",
    university: "CBSE",
  },
  {
    id: 4,
    title: "Sahi hai",
    university: "CBSE",
  },
  // Add more branches here
];

export const subjectContent = [
  {
    id: 1,
    title: "Maths",
    university: "MAKAUT",
    branch: "CSE",
  },
  {
    id: 2,
    title: "English",
    university: "MAKAUT",
    branch: "CSE",
  },
  {
    id: 3,
    title: "Sanskrit",
    university: "CBSE",
    branch: "Branch 1",
  },
  {
    id: 4,
    title: "Physics",
    university: "Sahi hai",
    branch: "CBSE ",
  },
  // Add more subjects here
];

export const teamSocials = [
  {
    id: 1,
    name: "Aditi Kumari",
    imageUrl: aditi,
    jobTitle: "Software Engineer",
    description: "Description",
    social: [
      { title: "Twitter", iconUrl: twitter, url: "twitter.com/founder1" },
      { title: "Facebook", iconUrl: facebook, url: "facebook.com/founder1" },
      { title: "LinkedIn", iconUrl: twitter, url: "linkedin.com/founder1" },
    ],
  },
  {
    id: 2,
    name: "Pintu Kumar Ram",
    imageUrl: pintu,
    jobTitle: "Frontend Developer",
    description: "Description 1",
    social: [
      { title: "Twitter", iconUrl: twitter, url: "twitter.com/founder1" },
      { title: "Facebook", iconUrl: facebook, url: "facebook.com/founder1" },
      { title: "LinkedIn", iconUrl: twitter, url: "linkedin.com/founder1" },
    ],
  },
  {
    id: 3,
    name: "Rohit Sinha",
    imageUrl: rohit,
    jobTitle: "UX Designer",
    description: "Description 1",
    social: [
      { title: "Twitter", iconUrl: twitter, url: "twitter.com/founder1" },
      { title: "Facebook", iconUrl: facebook, url: "facebook.com/founder1" },
      { title: "LinkedIn", iconUrl: twitter, url: "linkedin.com/founder1" },
    ],
  },
];
