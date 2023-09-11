import {
    mobile,
    backend,
    creator,
    web,
    portalgcor,
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
    brazil,
    melune
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
      title: "Full-Stack Web Developer",
      icon: web,
    },
    {
      title: "IT Analyst",
      icon: mobile,
    },
    {
      title: "Java Developer",
      icon: backend,
    },
    {
      title: "English Teacher",
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
      title: "English Teacher",
      company_name: "Wizard",
      icon: wizard,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Jun 2021",
      points: [
        "Skillfully design, organize, and conduct engaging English lessons that cater to diverse learning needs and styles.",
        "Cultivate an inclusive and supportive learning environment, empowering students to enhance their listening, speaking, reading, and writing proficiencies through both individualized attention and group collaboration.",
        "Thoughtfully assess and evaluate students' progress, offering constructive feedback and tailored guidance cto facilitate continuous improvement.",
        "Craft and adapt comprehensive teaching materials, employing innovative approaches to make language learning an enjoyable and enriching experience for students.",
      ],
    },
    {
      title: "IT Analyst",
      company_name: "Corpu Clinica",
      icon: corpu,
      iconBg: "#383E56",
      date: "Jan 2020 - Present",
      points: [
        "Successfully executed projects, including upgrades and hardware/software installations, leading to streamlined processes and enhanced system performance.",
        "Deliver expert advice and conduct comprehensive technical training to equip individuals with the knowledge and skills necessary to excel in their roles.",
        "Drive continuous improvement by actively seeking feedback from end users and translating their input into enhanced system performance and user satisfaction.",
        "Implemented IT helpdesk systems and tools, resulting in a reduction in IT support response time by 30%, leading to faster issue resolution and improved customer experience.",
      ],
    },
    {
      title: "Development Analyst",
      company_name: "Cypher Technologiesc",
      icon: cypher,
      iconBg: "#383E56",
      date: "Fev 2022 - Present",
      points: [
        "Conducted comprehensive analysis of various business models, proactively identifying and addressing process bottlenecks, and successfully executed projects that led to a remarkable optimization of efficiency",
        "Prepared highly detailed and comprehensive technical documentation, ensuring seamless communication ccacross cross-functional teams and accelerating project development timelines.",
        "Develop a customer-centric platform, resulting in a significant expansion of the customer base, cstrengthening client-company relationships, and driving a substantial increase in ROI. ",
        "Designed and implemented a custom eCommerce platform that delivered outstanding results, achieving an impressive 27% increase in conversions, elevating the overall profitability of the business.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I highly recommend Yuri for his comprehensive understanding of web application development and their ability to create robust and complete applications.",
      name: "Eliana Colucci",
      designation: "Manager",
      company: "Corpu Clinica",
      image: "https://scontent.fgru19-1.fna.fbcdn.net/v/t1.6435-9/48369129_1979497285479728_8180696999796932608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE-xK2nvEuiXWBaZ4vp3Z63P0blNGpZW20_RuU0allbbf6DPrYbGOAWKYe9zwYnLOSbRmq4LfGFKrElbckjWDZI&_nc_ohc=XKJuGVt3e7QAX91rLsc&_nc_ht=scontent.fgru19-1.fna&oh=00_AfCI15cXl1krZ17QpZ3uZBm5ueZKpJrhs-xCkgif7nssdA&oe=64E5504B",
    }
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
        {
          name: "GitHubPages",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/YuriBrasiliano/YuriBrasiliano",
    },
    {
      name: "Portal GCOR",
      description:
        "A website where you can schedule your exams and also where employees can share their ideas with managers, request new equipment, etc.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "TailWind",
          color: "blue-text-gradient",
        },
      ],
      image: portalgcor,
      source_code_link: "https://github.com/YuriBrasiliano/portalCorpu",
    },
    {
      name: "Melune",
      description:
        "ECommerce platform, seamlessly connecting businesses with their customers, revolutionizing online shopping experiences.",
      tags: [
        {
          name: "JQuery",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "Liquid",
          color: "blue-text-gradient",
        },
      ],
      image: melune,
    },
   
   
   
  ];
  const courses = [
    {
      title: "Java",
      hours: "82 Hours",
      link: "https://drive.google.com/drive/folders/1W_xic6ER3sgIL-XCFgn1N1KUWM4HL5nK?usp=share_link"
    },
    {
      title: ".NET",
      hours: "72 Hours",
      link: "https://drive.google.com/drive/folders/1CESpeZKtAftrtLICUrRNLbXNSeS6Xft7?usp=share_link"
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
      title: "Python",
      hours: "48.5 Hours",
      link: "https://drive.google.com/drive/folders/11LtYJcchpvATaCp_5ovlCMLuC7uKKAr0?usp=share_link"
    },
    {
      title: "JavaScript",
      hours: "43 Hours",
      link: "https://drive.google.com/drive/folders/1PT6x8RzG8sk1ZNcyL6hMA62VVpZncMQd?usp=share_link"
    },
    {
      title: "C#",
      hours: "14 Hours",
      link: "https://drive.google.com/drive/folders/1YGB07k0oXPYyQuKQLlSIM8F8D5dZ4CIL?usp=share_link"
    }

  ];


  export { services, technologies, experiences, testimonials, projects, courses, languages };
