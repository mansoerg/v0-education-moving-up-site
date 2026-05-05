/**
 * Education Moving Up — Site Data
 * ================================
 * All content / mock data for the EMU marketing site.
 * Separated from presentation for easy Codex migration into a CMS or DB.
 *
 * Content strategy: methodology doctrine preserved exactly as IP;
 * marketing copy rewritten for a 2026 audience.
 */

// ─── NAVIGATION ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Methodology', href: '/methodology' },
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
]

// ─── TRUSTED PARTNERS ────────────────────────────────────────────────────────

export const PARTNERS = [
  'Department of Basic Education',
  'Provincial Education Departments',
  'Independent Schools Association',
  'University Partners',
  'Public Sector Foundations',
  'School Governing Body Networks',
]

// ─── METHODOLOGY ─────────────────────────────────────────────────────────────

export const THREE_STRATEGIES = [
  {
    number: '01',
    title: 'Data Driven',
    tagline: 'Evidence, not opinion.',
    body: 'The focus on a data-driven, evidence-based decision-making process when analysing the challenges in education — in order to formulate a clear business case. As Dr. Gallie reminds educationists: "without data, you are just another person with an opinion." This approach links directly with the School Functionality Index (SFI) and includes the development of scenario planning and its related construction of the preferred future.',
  },
  {
    number: '02',
    title: 'Systemic Thinking',
    tagline: 'Change the system, not the symptom.',
    body: 'Adopting a systemic thinking approach when analysing the challenges in education. "Systemic thinking is a simple thinking technique for gaining systemic insight into complex situations and problems" (Bartlett, 2001). This approach is distinct from the often-confused systemic, systems and systematic thinking. The fundamental assumption is that everything interacts within the things around it — to change outcomes we must change the system that underpins the situation.',
  },
  {
    number: '03',
    title: 'Use of ICT',
    tagline: 'Helicopter-view tools for the whole system.',
    body: 'The utilisation of helicopter, big-picture Information and Communication Technology (ICT) tools to improve the efficiency and effectiveness of the education system — including GIS and cellular technology. Where standard operating procedures do not yet exist, ICT cannot be implemented immediately. Organisations must first establish stable, reliable procedures and processes. Functionality has to precede performance.',
  },
]

export const QI_STAGES = [
  {
    number: '01',
    title: 'Case Analysis',
    tagline: 'Diagnose with evidence, not opinion.',
    description:
      'Establish what the system is actually doing. Build a rigorous, data-grounded baseline before any intervention is designed.',
  },
  {
    number: '02',
    title: 'Input',
    tagline: 'Match resources to the diagnosed need.',
    description:
      'Identify and deploy the right resources — people, tools, frameworks — in the right sequence to address what the case analysis revealed.',
  },
  {
    number: '03',
    title: 'Process',
    tagline: 'Establish reliable procedures.',
    description:
      'Install the standard operating procedures and practices that create a stable, functional system — the precondition for all performance gains.',
  },
  {
    number: '04',
    title: 'Output',
    tagline: 'Measure what the system produces.',
    description:
      'Observe and record what the system is actually producing at district, school and classroom level. Hold the output accountable to the input.',
  },
  {
    number: '05',
    title: 'Impact',
    tagline: 'Evaluate real change in learning.',
    description:
      'Assess the change in learning, schooling and district performance that has resulted. Distinguish between output and genuine impact on learner outcomes.',
  },
]

export const FOCUS_AREAS = [
  {
    area: 'District',
    headline: 'Policy intent turned into operational reality.',
    body: 'We support districts to manage projects with quality across schools — building the capacity to monitor, review and adapt the improvement cycle at system level.',
  },
  {
    area: 'School',
    headline: 'From functional to high-performing.',
    body: 'We work alongside school leaders to install the procedures and habits that move a school from merely functional to consistently high-performing.',
  },
  {
    area: 'Learning',
    headline: 'What learners understand, retain and apply.',
    body: 'Inside the classroom we focus on the practices most likely to shift what learners actually understand, retain and apply — not only what teachers cover.',
  },
]

export const SFI_DIMENSIONS = [
  { number: '01', label: 'Leadership rhythm' },
  { number: '02', label: 'Document control' },
  { number: '03', label: 'Teacher attendance' },
  { number: '04', label: 'Assessment integrity' },
  { number: '05', label: 'Parent communication' },
  { number: '06', label: 'Timetable fidelity' },
  { number: '07', label: 'Resource management' },
  { number: '08', label: 'Policy compliance' },
]

// ─── STATS ────────────────────────────────────────────────────────────────────

export const STATS = [
  { value: '20+', label: 'Years of practice' },
  { value: '120+', label: 'School improvement engagements' },
  { value: '9', label: 'Provinces reached across South Africa' },
  { value: '5', label: 'Stages in the Quality Improvement model' },
]

// ─── SERVICES ────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    area: 'District',
    slug: 'district-quality-management',
    title: 'District Quality Management',
    tagline: 'Embed the QI cycle across your district office.',
    description:
      'Embedding the 5-stage Quality Improvement cycle inside district offices so that policy intent translates into measurable school-level change — with a review cadence that holds.',
    deliverables: [
      'District-wide case analysis and SFI baseline',
      'Standard operating procedures across schools',
      'Performance dashboards and review cadence',
    ],
  },
  {
    area: 'School',
    slug: 'school-functionality-audit',
    title: 'School Functionality Audit',
    tagline: 'Surface what is holding your school back.',
    description:
      'Applying the School Functionality Index (SFI) to surface the constraints that hold school performance in place — and the clear path to remove them.',
    deliverables: [
      'SFI assessment with school leadership',
      'Functionality-to-Performance roadmap',
      'Coached implementation review',
    ],
  },
  {
    area: 'Learning',
    slug: 'learning-improvement-labs',
    title: 'Learning Improvement Labs',
    tagline: 'Shift what learners understand in the classroom.',
    description:
      'In-classroom improvement cycles that focus on the practices most likely to shift learner understanding, retention and application across subjects and phases.',
    deliverables: [
      'Subject-level practice audit',
      'Teacher coaching sprints',
      'Learner outcome tracking',
    ],
  },
  {
    area: 'District',
    slug: 'ict-data-systems',
    title: 'ICT & Data Systems',
    tagline: 'Give leaders a helicopter view of the whole system.',
    description:
      'Designing the big-picture ICT and data infrastructure — from GIS to mobile — that lets decision-makers see the whole system and act on what they see.',
    deliverables: [
      'Data architecture review',
      'GIS / mobile tooling deployment',
      'Decision-maker dashboards',
    ],
  },
  {
    area: 'District',
    slug: 'scenario-planning-strategy',
    title: 'Scenario Planning & Strategy',
    tagline: 'Build a credible preferred future for your system.',
    description:
      'Scenario-based strategy work that constructs a rigorous, evidence-anchored preferred future for an education system — and the actionable steps to reach it.',
    deliverables: [
      'Scenario set with stakeholders',
      'Preferred-future roadmap',
      'Risk and assumption ledger',
    ],
  },
  {
    area: 'School',
    slug: 'executive-board-briefings',
    title: 'Executive & Board Briefings',
    tagline: 'What the evidence is actually saying, clearly.',
    description:
      'Tightly-scoped briefings for principals, district directors and board members — framed around the data, not the narrative the room prefers.',
    deliverables: [
      'Briefing pack tailored to your data',
      'Half-day working session',
      'Decision register',
    ],
  },
]

export const ENGAGEMENT_PROCESS = [
  {
    number: '01',
    title: 'Case Analysis Briefing',
    description:
      'A short, structured conversation to understand your context and what counts as success in your system.',
  },
  {
    number: '02',
    title: 'Diagnostic & Proposal',
    description:
      'We assemble the evidence, map the system, and propose the engagement scope and shape — calibrated to your actual level.',
  },
  {
    number: '03',
    title: 'Engagement',
    description:
      'We work alongside your team through the QI cycle — Input, Process, Output, Impact — with honest review at each stage.',
  },
  {
    number: '04',
    title: 'Hand-back & Capability',
    description:
      'We hand back stronger procedures and a team able to run the cycle without us. Independence is the outcome.',
  },
]

// ─── CASE STUDIES ────────────────────────────────────────────────────────────

export const CASE_STUDIES = [
  {
    slug: 'gauteng-district-functional-to-performing',
    area: 'District',
    year: '2024–2025',
    title: 'Turning a Gauteng district from functional to performing',
    description:
      'An 18-month engagement applying the 5-stage QI cycle across 42 schools, anchored on a district-wide SFI baseline. The district entered the engagement with inconsistent school management practice and no shared review cadence. It exited with a documented, reproducible improvement system.',
    metrics: [
      { label: 'Schools in scope', value: '42' },
      { label: 'Lift in Grade 9 maths pass rate', value: '31%' },
      { label: 'Procedural defects per school audit', value: '9 → 4' },
    ],
    image: '/images/district-work.jpg',
    featured: true,
  },
  {
    slug: 'rural-primary-school-functionality-rebuild',
    area: 'School',
    year: '2023–2024',
    title: 'Rebuilding functionality in a rural primary school',
    description:
      'An SFI-anchored, principal-led rebuild of timetabling, assessment integrity and parent communication. The school had persistent under-performance despite motivated staff — the SFI revealed a procedural deficit rather than a capacity one.',
    metrics: [
      { label: 'On-time period start rate', value: '0 → 100%' },
      { label: 'Average attendance lift', value: '+22%' },
      { label: 'SOPs installed', value: '11' },
    ],
    image: '/images/school-improvement.jpg',
    featured: true,
  },
  {
    slug: 'metro-education-data-platform',
    area: 'District',
    year: '2022–2023',
    title: 'A helicopter-view data platform for a metro education office',
    description:
      'Designing and deploying a GIS- and mobile-led data layer that gave district officials a single view of every school in the metro — replacing seven disconnected data sources with one source of truth, refreshed daily.',
    metrics: [
      { label: 'Schools instrumented', value: '180+' },
      { label: 'Source of truth (was 7)', value: '1' },
      { label: 'Data freshness', value: '< 24h' },
    ],
    image: '/images/district-work.jpg',
    featured: false,
  },
]

// ─── INSIGHTS ────────────────────────────────────────────────────────────────

export const INSIGHTS = [
  {
    slug: 'functionality-must-precede-performance',
    category: 'Methodology',
    readTime: '7 min read',
    title: 'Why functionality must precede performance',
    excerpt:
      'If the everyday processes inside a school do not work, no performance target — however ambitious — will hold. A field perspective on the sequence that changes everything.',
    author: 'Dr. Muavia Gallie',
    date: 'March 2026',
    featured: true,
  },
  {
    slug: 'reading-sfi-2026',
    category: 'Research',
    readTime: '10 min read',
    title: 'Reading the School Functionality Index in 2026',
    excerpt:
      'An updated lens on the SFI questionnaire and the dimensions that best predict sustained improvement — drawing on the most recent longitudinal data from our district engagements.',
    author: 'EMU Research',
    date: 'February 2026',
    featured: true,
  },
  {
    slug: 'data-driven-without-dashboards',
    category: 'Field Notes',
    readTime: '5 min read',
    title: 'Data-driven, without the dashboards',
    excerpt:
      'Most schools do not need another dashboard — they need a single number, defended honestly. A note on evidence discipline and what data-driven practice actually requires.',
    author: 'EMU Practice',
    date: 'January 2026',
    featured: false,
  },
  {
    slug: 'systemic-vs-systems-thinking',
    category: 'Methodology',
    readTime: '6 min read',
    title: 'From systems thinking to systemic thinking',
    excerpt:
      '"Systems", "systematic" and "systemic" are not the same word. Why the distinction matters in education work — and how getting it right changes the interventions you design.',
    author: 'Dr. Muavia Gallie',
    date: 'December 2025',
    featured: false,
  },
]

// ─── RESOURCES ───────────────────────────────────────────────────────────────

export const RESOURCES = [
  {
    slug: 'qi-cycle-framework',
    type: 'Framework',
    access: 'open' as const,
    title: 'Quality Improvement Cycle — Framework',
    description:
      'The 5-stage QI cycle (Case Analysis → Input → Process → Output → Impact) explained, with worked examples for district, school and learning levels.',
    format: 'PDF · 24 pages',
    ctaLabel: 'Download',
  },
  {
    slug: 'functionality-before-performance-whitepaper',
    type: 'Whitepaper',
    access: 'gated' as const,
    title: 'Functionality before Performance — Whitepaper',
    description:
      'Why systems must function before they can perform — and what changes inside a school when leaders accept the sequence. The evidence base behind the core doctrine.',
    format: 'PDF · 18 pages',
    ctaLabel: 'Request access',
  },
  {
    slug: 'systemic-thinking-primer',
    type: 'Briefing',
    access: 'open' as const,
    title: 'Systemic Thinking — A Primer for Education Leaders',
    description:
      'A short briefing on the distinction between systems, systematic and systemic thinking, and how to apply systemic insight in your district or school.',
    format: 'PDF · 8 pages',
    ctaLabel: 'Download',
  },
  {
    slug: 'scenario-planning-template',
    type: 'Framework',
    access: 'gated' as const,
    title: 'Scenario Planning — Working Template',
    description:
      'The working template EMU uses to construct credible preferred futures with district leadership teams. Includes a facilitation guide and worked example.',
    format: 'Worksheet bundle',
    ctaLabel: 'Request access',
  },
]

// ─── LIBRARY OF EXCELLENCE ───────────────────────────────────────────────────

export const BOOKS = [
  {
    slug: 'functionality-precedes-performance',
    status: 'preorder' as const,
    title: 'Functionality Precedes Performance',
    subtitle: 'A working theory of school improvement',
    description:
      'The flagship volume. The full argument for why functionality must come before performance, the evidence base behind the claim, and the operating model that follows from it.',
    chapters: [
      'The wrong question',
      'What functionality looks like',
      'The School Functionality Index',
      'Sequencing intervention',
      'What changes when leaders accept the sequence',
    ],
    image: '/images/book-functionality.jpg',
  },
  {
    slug: 'quality-improvement-cycle',
    status: 'forthcoming' as const,
    title: 'The Quality Improvement Cycle',
    subtitle: 'Case Analysis · Input · Process · Output · Impact',
    description:
      'A practical manual for running the 5-stage QI cycle inside a district or school, with worked examples and review templates drawn directly from the field.',
    chapters: [],
    image: null,
  },
  {
    slug: 'systemic-thinking-education-leaders',
    status: 'forthcoming' as const,
    title: 'Systemic Thinking for Education Leaders',
    subtitle: 'Seeing the system that produces the result',
    description:
      'A short, sharp briefing on systemic thinking and how it changes the way district and school leaders diagnose problems and design interventions.',
    chapters: [],
    image: null,
  },
]

export const BOOK_ENDORSEMENTS = [
  {
    quote:
      'The clearest articulation of why so many of our well-funded interventions fail to move outcomes.',
    attribution: 'Provincial Education Director — Public sector',
  },
  {
    quote:
      'A working library — not a glossy one. We use it inside our weekly leadership meetings.',
    attribution: 'School Principal — Independent school',
  },
]

// ─── TEAM ────────────────────────────────────────────────────────────────────

export const TEAM = [
  {
    slug: 'dr-muavia-gallie',
    name: 'Dr. Muavia Gallie',
    title: 'Founder & Lead Strategist',
    role: 'founder' as const,
    bio: 'Dr. Gallie is a South African education quality strategist with more than two decades of practice across districts, schools and classrooms. His doctoral work produced the School Functionality Index, the diagnostic instrument that anchors much of EMU\'s practice. He is best known for the discipline he insists on: "without data, you are just another person with an opinion."',
    credentials: [
      'PhD in Education — School Functionality Index',
      'Architect of the Quality Improvement 5-stage model',
      'Author, Library of Excellence (forthcoming)',
    ],
    image: '/images/dr-gallie.jpg',
  },
  {
    slug: 'dr-n-mokoena',
    name: 'Dr. N. Mokoena',
    title: 'Director of Research',
    role: 'team' as const,
    bio: 'Leads EMU\'s research programme, with a focus on functionality measurement and longitudinal evaluation of district-level interventions.',
    credentials: [],
    image: null,
  },
  {
    slug: 't-van-zyl',
    name: 'T. van Zyl',
    title: 'Head of Practice — Districts',
    role: 'team' as const,
    bio: 'Runs district-level engagements across the QI cycle, from case analysis through to impact review. More than a decade of field experience in Gauteng and the Western Cape.',
    credentials: [],
    image: null,
  },
  {
    slug: 's-naidoo',
    name: 'S. Naidoo',
    title: 'Head of Data & ICT',
    role: 'team' as const,
    bio: 'Designs the helicopter-view data and ICT layer for district and metro engagements, including GIS integration and mobile data collection systems.',
    credentials: [],
    image: null,
  },
  {
    slug: 'k-dlamini',
    name: 'K. Dlamini',
    title: 'Lead — Learning Labs',
    role: 'team' as const,
    bio: 'Leads in-classroom improvement labs with subject teachers across primary and secondary phases. Specialist in learning practice audit and teacher coaching.',
    credentials: [],
    image: null,
  },
]

// ─── ABOUT ───────────────────────────────────────────────────────────────────

export const ABOUT_VALUES = [
  {
    title: 'Evidence over opinion',
    body: 'We frame every engagement around what the data actually says — not what the room would prefer to hear.',
  },
  {
    title: 'System over symptom',
    body: 'We change the system that produces the result. Symptom-chasing is the most expensive way to stay still.',
  },
  {
    title: 'Practice over pitch',
    body: 'Our work lives or dies in classrooms, schools and district offices. The slide deck is downstream of the practice.',
  },
]

export const ABOUT_MISSION =
  'Our aim is to support the quality improvement of project management at all levels — district, school and learning — as displayed in the three focus areas of our business. The quality improvement approach focuses on five stages in the project management process: Case Analysis, Input, Process, Output and Impact.'
