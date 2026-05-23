"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Sparkles,
} from "lucide-react";



import { BlogData } from "@/api/blogapi";

/* ---------------- SKELETON ---------------- */

const BlogDetailsSkeleton = () => {
  return (
    <article className="mx-auto max-w-5xl animate-pulse px-4 py-16">
      <div className="mb-8 h-5 w-40 rounded-full bg-gray-200"></div>

      <div className="mb-10 h-[420px] w-full rounded-[32px] bg-gray-200"></div>

      <div className="mb-5 h-12 w-4/5 rounded-full bg-gray-200"></div>

      <div className="mb-10 h-5 w-52 rounded-full bg-gray-200"></div>

      <div className="space-y-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`h-4 rounded-full bg-gray-200 ${
              i % 2 === 0 ? "w-full" : "w-5/6"
            }`}
          />
        ))}
      </div>
    </article>
  );
};

/* ---------------- PAGE ---------------- */

const BlogDetailWrapper = () => {
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

  /* CLEAN CONTENT */

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

  /* LOADING */

  if (loading) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-white">
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[#76CE68]/10 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#457C3C]/10 blur-3xl"></div>

        <BlogDetailsSkeleton />
      </div>
    );
  }

  /* NOT FOUND */

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
        <h2 className="text-4xl font-bold text-[#071405]">
          Blog not found
        </h2>

        <p className="mt-4 max-w-md text-gray-600">
          The article you are looking for does not exist or may
          have been removed.
        </p>

        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#348d27] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#193315]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <main className="relative overflow-hidden bg-white">
      {/* BG EFFECTS */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[#76CE68]/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#457C3C]/10 blur-3xl"></div>

      {/* HERO */}
      <section className="relative z-10 px-6 pt-24 pb-12">
        <div className="mx-auto max-w-5xl">
          {/* BACK BUTTON */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-[#76CE68]/30 bg-[#F7FFF5] px-5 py-2 text-sm font-semibold text-[#348d27] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>

          {/* LABEL */}
          {/* <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#76CE68]/30 bg-[#F7FFF5] px-5 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#348d27]" />

            <span className="text-sm font-semibold uppercase tracking-[3px] text-[#348d27]">
              Tech Article
            </span>
          </div> */}

          {/* TITLE */}
          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight text-[#071405] md:text-5xl">
            {blog.title}
          </h1>

          {/* META */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[#348d27]" />

              <span>
                {new Date(blog.createdAt).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#348d27]" />

              <span>{blog.readTime || 5} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      {blog.image?.url && (
        <section className="relative z-10 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src={blog.image.url}
                alt={blog.image.alt || blog.title}
                className="h-full  w-full object-cover object-top"
              />
            </div>
          </div>
        </section>
      )}

      {/* BLOG CONTENT */}
      <section className="relative z-10 px-6 py-16">
        <article className="blog-render-container mx-auto max-w-4xl rounded-[32px] border border-gray-100 bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.06)] md:p-14">
          <div
            dangerouslySetInnerHTML={{
              __html: cleanContent(blog.content),
            }}
          />
        </article>
      </section>

      {/* GLOBAL BLOG STYLES */}
      <style jsx global>{`
        .blog-render-container * {
          background-color: transparent !important;
          color: #374151 !important;
          font-family: inherit;
        }

        .blog-render-container h1,
        .blog-render-container h2,
        .blog-render-container h3,
        .blog-render-container h4 {
          color: #071405 !important;
          font-weight: 800;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .blog-render-container h1 {
          font-size: 2.5rem;
        }

        .blog-render-container h2 {
          font-size: 2rem;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 0.7rem;
        }

        .blog-render-container h3 {
          font-size: 1.5rem;
        }

        .blog-render-container p {
          font-size: 1.1rem;
          line-height: 2;
          margin-bottom: 1.5rem;
          color: #4b5563 !important;
        }

        .blog-render-container strong {
          color: #111827 !important;
          font-weight: 700;
        }

        .blog-render-container ul {
          list-style: disc !important;
          padding-left: 1.7rem;
          margin-bottom: 1.7rem;
        }

        .blog-render-container ol {
          list-style: decimal !important;
          padding-left: 1.7rem;
          margin-bottom: 1.7rem;
        }

        .blog-render-container li {
          margin-bottom: 0.8rem;
          line-height: 1.9;
        }

        .blog-render-container blockquote {
          border-left: 4px solid #76ce68;
          background: #f7fff5 !important;
          padding: 1.2rem 1.5rem;
          margin: 2rem 0;
          border-radius: 14px;
          font-style: italic;
        }

        .blog-render-container a {
          color: #348d27 !important;
          text-decoration: none !important;
          font-weight: 600;
        }

        .blog-render-container a:hover {
          text-decoration: underline !important;
        }

        .blog-render-container img {
          width: 100%;
          border-radius: 24px;
          margin: 2rem 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .blog-render-container code {
          background: #f3f4f6 !important;
          padding: 0.2rem 0.4rem;
          border-radius: 6px;
          font-size: 0.95rem;
        }

        .blog-render-container pre {
          background: #111827 !important;
          color: white !important;
          padding: 1.5rem;
          border-radius: 18px;
          overflow-x: auto;
          margin: 2rem 0;
        }

        .blog-render-container pre * {
          color: white !important;
        }
      `}</style>
    </main>
  );
};

export default BlogDetailWrapper;