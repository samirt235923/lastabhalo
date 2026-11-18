import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import { jsonLdStringify } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'GPA Guides and Articles | Top GPA Calculator',
  description: 'Read practical guides to GPA calculations, academic planning, and interpreting school grading policies.',
  openGraph: {
    title: 'GPA Guides and Articles | Top GPA Calculator',
    description: 'Read practical guides to GPA calculations, academic planning, and interpreting school grading policies.',
    url: 'https://topgpacalculator.com/blog',
  },
  alternates: {
    canonical: 'https://topgpacalculator.com/blog',
  },
};

export default function BlogPage() {
  const recentPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'GPA Calculator Blog',
    description: 'Expert articles on GPA and academics',
    url: 'https://topgpacalculator.com/blog',
    hasPart: {
      '@type': 'ItemList',
      itemListElement: recentPosts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'BlogPosting',
          headline: post.title,
          datePublished: post.publishedDate,
          author: {
            '@type': 'Person',
            name: post.author,
          },
          image: 'https://topgpacalculator.com/logo.svg',
          url: `https://topgpacalculator.com/blog/${post.slug}`,
        },
      })),
    },
  };
  const blogJsonLd = jsonLdStringify(blogSchema);

  return (
    <>
      {blogJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: blogJsonLd,
          }}
        />
      )}

      <div className="bg-white">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">GPA Calculator Blog</h1>
            <p className="text-xl text-blue-100">
              Plain-language explanations and practical academic planning guides
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="card p-6 hover:shadow-lg transition border-l-4 border-blue-600"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-2xl font-bold text-blue-600 flex-grow">{post.title}</h2>
                    <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                      {post.readTime} min read
                    </span>
                  </div>

                  <div className="text-sm text-gray-500 mb-3">
                    By {post.author} • {new Date(post.publishedDate).toLocaleDateString()}
                  </div>

                  <p className="text-gray-700 mb-4">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}





