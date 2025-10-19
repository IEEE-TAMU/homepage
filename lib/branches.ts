type Officer = {
  name: string;
  position: string;
  photoUrl: string;
  description?: string;
  linkedin?: string;
};

type Branch = {
  name: string;
  description: string;
  officers: Officer[];
};

type OfficerInput = Omit<Officer, 'photoUrl'> &
  Partial<Pick<Officer, 'photoUrl'>>;
type BranchInput = Omit<Branch, 'officers'> & { officers: OfficerInput[] };

const rawBranches: Record<string, BranchInput> = {
  'e-board': {
    name: 'Executive Board',
    description:
      'The Executive Board oversees the overall direction and operations of IEEE TAMU.',
    officers: [
      {
        name: 'Oliver Jansen',
        position: 'President',
        linkedin: 'oliver-jansen',
      },
      {
        name: 'Seth Mayhue',
        position: 'Vice President',
        linkedin: 'seth-mayhue-740201301',
      },
      {
        name: 'Arju Kafle',
        position: 'Secretary',
        linkedin: 'arju-kafle',
      },
      {
        name: 'Nafi Baksh',
        position: 'Treasurer',
        linkedin: 'nafi-baksh-71a285275',
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
        linkedin: 'calebnorton',
      },
      {
        name: 'Githin Johny',
        position: 'Historian',
        linkedin: 'githin-johny',
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
        linkedin: 'josh-rayo-a5880b29b',
      },
      {
        name: 'Andy Luu',
        position: 'Activities Co-Chair',
        linkedin: 'andy-luu-777449337',
      },
      {
        name: 'Parthiban Nagesh',
        position: 'Activities Officer',
        linkedin: 'parthiban-nagesh',
      },
      {
        name: 'Tony Doan',
        position: 'Activities Officer',
        linkedin: 'tonydoanuts',
      },
    ],
  },
  corporate: {
    name: 'Corporate Relations Committee',
    description:
      'The Corporate Relations Committee manages partnerships and outreach to industry sponsors.',
    officers: [
      {
        name: 'Anushka Kalkar',
        position: 'Corporate Chair',
        linkedin: 'anushka-kalkar-7a3502288',
      },
      {
        name: 'Emaad Karim',
        position: 'Corporate Officer',
        linkedin: 'emaad-karim',
      },
      {
        name: 'Karla Sanchez',
        position: 'Corporate Officer',
        linkedin: 'karla-sanchez01',
      },
      {
        name: 'Riya Shah',
        position: 'Corporate Officer',
        linkedin: 'riyashah06',
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
        linkedin: 'alanjaf',
      },
      {
        name: 'Jadon Lee',
        position: 'Events Officer',
        linkedin: 'jadonl',
      },
      {
        name: 'Tanmai Buyyanapragada',
        position: 'Events Officer',
        linkedin: 'tanmaibuyyana',
      },
      {
        name: 'Pallavi Gokul',
        position: 'Events Officer',
        linkedin: 'pallavi-gokul-13a76122b',
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
        linkedin: 'liannie3',
      },
      {
        name: "Caden D'Souza",
        position: 'PR Officer',
        linkedin: 'caden-d-souza-5162b22b9',
      },
      {
        name: 'Adhithi Venkatraghavan',
        position: 'PR Officer',
      },
      {
        name: 'Xinyan Su',
        position: 'PR Officer',
        linkedin: 'xinyan-su-317757265',
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
        linkedin: 'jyotiverma607',
      },
      {
        name: 'Catherine Boyle',
        position: 'TEC Officer',
        linkedin: 'catherine-boyle-5003a12b0',
      },
      {
        name: 'Abhitej Devireddy',
        position: 'TEC Officer',
        linkedin: 'abhitej-devireddy-648864275',
      },
      {
        name: 'Branden Zhu',
        position: 'TEC Officer',
        linkedin: 'ziqian-zhu-a77096339',
      },
    ],
  },
};

const officerPhotoUrl = (officer: OfficerInput) => {
  return (
    officer.photoUrl ??
    `https://officer-photos.ieeetamu.org/${officer.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}.jpg`
  );
};

const Branches: Record<string, Branch> = Object.fromEntries(
  Object.entries(rawBranches).map(([key, branch]) => [
    key,
    {
      ...branch,
      officers: branch.officers.map((officer) => ({
        ...officer,
        photoUrl: officerPhotoUrl(officer),
      })),
    },
  ])
);

const officerId = (officer: Officer) =>
  officer.name.toLowerCase().replace(/\s+/g, '-');

export { Branches, officerId };
export type { Branch, Officer };
