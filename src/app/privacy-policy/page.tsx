import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Top GPA Calculator',
  description: 'Learn what information Top GPA Calculator processes, how Google Analytics works, and how Google advertising cookies and privacy choices are handled.',
  openGraph: {
    title: 'Privacy Policy - Top GPA Calculator',
    description: 'Learn what information Top GPA Calculator processes, how Google Analytics works, and how advertising privacy choices will be handled.',
    url: 'https://topgpacalculator.com/privacy-policy',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            Last updated: November 18, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-6">
            This policy explains how Top GPA Calculator handles information when you visit this website. The calculators
            do not require an account, and the course details you enter are processed in your browser rather than sent
            to our server.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-6">
            We do not ask visitors to create accounts. If you contact us, the contact form opens your email application;
            information is sent only if you choose to send that email. Calculator entries are processed locally in your
            browser and are not submitted to us.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Use the contact link or email us at info@topgpacalculator.com</li>
            <li>Visit pages while Google Analytics is enabled in the production site</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">3. Data Collection</h2>
          <p className="text-gray-700 mb-6">
            Google Analytics may process usage and device information to report how the site is used. Hosting providers
            may also process technical request data needed to deliver pages and protect the service. This can include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Usage data (pages visited, time on site, interaction events)</li>
            <li>Device and browser information (IP address, user agent, screen size)</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Contact information and message text you choose to send by email</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">4. How We Use Your Information</h2>
          <p className="text-gray-700 mb-6">
            We use this information to operate the site, understand aggregate page usage, respond to messages, and protect
            the service. We do not store GPA entries or use them to identify visitors.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>To provide and improve our services</li>
            <li>To respond to your inquiries</li>
            <li>To analyze site usage and trends</li>
            <li>To respond to messages you choose to send</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">5. Data Security</h2>
          <p className="text-gray-700 mb-6">
            We implement appropriate technical and organizational measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">6. Third-Party Services</h2>
          <p className="text-gray-700 mb-6">
            Our website may include links to third-party websites and services. We are not responsible for the
            privacy practices of external sites. Please review their privacy policies before providing any
            information.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">7. Analytics and Advertising</h2>
          <p className="text-gray-700 mb-6">
            Google Analytics is enabled on the production site and may use cookies or similar technologies to measure
            visits and interactions. Google advertising products and other third-party vendors may use cookies or similar
            identifiers to read and write data, serve ads, personalize content, measure ad performance, and reduce fraud
            when advertising is enabled on this site. This includes the use of IP addresses and web beacons where permitted.
            Third-party vendors may serve ads and may use information about your previous visits to this or other websites
            to provide advertising.
          </p>
          <p className="text-gray-700 mb-6">
            Learn how Google uses information from sites and apps that use its services at{' '}
            <a className="text-blue-600 underline" href="https://policies.google.com/technologies/partner-sites">
              Google&apos;s partner-sites policy
            </a>
            . You can manage ad personalization in{' '}
            <a className="text-blue-600 underline" href="https://adssettings.google.com/">
              Google Ads Settings
            </a>{' '}
            or opt out of participating third-party vendors through{' '}
            <a className="text-blue-600 underline" href="https://www.aboutads.info/choices/">
              the Digital Advertising Alliance
            </a>
            . These controls do not disable all advertising.
          </p>
          <p className="text-gray-700 mb-6">
            We will maintain and update this notice as advertising or analytics practices change. Where required by
            applicable law, we will obtain consent or provide a consent-management option before enabling advertising
            technologies for visitors in that region. Users may change available ad choices through Google and their browser.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">8. Cookies</h2>
          <p className="text-gray-700 mb-6">
            Google Analytics and advertising providers may use cookies or similar technologies. You can control cookies
            in your browser settings; blocking them may affect some site features or measurement. Where the site uses
            advertising cookies, Google and participating partners may use those technologies for ad personalization,
            frequency capping, measurement, and fraud prevention, subject to your available choices and applicable consent.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">9. Children&apos;s Privacy</h2>
          <p className="text-gray-700 mb-6">
            The site provides general educational tools and does not ask users to provide personal information to use
            the calculators. We do not knowingly collect personal information from children under 13. Please do not
            include identifying information in calculator fields. If you believe a child has sent us personal information,
            contact us so we can review and address the request.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">10. Data Retention and Privacy Rights</h2>
          <p className="text-gray-700 mb-6">
            We retain information only as long as needed for the purposes described above. Google Analytics retention is
            controlled by the settings of the Analytics property. Depending on where you live, privacy laws may give you
            rights to request access to, correction of, or deletion of personal information, or to opt out of certain
            processing. To make a request, email info@topgpacalculator.com.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">11. Changes to This Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update this policy when site practices change. The latest revision date will appear at the top of
            this page.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">12. Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions or concerns about our privacy policy, please contact us at:
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> info@topgpacalculator.com
          </p>
        </div>
      </section>

    </div>
  );
}





