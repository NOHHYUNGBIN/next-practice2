import { getSelectedPosts } from "@/service/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function SelectedPostPage({ params }: Props) {
  const slug = (await params).slug;
  const data = await getSelectedPosts(slug);
  return (
    <pre>
      <p>{data?.title}</p>
    </pre>
  );
}
