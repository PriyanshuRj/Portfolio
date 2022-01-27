/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Priyanshu",
  logo_name: "Pboss.js()",
  nickname: "Pboss",
  full_name: "Priyanshu Rajput",
  subTitle:
    "Full Stack Developer, Machine Learning Enthusiast 😎. Always in my learning phase.",
  resumeLink:
    "https://drive.google.com/file/d/1JSu_8fHAdzwTCdMAf5pqJv_FiOj49eIC/view?usp=sharing",
  mail: "mailto:oriyanshu011109@gmail.com",
};

const socialMediaLinks = {
  /* Social Media Link */
  github: "https://github.com/PriyanshuRj",
  linkedin: "https://www.linkedin.com/in/priyanshu-rajput-144990201/",
  gmail: "priyanshu011109@gmail.com",
  gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/priyanshu.rajput.1426",
  twitter: "https://twitter.com/PriyanshuRj01",
  instagram: "https://www.instagram.com/priyanshu_rajput_01/",
};

const skills = {
  data: [
    {
      title: "MERN Stack Development",
      fileName: "FullStackImg",
      skills: [
        "🌐 Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "🌐 Building responsive website front end using ReactJS",
        "🌐 Developing mobile applications using Flutter and Android",
        "🌐 Creating application backend in Node, Express & Flask",
        "🌐 Integration of third party services such as Firebase/ AWS / Digital Ocean"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
       
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "🤖 Experience working on multiple Machine Learning and Deep Learning Models",
        "🤖 Experience hosting and Developing Models",
        "🤖 Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#E90189",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#4CACD1",
          },
        },

        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#EBB430",
          },
        },
        {
          skillName:"Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            color: "#D10001",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#EE4D2D",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#8ADB67",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F99A37",
          },
        
        },
      ],
    },
    {
      title: "Designing and Animation",
      fileName: "DesignImg",
      skills: [
        "✨ Experience working on Poster designing and video editing",
        "✨ Experience creting digital content for multiple platform and also for web pages",
        "✨ Experience with multiple Designing softwares",
      ],
      softwareSkills: [
        {
          skillName: "Adobe After Effects",
          fontAwesomeClassname: "simple-icons:adobeaftereffects",
          style: {
            color: "#9898FF",
          },
        },
        {
          skillName: "Adobe After Premire Pro",
          fontAwesomeClassname: "simple-icons:adobepremierepro",
          style: {
            color: "#EA76FE",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FE9B00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#01ABFF",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF61F6",
          },
        },
        {
          skillName: "Adobe Audition",
          fontAwesomeClassname: "simple-icons:adobeaudition",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
    {
      title: "Hosting WebSites",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple hosting platform",
        "⚡ Experience hosting and Developing webpages and projects",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        
  
      ],
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Institute of Technology, Hamirpur",
      subtitle: "Bachelor in Computer Science and Engineering",
      logo_path: "nith.png",
      alt_name: "NITH",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Computer Science and Engineering.",
        "⚡ I have studied core subjects like Data Structures, DBMS, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://nith.ac.in/",
    },
    {
      title: "Vishwa Bharti Public School",
      subtitle: "High School and Intermediate",
      logo_path: "vbps.png",
      alt_name: "VBPS",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ I have completed my High school and Intermediate from this School.",
        "⚡ I have participated many inter school compition based on science and research.",
      ],
      website_link: "http://vbpsnoida.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "courcera.png",
      img_path:'ml.png',
      certificate_link:
        "https://drive.google.com/file/d/1z4E4TMea8RF59VfzVLYRa_v24n5j1ZM3/view?usp=sharing",
      alt_name: "Stanford University",
      // color_code: "#2AAFED",
      color_code: "#0096FF",
    },
    
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      img_path:'webd2.png',
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Neural Network and Deep Learning",
      subtitle: "DeepLearning.ai",
      logo_path: "courcera.png",
      img_path:'dl.png',
      certificate_link:
        "https://drive.google.com/file/d/1JnVAfQ_Tad9E35HsyAeM-ShcaNogocT3/view?usp=sharing",
      alt_name: "DeepLearning.ai",
      color_code: "rgb(0, 150, 255)",
    },
    {
      title: "ReactJs Course",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      img_path:'webd.png',
      certificate_link:
        "https://drive.google.com/file/d/1RLMWmEUGg2BVX3-FFSH4Klc1u1oaQ-GJ/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#676FA3",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      img_path:'ml.png',
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },

    {
      title: "Web Development Intermediate Course",
      subtitle: "GIRLSCRIPT.TECH",
      logo_path: "gssoc.png",
      img_path:'web3.png',
      certificate_link:
        "https://drive.google.com/file/d/1C2ERU1ehSQ2KJzwPYFiBOkYENQQujLoW/view?usp=sharing",
      alt_name: "GIRLSCRIPT.TECH",
      color_code: "#FF5733",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I'm Curently pursuing my first internship. I've mostly done projects on Machine Lerning and Web Development and I am actively looking for Colaboration. I love exchanging words on latest technology to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer (Intern)",
          company: "AppDeployer",
          company_url: "https://www.appsdeployer.com/",
          logo_path: "appdeployer.png",
          duration: "jan-2022 - Present",
          location: "Online",
          description:
          `Working as a Front-end Developer at AppDeployer is a great experience to learn new technologies and work on real world projects. Curently developing Admin Dashboard.
          `,
          color: "#0071C5",
        },

      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Society For Promotion of ELectronics",
          company: "SPEC",
          company_url: "https://specnith.com/",
          logo_path: "spec.png",
          duration: "Dec 2020 - Present",
          location: "Executive",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        
        {
          title: "Vibhav",
          company: "Vibhav",
          company_url: "https://vibhav-nith.netlify.app/",
          logo_path: "Vibhav.png",
          duration:"Feb 2021 - Present",
          location: "Executive",
          description:
          "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Campus Ambasador",
          company: "PrepBytes",
          company_url: "https://www.prepbytes.com/",
          logo_path: "prepbytes.png",
          duration: "Sept 2021 - Present",
          location: "Work from Home",
          description: "Spread Awareness of new Technologies and new Opportunities to Students and Grow Prepbytes Community.",
          color: "#196acf",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "self.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/PriyanshuRj01",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Learning_Pocket",
      url: "https://github.com/PriyanshuRj/Learning_Pocket",
      description: "The project revolves around deciphering free body diagrams, interpreting all the forces acting on it and imparting steps to further solve the problem. The idea emerged out of solving complex physics problems. Our programme will help these aspiring students to get solutions of convoluted problems at an instance. This will act as a knowledge booster for an average student.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Android",
          iconifyClass: "logos-android-icon",
        },

      ],
    },

    {
      id: "2",
      name: "Dhrishtivadit",
      url: "https://github.com/PriyanshuRj/Drishtivadhit-withserver",
      description:
        "A site for a NGO serving optically chalanged people. The site is developed on MERN stack it contains login for Teacher, Members and other employees. Where teacher can upload documents and other people can donate money for the beterment of the blind peoples",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },

      ],
    },
    {
      id: "3",
      name: "Face Schiled Detection",
      url: "https://github.com/PriyanshuRj/faceShield_detector",
      description:
        "In difficult time like these where viruses like Covid 19 are spreading world-wide we need to keep safe distance from each other and wear appropriate safty gears this project looks into that topic it helps us recognize that a person is wearing faceshield or not so that overall safty of all is maintained.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "Safty Helmet and Vest Detection",
      url: "https://github.com/PriyanshuRj/SaftyHelmet_and_Vest_Classifier",
      description:
        "This project aims to utilize existing CCTV camera infrastructure to assist supervisors to monitor workers effectively by providing them with real time alerts.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "3",
      name: "Student Helper Website",
      url: "https://github.com/PriyanshuRj/reboot.git",
      description:
        "A website which have similar use case as udemy but also intigrates AR aspect for better information Grasping.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },

    {
      id: "1",
      name: "MEDEX",
      url: "https://github.com/PriyanshuRj/MEDEX",
      description:
        "This is a online based platform which will help you to distinguish between real and fake medicines, in the market.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          fontAwesomeClassname: "simple-icons:flask",

        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
      ],
    },
   
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
