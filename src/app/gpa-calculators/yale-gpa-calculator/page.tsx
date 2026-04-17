import type { Metadata } from 'next';
import Link from 'next/link';
import GPAforHarvardCalculator from '@/components/GPAforHarvardCalculator';
import { jsonLdStringify } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Yale GPA Calculator - Calculate Your GPA Instantly',
  description: 'Use our free Yale GPA Calculator to calculate your GPA using Yale\'s grading system. Perfect for Yale students and applicants. Accurate, fast, and easy to use.',
  keywords: 'Yale GPA calculator, Yale GPA, calculate Yale GPA, Yale grading system, Ivy League GPA',
  openGraph: {
    title: 'Yale GPA Calculator - Calculate Your GPA Instantly',
    description: 'Free Yale GPA calculator with accurate grading system for Yale students.',
    url: 'https://topgpacalculator.com/gpa-calculators/yale-gpa-calculator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/yale-gpa-calculator',
  },
};

export default function YaleGPACalculatorPage() {
  const calculatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Yale GPA Calculator',
    description: 'Calculate your GPA using Yale University\'s grading system with support for advanced courses.',
    url: 'https://topgpacalculator.com/gpa-calculators/yale-gpa-calculator',
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
        name: 'How does Yale calculate GPA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yale uses a 4.0 scale GPA system with plus/minus grading. Advanced courses receive additional weight.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a good GPA at Yale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GPA above 3.5 is considered excellent at Yale. The average GPA is around 3.6.',
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Yale GPA Calculator</h1>
          <p className="text-xl text-blue-100">
            Calculate your GPA using Yale University's grading system
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding Yale's GPA System</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Yale University, America's third-oldest institution of higher education, maintains a comprehensive GPA calculation system that reflects its commitment to liberal arts education and academic excellence. Yale's approach to GPA considers both quantitative performance and qualitative course rigor.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Yale's grading system is designed to provide students with meaningful feedback while encouraging intellectual growth. The university uses a 4.0 scale with plus and minus designations, and provides additional weighting for courses that demonstrate academic challenge.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Yale's Grading Philosophy</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Yale's grading philosophy emphasizes holistic assessment of student performance. While letter grades provide quantitative measures, Yale professors consider various factors including class participation, writing quality, and critical thinking skills. This approach ensures that GPA reflects comprehensive academic achievement.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The plus/minus grading system at Yale allows for nuanced evaluation of student work. This system recognizes that academic performance exists on a continuum, not just in discrete categories.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Weighting at Yale</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Yale provides additional GPA weighting for advanced and honors courses. Students who pursue more challenging academic work are rewarded in their GPA calculations. This system encourages students to explore their intellectual interests deeply.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Yale GPA Statistics</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Yale's average GPA is approximately 3.6, reflecting the institution's rigorous academic standards. Despite the challenges, Yale students demonstrate exceptional academic achievement across diverse fields of study.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-blue-600 mb-3">Yale GPA Facts</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Yale's average GPA is around 3.6</li>
              <li>The university emphasizes holistic academic assessment</li>
              <li>Advanced courses receive additional GPA weighting</li>
              <li>Yale's grading system rewards intellectual rigor</li>
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
              <Link href="/gpa-calculators/princeton-gpa-calculator" className="text-blue-600 hover:text-blue-800">
                Princeton GPA Calculator
              </Link>
            </div>
          </div>

          {/* External Links */}
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">Official Yale Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://usability.yale.edu/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                  Yale Admissions
                </a>
              </li>
              <li>
                <a href="https://usability.yale.edu/academics" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                  Yale Academics
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-yellow-600 mb-3">Frequently Asked Questions</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800">How does Yale weight advanced courses?</h5>
                <p className="text-gray-700">Advanced courses at Yale receive additional weighting to encourage academic rigor.</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">What's Yale's GPA requirement?</h5>
                <p className="text-gray-700">Yale doesn't have a minimum GPA requirement, but admitted students have strong academic records.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}