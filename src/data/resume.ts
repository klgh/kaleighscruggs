/**
 * Resume content for the Portfolio section.
 * Sourced from Kaleigh_Scruggs_Resume_2025.md — edit here to update screen + print.
 */
export interface ResumeRole {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface ResumeEducation {
  school: string;
  degree: string;
  location: string;
  start: string;
  end: string;
}

export interface ResumeSkillGroup {
  label: string;
  items: string[];
}

export interface ResumeVolunteer {
  title: string;
  org: string;
  dates: string;
}

export const resume = {
  name: "Kaleigh Scruggs",
  headline: "Senior Software Engineer",
  location: "Suwanee, GA",
  phone: "404-641-1327",
  email: "kaleighscruggs@gmail.com",
  links: [
    {
      label: "linkedin.com/in/kaleigh",
      href: "https://www.linkedin.com/in/kaleigh/",
    },
    { label: "github.com/klgh", href: "https://github.com/klgh/" },
    { label: "kaleigh.dev", href: "https://kaleigh.dev/" },
  ],
  summary:
    "Senior Software Engineer with 10+ years of experience in front-end development, with deep expertise in Angular, and modern JavaScript ecosystems. Proven track record leading complex UI initiatives, championing accessibility to WCAG standards, and improving application performance. Passionate about mentoring and building inclusive, high-performing engineering teams.",
  skills: [
    {
      label: "Languages & Frameworks",
      items: [
        "TypeScript",
        "JavaScript",
        "Angular (v2+ to 17)",
        "RxJS",
        "NgRx",
        "React",
        "Gatsby",
        "SCSS/SASS",
        "HTML",
      ],
    },
    {
      label: "Architecture & Cloud",
      items: [
        "AWS (Lambda, S3, API Gateway)",
        "Serverless Framework",
        "Micro frontends",
        "Web Components",
      ],
    },
    {
      label: "UI Development & Accessibility",
      items: [
        "Flexbox/Grid",
        "Material UI",
        "Accessibility (WCAG 2.1+ Compliance)",
        "Keyboard Navigation",
        "Screen Reader Support",
        "Custom Component Libraries",
      ],
    },
    {
      label: "Tooling & Platforms",
      items: [
        "GitHub Actions (CI/CD)",
        "Datadog (RUM, logs, dashboards)",
        "LaunchDarkly (feature flags)",
        "OrderCloud",
        "Confluence",
        "Backstage",
        "Figma (dev handoff)",
      ],
    },
    {
      label: "Testing & Methodologies",
      items: ["TDD", "Jest", "Karma", "Agile (Scrum, Kanban)"],
    },
    {
      label: "Content & CMS",
      items: ["Markdown", "WordPress", "Drupal", "Netlify CMS"],
    },
  ] satisfies ResumeSkillGroup[],
  interests: ["Stand-Up Comedy", "Brazilian Jiu-Jitsu", "Genealogy"],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "NBCUniversal",
      location: "Remote",
      start: "May 2025",
      end: "Present",
      bullets: [
        "Lead engineering efforts across high-impact projects in youth sports applications, driving scalable, accessible, and maintainable front-end solutions in Angular.",
        "Championed modernization efforts across micro frontends and shared libraries, which guided architectural decisions to reduce complexity and technical debt, resulting in more efficient development processes.",
        "Enhanced observability with Datadog by creating actionable dashboards and structured logs, which improved triage time and increased the reliability of customer-facing apps.",
      ],
    },
    {
      title: "Software Engineer II",
      company: "NBCUniversal",
      location: "Remote",
      start: "Apr 2021",
      end: "May 2025",
      bullets: [
        "Modernized multiple Angular applications, leading version upgrades from 12 to 17 and reducing tech debt across shared libraries and SDKs.",
        "Contributed to a major refactoring of the legacy discount service, migrating core discount logic to support new promotion types like sibling discounts, significantly enhancing the flexibility and scalability of campaign configurations.",
        "Developed key components for the supplier add-on store, building both the customer-facing UI and the back-end product management tools that allowed vendors to manage their own catalogs.",
        "Built and integrated a new address validation service with the USPS API and developed a product taxonomy system to ensure sales tax accuracy, directly supporting critical financial operations.",
        "Established and enhanced observability by implementing Datadog RUM and creating custom dashboards, enabling proactive monitoring and data-informed product decisions.",
        "Delivered a custom WYSIWYG editor and refined SDK pipeline architecture to support scalable component development and reuse.",
        "Launched redesigned Payments and Receipt UI and contributed to SportsEngine's reusable component library in alignment with org design standards.",
        "Championed accessibility by driving WCAG enhancements across the Commerce app and the core Angular component library, implementing keyboard navigation and screen reader support to significantly improve usability.",
        "Automated CI/CD workflows and documentation updates using GitHub Actions and Confluence, improving team velocity and reducing manual steps.",
        "Promoted engineering excellence through regular maintenance, dependency updates, and security patching.",
        "Participated in DEI initiatives and supported a positive team culture through ERG involvement and peer mentorship.",
        "Contributed to the development of a new Commerce UI application using Angular, NgRx, and RxJS, collaborating with teammates to integrate Commerce and Address APIs.",
        "Played a key role in creating a new Angular component library, converting legacy components and collaborating with UX designers to ensure a unified user experience.",
        "Managed feature releases and user flows using LaunchDarkly in collaboration with the product team.",
      ],
    },
    {
      title: "Software Engineer II / Senior Consultant",
      company: "Daugherty Business Solutions",
      location: "Remote",
      start: "Aug 2020",
      end: "Apr 2021",
      bullets: [
        "Served as a consultant on React and Angular projects for a major home improvement retailer.",
        "Developed front-end functionality for an MVP React application, collaborating with the brand's design system team, which improved user interface consistency and user experience.",
        "Supported and enhanced Angular projects designed to improve curbside and in-store pickup management for store associates, leading to more efficient order processing and reduced wait times.",
      ],
    },
    {
      title: "Web Developer / Senior Consultant",
      company: "North Highland",
      location: "Atlanta, GA / Hybrid",
      start: "Dec 2018",
      end: "Jun 2020",
      bullets: [
        "Managed a team of four developers to successfully redesign and deliver new Drupal components and product pages for a key client.",
        "Served as a UI developer for the Delta News Hub's upgrade from Drupal 7 to 8, using SASS/CSS and Twig to implement new designs and improve responsiveness.",
        "Enhanced site performance by integrating lazy loading and conducting extensive cross-browser testing with BrowserStack.",
        "Initiated and developed an in-house proposal site generator using React, Gatsby, and Netlify CMS, which became a standardized template for non-technical users.",
      ],
    },
    {
      title: "Software Developer",
      company: "State Farm Insurance Co.",
      location: "Dunwoody, GA",
      start: "Jan 2015",
      end: "Dec 2018",
      bullets: [
        "Developed and enhanced a roadside assistance web application using Ember.js, focusing on responsiveness and accessibility compliance.",
        "Collaborated in an Agile environment, participating in all Scrum ceremonies and occasionally serving as Scrum Master.",
        "Pioneered and established the State Farm Atlanta Women in Technology group to support and empower women in the field, leading to increased networking opportunities and professional development for members.",
      ],
    },
    {
      title: "User Interface Developer",
      company: "Accenture / AT&T",
      location: "Dunwoody, GA",
      start: "Mar 2014",
      end: "Aug 2014",
      bullets: [
        "Delivered a new theme and layout for an internal company site using Twitter Bootstrap, CSS, and JavaScript.",
      ],
    },
    {
      title: "Web Developer",
      company: "Mobile Business Concepts",
      location: "Dunwoody, GA",
      start: "Jul 2013",
      end: "Feb 2014",
      bullets: [
        "Created responsive websites using Twitter Bootstrap and managed a project with two offshore developers.",
      ],
    },
    {
      title: "Marketing IT Specialist",
      company: "BravePoint Inc.",
      location: "Dunwoody, GA",
      start: "Jun 2012",
      end: "Jun 2013",
      bullets: [
        "Built and redesigned company websites and marketing emails using Eloqua, HTML, CSS, and JavaScript.",
      ],
    },
  ] satisfies ResumeRole[],
  education: [
    {
      school: "University of Georgia",
      degree: "M.S., Business and Technology",
      location: "Athens, GA",
      start: "Aug 2012",
      end: "May 2014",
    },
    {
      school: "Georgia Southern University",
      degree: "B.S., Information Technology",
      location: "Statesboro, GA",
      start: "Aug 2007",
      end: "May 2012",
    },
  ] satisfies ResumeEducation[],
  volunteer: [
    {
      title: "Engagement Track Volunteer Lead",
      org: "Frontend Queens",
      dates: "Apr 2024 – Present",
    },
    {
      title: "Front End Track Lead Volunteer",
      org: "Women Who Code",
      dates: "Aug 2022 – Apr 2024",
    },
    {
      title: "Dog Walking Volunteer",
      org: "Atlanta Humane Society",
      dates: "Sep 2021",
    },
    {
      title: "Volunteer Web Developer",
      org: "48in48",
      dates: "Jun 2021, Feb 2022",
    },
    {
      title: "Front End Track Volunteer Evangelist",
      org: "Women Who Code",
      dates: "Apr 2020 – Aug 2022",
    },
    {
      title: "Gwinnett Meetup Host",
      org: "Women Who Code",
      dates: "Aug 2019 – Feb 2020",
    },
  ] satisfies ResumeVolunteer[],
} as const;

/**
 * Builds a plain-text contact line for ATS parsers (pipe-separated).
 */
export function resumeContactLine(): string {
  const parts: string[] = [resume.location, resume.phone, resume.email];
  for (const link of resume.links) {
    parts.push(link.label);
  }
  return parts.join(" | ");
}
