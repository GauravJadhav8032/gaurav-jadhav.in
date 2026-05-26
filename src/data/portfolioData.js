export const portfolioData = {
    personalInfo: {
        name: "Gaurav Jadhav",
        title: "Full-Stack Developer ",
        subtitle: "",
        email: "gauravsjadhav02@gmail.com",
        phone: "+91-9850258032",
        location: "Amravati, Maharashtra, IN",
        linkedin: "https://www.linkedin.com/in/gaurav-jadhav-919419288/",
        github: "https://github.com/GauravJadhav8032",
        portfolio: "https://drive.google.com/file/d/167jrRwtlfmjdqaxdIriscJCR32w3oP1v/view?usp=drive_link",
        resumeLink: "https://drive.google.com/file/d/167jrRwtlfmjdqaxdIriscJCR32w3oP1v/view?usp=drive_link",
    },

    summary:
        "Versatile Full Stack Developer with hands-on experience across frontend, backend, and full-stack development.Proficient in Angular, ReactJS, Node.js, Express, MongoDB, and MySQL with strong command over REST APIdesign and integration. Skilled in JWT authentication, Swagger documentation, and AI-powered API integration.Experienced in Agile workflows with a proven ability to build and deploy responsive, user-centric web applicationsend-to-end.",

    education: [
        {
            institution: "P. R. Pote Patil College of Engineering and Management",
            degree: "B.E. in Computer Science and Engineering",
            grade: "6.5/10 CGPA (Till 7th Semester)",
            location: "Amravati, MH",
            year: "2022 – 2026",
        },
        {
            institution: "Shriman Chandulal Shet HighSchool & Jr. College",
            degree: "Maharashtra Board (Class XII)",
            grade: "69%",
            location: "Khed, Ratnagiri, MH",
            year: "2020 – 2022",
        },
        {
            institution: "Jagruti Vidyalaya, Akola",
            degree: "Maharashtra Board (Class XI)",
            grade: "79%",
            location: "Akola, MH",
            year: "2019 – 2020",
        },
    ],

    experience: [
        {
            role: "Angular Web Development Intern",
            company: "Infosys Springboard",
            period: "Sept 2025 – Nov 2025",
            type: "Internship",
            bullets: [
                "Built and integrated RESTful APIs using Node.js, Express, and MongoDB with an Angular frontend for the TaxPal Project.",
                "Implemented Swagger documentation, API testing, and backend integration for Settings and Categories modules.",
                "Completed full-stack experiential training covering component architecture, routing, and state management in Angular.",
            ],
        },
        {
            role: "Java Full Stack Intern",
            company: "AICTE Eduskill",
            period: "April 2025 – June 2025",
            type: "Internship",
            bullets: [
                "Completed structured training on Java, Spring Boot, HTML, CSS, and JavaScript with focus on OOP, MVC architecture, and database integration.",
                "Strengthened full-stack fundamentals through guided learning and practical exercises involving REST API development.",
            ],
        },
    ],

    projects: [
        {
            name: "TaxPal",
            tagline: "Personal Finance & Tax Estimator",
            description:
                "A full-stack web application enabling freelancers to track income/expenses, manage budgets, and estimate taxes. Designed responsive UI screens and integrated REST APIs for financial report generation, data export, JWT-based authentication, dashboard analytics, and Swagger-based API documentation.",
            tech: ["Angular", "Node.js", "Express", "MongoDB", "JWT", "Swagger"],
            live: "https://taxpal-ten.vercel.app/",
            github: "https://github.com/GauravJadhav8032",
            featured: true,
        },
        {
            name: "LearnerBits",
            tagline: "Student Resource & Tech Blog Platform",
            description:
                "Built and scaled a dynamic WordPress platform serving study notes, tech blogs, and job updates to 50,000+ visitors. Enhanced accessibility and engagement through user-centric design and SEO optimization.",
            tech: ["WordPress", "Elementor", "SEO"],
            live: "https://learnerbits.com/",
            github: null,
            featured: true,
        },
        {
            name: "NatureJournal",
            tagline: "AI Assisted Journal System",
            description:
                "Built a full-stack journaling app using React, Node.js, and MongoDB to store and manage user journal entries. Integrated Gemini API (LLM) to analyze emotions, extract keywords, and generate AI-powered summaries, demonstrating practical GenAI and prompt engineering skills. Deployed using Vercel (frontend) and Render (backend), applying cloud-based deployment workflows.",
            tech: ["React", "Node.js", "MongoDB", "Gemini API", "REST APIs"],
            live: "https://naturejournal.vercel.app/",
            github: null,
            featured: true,
        },
        {
            name: "CodeNavigator",
            tagline: "Learning Path Generator",
            description:
                "Developed a full-stack platform for personalized tech learning roadmaps. Built secure REST APIs with JWT authentication and progress tracking. Engineered a responsive dashboard for roadmap visualization and insights.",
            tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"],
            live: "https://code-navigator-blond.vercel.app/",
            github: null,
            featured: true,
        },
    ],

    skills: [
        { category: "Frontend", items: ["Angular", "TypeScript", "HTML5", "CSS3", "JavaScript"] },
        { category: "Backend", items: ["Node.js", "Express.js", "Java"] },
        { category: "Database", items: ["MongoDB", "MySQL"] },
        { category: "Tools & Platforms", items: ["Git", "GitHub", "WordPress", "Elementor", "Swagger"] },
        { category: "Concepts", items: ["REST APIs", "JWT Auth", "OOP"] },
    ],
};
