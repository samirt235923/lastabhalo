/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/gpa-calculators/gpa-goal-calculator',
        destination: '/gpa-calculators/target-gpa-calculator',
        statusCode: 301,
      },
      {
        source: '/college-gpa-calculator',
        destination: '/gpa-calculators/college-gpa-calculator',
        statusCode: 301,
      },
      {
        source: '/cumulative-gpa-calculator',
        destination: '/gpa-calculators/cumulative-gpa-calculator',
        statusCode: 301,
      },
      {
        source: '/gpa-average-calculator',
        destination: '/gpa-calculators/gpa-average-calculator',
        statusCode: 301,
      },
      {
        source: '/gpa-calculators/gpa-to-percentage-calculator',
        destination: '/gpa-calculators/percentage-to-gpa-calculator',
        statusCode: 301,
      },
      {
        source: '/high-school-gpa-calculator',
        destination: '/gpa-calculators/high-school-gpa-calculator',
        statusCode: 301,
      },
      {
        source: '/junior-gpa-calculator',
        destination: '/gpa-calculators/junior-gpa-calculator',
        statusCode: 301,
      },
      {
        source: '/semester-gpa-calculator',
        destination: '/gpa-calculators/semester-gpa-calculator',
        statusCode: 301,
      },
      {
        source: '/weighted-gpa-calculator',
        destination: '/gpa-calculators/weighted-gpa-calculator',
        statusCode: 301,
      },
      ...[
        'harvard',
        'mit',
        'princeton',
        'stanford',
        'yale',
      ].map((school) => ({
        source: `/gpa-calculators/${school}-gpa-calculator`,
        destination: '/gpa-calculators/weighted-gpa-calculator',
        statusCode: 301,
      })),
    ];
  },
}

module.exports = nextConfig