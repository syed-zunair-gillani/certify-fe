import { JOB_HREF } from '@/constants/company'

const data = {
  document: {
    title: 'Work Remotely at Certify & Help Modernize Healthcare',
    description:
      'Explore current job openings and work from home in engineering, business, sales, or our many other disciplines.',
  },
  heroSection: {
    from: {
      title: 'Join the next generation.',
      button: {
        text: 'See Career Opportunities',
        href: JOB_HREF,
      },
    },
    images: {
      src: '/company/careers/certifyos-jobs.png',
      alt: 'Careers at CertifyOS',
      width: 512,
      height: 341,
    },
  },
  drawerModule: {
    title: ['Why join CertifyOS?'],
    items: [
      {
        title: 'Innovative Work',
        description:
          'Join a team that values creativity and encourages innovative thinking. Contribute to projects that make a real impact in the healthcare data.',
      },
      {
        title: 'Collaborative Culture',
        description: [
          'We believe in the power of collaboration. Work alongside talented and diverse professionals who are dedicated to achieving common goals.',
          '**136+ employees and growing',
        ],
      },
      {
        title: 'Professional Growth',
        description: [
          'At CertifyOS, we invest in our people. Take advantage of ongoing learning opportunities, mentorship programs, and career development resources.',
          [
            '**88% of employees reported positive growth and development opportunities',
            '**98% of employees endorse leadership',
          ],
        ],
      },
      {
        title: 'Inclusive Environment',
        description:
          'We celebrate diversity and inclusion. Your unique perspectives and experiences are valued, fostering an inclusive workplace where everyone can thrive.',
      },
    ],
  },
  visualOnlyModuleSection: {
    header: 'Join a global team',
    body: 'We hire top talent from across the globe. Our team is fully remote and proudly located from Canada to the Philippines.',
    images: {
      alt: 'Certify is hiring',
      src: '/clients/health-plans/branch-locations.png',
      width: 796,
      height: 421,
    },
    bottomComponent: {
      visualHighlights: [
        {
          title: '136+',
          body: 'employees and growing',
        },
        {
          title: '98%',
          body: 'of employees endorse leadership',
        },
        {
          title: '88%',
          body: 'of employees reported positive growth and development opportunities',
        },
      ],
      button: {
        text: 'Explore Job Opportunities',
        href: JOB_HREF,
      },
    },
  },
  advantageVisualOnlyModuleSection: {
    header: 'Ready to help us modernize healthcare?',
    body: "We're looking for talented folks to join our team",
    images: [
      {
        alt: 'Fully remote',
        src: '/company/careers/remote.svg',
        width: 55.62,
        height: 46,
        title: 'remote team',
        description: 'Work from anywhere.',
      },
      {
        alt: 'Health benefits',
        src: '/company/careers/insurance.svg',
        width: 42.55,
        height: 46,
        title: 'Insurance',
        description: 'Health, vision, dental and life insurance',
      },
      {
        alt: 'Workplace retirement plan',
        src: '/company/careers/401k.svg',
        width: 46,
        height: 46,
        title: '401K',
        description: 'Company sponsored 401k to invest in your future',
      },
      {
        alt: 'Maternity/paternity leave',
        src: '/company/careers/parental-leave.svg',
        width: 46,
        height: 46,
        title: 'GENEROUS PARENTAL LEAVE',
        description:
          'We support all new parents with competitive leave policies ',
      },
      {
        alt: 'Paid Time Off',
        src: '/company/careers/pto.svg',
        width: 52.1,
        height: 46,
        title: 'UNLIMITED PTO',
        description: 'Invest in yourself with flexible away time',
      },
      {
        alt: 'Office equipment',
        src: '/company/careers/equipment.svg',
        width: 46.24,
        height: 46,
        title: 'EQUIPMENT',
        description: 'Anything you would need to do your job.',
      },
    ],
    bottomComponent: {
      button: {
        text: 'See Career Opportunities',
        href: JOB_HREF,
      },
    },
  },
  RoleDrawerModuleSection: {
    content: [
      {
        name: 'Engineering',
        roles: [
          {
            title: 'Customer Success Manager',
            location: 'Position',
            isRemote: true,
          },
          {
            title: 'Customer Success Manager',
            location: 'Position',
            isRemote: true,
          },
          {
            title: 'Customer Success Manager',
            location: 'Position',
            isRemote: true,
          },
        ],
      },
      {
        name: 'Business',
      },
      {
        name: 'Marketing',
      },
      {
        name: 'HR',
      },
      {
        name: 'Sales',
      },
      {
        name: 'Product',
      },
    ],
  },
}

export default data
