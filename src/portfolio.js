/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Praveen Challa",
  title: "Hi all, I'm Praveen",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/praveenarjun",
  linkedin: "https://www.linkedin.com/in/praveen-challa-6043a3276/",
  gmail: "sreepraveenchalla@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Azure "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css5",
      fontAwesomeClassname: "fab fa-css-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },

    {
      skillName: "spring",
      fontAwesomeClassname: "fas fa-leaf"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Inti International University",
      logo: require("./assets/images/inti-international-university-malaysia-logo.webp"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2025 - August 2025",
      desc: "Participated in the research on Real-Time Sports Analytics for Basketball Using YOLO and OpenCV An AI‑Powered Computer Vision System and published 3 papers.",
      descBullets: [
        "Selected as Semester Exchange program and presented research findings at an international conference.",
        "Work Under professor Dr. Zeyad Ahmed on Big Data And Artificial Intelligence",
        "Got 3.2/4 CGPA on First Semester on 20 credits",
        "Got 3.8/4 CGPA on Short Semester considered as college top 10"
      ]
    },
    {
      schoolName: "Bennett University",
      logo: require("./assets/images/bennttlogo.webp"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2022 - August 2026",
      desc: "Selected for Scholarship Program upto 50% of total Fees and continued to excel in academics. every time more than 9/10 CGPA",
      descBullets: ["Participated And Published Journal in Spinger and IEEE On EEG Signals and Emotion Detection Using brain Signals",
        "Participated in Hackathons and got 1st Prize in Hackathon conducted by Bennett University",
        "Got 8.4/10 CGPA on First Semester on 20 credits",
        "Got 9.2/10 CGPA on Second Semester on 20 credits",
        "Got 9.3/10 CGPA on Third Semester on 20 credits",
        "Got 9.8/10 CGPA on Fourth Semester on 20 credits",
        "Got 8.7/10 CGPA on Fourth Semester on 20 credits",
        "Selected for Semester Exchange program and presented research findings at an international conference and continued study in Malaysia",
      ],
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
     {
      role: "Research Intern",
      company: "Georgia Tech",
      companylogo: require("./assets/images/Georgia-Institute-of-Technology-Seal-Logo.webp"),
      date: "May 2017 – May 2018",
      desc: "Georgia Institute of Technology Atlanta, USA Working Under Dr.Vijay Madisetti",
       descBullets: [
        "Working onsite in Atlanta, collaborating with a team of researchers.",
        "Working on Image Generation and Improving Bias Issue in image generation",
        "Assigned as J1 Research Visiting Scholar visa by USA Government"
      ]
    },
    {
      role: "FrontEnd Engineer Intern",
      company: "InQuantum AI",
      companylogo: require("./assets/images/inquanutum.png"),
      date: "May 2025 – August 2025",
      desc: "AI Tech Solution Company In Malaysia",
      descBullets: [
        "Working in Frontend team in making web application with perfect techstack like nextjs,hooks ",
        "Collaborating with backend team to integrate APIs"
      ]
    },
   
    {
      role: "Machine Learning Intern",
      company: "1stop IIT Delhi",
      companylogo: require("./assets/images/1.stop-IIt Delhi.png"),
      date: "april 2023 – july 2023",
      desc: "A Machine learning club by IIT Delhi",
      descBullets: [
        "Worked on various machine learning projects.",
        "Collaborated with other interns to improve model accuracy.",
        "Worked On Self Driving Car Project using computer vision and with prebuild Media pipe Model by Google "
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/encryptic.png"),
      projectName: "Encryptic",
      projectDesc: "Work on Machine learning algorithm for security bridges and advance algorithm ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.encryptic.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/GSSOC.png"),
      projectName: "GSSOC",
      projectDesc: "A Open Source Community where many companies collaborate",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gssoc.girlscript.tech/#sponsor"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Practitioner Certificate",
      subtitle:
        "College top performer and only 3 people got 897/1000 in AWS Cloud Certification",
      image: require("./assets/images/aws certificate.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/f8d530a7-36f6-45d9-ac65-33dd996232c6/public_url"
        },
        {
          name: "Award Letter",
          url: "https://www.credly.com/badges/f8d530a7-36f6-45d9-ac65-33dd996232c6/public_url"
        },
        {
          name: "AWS Certification Profile",
          url: "https://www.credly.com/users/sree-praveen-challa/edit#credly"
        }
      ]
    },
    {
      title: "Oracle Cloud Infrastructure generative AI",
      subtitle:
        "Scholarship and Sponsership by Oracle cloud To complete the exam",
      image: require("./assets/images/oracle image .png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Oracle Certification Professional",
          url: "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC5163895&trackId=OCI2024GAIOCP&key=ec4082d9a9fcd675538bfcbd93ca8f40e2b09f07"
        }
      ]
    },

    {
      title: "IBM Certified Data Engineer",
      subtitle: "Completed Certifcation from BIG Data By IBM for Data Engineering and Data Scientist",
      image: require("./assets/images/IBM_logo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/certificate/QX910OB5CID2"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Research papers ",
  subtitle:
    "With Love for Developing cool stuff, I love to find Solution and try to prove my work so that it help to next generation ",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://docs.google.com/document/d/1Dyf_jK0O-O8aznzWbeggQaVadej_2QA0zaehkyUBfXQ/edit?usp=sharing",
      title: "Recommendation to Predict the next move of a Player",
      description:
        "real-time basketball analytics system using YOLOv5, OpenCV, and AI-powered computer vision to analyze player and ball dynamics from video sources."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Tourist Blogs 🏖️",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "A page which shows malaysian beauties",
      subtitle: "A Business Analytic Project Where publishing a blob doing analytics in google analytics",
      slides_url: "https://clouthing.wordpress.com/?_gl=1*1c54my8*_gcl_au*OTI5NDU1NjgzLjE3NTU1OTk0OTA.#",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory-----e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me! 📞"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 6301796779",
  email_address: "sreepraveenchalla@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
