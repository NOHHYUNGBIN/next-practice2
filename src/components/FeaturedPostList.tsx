import { getFeturedPosts } from "@/service/posts";
import PostGrid from "./PostGrid";

export default async function PostList() {
  const posts = await getFeturedPosts();
  return (
    <section>
      <h2 className="font-bold text-2xl my-2">Featured Post</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
