import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsMeta } from '@/lib/posts';
import ProjectPostCard from '@/components/ProjectPostCard';

export const dynamic = 'force-static';

export default async function ProjectIndexPage() {
    const posts = getAllPostsMeta();

    return (
        <div className='max-w-4xl mx-auto px-4 py-12'>
            <h1 className='text-3xl font-bold mb-8'>Projects</h1>

            <div className='grid gap-10'>
                {posts.map((post) => (
                    <ProjectPostCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
}