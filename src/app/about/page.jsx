
import AboutWrapper from '@/components/AboutWrapper'
import React from 'react'


export const metadata = {
 title: "About How to Contact | Global IT Consulting & Tech Support",

  description:
    "Global IT consulting, 24/7 support, printer help, antivirus, PC repair, and software solutions.",

  alternates: {
    canonical: "https://howtocontact.live/about",
  },

  openGraph: {
    title: "About Us | How to Contact",

    description:
      "Contact How to Contact for technical support, printer solutions, antivirus services, and IT consulting worldwide.",

    url: "https://howtocontact.live/about",

    siteName: "How to Contact",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact How to Contact",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "About Us | How to Contact",

    description:
      "Reliable IT consulting, 24/7 support, printer help, antivirus, PC repair, and software solutions.",

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
      <AboutWrapper/>
    </div>
  )
}

export default page
