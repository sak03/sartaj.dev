import { blogsData } from '@/utils/datas/blogsData'

export function generateStaticParams() {
  return blogsData.map(blog => ({ blogId: blog.id }));
}

const BlogDetails = ({ params }) => {
    const { blogId } = params;
    const blog = blogsData.find(blog => blog.id === blogId);

    if (!blog) {
    return <p>Blog not found.</p>;
    }

    return (
        <div style={{ height: "70vh" }} className='flex flex-col justify-center items-center'>
            <h1 className="text-2xl font-semibold">{blog.title}</h1>
            <p className="text-lg text-gray-600">{blog.shortDescription}</p>
            <strong className="mt-2 text-red-500 mt-5">This page is under maintenance...</strong>
        </div>
    )
}

export default BlogDetails;