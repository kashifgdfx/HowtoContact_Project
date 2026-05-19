"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  ArrowRight,
  Clock3,
  Sparkles,
} from "lucide-react";

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
    <main className="relative overflow-hidden bg-white">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-[#76CE68]/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#457C3C]/10 blur-3xl"></div>

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 pt-28 pb-20">
        <div className="mx-auto max-w-7xl text-center">
          {/* LABEL */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#76CE68]/30 bg-[#F7FFF5] px-5 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#348d27]" />

            <span className="text-sm font-semibold uppercase tracking-[3px] text-[#348d27]">
              Latest Blogs
            </span>
          </div>

          {/* HEADING */}
          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-[#071405] md:text-7xl">
            Explore Modern
            <span className="bg-gradient-to-r from-[#348d27] to-[#76CE68] bg-clip-text text-transparent">
              {" "}
              Tech Insights
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Discover expert blogs on cybersecurity, AI solutions,
            printer support, business automation, technical support,
            and enterprise IT innovation.
          </p>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="relative z-10 px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
                >
                  {/* IMAGE */}
                  <div className="h-[260px] animate-pulse bg-gray-200"></div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <div className="h-4 w-24 animate-pulse rounded-full bg-gray-200"></div>

                    <div className="mt-6 h-7 w-4/5 animate-pulse rounded-full bg-gray-200"></div>

                    <div className="mt-5 space-y-3">
                      <div className="h-4 w-full animate-pulse rounded-full bg-gray-200"></div>

                      <div className="h-4 w-5/6 animate-pulse rounded-full bg-gray-200"></div>

                      <div className="h-4 w-4/6 animate-pulse rounded-full bg-gray-200"></div>
                    </div>

                    <div className="mt-8 h-4 w-32 animate-pulse rounded-full bg-gray-200"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((blog) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug}`}
                  className="group relative overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 hover:border-[#76CE68]/50 hover:shadow-[0_20px_60px_rgba(52,141,39,0.18)]"
                >
                  {/* FEATURED */}
                  {blog.isFeatured && (
                    <div className="absolute left-5 top-5 z-20 rounded-full bg-gradient-to-r from-[#76CE68] to-[#348d27] px-4 py-1 text-xs font-semibold text-white shadow-lg">
                      Featured
                    </div>
                  )}

                  {/* IMAGE */}
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={blog.image?.url}
                      alt={blog.image?.alt || "blog image"}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    {/* META */}
                    <div className="flex items-center gap-5 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-[#348d27]" />

                        <span>{blog.readTime} min read</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-[#348d27]" />

                        <span>Tech Blog</span>
                      </div>
                    </div>

                    {/* TITLE */}
                    <h2 className="mt-5 text-2xl font-bold leading-snug text-[#071405] transition-all duration-300 group-hover:text-[#348d27]">
                      {blog.title}
                    </h2>

                    {/* EXCERPT */}
                    <p className="mt-5 line-clamp-3 text-[15px] leading-relaxed text-gray-600">
                      {blog.excerpt}
                    </p>

                    {/* READ MORE */}
                    <div className="mt-8 flex items-center gap-2 font-semibold text-[#348d27] transition-all duration-300 group-hover:translate-x-2">
                      <span>Read Full Article</span>

                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* TOP HOVER LINE */}
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#76CE68] to-[#348d27] opacity-0 transition-all duration-500 group-hover:opacity-100"></div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blogs;