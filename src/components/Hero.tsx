import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { CloudDownload } from './CloudDownload';
import { FileChartColumn } from './FileChartColumn';
import { LayoutGrid } from './LayoutGrid';

const RESUME_FILE = '/resume/Tanaka Hiroshi.pdf';
const RESUME_PDF_PATH = encodeURI(RESUME_FILE);

const Hero = () => {
  const handleResumeView = () => {
    window.open(RESUME_PDF_PATH, '_blank', 'noopener,noreferrer');
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = RESUME_PDF_PATH;
    link.download = 'Tanaka Hiroshi.pdf';
    link.click();
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-36">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-6xl mx-auto text-center px-4">
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <img
              src="/photo/photo.png"
              alt="Tanaka Hiroshi"
              className="w-[30%] aspect-square max-w-full object-cover rounded-[50%]"
              loading="eager"
              decoding="async"
            />
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block">Hi, I'm Tanaka Hiroshi</span>
            <span className="block mt-2">
              <span className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">Senior Full-Stack AI Engineer</span>
              <span className="text-white">{' '}·{' '}</span>
              <span className="bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text">Data Analyst</span>
            </span>
            <span className="block mt-3 text-white text-lg sm:text-xl md:text-2xl font-normal">
              Osaka, Japan · Building scalable apps, analytics, and production-grade AI.
            </span>
          </motion.h1>

          <motion.h2
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="block">I focus on</span>
            <AnimatedText
              text={[
                ' End-to-end AI features & LLM integrations ',
                'Data pipelines, dashboards & actionable insights',
                'Full-stack systems from React/Vue to Python APIs',
                'MLOps, cloud-native architectures & reliability'
              ]}
              className="text-blue-400 font-medium"
            />
          </motion.h2>

          <motion.p
            className="text-md mb-10 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            10+ years across full-stack development, analytics, and AI—bridging front-end experiences with ML backends.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="https://github.com/tanakahiroshi92" target="_blank" rel="noopener noreferrer" className="gradient-border-button">
              <Github width={20} height={20} stroke="#ffffff" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/tanaka-hiroshi-474126405" target="_blank" rel="noopener noreferrer" className="gradient-border-button">
              <Linkedin width={20} height={20} stroke="#ffffff" />
              LinkedIn
            </a>
            <a href="#projects" className="gradient-border-button">
              <LayoutGrid width={20} height={20} stroke="#ffffff" />
              My Work
            </a>
            <div className="flex items-center gap-2">
              <button
                className="gradient-border-button"
                onClick={handleResumeView}
              >
                <FileChartColumn width={20} height={20} stroke="#ffffff" />
                Resume
              </button>
              <button
                className="gradient-border-button download-btn"
                onClick={handleResumeDownload}
                title="Download Resume"
              >
                <CloudDownload width={20} height={20} stroke="#ffffff" />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="animate-bounce p-2 bg-blue-900/30 rounded-full border border-blue-500/20">
              <a href="#technologies" className="text-blue-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
