/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Praveen's Portfolio",
  description:
    "A passionate Cybersecurity engineer, sometimes called information security engineer, identify threats and vulnerabilities in systems and software, then apply their skills to developing and implementing high-tech solutions to defend against hacking, malware and ransomware, insider threats and all types of cybercrime..",
  og: {
    title: "Praveen Vangala Portfolio",
    type: "website",
    url: "https://praveenvangala.in/",
  },
};

//Home Page
const greeting = {
  title: "Praveen Vangala",
  logo_name: "PraveenVangala",
  nickname: "Pani_PraWin",
  subTitle:
    "A passionate Cybersecurity engineer,I identify threats and vulnerabilities in systems and software, then apply various skills to develop and implement high-tech solutions to defend against hacking, malware and ransomware, insider threats and all types of cybercrime..",
  resumeLink:
    "",
  portfolio_repository: "https://github.com/PaniPraWin/praveenvangala.in",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/PaniPraWin",
  // linkedin: "",
  // Email: "panipraveen08@live.com",
  // gitlab: "",
  // facebook: "",
  // twitter: "https://twitter.com/Pani_PraWin",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/PaniPraWin",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Email",
    link: "mailto:panipraveen08@live.com",
    fontAwesomeIcon: "fas fa-envelope-square", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#380953", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Pani_PraWin",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/panipraveenvangala",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Cyber Security",
      fileName: "DataScienceImg",
      skills: [
        "⚡ The protection of information and information systems against unauthorized access or modification of information, whether in storage, processing, or transit, and against denial of service to authorized users",
       
        "⚡ Process that captures and refines information security requirements and ensures their integration into information technology component products and information systems through purposeful security design or configuration",
        "⚡ Direct experience with anti-virus software, intrusion detection, firewalls and content filtering",
        "⚡ Experience in planning, researching and developing security policies, standards and procedures",
        "⚡ Professional experience in a system administration role supporting multiple platforms and applications"
      ],
      softwareSkills: [
        {
          skillName: "Systems Security",
          fontAwesomeClassname: "mdi:server-security",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Data Shield",
          fontAwesomeClassname: "ic:outline-security",
          style: {
            backgroundColor: "transparent",
            color: "#005F0F",
          },
        },
        {
          skillName: "Access Management",
          fontAwesomeClassname: "tabler:lock-access",
          style: {
            backgroundColor: "transparent",
            color: "#02303A",
          },
        },
        {
          skillName: "Firewall",
          fontAwesomeClassname: "whh:firewall",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
      ],
    },
    {
      title: "IT Training",
      fileName: "FullStackImg",
      skills: [
        "⚡ IT Infrastructure Training focuses on building, sustaining, and managing technical infrastructure.",
        "⚡ Desktop Applications Training focuses on how to use programs and applications for desktop users.",
        "⚡ Certification Training includes certifications, compliance, exam preparation, or boot camp style training programs.",
        "⚡ Cyber Security Training involves courses and training programs centered on IT network and system security.",
      ],
      softwareSkills: [
        {
          skillName: "Checkmarx",
          fontAwesomeClassname: "simple-icons:checkmarx",
          style: {
            color: "#54B848",
          },
        },
        {
          skillName: "Cisco",
          fontAwesomeClassname: "cib:cisco",
          style: {
            color: "#1BA0D7",
          },
        },
        {
          skillName: "Splunk",
          fontAwesomeClassname: "simple-icons:splunk",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Carbon Black",
          fontAwesomeClassname: "carbon:carbon",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "vmware",
          fontAwesomeClassname: "simple-icons:vmware",
          style: {
            color: "#607078",
          },
        },
        {
          skillName: "RSA",
          fontAwesomeClassname: "logos:rsa",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Symantec",
          fontAwesomeClassname: "simple-icons:symantec",
          style: {
            color: "#FDB511",
          },
        },
        {
          skillName: "Microsoft",
          fontAwesomeClassname: "logos:microsoft",
          style: {
            color: "#5E5E5E",
          },
        },
      ],
    },
    {
      title: "Security Research & Bug Hunting",
      fileName: "DesignImg",
      skills: [
        "⚡ Using various technics, I Review the scope and Perform reconnaissance to find valid targets for vulnerabilities",
        "⚡ Scanning against discovered targets to gather additional information",
        "⚡ Hands-on experience of Security Testing tools such as Burp Suite, Metasploit , Nessus.",
        "⚡ Research on secure design, development and operations of web applications",
        "⚡ Investigate, analyze and learn from security researchers, attackers and real incidents in order to develop durable detection solution/strategies across the kill-chain or product/OS enhancements",
      ],
      softwareSkills: [
        {
          skillName: "Hackerone",
          fontAwesomeClassname: "simple-icons:hackerone",
          style: {
            color: "##494649",
          },
        },
        {
          skillName: "Bugcrowd",
          fontAwesomeClassname: "simple-icons:bugcrowd",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Research",
          fontAwesomeClassname: "whh:squaresearch",
          style: {
            color: "",
          },
        },
        {
          skillName: "Nessus",
          fontAwesomeClassname: "file-icons:nessus",
          style: {
            color: "#29F1FB",
          },
        },,
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
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
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
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
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/",
    },
    {
      siteName: "Hackerone",
      iconifyClassname: "simple-icons:hackerone",
      style: {
        color: "##494649",
      },
      profileLink: "https://www.hackerone.com/",
    },
    {
      siteName: "Bugcrowd",
      iconifyClassname: "simple-icons:bugcrowd",
      style: {
        color: "#F26822",
      },
      profileLink: "https://www.bugcrowd.com/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Shobhith University",
      subtitle: "Msc in Computer Engineering",
      logo_path: "Shobhit_University_logo.png",
      alt_name: "Shobith University",
      duration: "2012 - 2014",
      descriptions: [
        
      ],
      website_link: "https://www.shobhituniversity.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CyberArk",
      subtitle: "",
      logo_path: "cyberark.png",
      certificate_link:
        "https://www.cyberark.com/services-support/professional-services/training-certification/",
      alt_name: "Cyberark",
      color_code: "#FCFBFA",
    },
    {
      title: "Carbon Black",
      subtitle: "CB Protection",
      logo_path: "carbonblack_logo.jfif",
      certificate_link:
        "https://www.carbonblack.com/training/",
      alt_name: "CBP",
      color_code: "A73CC",
    },
    {
      title: "ENTRUST",
      subtitle: "nShield",
      logo_path: "ncipher-logo.png",
      certificate_link:
        "https://web.entrust.com/services/training-services/?_ga=2.23850809.282115593.1614325531-782989329.1614325531",
      alt_name: "ncipher",
      color_code: "#FCFBFA",
    },
    {
      title: "VENAFI",
      subtitle: "Venafi Security Administrator",
      logo_path: "Venafi_logo.png",
      certificate_link:
        "https://support.venafi.com/hc/en-us/categories/202499237-Venafi-Self-Study-Training",
      alt_name: "venafi",
      color_code: "#FCFBFA",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Designer, security engineer, and Software Architect. I have also worked with some well established companies. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Information Security Operational Analyst II",
          company: "Mastercard",
          company_url: "https://www.mastercard.com/",
          logo_path: "Mastercard_logo.png",
          duration: "Dec 2019 - PRESENT",
          location: "Pune, Maharashtra",
          description:
            "I am working on Security Threat Response Manager (STRM) family of various technologies provides a converaged network and security management solution for Enterprise and Service Provider customers, Along side providing support to few cryptographic soultions.",
          color: "#0879bf",
        },
        {
          title: "Security Analyst",
          company: "Tech Mahindra Malaysia",
          company_url: "https://www.techmahindra.com/",
          logo_path: "techm_logo.jfif",
          duration: "Nov 2018 - Dec 2019",
          location: "Kuala Lumpur, Malaysia",
          description:
            "I have managed a new project in setting up the whole Security solutions to an telicom company. I have successfully implemented and led the team in operations, some of the security streams i have handled are IAM (identity and access management), End point protection, SIEM (Security Information and Event Management) and network security",
          color: "#9b1578",
        },
        {
          title: "Security Analyst",
          company: "Tech Mahindra",
          company_url: "https://www.techmahindra.com/",
          logo_path: "techm_logo.jfif",
          duration: "April 2017 - NOV 2018",
          location: "Hyderabad, Telangana",
          description:
            "Provided a level 2 support for various security tools, which includes IAM, endpoint security and cryptographic services.",
          color: "#9b1578",
        },
        {
          title: "System Administor",
          company: "PAGEANT SYSTEMS",
          company_url: "www.pageantinc.com",
          logo_path: "pageant_logo.jpeg",
          duration: "June 2014 - Feb 2017",
          location: "Hyderabad, Telangana",
          description:
            "Pageant system was a Startup company which provided consulting and outsourcing services. I had joined here as a windows administrator and learnt various skills. Over a period of time I moved to Linux system administration and provided support for unix and linux OS",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "praveen _pic.png",
    description:
      "I am available on almost every social media. You can message me, I will try to reply As soon as possible. I can help you with cyber security and IT training and also will assist on troubleshooting technical issues.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "As a tech enthusiast i write blogs and articles on technical news and menthods..",
    link: "https://medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Soon, i will be sharing my office address",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
