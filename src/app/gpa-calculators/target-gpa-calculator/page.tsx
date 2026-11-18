import type { Metadata } from 'next';
import Link from 'next/link';
import TargetGPACalculator from '@/components/TargetGPACalculator';
import FAQ from '@/components/FAQ';
import { FAQSchema } from '@/components/SchemaMarkup';

const faqItems = [
  { 
    question: 'How do I calculate my target GPA?', 
    answer: 'To calculate your target GPA, use the formula: Required GPA = (Target GPA × Total Credits − Current GPA × Current Credits) ÷ Upcoming Credits. Enter your current GPA, completed credits, desired target GPA, and upcoming credits into our calculator for instant results.' 
  },
  { 
    question: 'What GPA do I need to reach my goal?', 
    answer: 'The average GPA you need depends on your current standing and how many GPA-bearing credits remain. Enter those values to estimate the average needed across your upcoming courses.'
  },
  { 
    question: 'Can I reach a 4.0 GPA if my current GPA is lower?',
    answer: 'It depends on your completed credits and future GPA-bearing credits. Enter your values to see the required average; a required average above the selected scale maximum cannot be reached through future grades alone.'
  },
  { 
    question: 'Is my target GPA realistic?', 
    answer: 'A required average above the selected scale maximum is not attainable through future coursework alone. The weighted option uses assumptions and may not match your school\'s rules.'
  },
  { 
    question: 'How many credits affect my GPA the most?', 
    answer: 'Courses with more credit hours have a greater impact on your GPA. A 4-credit course affects your GPA twice as much as a 2-credit course. Focus on performing well in high-credit courses to maximize your GPA improvement.' 
  },
  { 
    question: 'What if the required GPA is above my scale maximum?',
    answer: 'The target cannot be reached through future coursework alone on the selected scale. Check your school policy and whether options such as retaking a course can affect your official GPA.'
  },
  { 
    question: 'Can I calculate target GPA for multiple semesters?', 
    answer: 'Yes, you can use the calculator for multiple semesters by adding up all your upcoming credits. Enter the total credits you plan to take across all remaining semesters to see what average GPA you need to maintain to reach your goal.' 
  },
  {
    question: 'Can I include weighted courses?',
    answer: 'Yes. Enable the weighted estimate and choose a level for each planned course. It uses +0.5 for Honors and +1.0 for AP as assumptions; enter current and target GPAs on that same scale and confirm your school\'s rules.',
  },
];

export const metadata: Metadata = {
  title: 'Target GPA Calculator – Calculate GPA Needed to Reach Your Goal',
  description: 'Estimate the average GPA needed in upcoming courses to reach a cumulative GPA goal using your current GPA and credit totals.',
  keywords: 'target gpa calculator, calculate target gpa, gpa target calculator, required gpa calculator, how to reach target gpa, gpa goal calculator, academic goal planner',
  openGraph: {
    title: 'Target GPA Calculator – Calculate GPA Needed to Reach Your Goal',
    description: 'Estimate the average GPA needed in upcoming courses to reach a cumulative GPA goal using your current GPA and credit totals.',
    type: 'website',
    url: 'https://topgpacalculator.com/gpa-calculators/target-gpa-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Target GPA Calculator – Calculate GPA Needed to Reach Your Goal',
    description: 'Estimate the average GPA needed in upcoming courses to reach your academic goals.',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/gpa-calculators/target-gpa-calculator',
  },
};

const relatedCalculators = [
  { href: '/gpa-calculators/cumulative-gpa-calculator', name: 'Cumulative GPA Calculator' },
  { href: '/gpa-calculators/semester-gpa-calculator', name: 'Semester GPA Calculator' },
  { href: '/gpa-calculators/college-gpa-calculator', name: 'College GPA Calculator' },
  { href: '/gpa-calculators/weighted-gpa-calculator', name: 'Weighted GPA Calculator' },
];

export default function TargetGPACalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900">
      <FAQSchema faqs={faqItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="text-sm mb-6">
          <ol className="flex flex-wrap gap-2 text-gray-600">
            <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
            <li>›</li>
            <li><Link href="/gpa-calculators" className="text-blue-600 hover:underline">GPA Calculators</Link></li>
            <li>›</li>
            <li className="font-semibold text-gray-900">Target GPA Calculator</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-8 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Target GPA Calculator</h1>
          <p className="text-lg md:text-xl mb-3">
            Use our <strong>target GPA calculator</strong> to estimate the average GPA you need in upcoming courses to reach a cumulative GPA goal.
            Enter your current GPA, completed credits, and desired target GPA for instant results.
          </p>
          <p className="text-blue-100">
            Whether you are aiming for an academic goal,
            this calculator helps you plan your path to success.
          </p>
          <p className="text-sm text-blue-100 mt-3">
            The default estimate uses a 4.0 scale. Optional weighted estimates use illustrative course bonuses; your school&apos;s GPA and credit rules may differ.
          </p>
        </header>

        {/* Table of Contents */}
        <section id="table-of-contents" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-blue-600">
            <a href="#calculator" className="hover:underline">Target GPA Calculator</a>
            <a href="#what-is" className="hover:underline">What Is a Target GPA Calculator</a>
            <a href="#how-to-calculate" className="hover:underline">How to Calculate Target GPA</a>
            <a href="#formula" className="hover:underline">Target GPA Formula</a>
            <a href="#example" className="hover:underline">Example Calculation</a>
            <a href="#tips" className="hover:underline">Tips to Achieve Your Goal</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#related" className="hover:underline">Related Calculators</a>
          </div>
        </section>

        {/* Calculator */}
        <section id="calculator" className="mb-8">
          <TargetGPACalculator />
        </section>

        {/* What Is */}
        <section id="what-is" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">What Is a Target GPA Calculator</h2>
          <p className="text-gray-700 mb-4">
            A <strong>target GPA calculator</strong> estimates the average GPA needed in upcoming courses to reach a desired cumulative GPA. The default uses a standard 4.0 scale; an optional weighted estimate is also available.
            a high school student working toward scholarship eligibility, or anyone looking to improve their academic standing, this calculator provides 
            the roadmap you need.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding how to calculate your target GPA is crucial for academic success. Many students set goals without knowing whether they are 
            realistically achievable.             This calculator uses the standard cumulative-GPA formula to estimate what average you need
            and what it will take to get where you want to be.
          </p>
          <p className="text-gray-700">
            The calculator considers your current GPA, the number of credits you have already completed, your desired target GPA, and the number of 
            credits you plan to take. With this information, it calculates the required GPA you must maintain in your upcoming courses to achieve your goal.
          </p>
        </section>

        {/* How to Calculate */}
        <section id="how-to-calculate" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">How to Calculate Target GPA</h2>
          <p className="text-gray-700 mb-4">
            Calculating your target GPA involves understanding the relationship between your current academic standing and your future goals. 
            Here is a step-by-step guide on how to calculate target GPA effectively:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
            <li>
              <strong>Determine Your Current GPA:</strong> Find your current cumulative GPA from your transcript or academic records. 
              This is the foundation of your calculation.
            </li>
            <li>
              <strong>Count Your Completed Credits:</strong> Add up all the credit hours you have successfully completed. 
              This gives weight to your current GPA in the overall calculation.
            </li>
            <li>
              <strong>Set Your Target GPA:</strong> Decide on the GPA you want to achieve. This might be based on graduate school requirements, 
              scholarship eligibility, or personal academic goals.
            </li>
            <li>
              <strong>Calculate Upcoming Credits:</strong> Determine how many credit hours you will take in upcoming semesters. 
              The more credits you have remaining, the more opportunity you have to influence your cumulative GPA.
            </li>
            <li>
              <strong>Apply the Formula:</strong> Use the required GPA calculator formula to determine what average grade you need to maintain.
            </li>
          </ol>
          <p className="text-gray-700">
            Using a GPA target calculator takes the complexity out of this process. Simply enter your information, and the calculator 
            instantly shows you whether your goal is achievable and what it will take to get there.
          </p>
        </section>

        {/* Formula */}
        <section id="formula" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Target GPA Formula Explained</h2>
          <p className="text-gray-700 mb-4">
            The mathematics behind calculating your required GPA is straightforward once you understand the components. 
            Here is the complete target GPA formula:
          </p>
          <div className="bg-slate-100 p-4 rounded-xl mb-4">
            <p className="text-lg font-mono text-center text-gray-900">
              <strong>Required GPA = (Target GPA × Total Credits − Current GPA × Current Credits) ÷ Upcoming Credits</strong>
            </p>
          </div>
          <p className="text-gray-700 mb-2">Where:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li><strong>Target GPA:</strong> Your desired cumulative GPA goal</li>
            <li><strong>Total Credits:</strong> Current Credits + Upcoming Credits</li>
            <li><strong>Current GPA:</strong> Your existing cumulative grade point average</li>
            <li><strong>Current Credits:</strong> Credit hours already completed</li>
            <li><strong>Upcoming Credits:</strong> Credit hours you plan to take</li>
          </ul>
          <p className="text-gray-700">
            This formula works by calculating the total grade points needed to achieve your target, subtracting the grade points
            you have already earned, and then determining what average you need in your remaining GPA-bearing credits. Weighted estimates depend on your school's rules.
          </p>
        </section>

        {/* Example */}
        <section id="example" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Example: Reaching Your GPA Goal</h2>
          <p className="text-gray-700 mb-4">
            Let us walk through a realistic example to show how the required GPA calculator works in practice:
          </p>
          <div className="bg-blue-50 p-4 rounded-xl mb-4 border border-blue-200">
            <h3 className="font-semibold text-gray-900 mb-2">Student Profile:</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Current GPA: 3.2</li>
              <li>Current Credits: 30</li>
              <li>Target GPA: 3.4</li>
              <li>Upcoming Credits: 10 (next semester)</li>
            </ul>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Calculation:</strong>
          </p>
          <div className="bg-slate-100 p-4 rounded-xl mb-4 font-mono text-sm">
            <p>Total Credits = 30 + 10 = 40</p>
            <p>Required GPA = (3.4 × 40 − 3.2 × 30) ÷ 10</p>
            <p>Required GPA = (140 − 96) ÷ 10</p>
            <p>Required GPA = 40 ÷ 10</p>
            <p className="text-lg font-bold text-blue-600">Required GPA = 4.0</p>
          </div>
          <p className="text-gray-700 mb-4">
            <strong>Result:</strong> This student needs a 4.0 average on a standard 4.0 scale across upcoming courses to reach a 3.4 cumulative GPA.
            This would be classified as a <span className="text-orange-600 font-semibold">difficult</span> goal.
          </p>
          <p className="text-gray-700">
            If the calculation shows a required GPA above 4.0, the goal is mathematically impossible. In such cases, 
            The student should adjust the goal or add more GPA-bearing credits to the plan, if available.
          </p>
        </section>

        {/* Tips */}
        <section id="tips" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Tips to Achieve Your Target GPA</h2>
          <p className="text-gray-700 mb-4">
            Once you know what GPA you need to reach your goal, use these strategies to maximize your chances of success:
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Study Strategies</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Create a consistent study schedule and stick to it</li>
            <li>Prioritize high-credit courses as they impact your GPA more significantly</li>
            <li>Form study groups for difficult subjects</li>
            <li>Utilize office hours and tutoring resources</li>
            <li>Start assignments early to avoid last-minute stress</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Credit Management</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Balance your course load across difficult and easier classes</li>
            <li>Consider taking additional credits if your required GPA is too high</li>
            <li>Do not overload yourself - quality is better than quantity</li>
            <li>Retake courses with poor grades if your school allows grade replacement</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">Course Selection</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Check your school&apos;s grading policy, including whether it uses a weighted scale</li>
            <li>Research professors and choose those with teaching styles that match your learning</li>
            <li>Register for classes early to get the best schedules</li>
            <li>Consider summer courses to spread out your workload</li>
          </ul>
        </section>

        {/* Related Calculators */}
        <section id="related" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Related GPA Tools</h2>
          <p className="text-gray-700 mb-4">
            Explore our other GPA calculators to help you plan and track your academic journey:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedCalculators.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="block p-4 border border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{item.name}</span>
                <span className="text-blue-600 ml-2">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* External Authority Links */}
        <section className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">External Authority Resources</h2>
          <p className="text-gray-700 mb-4">
            Learn more about academic planning and GPA requirements from these trusted educational resources:
          </p>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li>
              <a href="https://www.collegeboard.org" target="_blank" rel="noreferrer" className="hover:underline">
                College Board – Official SAT and College Planning Resources
              </a>
            </li>
            <li>
              <a href="https://nces.ed.gov" target="_blank" rel="noreferrer" className="hover:underline">
                NCES – National Center for Education Statistics
              </a>
            </li>
            <li>
              <a href="https://www.ed.gov" target="_blank" rel="noreferrer" className="hover:underline">
                U.S. Department of Education
              </a>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-8 border-t border-gray-200">
          <p className="mb-2">© {new Date().getFullYear()} Top GPA Calculator. All rights reserved.</p>
          <p>
            Use our target GPA calculator to plan your academic success.             Always verify calculations with your school&apos;s official grading policy.
          </p>
        </footer>
      </div>
    </div>
  );
}
