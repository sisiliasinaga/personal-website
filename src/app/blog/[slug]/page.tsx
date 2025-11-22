import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogSlugs } from '@/lib/posts';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
    return getBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);
    if (!post) return notFound();

    const { frontmatter, content } = post;

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
            {frontmatter.date && (
                <p className="text-sm text-muted-foreground mb-6">
                    {new Date(frontmatter.date).toLocaleDateString()}
                </p>
            )}
            <article className="prose prose-neutral max-w-none">{content}</article>
        </div>
    );
}

