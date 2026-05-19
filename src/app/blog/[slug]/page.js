"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { BlogData } from "@/api/blogapi";

// Skeleton Loader
const BlogDetailsSkeleton = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-10 animate-pulse bg-white">
      <div className="h-4 w-32 bg-gray-200 rounded mb-6"></div>

      <div className="w-full h-64 md:h-96 bg-gray-200 rounded-xl mb-8"></div>

      <div className="h-10 w-3/4 bg-gray-200 rounded mb-4"></div>

      <div className="h-4 w-40 bg-gray-200 rounded mb-8"></div>

      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`h-4 bg-gray-200 rounded ${
              i % 2 === 0 ? "w-full" : "w-5/6"
            }`}
          />
        ))}
      </div>
    </article>
  );
};

const BlogDetails = () => {
  const params = useParams();
  const slug = params.slug;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const data = await BlogData(slug);

        setBlog(data?.blog || null);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadBlog();
    }

    window.scrollTo(0, 0);
  }, [slug]);

  // Clean Content
  const cleanContent = (html) => {
    if (!html) return "";

    const parser = new DOMParser();

    const doc = parser.parseFromString(html, "text/html");

    const elementsWithStyle = doc.querySelectorAll("*[style]");

    elementsWithStyle.forEach((el) => {
      el.style.backgroundColor = "transparent";
      el.style.color = "inherit";
    });

    return doc.body.innerHTML;
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
       
        <BlogDetailsSkeleton />
        
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-white min-h-screen text-gray-900">
       

        <div className="min-h-[50vh] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Blog not found</h2>

          <Link
            href="/blog"
            className="mt-4 text-blue-600 hover:underline"
          >
            Return to Blog List
          </Link>
        </div>

       
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen text-gray-900">
 

      <article className="max-w-4xl mx-auto px-4 py-10">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 transition-colors mb-6 inline-block font-medium"
        >
          ← Back to Blog
        </Link>

        {blog.image?.url && (
          <img
            src={blog.image.url}
            alt={blog.image.alt || blog.title}
            className="w-full h-auto object-cover rounded-xl shadow-lg mb-8 border border-gray-100"
          />
        )}

        <header>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {blog.title}
          </h1>

          <div className="text-gray-500 text-sm mb-6">
            Published on{" "}
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </header>

        <div className="blog-render-container">
          <div
            dangerouslySetInnerHTML={{
              __html: cleanContent(blog.content),
            }}
          />
        </div>
      </article>

     

      <style jsx global>{`
        .blog-render-container * {
          background-color: transparent !important;
          color: #1f2937 !important;
        }

        .blog-render-container h1,
        .blog-render-container h2,
        .blog-render-container h3 {
          color: #111827 !important;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .blog-render-container h2 {
          font-size: 1.875rem;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 0.5rem;
        }

        .blog-render-container p {
          margin-bottom: 1.25rem;
          line-height: 1.75;
          font-size: 1.125rem;
          color: #374151 !important;
        }

        .blog-render-container ul {
          list-style-type: disc !important;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .blog-render-container ol {
          list-style-type: decimal !important;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .blog-render-container a {
          color: #2563eb !important;
          text-decoration: underline !important;
        }

        .blog-render-container img {
          max-width: 100%;
          border-radius: 0.5rem;
          margin: 1.5rem 0;
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;