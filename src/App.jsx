import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, ChevronRight, Code2, Zap, Layers } from "lucide-react";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Multimodal AI Gaming Pipeline", category: "Production Multimodal System",
      description: "Built deterministic multimodal orchestration pipelines integrating voice, image, and video generation into production gaming experiences supporting 6K+ live sessions with 88% weekly active usage.",
      tech: ["Python", "ElevenLabs", "Flux", "NanoBanana 2", "Veo 3.1", "LangChain", "n8n", "LLM APIs", "Fine-tuning", "FastAPI"],
      impact: "Supporting 6K+ live sessions with 88% weekly active usage · Improved audio consistency and user immersion through voice fine-tuning · Built deterministic routing with model swapping capabilities",
      highlights: ["Fine-tuned voice generation models using ElevenLabs APIs with domain-specific datasets, reducing speech artifacts and increasing immersion", "Integrated image generation pipelines with Flux and NanoBanana 2 for character consistency and sub-pixel text rendering", "Orchestrated video generation workflows using Veo 3.1 for context-aware visual storytelling in gameplay", "Designed low-latency conversational AI agents with deterministic routing and fallback logic for reliable guidance", "Built evaluation frameworks combining play depth, response reliability, and user feedback to reduce behavioral inconsistencies", "Architected flexible pipelines enabling model swapping and fine-tuning based on gameplay requirements"]
    },
    {
      title: "RL-Based NPC System for Games", category: "Production RL Architecture",
      description: "Designed and deployed end-to-end reinforcement learning system for adaptive game NPCs with distributed training infrastructure and production-grade orchestration.",
      tech: ["Python", "Ray RLlib", "PPO", "SAC", "Multi-Agent RL", "GPU Clusters", "Docker", "Kubernetes", "LLM Fine-tuning"],
      impact: "Production RL system enabling dynamic NPC behaviors · Distributed training pipeline reducing iteration cycles · Scalable architecture for multi-agent environments",
      highlights: ["End-to-end RL pipeline with PPO and SAC algorithms for adaptive NPC behaviors", "Distributed training infrastructure using Ray RLlib across GPU clusters", "Multi-agent RL system with coordinated behaviors and reward shaping", "Bridged RL systems with LLM fine-tuning for context-aware decision making", "Production deployment with real-time inference and monitoring dashboards"]
    },
    {
      title: "Personalized Graph-Based Retrieval System", category: "Research → Production",
      description: "Built graph-based retrieval augmentation system solving cold-start personalization for LLMs using user-centric knowledge graphs. Published at PACLIC 2025 with 22+ citations.",
      tech: ["Python", "Neo4j", "Knowledge Graphs", "RAG Pipelines", "LLMs", "Graph Neural Networks", "Vector Search", "PyTorch"],
      impact: "Outperformed state-of-the-art personalization methods in cold-start scenarios · 22+ citations · Production graph-based RAG system processing 80K+ annotated documents",
      highlights: ["Designed PGraphRAG framework leveraging user-centric knowledge graphs for cold-start personalization", "Built graph-based retrieval system integrating structured user knowledge into LLM prompts", "Created benchmark dataset for personalized text generation with sparse user history", "Deployed production RAG pipeline with Neo4j vector indexes over Amazon review graphs", "Published: 'Personalized Graph-based Retrieval for Large Language Models' (PACLIC 2025)"],
      images: ["/pgraphrag-coldstart-graph.png", "/pgraphrag-architecture.png"]
    },
    {
      title: "AI-Driven Parent Email Automation", category: "Production Pipeline",
      description: "Automated parent-facing email workflows by building a structured, agent-based pipeline that transforms raw educational content and attachments into validated outbound communication.",
      tech: ["TypeScript", "React.js", "Node.js", "FastAPI", "Tailwind", "OCR", "RAG Pipelines", "Schema-Constrained Generation"],
      impact: "Reduced internal release cycles from multiple days to under 24 hours · Supporting 6K+ monthly parent interactions · Increased processing speed by ~5×",
      highlights: ["AI agent workflow with schema-constrained generation", "Scraped & structured Notion-authored materials into machine-readable formats", "OCR validation for attached images and PDFs before triggering workflows", "Human-in-the-loop review gate for reliability", "Full-stack delivery layer with multimodal validation across 100s of learning-domain PDFs"]
    },
    {
      title: "Cursor MCP Integration", category: "MCP Agent",
      description: "Built a Cursor IDE MCP server with SSE-based streaming for real-time code context management and intelligent code completion workflows.",
      tech: ["TypeScript", "Node.js", "SSE Streaming", "MCP Protocol", "Secure Local Hosts"],
      impact: "Enabled low-latency agent communication with IDE systems",
      highlights: ["SSE-based bi-directional streaming", "Sandboxed tool execution environment", "Context-aware code planning & execution", "5+ specialized tools for code generation"]
    },
    {
      title: "Notion MCP Agent", category: "MCP Agent",
      description: "Engineered a Notion integration MCP server for managing workspace context, automating content workflows, and executing multi-step documentation tasks.",
      tech: ["TypeScript", "Notion API", "MCP Protocol", "RAG Pipelines", "REST APIs"],
      impact: "Automated content operations across engineering and creative teams",
      highlights: ["Real-time document retrieval & context management", "Multi-step workflow execution for content creation", "Graph-based retrieval over 80K+ annotated documents", "RAG pipeline for factual grounding"]
    },
    {
      title: "Unity MCP Server", category: "MCP Agent",
      description: "Developed a specialized MCP server for Unity game development workflows, enabling AI-driven event tracking, tool execution, and asset management.",
      tech: ["C#", "TypeScript", "HTTP Streaming", "MCP Protocol", "Tool Sandboxing"],
      impact: "Streamlined game development workflows with AI agents",
      highlights: ["HTTP-based streaming for cross-platform compatibility", "Event tracking and context management", "Tool-driven workflow execution", "Integration with internal development APIs"]
    },
    {
      title: "Multi-Agent Orchestration Platform", category: "Full-Stack",
      description: "End-to-end Next.js & React platform for deploying, managing, and monitoring 3+ specialized MCP agents with comprehensive visibility dashboards.",
      tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "FastAPI", "PostgreSQL"],
      impact: "Centralized AI agent management and monitoring across enterprise systems",
      highlights: ["Planning & evaluation framework for agent actions", "Real-time execution monitoring and logging", "Agent performance analytics and cost tracking", "Multi-step reasoning pipeline visualization"]
    },
    {
      title: "MCP Server Framework", category: "Infrastructure",
      description: "Reusable MCP server framework supporting both SSE and HTTP streaming protocols, enabling rapid deployment of specialized agents across systems.",
      tech: ["TypeScript", "Node.js", "SSE", "HTTP", "Docker", "Kubernetes"],
      impact: "Accelerated MCP agent development cycle significantly",
      highlights: ["SSE and HTTP/REST streaming support", "Secure local host configuration", "Sandboxed tool execution environment", "PulseMCP server integration and publishing"]
    },
    {
      title: "AI Agent Visibility Dashboard", category: "Frontend",
      description: "Comprehensive React dashboard for real-time monitoring of AI agents, with detailed logs, performance metrics, and execution traces.",
      tech: ["React", "TypeScript", "TailwindCSS", "WebSockets", "REST APIs"],
      impact: "Enabled real-time transparency into agent operations",
      highlights: ["Real-time log streaming and filtering", "Agent execution timeline visualization", "Performance metrics and cost analytics", "Tool execution history and debugging"]
    }
  ];

  const expertise = [
    {
      icon: <Zap className="w-8 h-8" />, title: "Multimodal AI Systems",
      skills: ["Voice Fine-tuning", "Image Generation", "Video Generation", "ElevenLabs", "Flux", "Veo 3.1", "LangChain"],
      description: "Building production multimodal pipelines that orchestrate voice, image, and video generation into cohesive interactive experiences with deterministic routing and model swapping."
    },
    {
      icon: <Code2 className="w-8 h-8" />, title: "Production RL & Agent Systems",
      skills: ["Ray RLlib", "PPO", "SAC", "Multi-Agent RL", "Conversational AI", "RAG Pipelines"],
      description: "Designing end-to-end reinforcement learning systems and AI agents with distributed training infrastructure, low-latency routing, and evaluation frameworks."
    },
    {
      icon: <Layers className="w-8 h-8" />, title: "Workflow Automation & Infrastructure",
      skills: ["Next.js", "React", "TypeScript", "FastAPI", "Neo4j", "Docker", "Kubernetes", "n8n"],
      description: "Building automation pipelines and full-stack AI infrastructure that eliminate manual workflows and reduce operational cycles from days to hours."
    }
  ];

  const timeline = [
    {
      date: "01/2025 – Present", role: "AI Engineer", company: "Nurture Holdings Inc · New York, NY",
      highlights: ["Integrated voice, image, and video pipelines into production gaming platform supporting 6K+ live sessions with 88% weekly active usage", "Fine-tuned voice generation models using ElevenLabs APIs with domain-specific datasets, reducing speech artifacts", "Designed low-latency conversational AI agents with deterministic routing and fallback logic for reliable gameplay guidance", "Orchestrated multimodal pipelines using LangChain and n8n with Flux diffusion models for image generation and Veo 3.1 for video", "Built evaluation frameworks combining play depth, response reliability, and user feedback to reduce behavioral inconsistencies", "Automated parent-facing workflows reducing release cycles from days to <24 hours", "Designed end-to-end RL system for game NPCs with distributed training on Ray RLlib and GPU clusters"]
    },
    {
      date: "09/2023 – 12/2024", role: "Data Science Research Assistant", company: "UC Santa Cruz",
      highlights: ["Vision-language & transformer model research", "Graph-based retrieval over 80K+ documents", "Published: Personalized Graph-Based Retrieval for LLMs (PACLIC 2025)"]
    },
    {
      date: "12/2021 – 08/2023", role: "ML Engineer", company: "Accenture · Bengaluru, India",
      highlights: ["Built automated ML deployment pipelines saving $250K in operational costs", "Computer vision workflows integrated into ServiceNow for automated processing", "Real-time monitoring dashboards tracking 5K+ daily predictions"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-cyan-400">Ojasmitha.dev</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            {["systems","expertise","experience","contact"].map(s => (
              <a key={s} href={`#${s}`} className="hover:text-cyan-300 transition capitalize">{s}</a>
            ))}
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-cyan-400">
            {mobileMenuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-4 space-y-3 text-sm">
            {["systems","expertise","experience","contact"].map(s => (
              <a key={s} href={`#${s}`} onClick={() => setMobileMenuOpen(false)} className="block hover:text-cyan-300 capitalize">{s}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-cyan-400 font-semibold tracking-widest uppercase text-sm">AI Engineer</p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Ojasmitha<br/>
            <span style={{background: "linear-gradient(90deg,#60a5fa,#22d3ee,#34d399)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>
              Pedirappagari
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Building production multimodal AI systems orchestrating voice, image, and video generation into interactive experiences · Expert in fine-tuning foundation models, distributed training, conversational AI, and automation pipelines that reduce cycles from days to hours.
          </p>
          <div className="flex gap-4 justify-center pt-2">
            <a href="#systems" className="px-7 py-3 rounded-lg font-semibold text-sm" style={{background:"linear-gradient(90deg,#3b82f6,#06b6d4)"}}>
              View Systems
            </a>
            <a href="#contact" className="px-7 py-3 rounded-lg font-semibold text-sm border border-cyan-500 hover:bg-cyan-500/10 transition">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section id="systems" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Production <span className="text-cyan-400">Systems & Automation</span></h2>
          <p className="text-center text-slate-400 mb-14">Workflows automated, pipelines built, and manual processes eliminated — click to explore</p>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {projects.map((p, i) => (
              <button key={i} onClick={() => setActiveProject(i)}
                className={`p-5 rounded-xl border text-left transition-all ${activeProject===i ? "border-cyan-400 bg-slate-800/70 shadow-lg shadow-cyan-500/10" : "border-slate-700 bg-slate-900/50 hover:border-slate-500"}`}>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{p.category}</span>
                <h3 className="font-bold text-base mt-1">{p.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">{p.description}</p>
              </button>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8 md:p-10">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{projects[activeProject].category}</span>
            <h3 className="text-2xl font-bold mt-2 mb-3">{projects[activeProject].title}</h3>
            <p className="text-slate-300 mb-8">{projects[activeProject].description}</p>
            {projects[activeProject].images && (
              <div className="mb-8 grid md:grid-cols-2 gap-4">
                {projects[activeProject].images.map((img, i) => (
                  <img key={i} src={img} alt={`${projects[activeProject].title} visualization ${i+1}`} className="rounded-lg border border-slate-700 w-full hover:border-cyan-500/50 transition"/>
                ))}
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-3 text-sm uppercase tracking-wider">Highlights</h4>
                <ul className="space-y-2">
                  {projects[activeProject].highlights.map((h,i) => (
                    <li key={i} className="flex gap-3 text-slate-300 text-sm">
                      <ChevronRight size={16} className="text-cyan-400 flex-shrink-0 mt-0.5"/>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-3 text-sm uppercase tracking-wider">Impact</h4>
                <p className="text-slate-300 text-sm mb-6">{projects[activeProject].impact}</p>
                <h4 className="font-semibold text-cyan-300 mb-3 text-sm uppercase tracking-wider">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].tech.map((t,i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-24 px-6 bg-slate-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Core <span className="text-cyan-400">Expertise</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((e,i) => (
              <div key={i} className="rounded-xl border border-slate-700 bg-slate-800/30 p-8 hover:border-cyan-500/50 transition">
                <div className="text-cyan-400 mb-4">{e.icon}</div>
                <h3 className="font-bold text-lg mb-2">{e.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{e.description}</p>
                <div className="flex flex-wrap gap-2">
                  {e.skills.map((s,j) => (
                    <span key={j} className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/20">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Professional <span className="text-cyan-400">Journey</span></h2>
          <div className="space-y-10 relative">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-slate-700"/>
            {timeline.map((t,i) => (
              <div key={i} className="flex gap-6 relative">
                <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-cyan-400 bg-slate-950 z-10 mt-1" style={{boxShadow:"0 0 12px #22d3ee55"}}/>
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{t.date}</span>
                  <h3 className="font-bold text-lg mt-1">{t.role}</h3>
                  <p className="text-slate-400 text-sm mb-3">{t.company}</p>
                  <ul className="space-y-1">
                    {t.highlights.map((h,j) => (
                      <li key={j} className="flex gap-2 text-slate-300 text-sm">
                        <span className="text-cyan-400">▸</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-slate-900/40">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Let's Build <span className="text-cyan-400">Together</span></h2>
          <p className="text-slate-400">Open to AI Engineering roles focused on multimodal AI systems, voice intelligence, production RL architecture, and scalable automation pipelines.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:ojasmithareddy17@gmail.com" className="flex items-center gap-2 px-6 py-3 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 transition text-sm font-medium">
              <Mail size={16}/> Email
            </a>
            <a href="https://linkedin.com/in/Ojasmitha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 transition text-sm font-medium">
              <Linkedin size={16}/> LinkedIn
            </a>
            <a href="https://github.com/ojasmitha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-cyan-500/40 rounded-lg hover:bg-cyan-500/10 transition text-sm font-medium">
              <Github size={16}/> GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        © 2026 Ojasmitha Pedirappagari · AI Engineer · New York, NY
      </footer>
    </div>
  );
}