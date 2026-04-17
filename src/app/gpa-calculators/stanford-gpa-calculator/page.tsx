import type { Metadata } from 'next';
import Link from 'next/link';
import GPAforHarvardCalculator from '@/components/GPAforHarvardCalculator';
import { jsonLdStringify } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Stanford GPA Calculator - Calculate Your GPA Instantly',
  description: 'Use our free Stanford GPA Calculator to calculate your GPA using Stanford\'s grading system. Perfect for Stanford students and applicants. Accurate, fast, and easy to use.',
  keywords: 'Stanford GPA calculator, Stanford GPA, calculate Stanford GPA, Stanford grading system, Ivy League GPA',
  openGraph: {
    title: 'Stanford GPA Calculator - Calculate Your GPA Instantly',
    description: 'Free Stanford GPA calculator with accurate grading system for Stanford students.',
    url: 'https://topgpacalculator.com/gpa-calculators/stanford-gpa-calculator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/stanford-gpa-calculator',
  },
};

export default function StanfordGPACalculatorPage() {
  const calculatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Stanford GPA Calculator',
    description: 'Calculate your GPA using Stanford University\'s grading system with support for honors and AP courses.',
    url: 'https://topgpacalculator.com/gpa-calculators/stanford-gpa-calculator',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Organization',
      name: 'TopGPAcalculator',
      url: 'https://topgpacalculator.com',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does Stanford calculate GPA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stanford uses a 4.0 scale GPA system with plus/minus grading. Honors and AP courses receive additional weight.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a good GPA at Stanford?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GPA above 3.5 is considered excellent at Stanford. The average GPA of admitted students is around 4.0.',
        },
      },
    ],
  };

  const calculatorJsonLd = jsonLdStringify(calculatorSchema);
  const faqJsonLd = jsonLdStringify(faqSchema);

  return (
    <div className="min-h-screen bg-gray-50">
      {calculatorJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: calculatorJsonLd }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        />
      )}

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stanford GPA Calculator</h1>
          <p className="text-xl text-red-100">
            Calculate your GPA using Stanford University's grading system
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <GPAforHarvardCalculator />
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Stanford's GPA System</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Stanford University, located in the heart of Silicon Valley, employs a rigorous GPA calculation system that reflects the institution's commitment to academic excellence. Stanford's approach to GPA calculation considers both academic performance and course difficulty, providing a comprehensive measure of student achievement.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Stanford's grading system is designed to encourage students to challenge themselves academically while maintaining high standards of performance. The university uses a 4.0 scale with plus and minus grades, and provides additional weighting for honors and advanced placement courses.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Stanford's Grading Scale</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Stanford employs a detailed grading scale that includes letter grades from A to F, with plus and minus designations. This system allows for fine-grained differentiation of academic performance and provides students with clear feedback on their progress.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-blue-600 mb-3">Stanford GPA Statistics</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Stanford's average GPA is approximately 3.7</li>
              <li>The university uses a weighted GPA system for advanced courses</li>
              <li>AP and honors courses can add up to 1.0 point to GPA calculations</li>
              <li>Stanford reports GPAs to three decimal places</li>
            </ul>
          </div>

          {/* Internal Links */}
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-gray-800 mb-3">Related Calculators</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/gpa-calculators/harvard-gpa-calculator" className="text-blue-600 hover:text-blue-800">
                Harvard GPA Calculator
              </Link>
              <Link href="/gpa-calculators/mit-gpa-calculator" className="text-blue-600 hover:text-blue-800">
                MIT GPA Calculator
              </Link>
              <Link href="/gpa-calculators/yale-gpa-calculator" className="text-blue-600 hover:text-blue-800">
                Yale GPA Calculator
              </Link>
              <Link href="/gpa-calculators/princeton-gpa-calculator" className="text-blue-600 hover:text-blue-800">
                Princeton GPA Calculator
              </Link>
            </div>
          </div>

          {/* External Links */}
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">Official Stanford Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://admission.stanford.edu/apply/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                  Stanford Admissions
                </a>
              </li>
              <li>
                <a href="https://exploredegrees.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                  Stanford Academic Programs
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-yellow-600 mb-3">Frequently Asked Questions</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800">How does Stanford weight AP courses?</h5>
                <p className="text-gray-700">AP courses at Stanford receive an additional 1.0 point weighting in GPA calculations.</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">What's Stanford's GPA requirement?</h5>
                <p className="text-gray-700">Stanford doesn't have a minimum GPA requirement, but admitted students typically have weighted GPAs above 4.0.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}