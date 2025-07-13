const data = {
  metaData: {
    title: 'Automated Compliance Monitoring | Certify',
    description:
      'Improve performance and reduce risk with automated compliance monitoring from CertifyOS.',
  },
  heroSection: {
    bgColor: '#D9D5F7',
    imageWidth: 230,
    imageHeight: 230,
    imageURL: '/products/monitoring/compliance-monitoring.png',
    imageALT: 'CertifyOS healthcare compliance automation',
    title: [
      {
        type: 'italic',
        text: 'Ensuring quality,',
      },
      ' and compliance at every turn',
    ],
    description:
      'Streamline your compliance operations with a trusted, automated monitoring solution designed for your business.',
  },
  largeDrawerModuleSection1: {
    header: ['COMPLIANCE'],
    content: [
      {
        title: 'Quality Assurance',
        body: 'Continuously monitor provider sanctions, exclusions and disciplinary history for “bad actors” to ensure quality across your network and identify suboptimal providers for improvement measures or removal.',
      },
      {
        title: 'Compliance Management',
        body: 'Automated provider monitoring systems help you proactively monitor provider credentials, licenses, certifications, and other compliance-related information, minimizing the risk of non-compliance and associated penalties.',
      },
    ],
  },
  largeDrawerModuleSection2: {
    header: ['PERFORMANCE'],
    content: [
      {
        title: 'Member Safety',
        body: 'Quickly identify risks or concerns related to provider competence, malpractice history, or disciplinary action so you can take immediate next-steps to protect member safety and prevent harm.',
      },
      {
        title: 'Real-Time Sanctions Monitoring',
        body: 'Monitor your network across multiple data sources in real-time to provide actionable insights at the provider level and guarantee improved member outcomes and satisfaction.',
      },
    ],
  },
  largeDrawerModuleSection3: {
    header: [
      'How CertifyOS can help Simplify and streamline the monitoring process for ',
      {
        type: 'italic',
        text: 'healthcare organizations.',
      },
    ],
    content: [
      {
        title: 'Automated Monitoring',
        body: 'Automate the monitoring process through real-time alerts and continuous notifications. Tracking key provider metrics, credentials, licenses, and certifications allows you to stay informed about any provider status changes or updates.',
      },
      {
        title: 'Compliance Tracking',
        body: 'Remain compliant by monitoring and managing provider credentials, licenses, certifications, and adherence to regulatory requirements. Certify makes it easy for you to track expiration dates, renewal statuses, and compliance documentation.',
      },
      {
        title: 'Performance Analytics',
        body: 'Our platform offers comprehensive performance analytics, enabling organizations to track and evaluate provider performance based on various quality measures.',
      },
      {
        title: 'Customizable Reporting',
        body: 'Customize in-platform reporting features and allow your business to generate detailed reports on provider monitoring activities. These reports facilitate data-driven decision-making and support audits and accreditations.',
      },
    ],
  },
  largeDrawerModuleSection4: {
    header: ['FREQUENTLY ASKED QUESTIONS: '],
    content: [
      {
        title: 'What does ongoing monitoring include?',
        body: [
          {
            type: 'p',
            text: 'We leverage integrations with a wide variety of external sites, such as DEA/CDS lists, board certification sites like ABMS and AOA, OIG, GSA, Medicare Opt-Out, NPDB via continuous query, and FSMB, to perform monitoring. Monitoring includes:',
          },
          {
            type: 'p',
            text: '-Expirables monitoring (State License, DEA, Board Certifications)',
          },
          {
            type: 'p',
            text: '-Sancations Monitoring including Federal (GSA, SAM, OIG, MOO) and state sanctions',
          },
          {
            type: 'p',
            text: '-NPDB Monitoring to flag malpractice claims against a provider.',
          },
          { type: 'br' },
          {
            type: 'p',
            text: 'When expired DEAs, actions, sanctions, or exclusions are found, that information is flagged within our system. For license monitoring, we have created direct connections to all state license boards for MDs, DOs, PAs, Nurses, Mental Health Providers, and Dental Providers, and therefore automatically verify provider licenses for the universe of those providers.',
          },
          { type: 'br' },
          {
            type: 'p',
            text: "Our system also automatically flags a provider if they're found on a state licensure action list. For other license types for which we have not yet attributed provider licenses and automated the process, our team or a client will access those state license boards manually, and will upload relevant reports for any providers that are on any lists. We check education via state license board in states that perform these checks, and for those that don’t we go directly to the place of education for verification.",
          },
        ],
      },
      {
        title: 'At what frequency do you monitor?',
        body: 'We monitor providers on a monthly basis. This aligns with the monthly cadence at which our API intergrations to primary sources are refereshed.',
      },
      {
        title: 'How does ongoing monitoring ensure compliance?',
        body: 'Automated provider monitoring systems help healthcare organizations stay compliant with accreditation standards, regulations, and payer requirements. By proactively tracking provider credentials and compliance-related information, they reduce the risk of non-compliance and penalties. CertifyOS ensures compliance by monitoring provider credentials, licenses, certifications, and regulatory adherence. It simplifies tracking expiration dates, renewals, and compliance documentation for organizations.',
      },
      {
        title:
          'Can I generate reports to identify out of compliance providers?',
        body: 'The platform provides customizable reporting features, allowing organizations to generate detailed reports on provider monitoring activities. These reports facilitate data-driven decision-making and support audits and accreditations.',
      },
      {
        title: 'How do you handle past vs. new monitoring incidents?',
        body: 'Our clients have access to all monitoring incidents once a provider enrolled into the monitoring service on the CertifyOS platofrm. Clients have the ability to easily filter for new monitoring incidents only, in order to easily track any new flags on their providers.',
      },
    ],
  },
  waveModule: [
    {
      src: '/products/monitoring/wave1.png',
      alt: 'Enter five initial data points for your entire provider roster.',
      width: 326,
      height: 196,
    },
    {
      src: '/products/monitoring/wave2.png',
      alt: 'Our APIs connect into hundreds of primary sources, pulling thousands of verified data points, continuously refreshed.',
      width: 362,
      height: 281,
    },
    {
      src: '/products/monitoring/wave3.png',
      alt: 'Access and export monitoring dashboard that can be easily filtered according to provider results, with new flags identified each month.',
      width: 326,
      height: 210,
    },
  ],
  testimonialsSection: [
    {
      content:
        "Through the partnership with CertifyOS, OncoHealth experienced remarkable improvements in provider support, reliability, and efficiency through their partnership with CertifyOS. The collaborative approach and reliable assistance provided by CertifyOS enhanced productivity and streamlined operations for OncoHealth's provider teams.",
      name: ['Cliff Culver, ', 'Chief Operating Officer, OncoHealth'],
      maxWidth: 1100,
    },
  ],
  payerResources: {
    slugs: [
      'roi-automated-credentialing',
      'human-automation-reality-check',
      'how-human-automation-fails-healthcare',
    ],
    header: 'MONITORING ARTICLES',
    button: {
      text: 'See All Articles',
      href: '/resources/blog',
    },
  },
  transformSection: {
    title: [
      {
        type: 'italic',
        text: 'Empower your organization',
      },
      ' with automated provider monitoring solutions.',
    ],
    imageUrl: '/products/monitoring/automated-monitoring.png',
    alt: 'Automated monitoring',
  },
}

export default data
