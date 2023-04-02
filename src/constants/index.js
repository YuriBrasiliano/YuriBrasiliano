import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    usa,
    spain,
    france,
    css,
    java,
    python,
    aws,
    reactjs,
    nodejs,
    cypher,
    git,
    corpu,
    wizard,
    portfolio,
    jobit,
    brazil,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "IT Analyst",
      icon: mobile,
    },
    {
      title: "AWS Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
  ];

  const languages = [
    {
      title: "Portuguese",
      icon: brazil,
    },
    {
      title: "English",
      icon: usa,
    },
    {
      title: "French",
      icon: france,
    },
    {
      title: "Spanish",
      icon: spain,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "IT Analyst",
      company_name: "Corpu Clinica",
      icon: corpu,
      iconBg: "#383E56",
      date: "Jan 2020 - Jun 2022",
      points: [
        "Integrate multiple systems and reconcile needs of different teams.",
        "Provide advice and technical training.",
        "Plan and oversee projects (e.g. upgrades, hardware/software installations).",
        "Gather feedback from end users about system performance.",
      ],
    },
    {
      title: "English Teacher",
      company_name: "Wizard",
      icon: wizard,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Jun 2021",
      points: [
        "Planning, preparing and delivering lessons.",
        "Helping pupils improve their listening, speaking, reading and writing skills in individual and group sessions.",
        "Checking and assessing students’ work, and providing feedback.",
        "Preparing teaching materials.",
      ],
    },
    {
      title: "Development Analyst",
      company_name: "Cypher Technologies (My own company)",
      icon: cypher,
      iconBg: "#383E56",
      date: "Fev 2022 - Present",
      points: [
        "Analyzing businesses models and creating projects to maximize efficiency.",
        "Write proposals and liaise with other departments to aline strategies.",
        "Write technical documentation.",
        "Build the Front and Back End for an Web Application using clean and functional code.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet. Aut iure placeat eos eveniet officiis aut modi ipsa sit recusandae int!.",
      name: "Lorem ipsum",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
      "Lorem ipsum dolor sit amet. Aut iure placeat eos eveniet officiis aut modi ipsa sit recusandae int!.",
      name: "Lorem ipsum",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
      "Lorem ipsum dolor sit amet. Aut iure placeat eos eveniet officiis aut modi ipsa sit recusandae int!.",
      name: "Lorem ipsum",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "Portfolio written using react that exemplifies my beliefs, skills, qualifications, education, training and experiences.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/YuriBrasiliano/YuriBrasiliano",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  const courses = [
    {
      title: "Java",
      hours: "82 Hours",
      link: "https://drive.google.com/drive/folders/1W_xic6ER3sgIL-XCFgn1N1KUWM4HL5nK?usp=share_link"
    },
    {
      title: "Python",
      hours: "48.5 Hours",
      link: "https://drive.google.com/drive/folders/11LtYJcchpvATaCp_5ovlCMLuC7uKKAr0?usp=share_link"
    },
    {
      title: "QA",
      hours: "67 Hours",
      link: "https://drive.google.com/drive/folders/1Iv1JWwMHPp_ocYx7xSOIeWiCkcMsCaJJ?usp=share_link"
    },
    {
      title: "IBM Cloud",
      hours: "60 Hours",
      link: "https://drive.google.com/drive/folders/1vLJmWtJrYfiVx74RuwTSDZggFKj-gziO?usp=share_link"
    },
    {
      title: "Programming",
      hours: "55 Hours",
      link: "https://drive.google.com/drive/folders/1PutvSdzVT3lY9KRpqqF0CuYScDen3usF?usp=share_link"
    },
    {
      title: ".NET",
      hours: "72 Hours",
      link: "https://drive.google.com/drive/folders/1CESpeZKtAftrtLICUrRNLbXNSeS6Xft7?usp=share_link"
    },
    {
      title: "C#",
      hours: "14 Hours",
      link: "https://drive.google.com/drive/folders/1YGB07k0oXPYyQuKQLlSIM8F8D5dZ4CIL?usp=share_link"
    },
    {
      title: "JavaScript",
      hours: "43 Hours",
      link: "https://drive.google.com/drive/folders/1PT6x8RzG8sk1ZNcyL6hMA62VVpZncMQd?usp=share_link"
    }

  ];


  export { services, technologies, experiences, testimonials, projects, courses, languages };