import { siteConfig } from '@/siteConfig';

const siteUrl = 'https://www.hanuldrone.com';

const StructuredData = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.company.name,
    alternateName: siteConfig.company.siteName,
    url: siteUrl,
    logo: `${siteUrl}/svg/companyLogo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-041-123-4567',
      contactType: 'customer service',
      areaServed: 'KR',
      availableLanguage: 'Korean',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '남면 곰섬로 236-49, 208호(창업2관)',
      addressLocality: '태안군',
      addressRegion: '충청남도',
      postalCode: '32144',
      addressCountry: 'KR',
    },
    email: 'hanuldrone3@hanuldrone.com',
    foundingDate: '2022',
    description:
      '국방 드론 기술로 생명과 안전을 지키고, 지역·민간으로 가치를 확장하는 첨단 드론 솔루션 전문기업',
    sameAs: [
      // 소셜 미디어 프로필 URL 있다면 추가
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.company.siteName,
    alternateName: ['한울드론', 'Hanul Drone', '(주)한울드론'],
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const servicesSchema = siteConfig.sections.services.items.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.company.name,
    },
    serviceType:
      service.id === 'military'
        ? 'Defense/Military Drone Service'
        : 'Drone Delivery Service',
    areaServed: {
      '@type': 'Country',
      name: 'South Korea',
    },
  }));

  const schemas = [
    { id: 'organization', data: organizationSchema },
    { id: 'website', data: websiteSchema },
    ...servicesSchema.map((schema, idx) => ({
      id: `service-${siteConfig.sections.services.items[idx].id}`,
      data: schema,
    })),
  ];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema.id}
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema.data),
          }}
        />
      ))}
    </>
  );
};

export default StructuredData;
