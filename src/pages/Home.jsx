import HeroSection from "../components/common/HeroSection";
import StatsSection from "../components/common/StatsSection";
import ServicesSection from "../components/common/ServicesSection";
import PortfolioSection from "../components/common/PortfolioSection";
import ExperienceSection from "../components/common/ExperienceSection";
import SkillsSection from "../components/common/SkillsSection";
import TestimonialsSection from "../components/common/TestimonialsSection";
import ContactSection from "../components/common/ContactSection";

const Home = () => {
  const titleLines = [
    [
      { type: "text", content: "I'M", highlight: false },
      { type: "text", content: "Jameel", highlight: true },
      {
        type: "image",
        src: "https://demo.rstheme.com/html/flixta/assets/images/banner/banner-thumb-03.png",
        alt: "Profile",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
      },
      { type: "text", content: "Hameed", highlight: false },
    ],
    [
      { type: "text", content: "Frontend", highlight: false },
      // { type: "text", content: "STACK", highlight: true },
      {
        type: "image",
        src: "https://demo.rstheme.com/html/flixta/assets/images/banner/banner-thumb-04.png",
        alt: "Technology",
        width: "230px",
        height: "60px",
        borderRadius: "50px",
      },
      { type: "text", content: "WEB", highlight: true },
    ],
    [{ type: "text", content: "DEVELOPER", highlight: false }],
  ];

  const stats = [
    { number: "6+", label1: "Projects", label2: "Completed" },
    { number: "1.7+", label1: "Year of", label2: "Experience" },
    { number: "4+", label1: "Technologies", label2: "Mastered" },
    { number: "100%", label1: "Client", label2: "Satisfaction" },
  ];

  const services = [
    {
      icon: "frontend",
      title: "Frontend Development",
      description:
        "Crafting responsive, component-driven frontends using modern frameworks (React, Next.js, Vue) and best practices for state management and routing.",
      link: "#",
    },
    {
      icon: "frontend",
      title: "User Interface Development",
      description:
        "Designing and building intuitive, accessible user interfaces with React, Vue, or Next.js — focusing on UX, accessibility, and pixel-perfect implementation.",
      link: "#",
    },
    {
      icon: "api",
      title: "API Integration",
      description:
        "Integrating RESTful APIs into frontend, implementing secure data fetching, caching, and error handling for smooth UX.",
      link: "#",
    },
    {
      icon: "performance",
      title: "Performance & Optimization",
      description:
        "Optimizing load times, bundle sizes, and runtime performance using techniques like code-splitting, lazy loading, and efficient asset delivery.",
      link: "#",
    },
  ];

  const servicesImages = {
    main: "https://demo.rstheme.com/html/flixta/assets/images/services/services-thumb-05.png",
    secondary:
      "https://demo.rstheme.com/html/flixta/assets/images/services/services-thumb-05.png",
  };

  const projects = [
    {
      image:
        "https://demo.rstheme.com/html/flixta/assets/images/portfolio/portfolio-thumb-06.png",
      category: "Next.js & Node.js",
      title: "Namy",
    },
    {
      image:
        "https://demo.rstheme.com/html/flixta/assets/images/portfolio/portfolio-thumb-07.png",
      category: "Next.js & Node.js",
      title: "VisarShop",
    },
    {
      image:
        "https://demo.rstheme.com/html/flixta/assets/images/portfolio/portfolio-thumb-08.png",
      category: "Laravel & Vue.js",
      title: "Myaio",
    },
    {
      image:
        "https://demo.rstheme.com/html/flixta/assets/images/portfolio/portfolio-thumb-09.png",
      category: "Next.js & Node.js",
      title: "MoveEase",
    },
  ];

  const experiences = [
    {
      role: "Frontend Developer",
      date: "January 2025 - Present",
      company: "Xpertdigi",
    },
    {
      role: "Frontend Developer",
      date: "August 2024 - January 2025",
      company: "Janage Cipher",
    },
    {
      role: "UI Designer",
      date: "2023 - August 2024",
      company: "Arid Agriculture",
    },
  ];

  const education = [
    {
      course: "BSIT",
      date: "2020 - 2024",
      institution: "PMAS Arid Agriculture University (3.78 CGPA)",
    },
    {
      course: "Pre Engineering",
      date: "2018 - 2020",
      institution: "Aspire College (90% marks)",
    },
  ];

  const skills = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      name: "Next.js",
      percentage: 92,
    },
    {
      icon: "https://demo.rstheme.com/html/flixta/assets/images/icon/react-icon-02.png",
      name: "React.js",
      percentage: 95,
    },

    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      name: "Vue.js",
      percentage: 88,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      name: "TypeScript",
      percentage: 90,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      name: "JavaScript",
      percentage: 95,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      name: "Redux",
      percentage: 85,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      name: "HTML",
      percentage: 95,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      name: "CSS",
      percentage: 95,
    },
    {
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg",
      name: "Tailwind CSS",
      percentage: 92,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      name: "GitHub",
      percentage: 90,
    },

    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      name: "MySQL",
      percentage: 85,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
      percentage: 85,
    },
  ];

  const testimonials = [
    {
      text: "Amazing work! Delivered on time and built exactly what we needed. Highly recommended!",
      avatar:
        "https://demo.rstheme.com/html/flixta/assets/images/user/user-thumb-05.jpg",
      name: "Ahmed Raza",
      role: "CEO",
    },
    {
      text: "Very professional, great communication and quality work. Will definitely work again!",
      avatar:
        "https://demo.rstheme.com/html/flixta/assets/images/user/user-thumb-06.jpg",
      name: "Bilal Sheikh",
      role: "Manager",
    },
    {
      text: "Excellent work! The website turned out exactly as we envisioned. On budget and on time.",
      avatar:
        "https://demo.rstheme.com/html/flixta/assets/images/user/user-thumb-10.jpg",
      name: "Usman Ali",
      role: "Founder",
    },
    {
      text: "Great collaboration on the TradersEdge project — delivered a polished, performant frontend and excellent communication throughout.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Roman Saleem",
      role: "Client",
    },
  ];

  const floatingImages = [
    {
      src: "https://demo.rstheme.com/html/flixta/assets/images/user/user-thumb-05.jpg",
      alt: "Person 1",
      bgColor: "#7dd3fc",
    },
    {
      src: "https://demo.rstheme.com/html/flixta/assets/images/user/user-thumb-06.jpg",
      alt: "Person 2",
      bgColor: "#fda4af",
    },
    {
      src: "https://demo.rstheme.com/html/flixta/assets/images/user/user-thumb-07.jpg",
      alt: "Person 3",
      bgColor: "#a78bfa",
    },
    {
      src: "	https://demo.rstheme.com/html/flixta/assets/images/user/user-thumb-09.jpg",
      alt: "Person 4",
      bgColor: "#7dd3fc",
    },
    {
      src: "https://demo.rstheme.com/html/flixta/assets/images/user/user-thumb-08.jpg",
      alt: "Person 5",
      bgColor: "#7dd3fc",
    },
    {
      src: "https://demo.rstheme.com/html/flixta/assets/images/user/user-thumb-10.jpg",
      alt: "Person 6",
      bgColor: "#fcd34d",
    },
  ];

  const contactInfo = [
    {
      icon: "phone",
      label: "Phone",
      value: "+92 309 7969650",
    },
    {
      icon: "email",
      label: "Email",
      value: "muhammadjameelhameed7969@gmail.com",
    },
    {
      icon: "location",
      label: "Address",
      value: "Lahore, Pakistan",
    },
  ];

  const socialLinks = [
    // {
    //   icon: "github",
    //   name: "GitHub",
    //   url: "https://github.com/hammadsajjad",
    // },
    {
      icon: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-jameel-hameed-069025309",
    },
    // {
    //   icon: "upwork",
    //   name: "Upwork",
    //   url: "https://upwork.com/freelancers/hammadsajjad",
    // },
  ];

  return (
    <>
      <HeroSection
        titleLines={titleLines}
        video="https://demo.rstheme.com/html/flixta/assets/video/web-devlopment.mp4"
      />
      <StatsSection stats={stats} />
      <ServicesSection
        title="My Quality Services"
        subtitle="Delivering end-to-end web solutions with clean code, modern technologies, and a focus on performance and user experience."
        services={services}
        images={servicesImages}
      />
      <PortfolioSection
        title="My Recent Work"
        subtitle="A showcase of projects I've built using MERN stack, Next.js, and Laravel - each crafted with attention to detail and best practices."
        projects={projects}
      />
      <ExperienceSection
        experienceTitle="My Work Experience"
        educationTitle="My Education"
        experiences={experiences}
        education={education}
      />
      <SkillsSection
        title="My Technical Skills"
        subtitle="Proficient in modern web technologies and frameworks, continuously learning and adapting to deliver cutting-edge solutions."
        skills={skills}
      />
      <TestimonialsSection
        testimonials={testimonials}
        floatingImages={floatingImages}
      />
      <ContactSection
        subtitle="STAY CONNECTED"
        title="Let's Work Together!"
        contactInfo={contactInfo}
        socialLinks={socialLinks}
      />
    </>
  );
};

export default Home;
