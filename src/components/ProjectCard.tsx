import { ArrowUpRight } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolioData';

type Props = {
  project: PortfolioProject;
  onSelect: () => void;
};

export function ProjectCard({ project, onSelect }: Props) {
  return (
    <article
      tabIndex={0}
      role="button"
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onSelect();
        }
      }}
      className="group cursor-pointer overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
      aria-label={`Open project details for ${project.title}`}
    >
      <div className="overflow-hidden">
        <img src={project.image} alt={`${project.title} placeholder`} className="h-72 w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-600">{project.category}</span>
          <ArrowUpRight className="h-4 w-4 text-slate-600" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-slate-600">
          {project.tools.slice(0, 2).map((tool) => (
            <span key={tool} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1">{tool}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
