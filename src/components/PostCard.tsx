import Link from "next/link";
import Image from "next/image";
import { PostMeta } from "@/types/blog";

type PostCardProps = {
    post: PostMeta;
    basePath: string; // e.g., "/projects" or "/blog"
};

export default function PostCard({ post, basePath }: PostCardProps) {
    return (
        <article className="group glass-card rounded-xl p-6 border border-primary-100/50 hover:border-primary-400 hover:shadow-card-hover hover:shadow-glow transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-card rounded-xl" />
            <div className="absolute inset-0 bg-primary-100/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            
            {/* Content */}
            <div className="relative z-10">
                {post.image && (
                    <Link href={`${basePath}/${post.slug}`}>
                        <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4 shadow-card">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 800px"
                            />
                            <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </Link>
                )}

                <h2 className="text-2xl font-semibold mb-2">
                    <Link href={`${basePath}/${post.slug}`} className="text-gray-800 group-hover:text-primary-600 transition-colors duration-200">
                        {post.title}
                    </Link>
                </h2>

                <p className="text-sm text-gray-500 mb-3 group-hover:text-gray-600 transition-colors duration-200">
                    {post.date && new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}
                </p>

                {post.excerpt && (
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                        {post.excerpt}
                    </p>
                )}
            </div>
        </article>
    );
}

