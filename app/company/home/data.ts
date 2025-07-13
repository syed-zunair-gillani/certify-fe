import { JOB_HREF } from '@/constants/company'

const data = {
  document: {
    title: 'About Certify: Our Mission, Vision & Leadership',
    description:
      'Learn about the people and mission of Certify, the next generation of provider data intelligence.',
  },
  heroSection: {
    from: {
      title: [
        'Meet the people ',
        { type: 'italic', text: ' powering ' },
        'the ',
        { type: 'italic', text: ' next generation ' },
        'of ',
        'provider data intelligence',
      ],
      button: {
        text: 'Explore Open Roles',
        href: JOB_HREF,
      },
    },
    images: {
      src: '/company/about-certifyos.png',
      alt: 'certifyos-team',
      width: 721,
      height: 831,
    },
  },
  largeOpenDrawerModuleSection: {
    header: 'Our Mission & Values drive the way we work',
    content: [
      {
        title: 'Collaboration',
        image: {
          src: '/company/about-collaboration-icon.png',
          alt: 'Work in a collaborative environment',
        },
      },
      {
        title: 'Results',
        image: {
          src: '/company/about-results-icon.png',
          alt: 'Get the satisfaction of driving results',
        },
      },
      {
        title: 'Accountability',
        image: {
          src: '/company/about-accountability-icon.png',
          alt: 'Accountability',
        },
      },
      {
        title: 'Feedback',
        image: {
          src: '/company/about-feedback-icon.png',
          alt: 'Be heard',
        },
      },
      {
        title: 'Be Yourself!',
        image: {
          src: '/company/about-yourself-icon.png',
          alt: 'Be yourself!',
        },
      },
    ],
  },
  pieChartModule: {
    bottomContent: [
      {
        title: '75+',
        body: 'Partners',
      },
      {
        title: '1600+',
        body: 'Data points per provider',
      },
      {
        title: '15m+',
        body: 'Licenses',
      },
    ],
  },
  historySection: {
    title: 'OUR HISTORY',
    body: [
      'Since 2020 we have been on a mission to change how the healthcare industry deals with provider data. Our goal is to reduce the cost of healthcare by streamlining access to provider data and reducing administrative and regulatory burdens on healthcare organizations. Our team has more than 75 years of combined experience building provider data systems at large regional health plans. We are backed by top-tier VC firms who share our vision of creating a data architecture that removes the friction surrounding provider network management.  We are a team of health plan employees working to solve health plan problems with technology.',
      'CertifyOS is revolutionizing the healthcare industry by laying the infrastructure upon which the next generation of provider-centric applications (network adequacy, accuracy, provider utilization, etc.) will be built. As innovative digital health plans and provider care models continue to scale and challenge traditional care models, the need for a centralized data infrastructure has never been greater. Our platform will support the future of healthcare innovation by becoming the source of truth of provider data, and making that data easily accessible and actionable for the entire healthcare ecosystem.',
      "We have built an API-first, UI-agnostic, end-to-end provider network management platform automating licensing, enrollment, credentialing, and network monitoring. With direct integrations into 100's of primary sources, we are uniquely positioned to enhance visibility into the entire provider network management process. Our team has more than 25+ years of combined experience building provider data systems at Oscar Health and are backed by top-tier VC firms who share our vision of creating a one-of-a-kind healthcare cloud that removes the friction surrounding provider data.",
    ],
    images: {
      src: '/company/certifyos-history.png',
      alt: 'CertifyOS history',
      width: 721,
      height: 646,
    },
  },
  leadershipDrawerModuleSection: {
    content: [
      {
        name: 'Anshul Rathi',
        role: 'Founder and CEO',
        avatar: '/company/anshul-bio.png',
        alt: 'Anshul Rathi, CertifyOS founder and CEO',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        x_link: '',
        ins_link: '',
      },
      {
        name: 'Simon Mass',
        role: 'Chief Operating Officer',
        // avatar: '',
        // alt: '',
        // body: '',
        // x_link: '',
        // ins_link: ''
      },
      {
        name: 'Nick Helfrich',
        role: 'Chief Operating Officer',
        // avatar: '',
        // alt: '',
        // body: '',
        // x_link: '',
        // ins_link: ''
      },
      {
        name: 'Anu Ram',
        role: 'Chief Product Officer',
        // avatar: '',
        // alt: '',
        // body: '',
        // x_link: '',
        // ins_link: ''
      },
      {
        name: 'Zoltan Gombosi',
        role: 'SVP of Engineering',
        // avatar: '',
        // alt: '',
        // body: '',
        // x_link: '',
        // ins_link: ''
      },
      {
        name: 'Mitch Gorodokin',
        role: 'Senior Director of Business Development',
        // avatar: '',
        // alt: '',
        // body: '',
        // x_link: '',
        // ins_link: ''
      },
      {
        name: 'Carla Simmons',
        role: 'Associate Director, Credentialing',
        // avatar: '',
        // alt: '',
        // body: '',
        // x_link: '',
        // ins_link: ''
      },
      {
        name: 'Juliana Van Deele',
        role: 'VP, Head of Growth & Product Marketing',
        // avatar: '',
        // alt: '',
        // body: '',
        // x_link: '',
        // ins_link: ''
      },
    ],
  },
  bannerModule: {
    description: 'One API. One provider ID. Frictionless provider data..',
  },
  transformSection: {
    title: ['CertifyOS all ', 'over the world'],
    body: 'We are a global and fully remote organization with 100+ team members and growing! We currently have team members in the following locations:',
    images: {
      src: '/clients/health-plans/branch-locations.png',
      alt: 'CertifyOS is hiring!',
      width: 758,
      height: 400,
    },
    button: {
      text: 'See Career Opportunities',
      href: JOB_HREF,
    },
  },
}

export default data
