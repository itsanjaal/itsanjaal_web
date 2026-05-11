export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  stat3: { value: string; label: string };
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Blazing-fast websites that convert",
    description:
      "We engineer high-performance web applications from pixel-perfect landing pages to complex enterprise platforms. Every line of code is written for speed, accessibility, and long-term maintainability.",
    features: [
      "Custom Next.js & React applications",
      "SEO-optimised architecture",
      "CMS integration (Sanity, Contentful)",
      "E-commerce & payment gateways",
      "API design & GraphQL/REST backends",
      "CI/CD pipelines & DevOps setup",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Vercel",
      "AWS",
    ],
    deliverables: [
      "Fully responsive web application",
      "Performance audit report",
      "Codebase handover + documentation",
      "6-month post-launch support",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "Deep-dive into your goals, users, and competitive landscape.",
      },
      {
        step: "02",
        title: "Architecture",
        desc: "Design scalable system architecture and technology stack.",
      },
      {
        step: "03",
        title: "Design",
        desc: "Craft pixel-perfect UI/UX prototypes and design systems.",
      },
      {
        step: "04",
        title: "Build",
        desc: "Iterative sprints with weekly demos and continuous integration.",
      },
      {
        step: "05",
        title: "Launch",
        desc: "Performance-optimised deployment with monitoring in place.",
      },
    ],
    stat1: { value: "150+", label: "Sites Shipped" },
    stat2: { value: "99%", label: "Uptime SLA" },
    stat3: { value: "2.1s", label: "Avg Load Time" },
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Native-feel apps for iOS & Android",
    description:
      "We build cross-platform mobile experiences that feel genuinely native. From MVP to App Store—our apps are engineered for performance, delight, and retention.",
    features: [
      "React Native & Expo development",
      "iOS & Android simultaneous delivery",
      "Offline-first architecture",
      "Push notifications & deep linking",
      "In-app purchases & subscriptions",
      "App Store optimisation & submission",
    ],
    techStack: [
      "React Native",
      "Flutter",
      "Expo",
      "TypeScript",
      "Firebase",
      "RevenueCat",
      "Sentry",
    ],
    deliverables: [
      "iOS & Android binaries",
      "App Store & Google Play submission",
      "Analytics dashboard setup",
      "12-month maintenance plan",
    ],
    process: [
      {
        step: "01",
        title: "Strategy",
        desc: "Define your app's core value proposition and target users.",
      },
      {
        step: "02",
        title: "Wireframes",
        desc: "Interactive prototypes validated with real users.",
      },
      {
        step: "03",
        title: "UI Design",
        desc: "Platform-native design following HIG & Material guidelines.",
      },
      {
        step: "04",
        title: "Development",
        desc: "Agile sprints with TestFlight/beta builds every two weeks.",
      },
      {
        step: "05",
        title: "Release",
        desc: "Store submission, ASO, and launch growth strategy.",
      },
    ],
    stat1: { value: "80+", label: "Apps Launched" },
    stat2: { value: "4.8★", label: "Avg Store Rating" },
    stat3: { value: "2M+", label: "End Users" },
  },
  {
    slug: "it-course",
    title: "IT Course",
    tagline: "Learn from industry practitioners, not textbooks",
    description:
      "Structured, project-driven IT training programmes designed for beginners, career-switchers, and working professionals. Our courses blend live mentorship with hands-on labs so every graduate ships real work on day one.",
    features: [
      "Live cohort & self-paced tracks",
      "Project-based curriculum",
      "1-on-1 mentorship sessions",
      "Career placement support",
      "Lifetime access to course materials",
      "Industry-recognised certification",
    ],
    techStack: ["Next.js", "Python", "Git & GitHub", "Docker", "AWS", "Figma"],
    deliverables: [
      "Structured learning path & syllabus",
      "Private community & Slack access",
      "Capstone project with code review",
      "Certificate of completion",
    ],
    process: [
      {
        step: "01",
        title: "Enrol",
        desc: "Choose your track and join the next cohort or start self-paced.",
      },
      {
        step: "02",
        title: "Learn",
        desc: "Video lessons, reading materials, and interactive quizzes.",
      },
      {
        step: "03",
        title: "Build",
        desc: "Hands-on labs and guided projects with real-world datasets.",
      },
      {
        step: "04",
        title: "Review",
        desc: "Code reviews and mentor feedback on every milestone.",
      },
      {
        step: "05",
        title: "Graduate",
        desc: "Demo day, portfolio polish, and job-readiness sessions.",
      },
    ],
    stat1: { value: "1,200+", label: "Graduates" },
    stat2: { value: "92%", label: "Job Placement" },
    stat3: { value: "4.9★", label: "Student Rating" },
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Interfaces people actually enjoy using",
    description:
      "We craft intuitive, beautiful digital experiences grounded in user research. From early-stage wireframes to polished design systems, every pixel is intentional and every interaction is tested with real users.",
    features: [
      "User research & persona creation",
      "Information architecture & flows",
      "Wireframing & interactive prototypes",
      "Visual design & design systems",
      "Usability testing & iteration",
      "Developer handoff (Figma tokens)",
    ],
    techStack: ["Figma", "FigJam", "Framer", "Maze", "Lottie", "Zeplin"],
    deliverables: [
      "Full Figma design file + components",
      "Interactive prototype for user testing",
      "Design system & token documentation",
      "Dev-ready handoff specs",
    ],
    process: [
      {
        step: "01",
        title: "Research",
        desc: "User interviews, competitive audits, and heuristic analysis.",
      },
      {
        step: "02",
        title: "Define",
        desc: "Personas, jobs-to-be-done, and problem statements.",
      },
      {
        step: "03",
        title: "Ideate",
        desc: "Sketches, wireframes, and rapid concept exploration.",
      },
      {
        step: "04",
        title: "Prototype",
        desc: "High-fidelity interactive prototypes ready for testing.",
      },
      {
        step: "05",
        title: "Handoff",
        desc: "Developer-ready specs, assets, and motion guidelines.",
      },
    ],
    stat1: { value: "320+", label: "Screens Designed" },
    stat2: { value: "40%", label: "Avg Conversion Lift" },
    stat3: { value: "98%", label: "Client Retention" },
  },
  {
    slug: "devops",
    title: "DevOps",
    tagline: "Ship faster, break nothing, sleep soundly",
    description:
      "We design and implement battle-tested DevOps pipelines that automate your path from code to production. Infrastructure as code, zero-downtime deployments, and observability stacks that give your team full confidence at scale.",
    features: [
      "CI/CD pipeline design & setup",
      "Infrastructure as Code (Terraform)",
      "Kubernetes & container orchestration",
      "Cloud cost optimisation (AWS/GCP/Azure)",
      "Monitoring, alerting & observability",
      "Security hardening & compliance",
    ],
    techStack: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Prometheus",
      "AWS",
    ],
    deliverables: [
      "Fully automated CI/CD pipeline",
      "IaC repository with runbooks",
      "Monitoring & alerting dashboard",
      "Incident response playbook",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        desc: "Assess existing infrastructure, bottlenecks, and security gaps.",
      },
      {
        step: "02",
        title: "Design",
        desc: "Architect scalable, cloud-native infrastructure blueprints.",
      },
      {
        step: "03",
        title: "Automate",
        desc: "Build CI/CD pipelines and IaC modules from the ground up.",
      },
      {
        step: "04",
        title: "Harden",
        desc: "Security scans, secrets management, and compliance checks.",
      },
      {
        step: "05",
        title: "Monitor",
        desc: "Set up full observability: metrics, logs, traces, and alerts.",
      },
    ],
    stat1: { value: "99.9%", label: "Uptime Achieved" },
    stat2: { value: "10x", label: "Deploy Frequency" },
    stat3: { value: "60%", label: "Avg Cost Saved" },
  },
  {
    slug: "content-writing",
    title: "Content Writing",
    tagline: "Words that rank, resonate, and convert",
    description:
      "Strategic content crafted by specialist writers who understand both search algorithms and human psychology. From SEO blog posts to brand storytelling — every piece drives measurable business outcomes.",
    features: [
      "SEO-optimised blog & article writing",
      "Website & landing page copywriting",
      "Technical documentation & white papers",
      "Email sequences & newsletter content",
      "Social media content calendars",
      "Brand voice guide development",
    ],
    techStack: [
      "Notion",
      "Surfer SEO",
      "Ahrefs",
      "Grammarly",
      "WordPress",
      "HubSpot",
    ],
    deliverables: [
      "Content strategy & editorial calendar",
      "SEO keyword research report",
      "Fully edited, publish-ready content",
      "Brand voice & style guide",
    ],
    process: [
      {
        step: "01",
        title: "Strategy",
        desc: "Keyword research, competitor gap analysis, and content mapping.",
      },
      {
        step: "02",
        title: "Brief",
        desc: "Detailed briefs with target audience, tone, and search intent.",
      },
      {
        step: "03",
        title: "Draft",
        desc: "Expert writers produce research-backed first drafts.",
      },
      {
        step: "04",
        title: "Refine",
        desc: "SEO optimisation, editing, and brand voice alignment.",
      },
      {
        step: "05",
        title: "Publish",
        desc: "CMS upload, metadata setup, and performance tracking.",
      },
    ],
    stat1: { value: "5M+", label: "Words Published" },
    stat2: { value: "3x", label: "Avg Traffic Lift" },
    stat3: { value: "48hr", label: "Avg Turnaround" },
  },
  {
    slug: "ai-strategy-prompt-engineering",
    title: "AI Strategy & Prompt Engineering",
    tagline: "Turn AI potential into measurable business outcomes",
    description:
      "We help organisations cut through AI hype and implement practical, ROI-driven strategies. From prompt engineering and fine-tuning to custom AI workflow automation — we make LLMs work reliably for your business.",
    features: [
      "AI readiness assessment & roadmap",
      "Custom prompt engineering & libraries",
      "LLM fine-tuning & RAG pipelines",
      "AI workflow & process automation",
      "Model evaluation & safety audits",
      "Team AI literacy workshops",
    ],
    techStack: [
      "OpenAI",
      "Claude API",
      "LangChain",
      "Pinecone",
      "Python",
      "Hugging Face",
    ],
    deliverables: [
      "AI strategy roadmap document",
      "Prompt library with version control",
      "Custom RAG or fine-tuned model",
      "AI governance & usage policy",
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        desc: "Map your workflows and identify highest-ROI AI opportunities.",
      },
      {
        step: "02",
        title: "Architect",
        desc: "Select the right models, retrieval strategies, and guardrails.",
      },
      {
        step: "03",
        title: "Engineer",
        desc: "Build and test prompt libraries, RAG pipelines, or fine-tunes.",
      },
      {
        step: "04",
        title: "Integrate",
        desc: "Embed AI capabilities into your existing tools and processes.",
      },
      {
        step: "05",
        title: "Iterate",
        desc: "Continuous evaluation, red-teaming, and performance tuning.",
      },
    ],
    stat1: { value: "70%", label: "Task Automation Rate" },
    stat2: { value: "4x", label: "Team Productivity Lift" },
    stat3: { value: "30+", label: "LLM Projects Shipped" },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
