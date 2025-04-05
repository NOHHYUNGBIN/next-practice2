import { getSelectedPosts } from "@/service/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function SelectedPostPage({ params }: Props) {
  const slug = (await params).slug;
  const post = await getSelectedPosts(slug);
  return (
    <>
      <p>{post.title}</p>
      <pre>{post.content}</pre>
    </>
  );
}
