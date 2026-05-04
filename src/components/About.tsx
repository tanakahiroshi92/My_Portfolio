import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "Sep 2023 – Nov 2025",
    title: "AI Engineer — Cofame, Inc.",
    description:
      "• Led delivery of production AI features end-to-end: data preparation, model selection, training/evaluation, deployment, and monitoring.\n• Developed and deployed AI-enhanced chatbots for enterprise clients, improving customer support efficiency by 35%.\n• Integrated LLMs (GPT, Claude) into existing business communication platforms for unified relationship search.\n• Built RESTful APIs serving ML predictions, handling 10K+ requests/day with sub-200ms latency.\n• Collaborated with cross-functional teams to migrate legacy systems to cloud-native AI architectures on AWS.\n• Implemented LLM-enabled workflows (search/assist/summarization) with RAG, prompt/version management, and automated evaluation.\n• Designed MLOps pipelines (CI/CD for models, reproducible training, experiment tracking) with monitoring for quality, drift, and operations.",
    type: "experience",
  },
  {
    id: 2,
    year: "June 2021 – Aug 2023",
    title: "Data Analyst — ABEJA, Inc.",
    description:
      "• Owned analytics lifecycle: requirements → instrumentation → ETL → data models → dashboards → insights.\n• Built and maintained reliable pipelines and curated datasets; improved data quality with tests and anomaly detection.\n• Delivered executive dashboards and self-serve analytics, reducing manual reporting and improving KPI visibility.\n• Analyzed large-scale datasets (100K+ records) for actionable insights for manufacturing and retail clients.\n• Collaborated with AI engineers on training data validation, improving model accuracy by 15%.",
    type: "experience",
  },
  {
    id: 3,
    year: "Jan 2016 – May 2021",
    title: "Full Stack Web Developer — New Crew Systems",
    description:
      "• Designed and maintained full-stack web applications for enterprise IT consulting and system development clients.\n• Built responsive interfaces with React and Vue.js, improving user engagement by 25%.\n• Developed backend services with Node.js and Django REST Framework: auth, validation, and API integration.\n• Improved stability via automated tests, monitoring, and structured releases.\n• Owned APIs, schema design, and frontend features with a focus on performance and on-site usability.",
    type: "experience",
  },
  {
    id: 4,
    year: "Apr 2011 – Mar 2015",
    title: "Bachelor of Engineering in Computer Science — Osaka University, Osaka, Japan",
    description:
      "Computer science fundamentals: software engineering, algorithms, systems, and databases—foundation for full-stack, analytics, and AI work.",
    type: "education",
  },
  {
    id: 5,
    year: "Certifications",
    title: "HackerRank",
    description: "• Frontend Developer (React)\n• Software Engineer",
    type: "award",
  },
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>

      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
        Senior Full-Stack AI Engineer with 10+ years across web development, data analytics, and AI engineering—shipping scalable apps,
        data-driven solutions, and production ML with strong front-end-to-model integration.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Tech Stack & Skills */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Tech Arsenal</h3>

              {/* Skill Categories */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Languages</h4>
                  <div className="space-y-2">
                    {[
                      { name: 'Japanese', level: 100 },
                      { name: 'English', level: 60 },
                    ].map((lang, index) => (
                      <div key={lang.name} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{lang.name}</span>
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${lang.level}%`,
                              animationDelay: `${index * 200}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend</h4>
                  <div className="space-y-2">
                    {['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap'].map((skill, index) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill}</span>
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${85 + (index * 3)}%`,
                              animationDelay: `${index * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Backend</h4>
                  <div className="space-y-2">
                    {['Python', 'Node.js', 'Django', 'Flask', 'FastAPI', 'REST APIs'].map((skill, index) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill}</span>
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${80 + (index * 4)}%`,
                              animationDelay: `${(index + 4) * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Data & databases</h4>
                  <div className="space-y-2">
                    {['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'ETL/ELT', 'Warehousing'].map((skill, index) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill}</span>
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${80 + (index * 4)}%`,
                              animationDelay: `${(index + 4) * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">AI, MLOps & cloud</h4>
                  <div className="space-y-2">
                    {['LLMs & RAG', 'Model evaluation', 'MLOps / CI/CD', 'AWS', 'Docker', 'Kubernetes'].map((skill, index) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill}</span>
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${75 + (index * 5)}%`,
                              animationDelay: `${(index + 8) * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>

            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <div key={item.id} className="relative pl-16 flex items-start group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all w-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const GraduationIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21"
    />
  </svg>
);

const AwardIcon = () => (
  <svg
    className="w-5 h-5 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export default About;
