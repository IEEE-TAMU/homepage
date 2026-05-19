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
        name: 'Alan Jaf',
        position: 'President',
        linkedin: 'alanjaf',
      },
      {
        name: 'Josh Rayo',
        position: 'Vice President',
        linkedin: 'josh-rayo-a5880b29b',
      },
      {
        name: 'Oliver Jansen',
        position: 'Secretary',
        linkedin: 'oliver-jansen',
      },
      {
        name: 'Andy Luu',
        position: 'Treasurer',
        linkedin: 'andy-luu-777449337',
      },
    ],
  },
  undersecretary: {
    name: 'Undersecretary Team',
    description:
      'The Undersecretary Team manages internal affairs, member engagement, and chapter administration.',
    officers: [
      {
        name: 'Seth Mayhue',
        position: 'External Relations',
        linkedin: 'seth-mayhue-740201301',
      },
      {
        name: 'Caleb Norton',
        position: 'Webmaster',
        linkedin: 'calebnorton',
      },
      {
        name: 'Jadon Lee',
        position: 'JR Webmaster',
        linkedin: 'jadonl',
      },
      {
        name: 'Sree Davuluri',
        position: 'Flex',
      },
    ],
  },
  activities: {
    name: 'Activities Committee',
    description:
      'The Activities Committee organizes hands-on workshops and technical activities for members.',
    officers: [
      {
        name: 'Tony Doan',
        position: 'Activities Chair',
        linkedin: 'tonydoanuts',
      },
      {
        name: 'Branden Zhu',
        position: 'Activities Officer',
        linkedin: 'ziqian-zhu-a77096339',
      },
      {
        name: 'Joaquin Welch',
        position: 'Activities Officer',
      },
      {
        name: 'Micah Clarke',
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
        name: 'Faizan Ehtisham',
        position: 'Corporate Chair',
      },
      {
        name: 'Anushka Kalkar',
        position: 'Corporate Officer',
        linkedin: 'anushka-kalkar-7a3502288',
      },
      {
        name: 'Joseph Yilmaz',
        position: 'Corporate Officer',
      },
      {
        name: 'Riya Shah',
        position: 'Corporate Officer',
        linkedin: 'riyashah06',
      },
    ],
  },
  'public-relations': {
    name: 'Public Relations Committee',
    description:
      'The Public Relations Committee handles marketing, branding, and communications for the chapter.',
    officers: [
      {
        name: 'Arju Kafle',
        position: 'PR Chair',
        linkedin: 'arju-kafle',
      },
      {
        name: 'Kenneth Lundquist',
        position: 'PR Officer',
      },
      {
        name: 'Ibrahim Ahmad',
        position: 'PR Officer',
      },
      {
        name: 'Olivia Goralski',
        position: 'PR Officer',
      },
    ],
  },
  tec: {
    name: 'Technical Committee',
    description:
      'The Technical Committee develops educational content, tutorials, and resources for members.',
    officers: [
      {
        name: 'Caden McKenzie',
        position: 'Technical Chair',
      },
      {
        name: 'Catherine Boyle',
        position: 'Technical Officer',
        linkedin: 'catherine-boyle-5003a12b0',
      },
      {
        name: 'Joseph Lin',
        position: 'Technical Officer',
      },
      {
        name: 'Fatima Iftekhar',
        position: 'Technical Officer',
      },
      {
        name: 'Nikhil Patel',
        position: 'Project Lead',
      },
      {
        name: 'Saketh Desu',
        position: 'Project Lead',
      },
    ],
  },
};

const officerPhotoUrl = (officer: OfficerInput) => {
  if (officer.photoUrl) return officer.photoUrl;

  const filename = officer.name.toLowerCase().replace(/[^a-z0-9]/g, '_');

  if (process.env.NODE_ENV === 'development') {
    return `/officer_photos/${filename}.jpg`;
  }

  return `https://officer-photos.ieeetamu.org/${filename}.jpg`;
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

const linkedinUrl = (slug: string) => `https://www.linkedin.com/in/${slug}`;

const officerId = (officer: Officer) =>
  officer.name.toLowerCase().replace(/\s+/g, '-');

export { Branches, officerId, linkedinUrl };
export type { Branch, Officer };
