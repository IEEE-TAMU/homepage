import type { Branch } from '@/lib/branches';

export type CategoryBlock = {
  title: string;
  items: string[];
};

export type StepBlock = {
  title: string;
  description: string;
};

export type QuoteBlock = {
  text: string;
  attribution: string;
  tone: 'primary' | 'secondary' | 'accent';
};

export type SignatureBlock = {
  title: string;
  description: string;
  tone: 'primary' | 'secondary' | 'accent';
};

export type BranchContent = {
  about: {
    title: string;
    paragraphs: string[];
  };
  categories: {
    title: string;
    blocks: CategoryBlock[];
  };
  process?: {
    title: string;
    steps: StepBlock[];
    tone: 'primary' | 'accent';
  };
  signature?: {
    title: string;
    items: SignatureBlock[];
  };
  subjectAreas?: {
    title: string;
    blocks: CategoryBlock[];
  };
  quotes?: {
    title: string;
    items: QuoteBlock[];
  };
  extraCta?: {
    title: string;
    body: string;
    listTitle: string;
    list: string[];
  };
  sponsors?: {
    title: string;
  };
};

const ACTIVITIES: BranchContent = {
  about: {
    title: 'About Activities Branch',
    paragraphs: [
      "The Activities Branch is the heart of IEEE TAMU's community engagement. We plan and execute events that bring our members together, foster relationships, and create memorable experiences that strengthen our organization.",
      'From social gatherings to community service projects, we work to create a vibrant and inclusive environment where every member feels connected and valued.',
    ],
  },
  categories: {
    title: 'Event Categories',
    blocks: [
      {
        title: 'Social Events',
        items: [
          'Welcome events for new members',
          'Holiday celebrations',
          'Game nights and recreational activities',
          'Team-building outings',
        ],
      },
      {
        title: 'Community Service',
        items: [
          'Local charity partnerships',
          'STEM outreach programs',
          'Environmental initiatives',
          'Volunteer coordination',
        ],
      },
      {
        title: 'Professional Development',
        items: [
          'Resume workshops',
          'Interview preparation',
          'Networking events',
          'Leadership training',
        ],
      },
      {
        title: 'Member Engagement',
        items: [
          'Interest group meetings',
          'Committee activities',
          'Member appreciation events',
          'Feedback and survey initiatives',
        ],
      },
    ],
  },
  process: {
    title: 'Planning Process',
    tone: 'accent',
    steps: [
      {
        title: 'Idea Generation',
        description:
          'Brainstorm event ideas based on member feedback and organizational goals',
      },
      {
        title: 'Planning & Logistics',
        description:
          'Develop detailed plans, secure resources, and coordinate with stakeholders',
      },
      {
        title: 'Promotion & Execution',
        description:
          'Market the event and ensure smooth execution on the day of',
      },
      {
        title: 'Follow-up & Evaluation',
        description:
          "Gather feedback and assess the event's success for continuous improvement",
      },
    ],
  },
};

const CORPORATE: BranchContent = {
  about: {
    title: 'About Corporate Branch',
    paragraphs: [
      'The Corporate Branch serves as the bridge between IEEE TAMU and the professional world. We focus on building meaningful relationships with industry partners, securing sponsorships, and creating networking opportunities for our members.',
      "Our team works year-round to connect students with internships, job opportunities, and industry professionals while bringing in resources that support IEEE TAMU's mission.",
    ],
  },
  categories: {
    title: 'Key Initiatives',
    blocks: [
      {
        title: 'Sponsorship Program',
        items: [
          'Corporate partnership development',
          'Sponsorship package creation',
          'Event sponsorship coordination',
          'Partnership maintenance',
        ],
      },
      {
        title: 'Networking Events',
        items: [
          'Industry speaker series',
          'Career fairs and mixers',
          'Professional development workshops',
          'Alumni networking events',
        ],
      },
      {
        title: 'Career Services',
        items: [
          'Resume and interview workshops',
          'Internship and job postings',
          'Career counseling',
          'Professional mentorship program',
        ],
      },
      {
        title: 'Industry Relations',
        items: [
          'Company site visits',
          'Technical tours',
          'Guest lectures',
          'Collaborative projects',
        ],
      },
    ],
  },
  sponsors: {
    title: 'Current Corporate Partners',
  },
};

const E_BOARD: BranchContent = {
  about: {
    title: 'About E-Board',
    paragraphs: [
      'The E-Board (Executive Board) is the leadership core of IEEE TAMU, responsible for strategic planning, organizational governance, and ensuring the successful execution of our mission.',
      "Composed of elected officers and committee chairs, the E-Board works collaboratively to guide IEEE TAMU's direction and maintain our commitment to excellence in all our endeavors.",
    ],
  },
  categories: {
    title: 'Key Responsibilities',
    blocks: [
      {
        title: 'Strategic Planning',
        items: [
          'Long-term vision development',
          'Annual goal setting',
          'Resource allocation',
          'Risk management',
        ],
      },
      {
        title: 'Operations',
        items: [
          'Budget management',
          'Policy development',
          'Committee oversight',
          'IEEE compliance',
        ],
      },
      {
        title: 'Leadership',
        items: [
          'Team coordination',
          'Member development',
          'External relations',
          'Succession planning',
        ],
      },
      {
        title: 'Communication',
        items: [
          'Internal updates',
          'Stakeholder engagement',
          'Crisis management',
          'Annual reporting',
        ],
      },
    ],
  },
  extraCta: {
    title: 'Get Involved',
    body: 'Interested in joining the E-Board? We hold elections annually and welcome applications from dedicated members who want to contribute to IEEE TAMU\u2019s leadership.',
    listTitle: 'Next Steps',
    list: [
      'Attend general meetings regularly',
      'Volunteer for committees and events',
      'Express interest in leadership positions',
      'Participate in officer transition process',
    ],
  },
};

const EVENTS: BranchContent = {
  about: {
    title: 'About Events Branch',
    paragraphs: [
      'The Events Branch is dedicated to creating high-quality technical and educational experiences for IEEE TAMU members. We organize workshops, seminars, conferences, and other learning opportunities that help our members develop their technical skills and stay current with industry trends.',
      'Our team works closely with industry experts, faculty, and guest speakers to bring valuable content and hands-on learning experiences to our community.',
    ],
  },
  categories: {
    title: 'Event Types',
    blocks: [
      {
        title: 'Technical Workshops',
        items: [
          'Programming and software development',
          'Hardware design and prototyping',
          'Data science and machine learning',
          'Cybersecurity fundamentals',
        ],
      },
      {
        title: 'Professional Development',
        items: [
          'Industry speaker series',
          'Career panels and discussions',
          'Resume and interview workshops',
          'Graduate school preparation',
        ],
      },
      {
        title: 'Conferences & Competitions',
        items: [
          'Annual technical conferences',
          'Hackathons and coding competitions',
          'Design challenges',
          'Research presentation opportunities',
        ],
      },
      {
        title: 'Study Groups & Tutorials',
        items: [
          'Course-specific study sessions',
          'Certification preparation',
          'Tool and software tutorials',
          'Peer mentoring programs',
        ],
      },
    ],
  },
  signature: {
    title: 'Signature Events',
    items: [
      {
        title: 'Annual Technical Conference',
        description:
          'Our flagship event featuring keynote speakers, technical sessions, and networking opportunities with industry professionals.',
        tone: 'primary',
      },
      {
        title: 'Spring Workshop Series',
        description:
          'A series of hands-on workshops covering emerging technologies and practical skills for engineering students.',
        tone: 'secondary',
      },
      {
        title: 'Industry Networking Night',
        description:
          'An evening event connecting students with alumni and industry representatives for career development and mentorship.',
        tone: 'accent',
      },
    ],
  },
  process: {
    title: 'Event Planning Process',
    tone: 'primary',
    steps: [
      {
        title: 'Research & Planning',
        description: 'Identify topics, speakers, and logistics',
      },
      {
        title: 'Coordination',
        description: 'Secure venues, materials, and partnerships',
      },
      {
        title: 'Execution & Follow-up',
        description: 'Run the event and gather feedback for improvement',
      },
    ],
  },
};

const PUBLIC_RELATIONS: BranchContent = {
  about: {
    title: 'About Public Relations',
    paragraphs: [
      'The Public Relations (PR) Branch shapes how IEEE TAMU communicates with students, partners, and the community. We manage the organization\u2019s brand, craft compelling messages, and ensure consistent, accessible information across channels.',
      'From social media and newsletters to graphics and event promotion, PR amplifies the impact of every branch and keeps our members informed and engaged.',
    ],
  },
  categories: {
    title: 'What We Do',
    blocks: [
      {
        title: 'Communications',
        items: [
          'Newsletter planning and writing',
          'Email announcements and updates',
          'Cross-branch coordination for messaging',
          'Media relations and outreach',
        ],
      },
      {
        title: 'Marketing & Branding',
        items: [
          'Visual design and graphics',
          'Brand guidelines and templates',
          'Event promotional campaigns',
          'Photography and videography support',
        ],
      },
      {
        title: 'Social Media',
        items: [
          'Content calendars and scheduling',
          'Platform analytics and insights',
          'Community engagement',
          'Recaps and highlights',
        ],
      },
      {
        title: 'Web & Content',
        items: [
          'Website content updates',
          'Copywriting and proofreading',
          'Asset management',
          'Accessibility and clarity',
        ],
      },
    ],
  },
  process: {
    title: 'How We Work',
    tone: 'primary',
    steps: [
      {
        title: 'Intake & Planning',
        description:
          'Align on goals, target audience, channels, and timelines with relevant branches.',
      },
      {
        title: 'Create & Review',
        description:
          'Draft content, design assets, and iterate quickly with feedback.',
      },
      {
        title: 'Publish & Measure',
        description:
          'Launch across channels and track performance to improve future efforts.',
      },
    ],
  },
};

const TEC: BranchContent = {
  about: {
    title: 'About TEC',
    paragraphs: [
      'The Technical Committee is dedicated to enhancing the academic success and technical proficiency of IEEE TAMU members. We provide educational support, tutoring services, and skill-building opportunities that complement the formal engineering curriculum.',
      'Our committee bridges the gap between classroom learning and practical application, helping students develop the technical skills they need for their future careers in engineering and technology.',
    ],
  },
  categories: {
    title: 'Our Programs',
    blocks: [
      {
        title: 'Tutoring Services',
        items: [
          'One-on-one tutoring sessions',
          'Group study sessions',
          'Course-specific help',
          'Exam preparation support',
        ],
      },
      {
        title: 'Skill Development',
        items: [
          'Programming workshops',
          'Software tool training',
          'Technical certification prep',
          'Industry skill building',
        ],
      },
      {
        title: 'Resource Center',
        items: [
          'Textbook and material loans',
          'Online learning resources',
          'Study guide collections',
          'Equipment access',
        ],
      },
      {
        title: 'Academic Support',
        items: [
          'Study group coordination',
          'Academic advising',
          'Career guidance',
          'Research opportunities',
        ],
      },
    ],
  },
  subjectAreas: {
    title: 'Subject Areas',
    blocks: [
      {
        title: 'Electrical Engineering',
        items: [
          'Circuit analysis',
          'Power systems',
          'Electronics',
          'Control systems',
        ],
      },
      {
        title: 'Computer Engineering',
        items: [
          'Digital design',
          'Computer architecture',
          'Embedded systems',
          'Microprocessors',
        ],
      },
      {
        title: 'Software & Programming',
        items: [
          'Programming languages',
          'Algorithms & data structures',
          'Software engineering',
          'Web development',
        ],
      },
    ],
  },
  quotes: {
    title: 'Success Stories',
    items: [
      {
        text: 'TEC helped me master circuit analysis concepts that I was struggling with. The tutoring sessions were incredibly helpful and boosted my GPA significantly.',
        attribution: 'Electrical Engineering Student',
        tone: 'primary',
      },
      {
        text: "The programming workshops gave me the skills I needed to land my first internship. I learned practical tools that aren't covered in regular classes.",
        attribution: 'Computer Science Student',
        tone: 'secondary',
      },
    ],
  },
};

const BRANCH_CONTENT: Record<string, BranchContent> = {
  activities: ACTIVITIES,
  corporate: CORPORATE,
  'e-board': E_BOARD,
  events: EVENTS,
  'public-relations': PUBLIC_RELATIONS,
  tec: TEC,
};

export function getBranchContent(slug: string): BranchContent | undefined {
  return BRANCH_CONTENT[slug];
}

export function hasBranchContent(slug: string): slug is keyof typeof BRANCH_CONTENT {
  return slug in BRANCH_CONTENT;
}

export type { Branch };
