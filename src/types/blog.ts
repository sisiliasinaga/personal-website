export type PostFrontmatter = {
    title: string;
    date: string;
    excerpt?: string;
    image?: string;
    tags?: string[];
    published?: boolean;
};

export type PostMeta = PostFrontmatter & {
    slug: string;
    readingTime?: string;
}