import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home', id: '#home'},
  { href: '/#about_us', key: 'about_us', label: 'About Us', id: '#about_us' },
  { href: '/#services', key: 'services', label: 'Services', id: '#services' },
  { href: '/#project', key: 'project', label: 'Projects', id: '#project' },
  { href: '/#team', key: 'team', label: 'Team', id: '#team' },
  { href: '/#contact_us', key: 'contact_us', label: 'Contact Us', id: '#contact_us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Washlink',
    icon: '/map.svg',
    variant: 'green',
    description:
      'WashLink is a mobile application designed to facilitate users in accessing laundry services through nearby washing machines. The platform offers users the convenience of initiating laundry services either through a dedicated short code or via the user-friendly mobile application. With WashLink, individuals can easily schedule and avail laundry services with a seamless and efficient experience.',
  },
  {
    title: 'MichuGojo',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "MichuGojo is a mobile application that streamlines the process of renting homes. It empowers users to conveniently browse and select their desired residence from a curated collection of available properties. Property owners can effortlessly showcase their homes by uploading images, providing a user-friendly platform for seamless home rental experiences.",
  },
];

// FOOTER SECTION
// constants.ts

export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      { text: 'About MichuTech', destination: '/pages/about-home' },
      { text: 'Privacy Policy', destination: '/pages/privacy-policy' },
      { text: 'Code of Conducts', destination: '/pages/code-conduct' },
    ],
  },
  {
    title: 'Our Community',
    links: [
      { text: 'Community and Mentors', destination: '/pages/community' }
    ],
  },
];


export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Phone', value: '+251-98-616-4444/ +251-98-626-4444' },
    { label: 'Email', value: 'michutechitsolutionsplc@gmail.com' },
  ],
};

export const SOCIALS = {
  title: 'Socials',
  links: [
    { url: '/facebook.svg', destination: '/www.facebook.com' },
    { url: '/instagram.svg', destination: '/www.instagram.com/michutech_' },
    { url: '/twitter.svg', destination: '/www.twitter.com' },
    { url: '/linkedIn.png', destination: '/linkedin.com/company/michutech-it-solutions' },
  ],
};

export const partners = [
  { id: 1, name: 'Arki Sport Betting', logoUrl: '/arki.jpeg' },
  { id: 2, name: 'Wings Education and Media', logoUrl: '/wings.gif' },
  { id: 3, name: 'Washlink, Wear Clean', logoUrl: '/wLink.png' },
  { id: 4, name: 'Yer Tech', logoUrl: '/yerTech.jpg' },
];

export const TEAM_MEMBERS = [
  { 
    id: 1, name: 'Falema Garedow',
    fullName: 'Falema Garedow Herpa',
     role: 'CEO, Scientific Director',
    imageUrl: '/FelemaCe.jpeg',
    responsibility:"Co-founder and CEO",
    Experience: [
     "Lecturer of Computing and Informatics at Haramaya University",
     "Manager at Arki Virtual Sport Betting",
     "Freelance Developer and Translator",
     "Volunteer at US Alumni Association, TechCamp Addis 2022",
     "Researcher and founding member of Internet Society, Ethiopia Chapter"
    ],
    Education:[
      "MA in Leadership and Management at Ethiopian Graduate School of Theology",
      "MSc in Computer Science and Engineering, Cloud Computing Special Interest Group, Adama Science and Technology University.",
      "Bsc degree in Information Science, Jimma Institute of Technology",
    ]
     },
  {
     id: 2, name: 'Gemechis Sheleme', 
     fullName: 'Gemechis Sheleme Kabeta',
     role: 'Chief Financial and HR Officer (CFO)',
    imageUrl: '/GemechisS.jpeg',
    responsibility:"Co-founder and CFO, Strategic Advisor",
    Experience: [
     "Teacher- Moral and character building at School of Nation International School. Administrative assistance, Coordinator of extra- curriculum activities and member of Curriculum Design team ",
      "Volunteer Researcher at SOPHOS Africa, Ethiopia ",
    ],
    Education:[
      "MA Leadership and Management at Ethiopian Graduate School of Theology",
      "Bsc. Mechanical Design from Addis Ababa Science and Technology University",
    ]
  },
  { 
    id: 3, name: 'Dr.Samuel Tesfaye',
    fullName: 'Dr. Samuel Tesfaye, MD, MPH Candidate',
    role: 'Board Member',
    imageUrl: '/Samuel.jpg',
    responsibility:"Board Member",
    Experience: [
    "Former General Practitioner Head of emergency department and coordinator of emergency response team at primary Ginchi Hospital, Ethiopia",
    "Head of Pediatrics and child health department and nutrition program coordinator at Bisidimo General Hospital and Leprosy Center",
    "Clinical Practice and Nutrition Programs"
  ],
  Education:[
    "MPH Candidate at St. Paul Millennium Medical College",
    "Dr samuel Tesfaye medical doctor and mph (candidate at Haramaya university)",
    "A family medicine resident at st Paul millennium Medical College, certified Tot trainer of UPdated CMAM training at federal and regional level.",
    "Medical Doctor at Bahir Dar University",
  ]
 },
  { 
    id: 4, 
    name: 'Nabiyat Lemma ', 
    fullName: 'Nebiyat Lema Tuji',
    role: 'Chief Marketing and Promotion  Officer', 
    imageUrl: 'Nebyat.png',
    responsibility:"Chief Marketing and Promotion  Officer",
    Experience: [
     "Biomedical Service Manager at Bilham Pharmaceuticals PLC",
     "Technical Director at Yunabek Trading PLC",
     "CoFounder and Cheif Biomedical Engineer at YER Tech Engineering Solutions PLC"
    ],
    Education:[
      "MSc, International Business at Addis Ababa University",
      "BCS, Biomedical Engineering at Jimma Institute of Technology",
      "BSC, Management at Jimma University(Distance)",
    ]
  },
  { 
    id: 5, name: 'Belay Birhanu',
    fullName: 'Belay Birhanu Gibina',
    role: 'CTO, Product Manager', 
    imageUrl: '/Belay.jpg',
    responsibility:"CTO, Product Manager",
    Experience: [
      "Front-end Developer, 10 Academy, On-Site - June 2023 - Present",
      "Full-stack Developer, Highlighted Personal Projects · Full-time,  Remote - Oct 2022 - Aug 2023",
      "Transcriber/Data Entry Clerk /Proofreader/Translator, Freelance (Self employed), Remote - May 2023 - Nov 2023",
      "Web Developer, Freelancer, Harar, Ethiopia - January 2019 - June 2021 ",
     "Assistant Lecturer, Computing and Informatics at Haramaya University - September 2019 - October 2021",
    ],
    Education:[
      "Full-stack Development, Microverse · Full-time,  Remote - Oct 2023 - May 2023",
      "MSc in Computer Science and Engineering, Artificial Intelligence Interest Group, Adama Science and Technology University, October 2021 - June 2023",
      "Bsc degree in Computer Science and Engineering, Mekelle Institute of Technology, October 2014 - June 2018"
    ]
   },
  {
    id: 6, name: 'Elsa Abira', 
    fullName: 'Elsa Abira',
    role: 'Sales and Marketing', 
    imageUrl: '/elsa.jpeg',
    responsibility:"Sales and Marketing",
    Experience: [
      "Sales and Marketing Manager",
      ],
      Education:[
        "Marketing Management"
      ]
  },
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Mr. Yonatan Wube',
    img:'/Yonatan.jpeg',
    role: 'CEO, Arki Sport Betting',
    comment: 'MichuTech IT Solutions is a startup company founded by a team of dedicated and highly motivated young professionals. Their commitment to excellence is reflected in their diligent work ethic, consistently delivering projects on time and providing transparent progress updates as needed. I highly recommend collaborating with MichuTech for their professional and reliable services.',
  },
  {
    id: 2,
    name: 'Mr. Sisay Girma',
    img:'/sis.png',
    role: 'Project Manager, Wings Education and Media',
    comment: 'MichuTech IT Solutions stands out as a startup venture crafted by a group of driven and enthusiastic young professionals. Their diligent efforts and commitment to delivering top-notch projects are commendable. I wholeheartedly endorse collaborating with them, as they consistently meet deadlines and keep stakeholders informed of their progress at every step. Working with MichuTech is a valuable experience due to their professionalism and dedication to excellence.',
  },
];

type SocialMedia = {
  text: string;
  icon: React.ComponentType; 
  link: string;
};

type ContactItem = {
  title: string;
  subtitle: string;
  social_media: SocialMedia[];
};

type ContactData = {
  Contact: ContactItem[];
};

export const contactData: ContactData = {
  Contact: [
    {
      title: "Contact Us",
      subtitle: "GET IN TOUCH",
      social_media: [
        {
          text: "michutechitsolutionsplc@gmail.com",
          icon: GrMail,
          link: "mailto:michutechitsolutionsplc@gmail.com",
        },
        {
          text: "(+251) 98-616-4444/ (+251) 98-626-4444",
          icon: MdCall,
          link: "https://wa.me/1234567890",
        },
        {
          text: "LinkedIn",
          icon: BsLinkedin,
          link: "linkedin.com/company/michutech-it-solutions/",
        },
        {
          text: "GitHub",
          icon: BsGithub,
          link: "https://github.com/belaymit",
        },
      ],
    },
  ],
};

