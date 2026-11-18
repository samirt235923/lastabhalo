'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:info@topgpacalculator.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            Contact us by email with questions or feedback.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-green-100 border-2 border-green-500 text-green-800 p-6 rounded-lg">
                <p className="text-lg font-semibold">Continue in your email app</p>
                <p>
                  Your email app should open with this message. If it does not, email{' '}
                  <a href="mailto:info@topgpacalculator.com" className="underline">info@topgpacalculator.com</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 mb-8">
              <h2 className="text-lg font-bold text-blue-900 mb-4">Contact Information</h2>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>Email:</strong>
                  <br />
                  <a href="mailto:info@topgpacalculator.com" className="text-blue-600 hover:underline">
                    info@topgpacalculator.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
              <h2 className="text-lg font-bold text-gray-800 mb-4">FAQ</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Check our <a href="/blog" className="text-blue-600 hover:underline">blog</a> for common questions</li>
                <li>• Visit our <a href="/gpa-calculators" className="text-blue-600 hover:underline">calculators page</a></li>
                <li>• Read <a href="/about" className="text-blue-600 hover:underline">about us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}





