export const portfolioCategories = [
  'All',
  'Posters & Flyers',
  'School / Education',
  'Church & Ministry',
  'Business / Branding',
  'Social Media',
  'Events',
  'Other'
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioProject = {
  id: number;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  description: string;
  role: string;
  tools: string[];
  image: string;
  projectLink?: string;
  client?: string;
  year?: string;
  projectType: string;
  objective: string;
  approach: string;
  finalDesign: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: 'Jomu Spices & Firm Ltd — Promotional Poster',
    category: 'Business / Branding',
    description: 'Promotional poster concept with a clean commercial layout and strong product focus.',
    role: 'Graphic Designer',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    image: '/images/portfolio/jomu-spices.svg',
    projectLink: '[CLIENT WEBSITE LINK]',
    client: '[CLIENT NAME - OPTIONAL]',
    year: '[YEAR]',
    projectType: 'Promotional Design',
    objective: 'Create an attractive promotional design that communicates the brand message and products clearly.',
    approach: 'Develop a clear hierarchy, product-forward layout and warm commercial colour palette to highlight the brand value.',
    finalDesign: 'A polished promotional poster designed for visual clarity, strong readability and appealing product presentation.'
  },
  {
    id: 2,
    title: 'School Advertisement Design',
    category: 'School / Education',
    description: 'A classroom and school outreach design prepared to communicate announcements clearly.',
    role: 'Graphic Designer',
    tools: ['Adobe Photoshop', 'Microsoft PowerPoint'],
    image: '/images/portfolio/school-design-01.svg',
    projectLink: '[PROJECT LINK]',
    client: '[SCHOOL / ORGANIZATION - OPTIONAL]',
    year: '[YEAR]',
    projectType: 'School Promotion',
    objective: 'Support a school communication need through a clean and easy-to-read promotional layout.',
    approach: 'Use bold headings, strong spacing and a practical layout to improve readability and attention.',
    finalDesign: 'A clear educational poster balancing visual appeal with practical communication.'
  },
  {
    id: 3,
    title: 'School Digital & E-Learning Programme',
    category: 'School / Education',
    description: 'A digital education design concept highlighting learning programmes and online engagement.',
    role: 'Graphic Designer',
    tools: ['Adobe Illustrator', 'Canva'],
    image: '/images/portfolio/school-design-02.svg',
    projectLink: '[PROJECT LINK]',
    client: '[ORGANIZATION - OPTIONAL]',
    year: '[YEAR]',
    projectType: 'Educational Campaign',
    objective: 'Present a digital and e-learning initiative with a modern, approachable visual identity.',
    approach: 'Combine informative content blocks, friendly modern typography and digital-friendly layout patterns.',
    finalDesign: 'A professional educational graphic crafted for digital sharing and visual engagement.'
  },
  {
    id: 4,
    title: 'School Vacancy Advertisement',
    category: 'School / Education',
    description: 'A recruitment announcement visual designed to make information easy to read and action-oriented.',
    role: 'Graphic Designer',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    image: '/images/portfolio/school-design-03.svg',
    projectLink: '[PROJECT LINK]',
    client: '[SCHOOL NAME - OPTIONAL]',
    year: '[YEAR]',
    projectType: 'Recruitment Communication',
    objective: 'Create a structured vacancy design that highlights key information clearly and professionally.',
    approach: 'Use a disciplined layout with hierarchy, contrast and clear instructions to guide the reader.',
    finalDesign: 'A recruitment design with practical structure and strong readability for public distribution.'
  },
  {
    id: 5,
    title: 'Church / Ministry Promotional Design',
    category: 'Church & Ministry',
    description: 'A ministry-focused graphic created to share events, themes and programme information clearly.',
    role: 'Graphic Designer',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    image: '/images/portfolio/church-design-01.svg',
    projectLink: '[PROJECT LINK]',
    client: '[CHURCH / MINISTRY - OPTIONAL]',
    year: '[YEAR]',
    projectType: 'Church Promotion',
    objective: 'Communicate ministry activities in a visually engaging format suitable for church audiences.',
    approach: 'Blend warm tones, modern typography and clearly grouped content blocks for easy reading.',
    finalDesign: 'A ministry poster with a welcoming identity and clear programme communication.'
  },
  {
    id: 6,
    title: 'Bible Verse / Inspirational Graphic',
    category: 'Church & Ministry',
    description: 'Inspirational and devotional visual content suited to digital sharing and community encouragement.',
    role: 'Graphic Designer',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    image: '/images/portfolio/church-design-02.svg',
    projectLink: '[PROJECT LINK]',
    client: '[MINISTRY / GROUP - OPTIONAL]',
    year: '[YEAR]',
    projectType: 'Inspirational Design',
    objective: 'Create a spiritual graphic that feels uplifting, readable and visually balanced.',
    approach: 'Use typography, spacing and tonal contrast to express the message with clarity and calm.',
    finalDesign: 'A devotional graphic combining elegant typography and a clean, modern visual layout.'
  },
  {
    id: 7,
    title: 'Event Promotional Poster',
    category: 'Events',
    description: 'Graphic created for a promotional event with emphasis on visibility and presentation.',
    role: 'Graphic Designer',
    tools: ['Adobe Photoshop', 'PowerPoint'],
    image: '/images/portfolio/event-design-01.svg',
    projectLink: '[PROJECT LINK]',
    client: '[EVENT ORGANIZER - OPTIONAL]',
    year: '[YEAR]',
    projectType: 'Event Graphic',
    objective: 'Highlight event information in an easy-to-read and visually attractive format.',
    approach: 'Structure the poster around the key dates, theme and audience action points for clarity.',
    finalDesign: 'An event poster designed for quick recognition and strong visual communication.'
  },
  {
    id: 8,
    title: 'Business Advertisement',
    category: 'Business / Branding',
    description: 'A clean promotional graphic designed to spotlight a service, brand or product offer.',
    role: 'Graphic Designer',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    image: '/images/portfolio/business-design-01.svg',
    projectLink: '[PROJECT LINK]',
    client: '[BUSINESS NAME - OPTIONAL]',
    year: '[YEAR]',
    projectType: 'Business Promo',
    objective: 'Create a professional marketing visual that communicates the value proposition clearly.',
    approach: 'Use a balanced layout with focused messaging, product emphasis and strategic spacing.',
    finalDesign: 'A business ad concept designed for readability, engagement and clear product visibility.'
  },
  {
    id: 9,
    title: 'Social Media Promotional Graphic',
    category: 'Social Media',
    description: 'A digital promotion design built for social engagement and audience attention.',
    role: 'Graphic Designer',
    tools: ['Adobe Photoshop', 'Canva'],
    image: '/images/portfolio/social-media-01.svg',
    projectLink: '[PROJECT LINK]',
    client: '[ORGANIZATION - OPTIONAL]',
    year: '[YEAR]',
    projectType: 'Social Media Graphic',
    objective: 'Create a visually engaging social media post that communicates clearly on mobile screens.',
    approach: 'Focus on bold headlines, simplified layouts and vibrant contrast for digital platforms.',
    finalDesign: 'A social media promotional design optimized for quick viewing and brand visibility.'
  },
  {
    id: 10,
    title: 'Community Organization Graphic',
    category: 'Other',
    description: 'A community-focused design created for awareness, outreach and event communication.',
    role: 'Graphic Designer',
    tools: ['Adobe Illustrator', 'Photoshop'],
    image: '/images/portfolio/community-design-01.svg',
    projectLink: '[PROJECT LINK]',
    client: '[COMMUNITY GROUP - OPTIONAL]',
    year: '[YEAR]',
    projectType: 'Community Design',
    objective: 'Support a community message with clear communication and useful visual organisation.',
    approach: 'Use accessible layout structure and gentle visual hierarchy to make the content straightforward.',
    finalDesign: 'A community communication graphic with a clear and inclusive visual tone.'
  },
  {
    id: 11,
    title: 'Branding / Logo Concept',
    category: 'Business / Branding',
    description: 'A concept design exploring logo direction, symbol use and brand identity clarity.',
    role: 'Graphic Designer',
    tools: ['Adobe Illustrator', 'Photoshop'],
    image: '/images/portfolio/logo-placeholder.svg',
    projectLink: '[PROJECT LINK]',
    client: '[CLIENT / BRAND - OPTIONAL]',
    year: '[YEAR]',
    projectType: 'Brand Identity Concept',
    objective: 'Explore a simple and memorable visual identity direction for a brand concept.',
    approach: 'Test symbol simplicity, typography balance and mark versatility for practical use.',
    finalDesign: 'A brand concept presentation showing a modern, clean and flexible visual direction.'
  },
  {
    id: 12,
    title: 'Custom Poster / Flyer',
    category: 'Posters & Flyers',
    description: 'A customised flyer concept designed for a specific campaign, event or promotional message.',
    role: 'Graphic Designer',
    tools: ['Adobe Photoshop', 'Illustrator'],
    image: '/images/portfolio/flyer-placeholder.svg',
    projectLink: '[PROJECT LINK]',
    client: '[CLIENT / ORGANIZATION - OPTIONAL]',
    year: '[YEAR]',
    projectType: 'Custom Flyer',
    objective: 'Design a flexible poster or flyer layout using clear hierarchy and purposeful composition.',
    approach: 'Balance presentation, message readability and visual rhythm within a modern, compact layout.',
    finalDesign: 'A custom promotional flyer with simple visual structure and professional presentation.'
  }
];
