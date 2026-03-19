
import { blogsData } from "@/utils/datas/blogsData";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function BlogDetail({ params }) {
  const blog = blogsData.find((b) => b.slug === params.slug);
  if (!blog) return notFound();
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{blog.date} | {blog.author}</p>
      <div className="prose mb-6">
        <p>{blog.content}</p>
      </div>
      <Link href="/blogs" className="text-blue-500 underline">Back to Blogs</Link>
    </div>
  );
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({ slug: blog.slug }));
}
