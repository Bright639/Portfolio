import { X } from 'lucide-react';
import type { PortfolioProject } from '../data/portfolioData';

type Props = {
  project: PortfolioProject;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" aria-modal="true" role="dialog">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[30px] border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Project Details</p>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">{project.title}</h3>
          </div>
          <button onClick={onClose} className="rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-slate-50" aria-label="Close project details">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 p-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <img src={project.image} alt={`${project.title} modal preview`} className="h-[360px] w-full rounded-[22px] object-cover" />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Category</div>
                <div className="mt-2 text-sm font-medium text-slate-800">{project.category}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Project Type</div>
                <div className="mt-2 text-sm font-medium text-slate-800">{project.projectType}</div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Role</div>
              <div className="mt-2 text-base font-medium text-slate-800">{project.role}</div>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Tools Used</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">{tool}</span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Project Objective</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{project.objective}</p>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Design Approach</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{project.approach}</p>
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Final Design</div>
              <p className="mt-2 text-sm leading-7 text-slate-600">{project.finalDesign}</p>
            </div>

            {project.projectLink && (
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Project Link</div>
                <a href={project.projectLink} className="mt-2 inline-flex text-sm font-medium text-slate-800 underline decoration-slate-400 underline-offset-4">{project.projectLink}</a>
              </div>
            )}

            {project.client && (
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Client / Organization</div>
                <div className="mt-2 text-sm font-medium text-slate-800">{project.client}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
