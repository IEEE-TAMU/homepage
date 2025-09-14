type Officer = {
  name: string;
  position: string;
  photo?: string;
  description?: string;
};

type Branch = {
  name: string;
  description: string;
  officers: Officer[];
};

const Branches: Record<string, Branch> = {
  'e-board': {
    name: 'Executive Board',
    description:
      'The Executive Board oversees the overall direction and operations of IEEE TAMU.',
    officers: [
      {
        name: 'Oliver Smith',
        position: 'President',
        photo: '/images/officers/oliver_smith.jpg',
        description: 'Leads the organization and oversees all operations.',
      },
      {
        name: 'Ava Johnson',
        position: 'Vice President',
        photo: '/images/officers/ava_johnson.jpg',
        description:
          'Supports the president and coordinates chapter operations.',
      },
      {
        name: 'Liam Martinez',
        position: 'Secretary',
        photo: '/images/officers/liam_martinez.jpg',
        description: 'Manages communications, records, and meeting notes.',
      },
      {
        name: 'Sophia Davis',
        position: 'Treasurer',
        photo: '/images/officers/sophia_davis.jpg',
        description: 'Oversees finances, budgeting, and reimbursements.',
      },
      {
        name: 'Noah Lee',
        position: 'Webmaster',
        photo: '/images/officers/noah_lee.jpg',
        description: 'Maintains the website and digital tools.',
      },
      {
        name: 'Mia Patel',
        position: 'Social Chair',
        photo: '/images/officers/mia_patel.jpg',
        description: 'Plans socials and community-building events.',
      },
    ],
  },
  activities: {
    name: 'Activities Committee',
    description:
      'The Activities Committee organizes hands-on workshops and technical activities for members.',
    officers: [
      {
        name: 'Ethan Walker',
        position: 'Activities Chair',
        photo: '/images/officers/ethan_walker.jpg',
        description: 'Leads hands-on workshops and technical activities.',
      },
      {
        name: 'Grace Kim',
        position: 'Activities Coordinator',
        photo: '/images/officers/grace_kim.jpg',
        description: 'Assists with scheduling and logistics.',
      },
    ],
  },
  corporate: {
    name: 'Corporate Relations Committee',
    description:
      'The Corporate Relations Committee manages partnerships and outreach to industry sponsors.',
    officers: [
      {
        name: 'Daniel Chen',
        position: 'Corporate Chair',
        photo: '/images/officers/daniel_chen.jpg',
        description: 'Manages corporate outreach and partnerships.',
      },
      {
        name: 'Zoe Nguyen',
        position: 'Corporate Coordinator',
        photo: '/images/officers/zoe_nguyen.jpg',
        description: 'Coordinates info sessions and networking events.',
      },
    ],
  },
  events: {
    name: 'Events Committee',
    description:
      'The Events Committee plans and executes major events such as career fairs and guest lectures.',
    officers: [
      {
        name: 'James Rivera',
        position: 'Events Chair',
        photo: '/images/officers/james_rivera.jpg',
        description: 'Organizes flagship events and logistics.',
      },
      {
        name: 'Emily Carter',
        position: 'Events Coordinator',
        photo: '/images/officers/emily_carter.jpg',
        description: 'Supports event planning and execution.',
      },
    ],
  },
  'public-relations': {
    name: 'Public Relations Committee',
    description:
      'The Public Relations Committee handles marketing, branding, and communications for the chapter.',
    officers: [
      {
        name: 'Lucas Brown',
        position: 'PR Chair',
        photo: '/images/officers/lucas_brown.jpg',
        description: 'Leads marketing, branding, and communications.',
      },
      {
        name: 'Avery Wilson',
        position: 'PR Coordinator',
        photo: '/images/officers/avery_wilson.jpg',
        description: 'Manages social media and content.',
      },
    ],
  },
  tec: {
    name: 'Technical Education Committee (TEC)',
    description:
      'The Technical Education Committee develops educational content, tutorials, and resources for members.',
    officers: [
      {
        name: 'Harper Thompson',
        position: 'TEC Chair',
        photo: '/images/officers/harper_thompson.jpg',
        description:
          'Oversees Technical Education Committee (TEC) initiatives.',
      },
      {
        name: 'Benjamin Scott',
        position: 'TEC Coordinator',
        photo: '/images/officers/benjamin_scott.jpg',
        description: 'Develops curriculum and tutorial materials.',
      },
    ],
  },
};

const officerId = (officer: Officer) =>
  officer.name.toLowerCase().replace(/\s+/g, '-');

export { Branches, officerId };
export type { Branch, Officer };
