import type { Metadata } from 'next';
import Link from 'next/link';
import GPAforHarvardCalculator from '@/components/GPAforHarvardCalculator';
import { jsonLdStringify } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Princeton GPA Calculator - Calculate Your GPA Instantly',
  description: 'Use our free Princeton GPA Calculator to calculate your GPA using Princeton\'s grading system. Perfect for Princeton students and applicants. Accurate, fast, and easy to use.',
  keywords: 'Princeton GPA calculator, Princeton GPA, calculate Princeton GPA, Princeton grading system, Ivy League GPA',
  openGraph: {
    title: 'Princeton GPA Calculator - Calculate Your GPA Instantly',
    description: 'Free Princeton GPA calculator with accurate grading system for Princeton students.',
    url: 'https://topgpacalculator.com/gpa-calculators/princeton-gpa-calculator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/princeton-gpa-calculator',
  },
};

export default function PrincetonGPACalculatorPage() {
  const calculatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Princeton GPA Calculator',
    description: 'Calculate your GPA using Princeton University\'s grading system with support for advanced courses.',
    url: 'https://topgpacalculator.com/gpa-calculators/princeton-gpa-calculator',
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
        name: 'How does Princeton calculate GPA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Princeton uses a 4.0 scale GPA system with plus/minus grading. Advanced courses receive additional weight.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a good GPA at Princeton?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GPA above 3.5 is considered excellent at Princeton. The average GPA is around 3.6.',
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
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Princeton GPA Calculator</h1>
          <p className="text-xl text-orange-100">
            Calculate your GPA using Princeton University's grading system
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Princeton's GPA System</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Princeton University, founded in 1746, maintains a rigorous GPA calculation system that reflects its commitment to academic excellence and intellectual development. Princeton's approach to GPA emphasizes both academic achievement and personal growth.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Princeton's grading system is designed to provide students with clear feedback while encouraging them to pursue challenging academic work. The university uses a 4.0 scale with plus and minus grading, and provides additional weighting for courses that demonstrate academic rigor.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Princeton's Grading Standards</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Princeton is known for its high academic standards and rigorous coursework. The university's grading system is calibrated to reflect the quality of student work while maintaining fairness across different academic disciplines.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The plus/minus grading system at Princeton allows for precise differentiation of academic performance. This system ensures that GPA accurately represents a student's academic achievements.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Weighting at Princeton</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Princeton provides additional GPA weighting for advanced and independent work courses. Students who engage in research, independent study, or particularly challenging coursework receive credit in their GPA calculations.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Princeton GPA Statistics</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Princeton's average GPA is approximately 3.6, reflecting the institution's challenging academic environment. Despite the rigor, Princeton students consistently demonstrate high levels of academic achievement.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-blue-600 mb-3">Princeton GPA Facts</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Princeton's average GPA is around 3.6</li>
              <li>The university emphasizes academic rigor and personal growth</li>
              <li>Advanced courses receive additional GPA weighting</li>
              <li>Princeton's grading system is known for its fairness</li>
            </ul>
          </div>

          {/* Internal Links */}
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-gray-800 mb-3">Related Calculators</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/gpa-calculators/harvard-gpa-calculator" className="text-blue-600 hover:text-blue-800">
                Harvard GPA Calculator
              </Link>
              <Link href="/gpa-calculators/stanford-gpa-calculator" className="text-blue-600 hover:text-blue-800">
                Stanford GPA Calculator
              </Link>
              <Link href="/gpa-calculators/mit-gpa-calculator" className="text-blue-600 hover:text-blue-800">
                MIT GPA Calculator
              </Link>
              <Link href="/gpa-calculators/yale-gpa-calculator" className="text-blue-600 hover:text-blue-800">
                Yale GPA Calculator
              </Link>
            </div>
          </div>

          {/* External Links */}
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">Official Princeton Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://admission.princeton.edu/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                  Princeton Admissions
                </a>
              </li>
              <li>
                <a href="https://registrar.princeton.edu/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                  Princeton Registrar
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-yellow-600 mb-3">Frequently Asked Questions</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800">How does Princeton weight advanced courses?</h5>
                <p className="text-gray-700">Advanced courses at Princeton receive additional weighting to reward academic challenge.</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">What's Princeton's GPA requirement?</h5>
                <p className="text-gray-700">Princeton doesn't have a minimum GPA requirement, but admitted students have excellent academic records.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}