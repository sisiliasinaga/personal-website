// This file loads files from /src/content/posts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import type { PostFrontmatter, PostMeta } from '@/types/blog';
import type { ReactElement } from 'react';

const POSTS_DIR = path.join(process.cwd(), 'src/content/posts');

export function getPostSlugs(): string[] {
    return fs
        .readdirSync(POSTS_DIR)
        .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
        .map((f) => f.replace(/\.mdx?$/, ''));
}

export function getAllPostsMeta(): PostMeta[] {
    const slugs = getPostSlugs();

    const posts = slugs
        .map((slug) => {
            const fullPathMdx = path.join(POSTS_DIR, `${slug}.mdx`);
            const fullPathMd = path.join(POSTS_DIR, `${slug}.md`);
            const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;
            const file = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(file);
            const fm = data as Partial<PostFrontmatter>;
            if (fm.published === false) return null;

            return {
                slug,
                title: fm.title ?? slug,
                date: fm.date ?? "",
                excerpt: fm.excerpt ?? "",
                image: fm.image ?? "",
                tags: fm.tags ?? [],
            } as PostMeta;
        })
        .filter(Boolean) as PostMeta[];

    return posts.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export async function getPostBySlug(slug: string): Promise<{
    slug: string;
    frontmatter: PostFrontmatter;
    content: ReactElement;
} | null> {
    const fullPathMdx = path.join(POSTS_DIR, `${slug}.mdx`);
    const fullPathMd = path.join(POSTS_DIR, `${slug}.md`);
    const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;

    if (!fs.existsSync(fullPath)) return null;

    const source = fs.readFileSync(fullPath, 'utf8');

    const { content: raw, data } = matter(source);
    const frontmatter = (data ?? {}) as PostFrontmatter;

    const { content } = await compileMDX({
        source: raw,
        options: {
            parseFrontmatter: false,
            mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
            },
        },
    });

    return {
        slug,
        frontmatter,
        content,
    };
}