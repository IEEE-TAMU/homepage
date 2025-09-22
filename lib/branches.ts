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
        name: 'Oliver Jansen',
        position: 'President',
      },
      {
        name: 'Seth Mayhue',
        position: 'Vice President',
      },
      {
        name: 'Arju Kafle',
        position: 'Secretary',
      },
      {
        name: 'Nafi Baksh',
        position: 'Treasurer',
      },
    ],
  },
  undersecretary: {
    name: 'Undersecretary Team',
    description:
      'The Undersecretary Team manages internal affairs, member engagement, and chapter administration.',
    officers: [
      {
        name: 'Caleb Norton',
        position: 'Webmaster',
      },
      {
        name: 'Githin Johny',
        position: 'Historian',
      },
    ],
  },
  activities: {
    name: 'Activities Committee',
    description:
      'The Activities Committee organizes hands-on workshops and technical activities for members.',
    officers: [
      {
        name: 'Josh Rayo',
        position: 'Activities Co-Chair',
      },
      {
        name: 'Andy Luu',
        position: 'Activities Co-Chair',
      },
      {
        name: 'Parth Nagesh',
        position: 'Activities Officer',
      },
      {
        name: 'Tony Doan',
        position: 'Activities Officer',
      },
    ],
  },
  corporate: {
    name: 'Corporate Relations Committee',
    description:
      'The Corporate Relations Committee manages partnerships and outreach to industry sponsors.',
    officers: [
      {
        name: 'Anushka Kulkar',
        position: 'Corporate Chair',
      },
      {
        name: 'Emaad Karim',
        position: 'Corporate Officer',
      },
      {
        name: 'Karla Sanchez',
        position: 'Corporate Officer',
      },
      {
        name: 'Riya Shah',
        position: 'Corporate Officer',
      },
    ],
  },
  events: {
    name: 'Events Committee',
    description:
      'The Events Committee plans and executes major events such as career fairs and guest lectures.',
    officers: [
      {
        name: 'Alan Jaf',
        position: 'Events Chair',
      },
      {
        name: 'Jadon Lee',
        position: 'Events Officer',
      },
      {
        name: 'Tanmai Buyyanapragada',
        position: 'Events Officer',
      },
      {
        name: 'Pallavi Gokul',
        position: 'Events Officer',
      },
    ],
  },
  'public-relations': {
    name: 'Public Relations Committee',
    description:
      'The Public Relations Committee handles marketing, branding, and communications for the chapter.',
    officers: [
      {
        name: 'Annie Li',
        position: 'PR Chair',
      },
      {
        name: "Caden D'Souza",
        position: 'PR Officer',
      },
      {
        name: 'Adhithi Venkatraghavan',
        position: 'PR Officer',
      },
      {
        name: 'Xinyan Su',
        position: 'PR Officer',
      },
    ],
  },
  tec: {
    name: 'Technical Education Committee (TEC)',
    description:
      'The Technical Education Committee develops educational content, tutorials, and resources for members.',
    officers: [
      {
        name: 'Jyoti Verma',
        position: 'TEC Chair',
      },
      {
        name: 'Catherine Boyle',
        position: 'TEC Officer',
      },
      {
        name: 'Abhitej Devireddy',
        position: 'TEC Officer',
      },
      {
        name: 'Branden Zhu',
        position: 'TEC Officer',
      },
    ],
  },
};

const officerId = (officer: Officer) =>
  officer.name.toLowerCase().replace(/\s+/g, '-');

export { Branches, officerId };
export type { Branch, Officer };
