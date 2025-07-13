const getCurrentYear = new Date().getFullYear()

export const headerTitle = {
  products: {
    title: 'Products',
    href: '/products',
  },
  clients: {
    title: 'Clients',
    href: '/clients',
  },
  company: {
    title: 'Company',
    href: '/company',
  },
  resourceLibrary: {
    title: 'Resource Library',
    href: '/resources/blog',
  },
}

export const headerNav = [
  {
    ...headerTitle.products,
    subTitle: [
      {
        title: 'Credentialing',
        href: `${headerTitle.products.href}/credentialing`,
        icon: 'Credentialing',
        backgroundColor: '#79709D',
        width: '28',
        height: '24',
        content: {
          icon: 'Credentialing',
          text: 'Build + scale industry-leading provider networks – in minutes (not months).',
          top: '20',
        },
      },
      {
        title: 'Licensing',
        href: `${headerTitle.products.href}/licensing`,
        icon: 'Licensing',
        backgroundColor: '#C9BEE9',
        width: '29',
        height: '23',
        content: {
          icon: 'DesktopLicensing',
          text: 'Make medical licensing less complex + seamlessly expand into new provider markets.',
          top: '55.5',
        },
      },
      {
        title: 'Monitoring',
        href: `${headerTitle.products.href}/compliance-monitoring`,
        icon: 'Monitoring',
        backgroundColor: '#D9D5F7',
        width: '24',
        height: '24',
        content: {
          icon: 'DesktopMonitoring',
          text: 'Ensure provider quality and compliance - reducing risk and improving member outcomes.',
          top: '91',
        },
      },
      {
        title: 'Payer Enrollment',
        href: `${headerTitle.products.href}/payer-enrollment`,
        icon: 'PayerEnrollment',
        backgroundColor: '#E5974D',
        width: '24',
        height: '24',
        content: {
          icon: 'DesktopPayerEnrollment',
          text: 'Get providers in network, delivering care, faster than ever before.',
          top: '126.5',
        },
      },
      {
        title: 'Roster Management',
        href: `${headerTitle.products.href}/roster-management`,
        icon: 'RosterManagement',
        backgroundColor: '#FFF38B',
        width: '24',
        height: '24',
        content: {
          icon: 'DesktopRosterManagement',
          text: 'Personalized and standardized rosters to meet your organizations needs.',
          top: '162',
        },
      },
    ],
  },
  {
    ...headerTitle.clients,
    subTitle: [
      {
        title: 'Health Plans',
        href: `${headerTitle.clients.href}/health-plans`,
      },
      {
        title: 'Digital Health',
        href: `${headerTitle.clients.href}/digital-health`,
      },
      {
        title: 'Health Systems',
        href: `${headerTitle.clients.href}/health-systems`,
      },
    ],
  },
  {
    ...headerTitle.company,
    subTitle: [
      {
        title: 'About Us',
        href: `${headerTitle.company.href}`,
      },
      {
        title: 'Press & News',
        href: `${headerTitle.company.href}/news`,
      },
      {
        title: 'Careers',
        href: `${headerTitle.company.href}/careers`,
      },
    ],
  },
  {
    ...headerTitle.resourceLibrary,
    subTitle: [
      {
        title: 'Blog',
        href: `${headerTitle.resourceLibrary.href}`,
      },
    ],
  },
]

export const footerNav = {
  footer: [...headerNav],
  business: {
    copyRight: `© Copyright ${getCurrentYear} CertifyOS`,
    privacyPolicy: {
      text: 'Privacy Policy',
      href: '/privacy',
    },
    termsOfService: {
      text: 'Terms of Service',
      href: '/terms-of-service',
    },
  },
}
