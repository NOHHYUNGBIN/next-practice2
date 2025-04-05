import { getFeturedPosts } from "@/service/posts";
import PostGrid from "./PostGrid";

export default async function PostList() {
  const posts = await getFeturedPosts();
  return (
    <section className="my-4">
      <h2 className="font-bold text-2xl my-2">Featured Post</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
