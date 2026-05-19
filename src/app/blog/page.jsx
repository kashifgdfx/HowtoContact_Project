"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fetchBlogs } from "@/api/blogapi";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs()
      .then((data) => {
        setBlogs(data.blogs);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      

      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? [1, 2, 3, 4, 5, 6].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse border border-gray-200 rounded-xl overflow-hidden p-4 bg-white"
                >
                  <div className="h-48 bg-gray-200 rounded-lg mb-4 w-full"></div>

                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>

                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>

                  <div className="h-3 bg-gray-100 rounded w-1/4 mt-6"></div>
                </div>
              ))
            : blogs.map((blog) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug}`}
                  className="border border-green-600 rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col"
                >
                  <img
                    src={blog.image?.url}
                    alt={blog.image?.alt || "blog image"}
                    className="h-auto w-full object-cover"
                  />

                  <div className="p-4 flex-grow">
                    {blog.isFeatured && (
                      <span className="text-xs bg-yellow-400 px-2 py-1 rounded font-medium">
                        Featured
                      </span>
                    )}

                    <h2 className="font-bold text-lg mt-2 leading-tight hover:text-green-700 transition">
                      {blog.title}
                    </h2>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <p className="text-xs text-gray-500 mt-4">
                      {blog.readTime} min read
                    </p>
                  </div>
                </Link>
              ))}
        </div>
      </section>

      <div className="container mx-auto 2xl:px-35">
 
      </div>
    </>
  );
};

export default Blogs;

// export const metadata = {
//   title: "Tech Blogs & IT Support Articles | How to Contact",
//   description:
//     "Expert tech blogs on IT support, cybersecurity, printer help, antivirus, and PC repair guides.",
// };