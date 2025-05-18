import { fetchPosts } from '@/lib/api';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 9;
  
  const posts = await fetchPosts({
    per_page: postsPerPage.toString(),
    page: currentPage.toString(),
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {post.featured_media && (
              <div className="relative h-48">
                <Image
                  src={`/api/media/${post.featured_media}`}
                  alt={post.title.rendered}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-gray-600 transition-colors"
                >
                  {post.title.rendered}
                </Link>
              </h2>
              <div
                className="text-gray-600 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Read more →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center space-x-2">
        {currentPage > 1 && (
          <Link
            href={`/blog?page=${currentPage - 1}`}
            className="px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
          >
            Previous
          </Link>
        )}
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className="px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
        >
          Next
        </Link>
      </div>
    </div>
  );
} 