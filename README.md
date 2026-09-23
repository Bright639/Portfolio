import type { LucideIcon } from 'lucide-react';

type Props = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

export function SocialLink({ label, href, Icon }: Props) {
  return (
    <a href={href} aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-500 hover:text-slate-900">
      <Icon className="h-4 w-4" />
    </a>
  );
}
