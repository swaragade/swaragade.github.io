// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Suraj Waragade",
  title: "I'm Suraj",
  subTitle: emoji(
    "A passionate Software Developer 🚀 building complex Web applications with Springboot / ReactJS and some other cool cloud technologies"
  ),
  resumeLink:"https://drive.google.com/file/d/1E9nJ2Lu3ZRUVsXBmCPNNONciGBKRIbZi/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/swaragade",
  linkedin: "https://www.linkedin.com/in/surajwaragade/",
  mail: "suraj_waragade@live.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  codechef: "http://codechef.com/users/swaragade",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A MECHANICAL ENGINEER TURNED SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK OUT THERE",
  skills: [
    emoji(
      "⚡ Develop complex web application backends with SpringBoot"
    ),
    emoji("⚡ Currently getting my hands dirty with ReactJS and Progressive Web Applications ( PWA )"),
    emoji(
      "⚡ Hitting my head over most of the cloud providers. AWS, GCP, IBM to name a few"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Openshift",
      fontAwesomeClassname: "fab fa-redhat"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Shell",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sinhgad Academy of Engineering",
      logo: require("./assets/images/sinhgadLogo.png"),
      subHeader: "Bachelor of Engineering",
      duration: "August 2014 - May 2017",
      desc: "Majored in Mechanical Engineering"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Government Polytechnic Kolhapur",
      logo: require("./assets/images/gpkpLogo.jpg"),
      subHeader: "Diploma In Mechanical Engineering",
      duration: "Auguest 2010 - May 2013",
      //desc:
      //  "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Springboot Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Openshift", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Docker",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend",
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
      role: "Senior Software Engineer",
      company: "Infosys",
      companylogo: require("./assets/images/infosysLogo.png"),
      date: "May 2018 – Present",
      desc:
        "A DevOps professional working for Technical Release Management",
      descBullets: [
        "Part of 3 member CoE",
        "Responsible for delivering automated solutions for complete CICD"
      ]
    },
    {
      role: "Apprentice Trainee",
      company: "General Electric",
      companylogo: require("./assets/images/geLogo.gif"),
      date: "Sept 2013 – June 2014",
      desc:
        "Worked as a Mechanical Engineer, learnt Mazatrol,CNC programming"
    }
  ]
};


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Highlights",
  subtitle: "SOME TOOLS AND APPS WHERE I HELPED IN COMPLETION",
  projects: [
    {
      image: require("./assets/images/codoogleLogo.jpg"),
      projectName: "Codoogle",
      projectDesc: "Have you heard about Sourcegraph? Its a tool which allows complete search capabilities for your source code. Yes many SCM providers have this functionality built-in but do they allow RegEx search ? Generally SCM providers index default(master) branch only, so it comes in handy when you have a webapp to do this for you.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: ""
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/red_hat_openshift_logo.png"),
      projectName: "Legacy modernization",
      projectDesc: "Converted a standalone monolith legacy webapp to Springboot microservices, hosted onto on-prem Openshift cluster.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: ""
        // }
      ]
    },
    {
      image: require("./assets/images/reconTool.jpg"),
      projectName: "Reconciliation tool",
      projectDesc: "Smart standalone tool to automate merging between git branches. Its a boon when you maintain multiple repositories, releases and branches",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: ""
        // }
      ]
    },
    {
      image: require("./assets/images/cvstogit.png"),
      projectName: "CVS to GIT migration",
      projectDesc: "This involved not only migrating the source code from centralized system to distributed one, but also upgrading JDK, Maven, Libraries and even CI server.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: ""
        // }
      ]
    },
    {
      image: require("./assets/images/maven_dependency_graph.png"),
      projectName: "Reactor tool",
      projectDesc: "Its hard to maintain dependency hierarchy in Jenkins Pipelines, when you have huge dependency tree to be build. This standalone tool reads pom.xml, judges the dependency hierarchy and provides inputs to Jenkins on which job to build next.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: ""
        // }
      ]
    },
    {
      image: require("./assets/images/jenkinsLogo.dms"),
      projectName: "Jenkins plugins",
      projectDesc: "Sometimes available plugins are not enough to complete a desired task, so I've built multiple plugins to accomodate custom tasks.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: ""
        // }
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
      title: "IBM CallForCode 2020",
      subtitle:
        "Secured 3rd price in IBM CloudReady hackathon. Built a webapp which thermally scans the face, can be used in closed workspaces where employees can be scanned without any physical proximity.",
      image: require("./assets/images/ibmCFC.jpg"),
      footerLink: [
        // {
        //   name: "Certification",
        //   url:
        //     "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // }
      ]
    },
    {
      title: "Redhat accreditated Cloud developer",
      subtitle: "Container Platform Application development and deployment",
      image: require("./assets/images/red_hat_openshift_logo.png"),
      footerLink: [
        {
          name: "Application deployment",
          url:
            "https://drive.google.com/file/d/1Bae5JAn0Ii9mZs3o2kJZH0SLVfioz5Fp/view?usp=sharing"
        },
        {
          name: "Container deployment",
          url:
            "https://drive.google.com/file/d/1T5vvSERRbw0Z7YxcgWp-89M1L-G2KgJP/view?usp=sharing"
        }
      ]
    },
    {
      title: "Certified Kubernetes Administrator/Developer",
      subtitle: "Its a huge detail oriented practical exam, still undergoing throught the content. Yet to take the exam",
      image: require("./assets/images/k8sLogo.png"),
      footerLink: [
        // {
        //   name: "Application deployment",
        //   url:
        //     "https://drive.google.com/file/d/1Bae5JAn0Ii9mZs3o2kJZH0SLVfioz5Fp/view?usp=sharing"
        // }
      ]
    },
    {
      title: "Infosys Certified Java Developer",
      subtitle: "A Infosys Certified Java SE8 developer",
      image: require("./assets/images/InfosysJavalogo.png"),
      footerLink: [
        // {
        //   name: "Application deployment",
        //   url:
        //     "https://drive.google.com/file/d/1Bae5JAn0Ii9mZs3o2kJZH0SLVfioz5Fp/view?usp=sharing"
        // }
      ]
    },
    {
      title: "Infosys Certified Global Agile Developer",
      subtitle: "A Infosys Certified Agile Practitioner",
      image: require("./assets/images/agileLogo.png"),
      footerLink: [
        // {
        //   name: "Application deployment",
        //   url:
        //     "https://drive.google.com/file/d/1Bae5JAn0Ii9mZs3o2kJZH0SLVfioz5Fp/view?usp=sharing"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  // title: "Blogs",
  // subtitle:
  //   "With Love for Developing cool stuff.",

  blogs: [
  //   {
  //     url: "",
  //     title: "",
  //     description:
  //       ""
  //   }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+91-992388327777",
  //email_address: "suraj_waragade@live.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
