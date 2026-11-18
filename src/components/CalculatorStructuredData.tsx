"use client";

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import calculatorData from '@/data/calculators';
import { jsonLdStringify } from '@/lib/jsonLd';

const SITE_URL = 'https://topgpacalculator.com';
const DEFAULT_FEATURES = ['Instant results', 'Free to use', 'Mobile friendly'];

const LAYOUT_BREADCRUMB_SLUGS = new Set([
  '5-0-scale-gpa-calculator',
  'academic-gpa-calculator',
  'cumulative-gpa-calculator',
  'final-semester-gpa-calculator',
  'gpa-average-calculator',
  'grade-point-calculator',
  'high-school-gpa-calculator',
  'quick-gpa-calculator',
  'sophomore-gpa-calculator',
]);

const buildFeatureList = (source: string) => {
  const features: string[] = [];
  const add = (condition: boolean, label: string) => {
    if (condition && !features.includes(label)) features.push(label);
  };

  add(source.includes('semester'), 'Semester GPA');
  add(source.includes('cumulative'), 'Cumulative GPA');
  add(source.includes('weighted'), 'Weighted GPA');
  add(source.includes('credit'), 'Credit hour support');
  add(source.includes('course'), 'Course-level inputs');
  add(source.includes('percentage'), 'Percentage conversion');
  add(source.includes('letter'), 'Letter grade conversion');
  add(source.includes('sat'), 'SAT to GPA conversion');
  add(source.includes('act'), 'ACT to GPA conversion');

  DEFAULT_FEATURES.forEach((feature) => {
    if (features.length < 3 && !features.includes(feature)) {
      features.push(feature);
    }
  });

  return features.slice(0, 6);
};

export default function CalculatorStructuredData() {
  const pathname = usePathname();

  const schema = useMemo(() => {
    if (!pathname) return null;
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length < 2 || segments[0] !== 'gpa-calculators') return null;
    const slug = segments[segments.length - 1];
    if (!slug) return null;

    const calculator = calculatorData.find((calc) => calc.id === slug);
    if (!calculator) return null;

    const name = calculator.name;
    const description =
      calculator.description ?? calculator.metaDescription ?? `${name} calculator.`;
    const url = `${SITE_URL}/gpa-calculators/${calculator.id}`;
    const sourceText = `${name} ${description} ${calculator.title ?? ''}`.toLowerCase();
    const featureList = buildFeatureList(sourceText);

    const webApplication = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name,
      description,
      url,
      applicationCategory: 'EducationApplication',
      featureList,
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    };

    const breadcrumb = LAYOUT_BREADCRUMB_SLUGS.has(slug)
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${SITE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'GPA Calculators',
              item: `${SITE_URL}/gpa-calculators`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name,
              item: url,
            },
          ],
        }
      : null;

    return { webApplication, breadcrumb };
  }, [pathname]);

  if (!schema) return null;

  const webApplicationJsonLd = jsonLdStringify(schema.webApplication);
  const breadcrumbJsonLd = schema.breadcrumb ? jsonLdStringify(schema.breadcrumb) : null;

  if (!webApplicationJsonLd) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webApplicationJsonLd }}
      />
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
        />
      )}
    </>
  );
}
