/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/gpa-calculators/gpa-goal-calculator',
        destination: '/gpa-calculators/target-gpa-calculator',
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