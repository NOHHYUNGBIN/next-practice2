import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};
export async function getAllPosts(): Promise<Post[]> {
  //   const response = await fetch("/data/post.json");
  //   const data = await response.json();
  const filePath = path.join(process.cwd(), "public", "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((res) => res.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}
