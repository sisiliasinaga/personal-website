import Link from "next/link";
import Image from "next/image";
import { PostMeta } from "@/types/blog";

type PostCardProps = {
    post: PostMeta;
    basePath: string; // e.g., "/projects" or "/blog"
};

export default function PostCard({ post, basePath }: PostCardProps) {
    return (
        <article className="group">
            {post.image && (
                <Link href={`${basePath}/${post.slug}`}>
                    <div className="relative w-full h-48 overflow-hidden rounded-lg mb-3">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>
                </Link>
            )}

            <h2 className="text-2xl font-semibold">
                <Link href={`${basePath}/${post.slug}`} className="hover:underline">
                    {post.title}
                </Link>
            </h2>

            <p className="text-sm text-muted-foreground">
                {post.date && new Date(post.date).toLocaleDateString()}
            </p>

            {post.excerpt && (
                <p className="mt-2 text-muted-foreground">
                    {post.excerpt}
                </p>
            )}
        </article>
    );
}

