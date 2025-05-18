import { fetchPost, fetchPosts } from '@/lib/api';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await fetchPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
  };
}

export async function generateStaticParams() {
  const posts = await fetchPosts({ per_page: '100' });
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {post.featured_media && (
          <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={`/api/media/${post.featured_media}`}
              alt={post.title.rendered}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <h1 className="text-4xl font-bold mb-4">{post.title.rendered}</h1>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link
            href="/blog"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </motion.div>
    </article>
  );
} 