import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";

const details: Record<string, { problem: string; pipeline: string[]; role: string; learnings: string }> = {
  "mental-health": {
    problem: "How can longitudinal behavioral data be structured and modeled to predict student stress and psychological well-being?",
    pipeline: ["Raw sensing data", "Cleaning & alignment", "Feature engineering", "Temporal processing", "Model training", "Evaluation"],
    role: "Designed preprocessing and modeling experiments, compared classical ML with sequential deep learning approaches, and evaluated results using model-performance metrics.",
    learnings: "Working with longitudinal data highlighted the importance of temporal structure, consistent preprocessing, and choosing evaluation strategies that reflect the actual prediction task."
  },
  "visual-speech": {
    problem: "How can visual information from speech-related facial movements be transformed into a sequence model for recognition?",
    pipeline: ["Video samples", "Frame extraction", "Normalization", "Uniform sampling", "ResNet50V2", "BiGRU", "Prediction"],
    role: "Built the preprocessing and deep learning pipeline for an end-to-end visual speech recognition experiment.",
    learnings: "Sequence modeling requires careful control of frame sampling and sequence length so that visual features remain useful to the temporal model."
  },
  "birdclef": {
    problem: "How can noisy environmental audio be transformed into useful representations for wildlife species classification?",
    pipeline: ["Raw field audio", "Augmentation", "Mel-Spectrogram", "CNN features", "Temporal modeling", "Species prediction"],
    role: "Worked on audio preprocessing and deep learning experimentation for wildlife sound classification.",
    learnings: "Real-world audio contains overlapping and noisy signals, making preprocessing and representation choices critical to model performance."
  }
};

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <><Navbar /><main className="container not-found"><h1>Project not found.</h1><Link to="/">← Back home</Link></main></>;

  const detail = details[project.slug] ?? {
    problem: project.description,
    pipeline: ["Problem", "Data", "Preprocessing", "Implementation", "Evaluation"],
    role: "Designed and implemented the project workflow, experimentation, and evaluation.",
    learnings: "The project strengthened practical problem-solving and engineering skills."
  };

  return (
    <>
      <Navbar />
      <main className="case container">
        <Link className="back" to="/"><ArrowLeft size={17} /> Back to work</Link>
        <div className="case-head">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-intro">{project.description}</p>
          <div className="case-result"><strong>{project.result}</strong><span>{project.resultLabel}</span></div>
        </div>

        <div className="case-section">
          <div className="section-label">01 / THE PROBLEM</div>
          <p className="case-text">{detail.problem}</p>
        </div>

        <div className="case-section">
          <div className="section-label">02 / PIPELINE</div>
          <div className="pipeline">
            {detail.pipeline.map((step, i) => <div key={step}><span>0{i + 1}</span><strong>{step}</strong>{i < detail.pipeline.length - 1 && <b>↓</b>}</div>)}
          </div>
        </div>

        <div className="case-section">
          <div className="section-label">03 / MY ROLE</div>
          <p className="case-text">{detail.role}</p>
        </div>

        <div className="case-section">
          <div className="section-label">04 / STACK</div>
          <div className="tags large">{project.stack.map(x => <span key={x}>{x}</span>)}</div>
        </div>

        <div className="case-section">
          <div className="section-label">05 / WHAT I LEARNED</div>
          <p className="case-text">{detail.learnings}</p>
        </div>

        <div className="case-footer">
          <Link className="button ghost" to="/">← More projects</Link>
          {project.github && <a className="button primary" href={project.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={17} /></a>}
        </div>
      </main>
    </>
  );
}