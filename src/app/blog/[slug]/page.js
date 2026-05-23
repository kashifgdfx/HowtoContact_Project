import BlogDetailWrapper from '@/components/BlogDetailWrapper'
import React from 'react'


export const metadata = {
 title: "How to Set Up Malwarebytes Antivirus and Manage Your Account, Billing Information, and Subscriptions",

  description:
    "Expert tech blogs on IT support, cybersecurity, printer help, antivirus, and PC repair guides.",

  alternates: {
    canonical: "https://howtocontact.live/blog",
  },

  openGraph: {
    title: "Blogs | How to Contact",

    description:
      "Expert tech blogs on IT support, cybersecurity, printer help, antivirus, and PC repair guides.",

    url: "https://howtocontact.live/blog",

    siteName: "How to Contact",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blog How to Contact",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Blogs | How to Contact",

    description:
      "Tech blogs: IT support, cybersecurity, antivirus, printer help, and PC repair guides.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


const page = () => {
  return (
    <div>
      <BlogDetailWrapper/>
    </div>
  )
}

export default page
