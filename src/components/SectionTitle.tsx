type Props = {
  eyebrow?: string;
  title: string;
  light?: boolean;
};

export function SectionTitle({ eyebrow, title, light = false }: Props) {
  return (
    <div>
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? 'text-slate-300' : 'text-slate-500'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-3xl font-black tracking-[-0.05em] sm:text-4xl ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
    </div>
  );
}
