import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';
import { calculatorData } from '@/data/calculators';

const siteUrl = 'https://topgpacalculator.com';
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '',
    'about',
    'contact',
    'disclaimer',
    'gpa-calculators',
    'privacy-policy',
    'terms',
    'blog',
  ];
  const calculatorPaths = calculatorData
    .map((calculator) => `gpa-calculators/${calculator.id}`)
    .filter((path, index, paths) => paths.indexOf(path) === index);
  const blogPaths = blogPosts.map((post) => `blog/${post.slug}`);

  return [...staticPaths, ...calculatorPaths, ...blogPaths].map((path) => ({
    url: path ? `${siteUrl}/${path}` : `${siteUrl}/`,
  }));
}
