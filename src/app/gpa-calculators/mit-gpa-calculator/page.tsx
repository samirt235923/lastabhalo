import type { Metadata } from 'next';
import Link from 'next/link';
import GPAforHarvardCalculator from '@/components/GPAforHarvardCalculator';
import { jsonLdStringify } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'MIT GPA Calculator - Calculate Your GPA Instantly',
  description: 'Use our free MIT GPA Calculator to calculate your GPA using MIT\'s grading system. Perfect for MIT students and applicants. Accurate, fast, and easy to use.',
  keywords: 'MIT GPA calculator, MIT GPA, calculate MIT GPA, MIT grading system, Ivy League GPA',
  openGraph: {
    title: 'MIT GPA Calculator - Calculate Your GPA Instantly',
    description: 'Free MIT GPA calculator with accurate grading system for MIT students.',
    url: 'https://topgpacalculator.com/gpa-calculators/mit-gpa-calculator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/mit-gpa-calculator',
  },
};

export default function MITGPACalculatorPage() {
  const calculatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'MIT GPA Calculator',
    description: 'Calculate your GPA using MIT\'s grading system with support for advanced courses.',
    url: 'https://topgpacalculator.com/gpa-calculators/mit-gpa-calculator',
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
        name: 'How does MIT calculate GPA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MIT uses a 4.0 scale GPA system with plus/minus grading. Advanced courses receive additional weight.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a good GPA at MIT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GPA above 3.5 is considered excellent at MIT. The average GPA is around 3.6.',
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
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MIT GPA Calculator</h1>
          <p className="text-xl text-gray-100">
            Calculate your GPA using MIT's grading system
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
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Understanding MIT's GPA System</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The Massachusetts Institute of Technology (MIT) is renowned for its rigorous academic programs and innovative approach to education. MIT's GPA calculation system reflects the institution's emphasis on technical excellence and intellectual rigor. Understanding how MIT calculates GPA is essential for students navigating one of the world's most challenging academic environments.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            MIT employs a 4.0 scale GPA system with plus and minus grading, similar to other top universities. However, MIT's courses are known for their difficulty, and the grading standards are exceptionally high. The university provides additional weighting for advanced courses to encourage students to pursue challenging academic work.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">MIT's Grading Scale</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            MIT uses letter grades from A to F, with plus and minus designations. The grading scale is designed to provide precise feedback on academic performance. MIT's professors are known for setting high standards, making it challenging to earn top grades.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The plus/minus system at MIT allows for fine distinctions in academic performance. For example, an A- represents slightly lower performance than an A but still indicates excellent work. This system provides students with detailed feedback on their academic progress.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Weighting at MIT</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            MIT provides additional GPA weighting for courses that are considered academically rigorous. Advanced courses, research projects, and independent study can receive extra points in GPA calculations. This system rewards students who take on challenging academic work.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            The weighting system is designed to encourage intellectual curiosity and academic risk-taking. By pursuing difficult courses, students can potentially achieve GPAs higher than 4.0, which is particularly valuable for graduate school applications and research opportunities.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">MIT GPA Statistics</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            MIT's average GPA is approximately 3.6, reflecting the institution's challenging academic standards. Despite the difficulty, many MIT students achieve high GPAs through dedication and strategic course selection. The university's grading system is calibrated to distinguish between different levels of academic excellence.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-blue-600 mb-3">MIT GPA Facts</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>MIT's average GPA is around 3.6</li>
              <li>The university uses a weighted GPA system for advanced courses</li>
              <li>MIT courses are known for their academic rigor</li>
              <li>GPAs are calculated to three decimal places</li>
              <li>Research and independent study can boost GPA</li>
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
            <h4 className="text-xl font-bold text-green-600 mb-3">Official MIT Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://mitadmissions.org/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                  MIT Admissions
                </a>
              </li>
              <li>
                <a href="https://catalog.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800">
                  MIT Course Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-yellow-600 mb-3">Frequently Asked Questions</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800">How does MIT weight advanced courses?</h5>
                <p className="text-gray-700">Advanced courses at MIT receive additional weighting in GPA calculations, encouraging academic rigor.</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">What's MIT's GPA requirement?</h5>
                <p className="text-gray-700">MIT doesn't have a minimum GPA requirement, but admitted students typically have high academic records.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}