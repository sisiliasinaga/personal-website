import { getAllBlogPostsMeta } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export const dynamic = 'force-static';

export default async function BlogPage() {
    const posts = getAllBlogPostsMeta();

    return (
        <div className='max-w-4xl mx-auto px-4 py-12'>
            <h1 className='text-3xl font-bold mb-8'>Blog</h1>

            <div className='grid gap-10'>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <PostCard key={post.slug} post={post} basePath="/blog" />
                    ))
                ) : (
                    <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
                )}
            </div>
        </div>
    );
}
