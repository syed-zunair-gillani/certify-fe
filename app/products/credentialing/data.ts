const data = {
  document: {
    title: 'Easy Credentialing for Any Provider Type | Certify',
    description:
      'Eliminate administrative workloads as you build and scale industry-leading provider networks with CertifyOS.',
  },
  heroSection: {
    bgColor: '#79709D',
    imageURL: '/products/credentialing/easy-credentialing.png',
    imageALT: 'CertifyOS credentialing',
    imageWidth: 192,
    imageHeight: 192,
    title: [
      { type: 'italic', text: 'Easy' },
      ' credentialing for any provider type, ',
      { type: 'italic', text: 'any time' },
    ],
    description:
      'Build and scale industry-leading provider networks while eliminating administrative workloads.',
  },
  drawerModule: {
    title: [
      'End-to-end ',
      {
        type: 'italic',
        text: 'efficiency',
      },
    ],
    items: [
      {
        title: 'A Single Source Of Truth',
        description:
          'Use a simple, centralized data platform to manage provider credentialing documents, run reporting and analytics, and prepare for annual audits.',
      },
      {
        title: 'Automated Data Collection',
        description:
          'Avoid manual verifications, long processing delays, and high admin costs with real-time provider data, verified straight from the primary source.',
      },
      {
        title: 'Continuous Monitoring',
        description:
          'Stay compliant between credentialing cycles with real-time provider sanctions monitoring and automated alerts with changes to a provider’s data.',
      },
    ],
  },
  bannerModule: {
    title: [
      'Accurate ',
      {
        type: 'italic',
        text: 'primary source',
      },
      ' verifications in minutes, not months',
    ],
    description:
      'Incomplete or inaccurate provider data can hold up review processes and cause costly credentialing delays. CertifyOS delivers fast, reliable insights with a single click.',
  },
  waveModule: [
    {
      src: '/products/credentialing/wave-4.png',
      alt: 'Enter five initial data points to get started with a provider.',
      width: 326,
      height: 196,
    },
    {
      src: '/products/credentialing/wave-5.png',
      alt: 'Our APIs connect into hundreds of primary sources, pulling thousands of verified data points in real time.',
      width: 362,
      height: 281,
    },
    {
      src: '/products/credentialing/wave-6.png',
      alt: 'Get verified provider credentialing packets, bulk approve clean files, or send non-clean files to a centralized credentialing committee.',
      width: 362,
      height: 223,
    },
  ],
  visualOnlyModuleSection: {
    header: 'Lorem ipsum',
    body: 'We gather  thousands of data points, attribute them to unique providers, and make them available for your organization’s unique needs.',
    images: {
      alt: 'Lorem ipsum',
      src: '/products/roster-management/lorem-ipsum.png',
      width: 831,
      height: 333,
    },
  },
  largeDrawerModuleSection: {
    header: 'Specifications',
    content: [
      {
        title: 'Automated CAQH Standardization',
        body: 'Our CAQH integration standardizes all application info and auto-rosters each provider’s data to their profile. This ensures all your applications are compliant without manual inputs or repeated data entry.',
      },
      {
        title: 'Seamless File Organization',
        body: 'Get real-time provider updates, flags for sanctions, exclusions, licensure board actions, or positive NPDB reports. Then easily bulk review and organize provider file types in accordance with these industry-leading regulations.',
      },
      {
        title: 'Real-time Compliance Reporting',
        body: 'Monitor and update all provider data instantly with our real-time compliance reporting actions. Our compliance pop-ups help avoid manual NCQA, state, national, and plan-level checks.',
      },
      {
        title: 'Credentialing Status Emails',
        body: 'Update providers about their credentialing application status through in-platform, customizable emails. Reduce manual time spent while providing transparency, expediting your provider growth, and maintaining your current network.',
      },
      {
        title: 'Customized Credentialing Application Integrations',
        body: 'Intake all NCQA-required credentialing info in under 10 minutes. Send customizable, in-platform applications directly to providers and facility managers. Through our system’s configurations and customizations, completed applications are automatically integrated into your credentialing workflow. Frictionless provider onboarding and intake forms means faster growth for your network and more accessible providers for more patients in-need.',
      },
      {
        title: 'Deceased Provider Checks',
        body: 'Our deceased provider check sends ASAP notifications of deceased in-network providers. Automatically check the Social Security Death Master File to catch fraudulent applications before they’re approved.',
      },
      {
        title: 'Virtual Credentialing Committee',
        body: 'Auto-enroll new providers in National Practitioner Data Bank’s querying and seamlessly pull the most up-to-date provider reports. Ensure every provider completes all NCQA verification requirements and save hundreds of hours.',
      },
      {
        title: 'Comprehensive, Automatic Sanctions Checks',
        body: 'Discover provider sanctions through comprehensive, digital data analyses. Our system scans the OIG, MOO, GSA/SAM/OFAC, Medicaid preclusions lists, and state-reported sanctions. So you can ensure all your current and new provider data is accurate, up-to-date, and accurately linked without any manual searching.',
      },
    ],
  },
  FAQSection: {
    header: 'FREQUENTLY ASKED QUESTIONS:',
    content: [
      {
        title: "How is CertifyOS' credentialing offering different?",
        body: 'CertifyOS is a data-first, open-API provider of data infrastructure that currently houses over 2 million unique, pre-verified NPIs.  Our platform and architecure allow us to credential providers at industry leading SLAs, and empower health plans to access and manage specific provider data elements to credential providers and send data to downstream systems as needed, in real time.  The results speak for themselves - our clients consistently achieve 90% faster credentialing turnaround times, save up to 50% in credentialing operating expense, while improving quality by 30%.',
      },
      {
        title:
          'What do I need to kick off a credentialing event with CertifyOS?',
        body: 'Using just 6 data points - first name, last name, NPI, license type, one state of interest and CAQH ID if applicable - providers can be added to a plans roster to kick off automated PSV.  This can be done via individual additions, bulk file uploads, or API integrations with other systems.',
      },
      {
        title: 'Does CertifyOS integrate with CAQH and/or NPDB?',
        body: 'CertifyOS integrates with both CAQH and NPDB. Our integrations enable auto-rostering on CAQH and auto-enrollment into NPDB, avoiding manual, burdensome processes around both processes. Via those integrations, CertifyOS returns continuous data updates to update administrators of any changes.',
      },
      {
        title:
          'How does CertifyOS interact with providers with missing data or incomplete applications?',
        body: 'CertifyOS employs an embedded outreach module from which credentialing analysts can request any missing or incomplete information directly from a provider, or a member of their team.  By streamlining communications, this tool helps providers get in network faster, and reduces the friction involved with being credentialed.',
      },
      {
        title:
          'Once a credentialing decision is made, how are my other systems updated?',
        body: 'CertifyOS is an open-API platform that can share atomic data elements or a full provider data payload, including all verified data elements and credentialing packets, with downstream systems via webhooks or API calls.',
      },
      {
        title:
          'Does CertifyOS offer a solution for managing delegated rosters?',
        body: 'Yes, we offer a solution called RosterOS that is specifically for managing delegated rosters. This tool eases the burden that comes along with inconsistent roster formatting from delegated entities by mapping a delegates roster schema to that of the plan.',
      },
      {
        title:
          'Does CertifyOS solely offer outsourced CVO services, or can my team use it as a self-service software as well?',
        body: 'CertifyOS can be deployed in a fully outsourced CVO model, a partially outsourced model, or a full self service model.',
      },
    ],
  },
  testimonialsSection: [
    {
      content:
        'Certify has completely transformed our payer credentialing process since we can simply outsource this entire process to them and not have to worry about it!',
      name: ['Ezequiel Halac, ', 'Chief Administrative Officer, Cora Health'],
      maxWidth: 1100,
    },
    {
      content:
        "Through the partnership with CertifyOS, OncoHealth experienced remarkable improvements in provider support, reliability, and efficiency through their partnership with CertifyOS. The collaborative approach and reliable assistance provided by CertifyOS enhanced productivity and streamlined operations for OncoHealth's provider teams.",
      name: ['Cliff Culver, ', 'Chief Operating Officer, OncoHealth'],
      maxWidth: 1100,
    },
  ],
  payerResources: {
    slugs: [
      'manual-vs-automated-provider-credentialing',
      'streamlining-healthcare-administrative-tasks',
      'provider-network-management-need',
    ],
    header: 'CREDENTIALING ARTICLES',
    button: {
      text: 'See All Articles',
      href: '/resources/blog',
    },
  },
  transformSection: {
    title: [
      'Clear your credentialing backlog and deliver more efficient and',
      {
        type: 'italic',
        text: ' cost-effective ',
      },
      'care.',
    ],
    images: {
      src: '/products/credentialing/demo-sweep.png',
      alt: 'Book a demo with CertifyOS',
      width: 449,
      height: 334,
    },
  },
}

export default data
