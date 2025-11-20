import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';

type Params = { slug: string };
type Props = { params: { slug: string } };

export async function generateStaticParams() {
    return getPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return notFound();

    const { frontmatter, content } = post;

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
            <article className="prose prose-neutral max-w-none">{content}</article>
        </div>
    );
}