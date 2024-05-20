import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Project Manager",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Digital Marketer",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Junior React.js Developer",
      company_name: "C21FG",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Creative Solutions Nig.",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Startup Hub",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior Product Manager",
      company_name: "Tech Innovators Corp.",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Led the development and launch of new SaaS products, resulting in a 20% increase in revenue.",
        "Conducted market research to identify customer needs and market gaps.",
        "Collaborated with engineering, design, and marketing teams to define product roadmaps.",
        "Utilized data analytics to drive product improvements and inform strategic decisions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but King Jude proved me wrong.",
      name: "Ifeanyi Obi",
      designation: "CEO",
      company: "C21FG",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSyYz3olbmO3vwyXfdAgIU2gqXM92QZdGUQ&usqp=CAU",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Jude does.",
      name: "Ubarieke Clinton",
      designation: "COO",
      company: "KUMO AFRICA",
      image: "https://scontent.flos5-3.fna.fbcdn.net/v/t1.6435-9/101413666_3171438449748487_5272773144178851840_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEV2gsxzASeuxEPL7lyVC_3kMISi_8-WsCQwhKL_z5awIeWuGa-1R7yxKs6YD1dZP8Ep6_Oh3PyzCAub0Seev9a&_nc_ohc=8McxGTC714sQ7kNvgH8SHAO&_nc_ht=scontent.flos5-3.fna&oh=00_AYBkc_4Exk-xqadWnI2TzJWwnxI-6gSQ3Cmmpn2_DtbHXw&oe=6671CF8E",
    },
    {
      testimonial:
        "After King Jude optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Ataneh Peculiar",
      designation: "CTO",
      company: "KUMO AFRICA",
      image: "https://scontent.flos5-3.fna.fbcdn.net/v/t1.6435-9/208586149_102328148783299_3744224045756021570_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGAv6szXbdPgpA6Q9tFgEHJhBMCW6yKwgGEEwJbrIrCAVdwJX4lAyj-OdUIlgqodZhlNefEnADmh0KRiEoKKgas&_nc_ohc=FJNJCnV8QWMQ7kNvgHseNIz&_nc_ht=scontent.flos5-3.fna&oh=00_AYC3mwlP0-pkYI_7bjYoWIPtBo8mRlpujZacowqSyksVoQ&oe=6671AFAB",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
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
  
  export { services, technologies, experiences, testimonials, projects };
  