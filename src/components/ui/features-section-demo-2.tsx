import React from 'react';

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Full-stack delivery",
      description: "React, Next.js, and Vue on the front end with Node.js, Django, Flask, and FastAPI behind robust REST APIs.",
    },
    {
      title: "AI & LLMs",
      description: "Production ML features, LLM integrations (GPT, Claude), RAG workflows, evaluation, and monitoring.",
    },
    {
      title: "Data & analytics",
      description: "ETL/ELT, warehousing, dashboards, BI, and experimentation—from instrumentation to executive-ready insights.",
    },
    {
      title: "MLOps & cloud",
      description: "Reproducible training, CI/CD for models, drift and quality checks on AWS with Docker and Kubernetes.",
    },
    {
      title: "UX & reliability",
      description: "Responsive interfaces, performance-minded implementations, tests, and structured releases.",
    },
    {
      title: "Scale & APIs",
      description: "Services tuned for throughput and latency—from high-volume prediction APIs to dependable data pipelines.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const FeatureCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="glass">
          <div className="content">
            <span className="title">{title}</span>
            <span className="text">{description}</span>
          </div>
        </div>
        
        <div className="logo">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5">
            <svg className="svg" viewBox="0 0 24 24">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" fill="currentColor"/>
              <path d="M2 12L12 17L22 12" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}; 