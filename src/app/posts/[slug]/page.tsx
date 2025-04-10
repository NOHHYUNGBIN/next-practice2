import MarkdownViewer from "@/components/MarkdownViewer";
import { getSelectedPosts } from "@/service/posts";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function SelectedPostPage({ params }: Props) {
  const slug = (await params).slug;
  const post = await getSelectedPosts(slug);
  return (
    <article>
      <Image
        src={`/images/posts/${post.path}.png`}
        width={760}
        height={420}
        alt={post.title}
      />
      <p>{post.title}</p>
      <MarkdownViewer content={post.content} />
    </article>
  );
}
