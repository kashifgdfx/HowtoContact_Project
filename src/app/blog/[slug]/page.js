import BlogDetailWrapper from "@/components/BlogDetailWrapper";
import React from "react";

export async function generateMetadata(props) {

  const params = await props.params;

  const slug = params.slug;

  try {

    const res = await fetch(
      `https://a-backend-phi.vercel.app/api/blogs/slug/${slug}`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();

    const blog = data.blog;

    if (!blog) {
      return {
        title: "Blog Not Found | How to Contact",
      };
    }

    return {

      /* TITLE */

      title:
        blog?.seo?.metaTitle ||
        blog?.title,

      /* DESCRIPTION */

      description:
        blog?.seo?.metaDescription ||
        blog?.excerpt ||
        "Expert tech blogs on IT support and cybersecurity.",

      /* CANONICAL */

      alternates: {
        canonical:
          blog?.seo?.canonicalUrl ||
          `https://howtocontact.live/blog/${slug}`,
      },

      /* OPEN GRAPH */

      openGraph: {

        title:
          blog?.seo?.metaTitle ||
          blog?.title,

        description:
          blog?.seo?.metaDescription ||
          blog?.excerpt,

        url:
          blog?.seo?.canonicalUrl ||
          `https://howtocontact.live/blog/${slug}`,

        siteName: "How to Contact",

        images: [
          {
            url:
              blog?.image?.url ||
              "https://howtocontact.live/og-image.jpg",

            width: 1200,
            height: 630,

            alt:
              blog?.image?.alt ||
              blog?.title,
          },
        ],

        locale: "en_US",

        type: "article",
      },

      /* TWITTER */

      twitter: {
        card: "summary_large_image",

        title:
          blog?.seo?.metaTitle ||
          blog?.title,

        description:
          blog?.seo?.metaDescription ||
          blog?.excerpt,

        images: [
          blog?.image?.url ||
          "https://howtocontact.live/og-image.jpg",
        ],
      },

      robots: {
        index: true,
        follow: true,
      },
    };

  } catch (error) {

    return {
      title: "How to Contact Blog",

      description:
        "Expert tech blogs on IT support and cybersecurity.",
    };
  }
}

const page = () => {
  return (
    <div>
      <BlogDetailWrapper />
    </div>
  );
};

export default page;