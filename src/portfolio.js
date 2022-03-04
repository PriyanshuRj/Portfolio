/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello ",
  title2: "Priyanshu",
  logo_name: "Pboss.js()",
  nickname: "Pboss",
  full_name: "Priyanshu Rajput",
  subTitle:["Full Stack Developer", "Machine Learning Enthusiast","Video Editor","Graphic Designer"],
  resumeLink:
    "https://drive.google.com/file/d/1f0n8Azqek8PwRvUM49hkfa_WLuZDj3MS/view?usp=sharing",
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
const skillprogress = {
  skillprogresses : [
    {
      name:"Front End Developer",
      done: "75",
      icon:"mdi:web"
    },
    {
      name:"Back End Developer",
      done: "70",
      icon:"whh:website"
    },
    {
      name:"Machine Learning",
      done: "80",
      icon:"eos-icons:machine-learning"
    },
    {
      name:"Deep Learning",
      done: "60",
      icon:"carbon:machine-learning-model"
    },
    {
      name:"Data Structures",
      done: "65",
      icon:"carbon:data-structured"
    },
    {
      name:"Graphic Designing",
      done: "75",
      icon:"fluent:design-ideas-16-filled"
    },
    {
      name:"Video Editing",
      done: "65",
      icon:"bi:camera-video-fill"
    },
    {
      name:"App Development",
      done: "55",
      icon:"ant-design:android-filled"
    },
    {
      name:"Internet of Things",
      done: "60",
      icon:"eos-icons:iot"
    },
    {
      name:"Game Development",
      done: "40",
      icon:"entypo:game-controller"
    },
    {
      name:"Augmented Reality",
      done: "40",
      icon:"ic:twotone-view-in-ar"
      
    },
    
  ]
}
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
            color: "#3fb6d3",
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
          skillName: "SASS",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#c69",
          },
        },
        {
          skillName: "Socket.io",
          fontAwesomeClassname: "simple-icons:socketdotio",
          style: {
            color: "#1D9723",
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
          skillName: "Tailwind",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#3fb6d3",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#59407f",
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
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#101010",
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
            color: "#005494",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#9972D0",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#f58220",
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
      title: "Technical Softwares",
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
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#47A998",
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
      color: "#0B5394",
      color_code: "#0096FF",
      discription:'An online non-credit course authorized by Stanford University and offered through Coursera'
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
      discription:'An online non-credit course authorized by DeepLearning.AI and offered through Coursera'
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
      discription:'The complete ReactJS Course- Basic to Advance',
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
      discription:'Web Development Intermediate Course as a part of GirlScript Education Outreach Program '
    },
    {
      title: "CSS Skill Assessment",
      subtitle: "HackerRank",
      logo_path: "HackerRank.png",
      img_path:'webd2.png',
      certificate_link:
        "https://www.hackerrank.com/certificates/dc64ae479e2e",
      alt_name: "HackerRank",
      color_code: "#FF5733",
      discription:'Web Development Intermediate Course as a part of GirlScript Education Outreach Program '
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
//aboutPage
const about = {
  title :"About",
  discriptionLine:'Full Stack Developer, Machine Learning Enthusiast.',
  extraLine:" Always in my learning phase.",
  discription:' Creative and Tech-savvy Web Developer intern dedicated to develop, contribute and optimize Websites and Web app which are interactive and userfriendly. Team player with an eye for detail. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and leverage analytical problem solver with calm and focused demeanor.'
}
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
            "Worked as a Front-End Developer (ReactJS) and contributed in the development of two webste for the Society and also worked as Graphic Designer and video editor for the Society and published many of them on the official handels of the society.",
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
          "Worked as Content Creator(Posters, video), Website designer and developed website forthe club , organized and conducted 5+ events and also Participated in exhibition to showcase projects made under the supervision of the society Leads",
          color: "#040f26",
        },
        {
          title: "Campus Manager",
          company: "PrepBytes",
          company_url: "https://www.prepbytes.com/",
          logo_path: "prepbytes.png",
          duration: "Sept 2021 - Present",
          location: "online",
          description: "Worked as a Campus Manager and Organized 4+ Coding Event and 5+ Workshop on topics like Web Development, Compititive Coding and DSA.",
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
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Machine Learning and Deep Learning Models using TensorFlow and Keras, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "self.png",
    
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    twiter_link: "https://twitter.com/PriyanshuRj01",
    medium_link: "https://medium.com/@priyanshurajput0071109",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Learning_Pocket",
      url: "https://github.com/PriyanshuRj/Learning_Pocket",
      img_url:"learning_pocket_reduce.jpg",
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
      img_url:"dhrishtiwadit_reduce.jpg",
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
      img_url:"facemask_reduce.jpg",
      description:
        "In difficult time like these where viruses like Covid 19 are spreading world-wide we need to keep safe distance from each other and wear appropriate safty gears this project looks into that topic it helps us recognize that a person is wearing faceshield or not so that overall safty of all is maintained.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "4",
      name: "Safty Helmet and Vest Detection",
      url: "https://github.com/PriyanshuRj/SaftyHelmet_and_Vest_Classifier",
      img_url:"construction.jpg",
      description:
        "This project aims to utilize existing CCTV camera infrastructure to assist supervisors to monitor workers effectively by providing them with real time alerts.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          skillName: "Tensorflow",
          iconifyClass: "logos-tensorflow",

        },
        {
          skillName: "OpenCV",
          iconifyClass: "logos-opencv",

        },
        {
          skillName: "OpenCV",
          iconifyClass: "logos-googlecolab",

        },

      ],
    },
    {
      id: "3",
      name: "Student Helper Website",
      url: "https://github.com/PriyanshuRj/reboot.git",
      img_url:"reboot_reduce.jpg",
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
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },

    {
      id: "1",
      name: "MEDEX",
      url: "https://github.com/PriyanshuRj/MEDEX",
      img_url:"medex_reduce.jpg",
      description:
        "This is a online based platform which will help you to distinguish between real and fake medicines, in the market.",
      languages: [

        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
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
          iconifyClass: "logos-flask",

        },
        {
          skillName: "Flutter",
          iconifyClass: "logos-flutter",

        },
        {
          skillName: "Dart",
          iconifyClass: "logos-dart",

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
  about,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  skillprogress,
};
