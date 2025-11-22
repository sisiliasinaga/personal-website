import { PostMeta } from "@/types/blog";
import PostCard from "./PostCard";

type ProjectPostCardProps = {
    post: PostMeta;
};

export default function ProjectPostCard({ post }: ProjectPostCardProps) {
    return <PostCard post={post} basePath="/projects" />;
}