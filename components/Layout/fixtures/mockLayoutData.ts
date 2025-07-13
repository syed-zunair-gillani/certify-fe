import { type formattedLayoutDataProps } from '@/services/layout'

const layout: formattedLayoutDataProps = {
  header: {
    logo: {
      alt: 'certifyos is now certify',
      url: 'https://cdn.sanity.io/images/6h189m59/production/5eafecbd354f7dcfb1b8736e552717ba1c368242-183x37.svg',
    },
    loginIcon: {
      icon: {
        alt: '',
        url: 'https://cdn.sanity.io/images/6h189m59/production/399396ba8c0b98068985451f9a09a95e0693d420-31x34.png?auto=format',
      },
      href: 'https://ng.certifyos.com/login',
    },
    searchIcon: {
      alt: '',
      url: 'https://cdn.sanity.io/images/6h189m59/production/e352165cabe905c217f4ea12342b177ad04d4798-33x33.png?auto=format',
    },
    button: {
      bgColor: '#f35848',
      text: 'Book A Free Demo',
      href: '/request-a-demo',
    },
    menus: [
      {
        title: 'Products',
        subMenus: [
          {
            text: 'Credentialing',
            href: '/products//credentialing',
            iconUrl:
              'https://cdn.sanity.io/images/6h189m59/production/ab973ab6d488b67f2938104c659675f2349145ae-28x24.svg',
            preview: {
              thumbnail: {
                asset: {
                  _ref: 'image-63c9949fb4f5c4b089fc399a93d9495b470b7ea2-90x77-svg',
                  _type: 'reference',
                },
                alt: null,
              },
              dek: 'Build + scale industry-leading provider networks – in minutes (not months).',
              thumbnailBgColor: '#79709d',
              thumbnailUrl:
                'https://cdn.sanity.io/images/6h189m59/production/63c9949fb4f5c4b089fc399a93d9495b470b7ea2-90x77.svg',
              thumbnailAlt: '',
            },
          },
          {
            text: 'Licensing',
            href: '/products/licensing',
            iconUrl:
              'https://cdn.sanity.io/images/6h189m59/production/c995ae31ff5f76f97f0d823a803945b79257b309-29x23.svg',
            preview: {
              thumbnail: {
                asset: {
                  _type: 'reference',
                  _ref: 'image-92397e9c9edd7cb91b8a16b22ccf5e520b5a2944-112x74-svg',
                },
                alt: null,
              },
              dek: 'Make medical licensing less complex + seamlessly expand into new provider markets.',
              thumbnailBgColor: '#c9bee9',
              thumbnailUrl:
                'https://cdn.sanity.io/images/6h189m59/production/92397e9c9edd7cb91b8a16b22ccf5e520b5a2944-112x74.svg',
              thumbnailAlt: '',
            },
          },
          {
            text: 'Monitoring',
            href: '/products/compliance-monitoring',
            iconUrl:
              'https://cdn.sanity.io/images/6h189m59/production/e2ab0b62420276b05a1a9c1f53eaba35ce8ce22f-24x24.svg',
            preview: {
              thumbnail: {
                asset: {
                  _type: 'reference',
                  _ref: 'image-d141e96f4e804fa9ea20d249f8fc02e8683e8bdd-82x82-svg',
                },
                alt: null,
              },
              dek: 'Ensure provider quality and compliance - reducing risk and improving member outcomes.',
              thumbnailBgColor: '#d9d5f7',
              thumbnailUrl:
                'https://cdn.sanity.io/images/6h189m59/production/d141e96f4e804fa9ea20d249f8fc02e8683e8bdd-82x82.svg',
              thumbnailAlt: '',
            },
          },
          {
            text: 'Payer Enrollment',
            href: '/products/payer-enrollment',
            iconUrl:
              'https://cdn.sanity.io/images/6h189m59/production/89b3eada75ea22f3b66168bd324c894f81d48135-24x24.svg',
            preview: {
              thumbnail: {
                asset: {
                  _type: 'reference',
                  _ref: 'image-0f4abae56ef39044059ea70f404e957572aac3f3-106x75-svg',
                },
                alt: null,
              },
              dek: 'Get providers in network, delivering care, faster than ever before.',
              thumbnailBgColor: '#e5974d',
              thumbnailUrl:
                'https://cdn.sanity.io/images/6h189m59/production/0f4abae56ef39044059ea70f404e957572aac3f3-106x75.svg',
              thumbnailAlt: '',
            },
          },
          {
            text: 'Roster Management',
            href: '/products/roster-management',
            iconUrl:
              'https://cdn.sanity.io/images/6h189m59/production/7998c7dbd512123512e440c3709b093180c616da-24x24.svg',
            preview: {
              thumbnail: {
                asset: {
                  _type: 'reference',
                  _ref: 'image-164f385833ed19d5265c5ca0f32ff82de373a4ae-70x90-svg',
                },
                alt: null,
              },
              dek: 'Personalized and standardized rosters to meet your organizations needs.',
              thumbnailBgColor: '#fff38b',
              thumbnailUrl:
                'https://cdn.sanity.io/images/6h189m59/production/164f385833ed19d5265c5ca0f32ff82de373a4ae-70x90.svg',
              thumbnailAlt: '',
            },
          },
        ],
      },
      {
        title: 'Clients',
        subMenus: [
          {
            text: 'Health Plans',
            href: '/clients/health-plans',
          },
          {
            text: 'Digital Health',
            href: '/clients/digital-health',
          },
          {
            text: 'Health Systems',
            href: '/clients/health-systems',
          },
        ],
      },
      {
        subMenus: [
          {
            text: 'About Us',
            href: '/company',
          },
          {
            text: 'Press & News',
            href: '/news',
          },
          {
            text: 'Careers',
            href: '/careers',
          },
        ],

        title: 'Company',
      },
      {
        title: 'Resource Library',
        subMenus: [
          {
            text: 'Blog',
            href: '/resources/blog',
          },
        ],
      },
    ],
  },
  footer: {
    logo: {
      alt: 'Certify provider data management',
      url: 'https://cdn.sanity.io/images/6h189m59/production/676463978a17f798be3269377d457c5a2f505273-322x65.svg',
    },
    bgColor: '#e9bec7',
    pp: {
      href: '/privacy',
      text: 'Privacy Policy',
    },
    tos: {
      href: '/terms-of-service',
      text: 'Terms of Service',
    },
    links: [
      {
        title: 'Products',
        subLinks: [
          {
            href: '/products/credentialing',
            text: 'Credentialing',
          },
          {
            href: '/products/licensing',
            text: 'Licensing',
          },
          {
            text: 'Monitoring',

            href: '/products/compliance-monitoring',
          },
          {
            text: 'Payer Enrollment',

            href: '/products/payer-enrollment',
          },
          {
            href: '/products/roster-management',
            text: 'Roster Management',
          },
        ],
      },
      {
        subLinks: [
          {
            href: '/clients/health-plans',
            text: 'Health Plans',
          },
          {
            href: '/clients/digital-health',
            text: 'Digital Health',
          },
          {
            href: '/clients/health-systems',
            text: 'Health Systems',
          },
        ],

        title: 'Clients',
      },
      {
        subLinks: [
          {
            href: '/company',
            text: 'About Us',
          },
          {
            href: '/company/news',
            text: 'Press & News',
          },
          {
            href: '/company/careers',
            text: 'Careers',
          },
        ],

        title: 'Company',
      },
      {
        title: 'Resource Library',
        subLinks: [
          {
            href: '/resources/blog',
            text: 'Blog',
          },
        ],
      },
    ],
    copyRight: '© Copyright 2024 CertifyOS',
  },
}

export default layout
