import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  BrushCleaning,
  Camera,
  Check,
  ChevronRight,
  Download,
  Edit3,
  Facebook,
  FileText,
  FolderKanban,
  Globe,
  Instagram,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  PenTool,
  Phone,
  Sparkles,
  Target,
  Type,
  Users,
  Wand2,
  Workflow,
  X
} from 'lucide-react';
import { portfolioProjects, portfolioCategories } from './data/portfolioData';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { SectionTitle } from './components/SectionTitle';
import { SocialLink } from './components/SocialLink';

const toolGroups = [
  {
    title: 'Design Tools',
    items: [
      { name: 'Adobe Photoshop', level: 'Used regularly' },
      { name: 'Adobe Illustrator', level: 'Used regularly' },
      { name: 'Microsoft PowerPoint', level: 'Used regularly' },
      { name: 'Canva', level: 'Familiar' }
    ]
  },
  {
    title: 'Creative Workflows',
    items: [
      { name: 'AI Creative Tools', level: 'Currently developing' },
      { name: 'Digital Content Creation', level: 'Used regularly' },
      { name: 'Photo Editing', level: 'Used regularly' },
      { name: 'Typography & Layout', level: 'Used regularly' }
    ]
  },
  {
    title: 'Technology & Web',
    items: [
      { name: 'Git / GitHub', level: 'Familiar' },
      { name: 'Web Development Tools', level: 'Currently developing' },
      { name: 'JavaScript', level: 'Currently developing' },
      { name: 'HTML / CSS', level: 'Currently developing' }
    ]
  }
];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Tools', href: '#tools' },
  { label: 'Contact', href: '#contact' }
];

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the purpose, audience and message.',
    icon: Target
  },
  {
    number: '02',
    title: 'Research',
    description: 'Explore visual direction, references, typography and colour possibilities.',
    icon: SearchIcon
  },
  {
    number: '03',
    title: 'Concept',
    description: 'Develop the visual concept and layout.',
    icon: Palette
  },
  {
    number: '04',
    title: 'Refine',
    description: 'Improve hierarchy, spacing, readability, imagery and visual balance.',
    icon: Layers3
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Prepare the final design for digital or print use.',
    icon: Check
  }
];

const principles = [
  { title: 'Clarity', description: 'Clear communication helps the audience understand the message quickly and confidently.' },
  { title: 'Creativity', description: 'Creative thinking brings freshness and originality to each visual solution.' },
  { title: 'Consistency', description: 'Coherent visual systems build trust and reinforce a professional brand presence.' },
  { title: 'Purpose', description: 'Every design decision should support the intended message and objective.' },
  { title: 'Audience', description: 'Design works best when it connects with the needs, interests and behaviour of the audience.' }
];

const selectedProjects = [
  { title: 'Personal Projects', year: '[YEAR]', role: '[ROLE]', description: 'Selected creative work developed for personal study, experimentation and digital presentation.', image: '/images/portfolio/design-image-01.svg' },
  { title: 'Community Projects', year: '[YEAR]', role: '[ROLE]', description: 'Visual materials created for community engagement, awareness and promotional activities.', image: '/images/portfolio/design-image-02.svg' },
  { title: 'Educational Designs', year: '[YEAR]', role: '[ROLE]', description: 'Poster and educational graphics supporting learning programmes and school communication.', image: '/images/portfolio/design-image-03.svg' },
  { title: 'Church / Ministry Designs', year: '[YEAR]', role: '[ROLE]', description: 'Creative graphics for church programmes, announcements and inspirational content.', image: '/images/portfolio/design-image-04.svg' },
  { title: 'Business Promotional Designs', year: '[YEAR]', role: '[ROLE]', description: 'Marketing and promotional materials developed to communicate value, products and services.', image: '/images/portfolio/design-image-05.svg' }
];

const projectHighlights = [
  {
    icon: PencilIcon,
    title: 'Poster Design',
    description: 'Strong promotional layouts for campaigns, events and announcements.'
  },
  {
    icon: Camera,
    title: 'Social Media Graphics',
    description: 'Visual stories and promotions built for digital engagement.'
  },
  {
    icon: Briefcase,
    title: 'Business Branding',
    description: 'Clean, purposeful materials for visibility and communication.'
  },
  {
    icon: FileText,
    title: 'Educational Content',
    description: 'A clear visual language for learning and awareness campaigns.'
  }
];

function SearchIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><circle cx="11" cy="11" r="6" /><path d="M16 16L21 21" /></svg>;
}

function PencilIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></svg>;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioProjects)[number] | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return portfolioProjects;
    return portfolioProjects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const pdfHref = '/portfolio/Julius-Kiema-Graphic-Design-Portfolio.pdf';

  const handlePdfClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <div className="bg-paper text-slate-800 antialiased">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Julius Kiema home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">JK</div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Julius Kiema</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#portfolio" className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-800 hover:bg-slate-900 hover:text-white">
              View My Work
            </a>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={20} /> : <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-slate-700" />
              <span className="h-0.5 w-5 rounded-full bg-slate-700" />
              <span className="h-0.5 w-5 rounded-full bg-slate-700" />
            </span>}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-paper md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#portfolio" className="mt-2 rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white" onClick={() => setMobileOpen(false)}>
                View My Work
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(163,106,67,0.14),transparent_60%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-20">
            <div className="flex flex-col justify-center">
              <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-amber-900">
                <MapPin className="h-3.5 w-3.5" /> Based in Kenya
              </span>
              <h1 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-6xl">
                Creative Visuals. Clear Communication. Purposeful Design.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                I’m Julius Kiema, a graphic designer and digital creative from Kenya, passionate about transforming ideas into professional and engaging visual content.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                  View My Portfolio <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={pdfHref}
                  onClick={handlePdfClick}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                  aria-disabled="true"
                >
                  <Download className="h-4 w-4" /> Download Portfolio
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-600" /> Creative & motivated</div>
                <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-600" /> Digital-first thinking</div>
                <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-600" /> Continuous learning</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-amber-200/40 blur-3xl" />
              <div className="absolute -right-4 bottom-8 h-32 w-32 rounded-full bg-slate-200/60 blur-3xl" />

              <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-4 shadow-soft">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
                    <img src="/images/profile/julius-kiema.svg" alt="Julius Kiema portrait placeholder" className="h-full w-full object-cover" />
                  </div>
                  <div className="grid gap-4">
                    <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-gradient-to-br from-stone-200 to-stone-100">
                      <img src="/images/portfolio/jomu-spices.svg" alt="Promotional poster placeholder" className="h-40 w-full object-cover" />
                    </div>
                    <div className="rounded-[22px] border border-slate-200 bg-slate-900 p-4 text-white">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Creative Focus</p>
                      <p className="mt-3 text-lg font-semibold">Graphic design, visual storytelling and digital content.</p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-gradient-to-br from-neutral-200 to-stone-100">
                    <img src="/images/portfolio/school-design-01.svg" alt="School design placeholder" className="h-40 w-full object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-gradient-to-br from-amber-100 to-orange-100">
                    <img src="/images/portfolio/church-design-01.svg" alt="Church design placeholder" className="h-40 w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="About Me" title="Design with purpose, personality and clarity." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white p-4 shadow-soft">
              <img src="/images/profile/julius-kiema.svg" alt="Julius Kiema profile placeholder" className="h-[420px] w-full rounded-[22px] object-cover" />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-8 text-slate-600">
                I am a creative and motivated graphic designer with a passion for visual communication and digital design. I create visually appealing and purposeful designs that communicate ideas clearly and effectively.
              </p>
              <p className="text-lg leading-8 text-slate-600">
                My design interests and experience include promotional posters, social media graphics, school advertisements, church and ministry materials, business promotional materials, event graphics and other digital content.
              </p>
              <p className="text-lg leading-8 text-slate-600">
                I enjoy combining creativity, typography, colour, layout and modern design principles to create designs that are both attractive and effective.
              </p>
              <p className="text-lg leading-8 text-slate-600">
                I am continuously improving my skills in graphic design, digital content creation and technology while developing practical solutions for individuals, organizations, businesses and community groups.
              </p>

              <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Currently Learning</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Advanced graphic design', 'Digital content creation', 'Web development', 'AI-assisted creative workflows', 'Modern digital tools'].map((item) => (
                    <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-slate-100">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle light eyebrow="Skills" title="Creative abilities shaped by design thinking and digital practice." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                'Graphic Design', 'Poster Design', 'Flyer Design', 'Social Media Graphics', 'Advertisement Design', 'School Promotional Materials', 'Church & Ministry Graphics', 'Business Promotional Designs', 'Event Graphics', 'Basic Logo Design', 'Branding', 'Typography', 'Colour Selection', 'Photo Editing', 'Layout Design', 'Digital Content Creation'
              ].map((skill) => (
                <div key={skill} className="rounded-2xl border border-slate-700 bg-white/5 p-4 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-white/10">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Services" title="Design support for schools, organizations, churches, businesses and communities." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: 'Poster & Flyer Design',
                description: 'Professional promotional designs for events, businesses, schools, churches and organizations.',
                icon: PencilIcon
              },
              {
                title: 'Social Media Graphics',
                description: 'Engaging visual content for Facebook, Instagram, WhatsApp and other digital platforms.',
                icon: MonitorSmartphone
              },
              {
                title: 'Business Promotional Design',
                description: 'Marketing graphics designed to communicate products, services and brand messages.',
                icon: Briefcase
              },
              {
                title: 'School & Education Designs',
                description: 'Creative visual materials for schools, educational programmes, admissions and events.',
                icon: FileText
              },
              {
                title: 'Church & Ministry Designs',
                description: 'Professional graphics for church programmes, ministries, conferences, youth events and announcements.',
                icon: Sparkles
              },
              {
                title: 'Event Graphics',
                description: 'Promotional graphics for meetings, celebrations, conferences and community events.',
                icon: Users
              },
              {
                title: 'Basic Branding',
                description: 'Basic visual identity materials including logos, colour direction and branded promotional graphics.',
                icon: BrushCleaning
              }
            ].map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionTitle eyebrow="Featured Project" title="Jomu Spices and Firm Ltd — More Taste, More Value" />
              <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-700">Business Promotional Design</span>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-soft">
                <img src="/images/portfolio/jomu-spices.svg" alt="Jomu Spices promotional poster placeholder" className="h-full w-full rounded-[20px] object-cover" />
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Project Objective</p>
                <p className="mt-4 text-lg leading-8 text-slate-700">Create an attractive promotional design that communicates the brand message and products clearly.</p>

                <div className="mt-8 space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Role</p>
                    <p className="mt-2 text-base font-medium text-slate-800">Graphic Designer</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Tools</p>
                    <p className="mt-2 text-base font-medium text-slate-800">Adobe Photoshop / Adobe Illustrator</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Client / Organization</p>
                    <p className="mt-2 text-base font-medium text-slate-800">[CLIENT NAME - OPTIONAL]</p>
                  </div>
                  <a href="[CLIENT WEBSITE LINK]" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4">
                    View project link <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Portfolio" title="Selected Design Work" />

          <div className="mt-8 flex flex-wrap gap-3">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === category
                    ? 'border-slate-900 bg-slate-900 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-slate-500'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={() => setSelectedProject(project)} />
            ))}
          </div>
        </section>

        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle light eyebrow="Education / School Design" title="Design support for education-focused communication and outreach." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                { title: 'School Advertisement Design', description: 'Promotional materials designed for school visibility and community awareness.', tools: 'Adobe Photoshop / PowerPoint', link: '[PROJECT LINK]' },
                { title: 'School Digital & E-Learning Programme', description: 'Creative graphics for digital and educational initiatives.', tools: 'Adobe Illustrator / Canva', link: '[PROJECT LINK]' },
                { title: 'School Vacancy Advertisement', description: 'Clear and engaging recruitment communication for educational roles.', tools: 'Adobe Photoshop / Illustrator', link: '[PROJECT LINK]' },
                { title: 'School Event Graphics', description: 'Event visuals supporting school gatherings, programmes and public notices.', tools: 'PowerPoint / Photoshop', link: '[PROJECT LINK]' }
              ].map((item) => (
                <article key={item.title} className="overflow-hidden rounded-[26px] border border-slate-700 bg-white/5 p-4">
                  <img src="/images/portfolio/school-design-02.svg" alt={`${item.title} placeholder`} className="h-52 w-full rounded-[18px] object-cover" />
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                  <div className="mt-4 text-xs uppercase tracking-[0.15em] text-slate-400">{item.tools}</div>
                  <a href={item.link} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90 underline decoration-slate-400 underline-offset-4">View project</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Church & Ministry" title="Faith-based and community visual communication." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              'Ministry posters', 'Church event graphics', 'Youth event graphics', 'Worship graphics', 'Bible verse designs', 'Inspirational graphics', 'Church announcements'
            ].map((item, index) => (
              <article key={item} className="overflow-hidden rounded-[26px] border border-slate-200 bg-white p-4 shadow-soft">
                <img src="/images/portfolio/church-design-01.svg" alt={`${item} placeholder`} className="h-52 w-full rounded-[18px] object-cover" />
                <div className="mt-5 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-slate-600">{index + 1}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Business / Branding" title="Materials that communicate value clearly and professionally." />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                { title: 'Business Advertisement', image: '/images/portfolio/business-design-01.svg' },
                { title: 'Logo Concept', image: '/images/portfolio/logo-placeholder.svg' },
                { title: 'Brand Mockup', image: '/images/portfolio/brand-mockup.svg' }
              ].map((item) => (
                <article key={item.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft">
                  <img src={item.image} alt={`${item.title} placeholder`} className="h-72 w-full rounded-[20px] object-cover" />
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Social Media" title="Social media graphics designed for digital engagement." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              '/images/portfolio/social-media-01.svg',
              '/images/portfolio/social-media-02.svg',
              '/images/portfolio/social-media-03.svg',
              '/images/portfolio/social-media-04.svg',
              '/images/portfolio/social-media-05.svg',
              '/images/portfolio/social-media-06.svg'
            ].map((image, index) => (
              <div key={image} className="overflow-hidden rounded-[26px] border border-slate-200 bg-white p-3 shadow-soft">
                <img src={image} alt={`Social media design ${index + 1} placeholder`} className="h-64 w-full rounded-[18px] object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="bg-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="My Design Process" title="A practical and thoughtful creative workflow." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {processSteps.map(({ number, title, description, icon: Icon }) => (
                <article key={number} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-slate-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">{number}</div>
                  <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Tools & Software" title="Digital tools I continue to use and grow with." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {toolGroups.map((group) => (
              <div key={group.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-slate-900">{group.title}</h3>
                <div className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-3">
                      <span className="text-sm font-medium text-slate-700">{item.name}</span>
                      <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle light eyebrow="Selected Projects & Experience" title="Creative work drawn from personal, community, educational, ministry and business-related projects." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {selectedProjects.map((project) => (
                <article key={project.title} className="overflow-hidden rounded-[24px] border border-slate-700 bg-white/5 text-left">
                  <img src={project.image} alt={`${project.title} placeholder`} className="h-48 w-full object-cover" />
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-slate-400">
                      <span>{project.year}</span>
                      <span>{project.role}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Testimonials" title="Kind words from future clients and partners." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article key={item} className="rounded-[28px] border border-dashed border-slate-300 bg-stone-50 p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <p className="mt-5 text-base leading-7 text-slate-600">[CLIENT TESTIMONIAL PLACEHOLDER]</p>
                <div className="mt-6 text-sm font-semibold text-slate-900">[CLIENT NAME]</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">[PROJECT / ORGANIZATION]</div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-stone-100 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle eyebrow="Design Principles" title="A thoughtful design philosophy that guides each project." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {principles.map((principle) => (
                <article key={principle.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-slate-900 sm:text-4xl">Let’s Work Together</h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                  Have a project, opportunity or creative idea? I would be happy to discuss how I can help.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: 'Email', value: '[EMAIL ADDRESS]', href: 'mailto:[EMAIL ADDRESS]', icon: Mail },
                    { label: 'Phone', value: '[PHONE NUMBER]', href: 'tel:[PHONE NUMBER]', icon: Phone },
                    { label: 'WhatsApp', value: '[WHATSAPP LINK]', href: '[WHATSAPP LINK]', icon: MessageCircle },
                    { label: 'LinkedIn', value: '[LINKEDIN PROFILE]', href: '[LINKEDIN PROFILE]', icon: Globe },
                    { label: 'GitHub', value: '[GITHUB PROFILE]', href: '[GITHUB PROFILE]', icon: FolderKanban },
                    { label: 'Behance', value: '[BEHANCE PROFILE]', href: '[BEHANCE PROFILE]', icon: PenTool },
                    { label: 'Instagram', value: '[INSTAGRAM PROFILE]', href: '[INSTAGRAM PROFILE]', icon: Instagram },
                    { label: 'Facebook', value: '[FACEBOOK PROFILE]', href: '[FACEBOOK PROFILE]', icon: Facebook }
                  ].map(({ label, value, href, icon: Icon }) => (
                    <a key={label} href={href} className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-slate-300 hover:bg-slate-50">
                      <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{label}</div>
                        <div className="mt-1 text-sm font-medium text-slate-800">{value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-slate-900 p-6 text-white sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Portfolio Availability</p>
                <h3 className="mt-4 text-2xl font-bold">Ready to collaborate on meaningful visual work.</h3>
                <div className="mt-6 space-y-4 text-slate-200">
                  <div className="flex items-center gap-3"><Check className="h-4 w-4 text-emerald-400" /> Creative and adaptive</div>
                  <div className="flex items-center gap-3"><Check className="h-4 w-4 text-emerald-400" /> Strong visual communication</div>
                  <div className="flex items-center gap-3"><Check className="h-4 w-4 text-emerald-400" /> Digital-first mindset</div>
                  <div className="flex items-center gap-3"><Check className="h-4 w-4 text-emerald-400" /> Willing to learn and improve</div>
                </div>
                <a href={pdfHref} onClick={handlePdfClick} className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900">
                  <Download className="h-4 w-4" /> Download Portfolio PDF
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
          <div>
            <div className="text-xl font-bold tracking-[-0.04em] text-slate-900">Julius Kiema</div>
            <p className="mt-3 text-slate-600">Graphic Designer | Digital Content Creator</p>
            <p className="mt-1 text-slate-600">Kenya</p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase() === 'home' ? 'home' : item.toLowerCase() === 'contact' ? 'contact' : item.toLowerCase() === 'about' ? 'about' : item.toLowerCase() === 'portfolio' ? 'portfolio' : 'services'}`} className="hover:text-slate-900">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Social Links</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[['Email','mailto:[EMAIL ADDRESS]'], ['WhatsApp','[WHATSAPP LINK]'], ['LinkedIn','[LINKEDIN PROFILE]'], ['GitHub','[GITHUB PROFILE]'], ['Behance','[BEHANCE PROFILE]'], ['Instagram','[INSTAGRAM PROFILE]'], ['Facebook','[FACEBOOK PROFILE]']].map(([label, href]) => (
                <a key={label} href={String(href)} className="rounded-full border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 hover:border-slate-400 hover:text-slate-900">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500">
          © 2026 Julius Kiema. All rights reserved.
        </div>
      </footer>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

export default App;
