import type { Metadata } from 'next';
import Link from 'next/link';
import { jsonLdStringify } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'About Top GPA Calculator',
  description: 'Learn how Top GPA Calculator estimates GPA and why school grading policies remain the source of official results.',
  openGraph: {
    title: 'About Top GPA Calculator',
    description: 'Learn how Top GPA Calculator estimates GPA and why school grading policies remain the source of official results.',
    url: 'https://topgpacalculator.com/about',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/about',
  },
};

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Top GPA Calculator',
    description:
      'Top GPA Calculator provides free tools to estimate grade point averages and understand GPA calculations.',
    url: 'https://topgpacalculator.com/about',
    image: 'https://topgpacalculator.com/logo.svg',
    mainEntity: {
      '@type': 'Organization',
      name: 'Top GPA Calculator',
      url: 'https://topgpacalculator.com',
      logo: 'https://topgpacalculator.com/logo.svg',
    },
  };
  const aboutJsonLd = jsonLdStringify(aboutSchema);

  return (
    <div className="bg-white">
      {aboutJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: aboutJsonLd }}
        />
      )}
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About GPA Calculator</h1>
          <p className="text-xl text-blue-100">
            Independent tools and explanations for understanding GPA
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Top GPA Calculator is an independent educational website with free tools for estimating grade point averages.
            The calculators are for planning and learning; they are not affiliated with schools or admissions offices.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Mission</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our goal is to make common GPA formulas easier to use and understand. Each estimate depends on the grades,
            credit values, and scale entered by the visitor.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">How the calculators work</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Most tools apply the grade-point average formula: total grade points divided by the credits included in
            the calculation. Schools can use different scales and rules for repeats, withdrawals, and pass/fail courses.
            Check your transcript or registrar for an official result.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">Editorial and Review Process</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We review calculator formulas and educational explanations for internal consistency and correct them when grading
            assumptions or school-specific guidance change. Calculator entries remain in the visitor&apos;s browser and are not used
            to create an academic record. Facts, scholarship criteria, and admissions guidance should be checked against current
            official sources before relying on them. Editorial corrections or policy updates can be reported through our
            <Link href="/contact" className="text-blue-600 underline"> contact page</Link>.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Free GPA Calculators</h3>
              <p className="text-gray-700">
                From high school GPA to medical school GPA, we have specialized calculators for every situation.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Guides and Explanations</h3>
              <p className="text-gray-700">
                Read plain-language explanations of GPA formulas, grading scales, and academic planning.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Always Free</h3>
              <p className="text-gray-700">
                No registration, no payments, no hidden fees. Our tools are always free to use.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Accurate & Reliable</h3>
              <p className="text-gray-700">
                Shows the formula used so visitors can compare it with their school&apos;s grading policy.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">What to know about our estimates</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            These calculators provide estimates, not official academic records or admissions advice. We do not represent
            any school, and the same letter grade can have different point values at different institutions.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
            <li>Simple, intuitive interface that works on all devices</li>
            <li>Instant results without waiting or processing time</li>
            <li>No account is required to use the calculators</li>
            <li>Educational content to help you improve your GPA</li>
            <li>Supporting students globally</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-12">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}





