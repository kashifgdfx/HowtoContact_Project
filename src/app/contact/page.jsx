import ContactWrapper from '@/components/Contactwrapper'
import React from 'react'


export const metadata = {
  title: "Contact Us | How to Contact",

  description:
    "Contact How to Contact for technical support, printer solutions, antivirus services, and IT consulting worldwide.",

  alternates: {
    canonical: "https://howtocontact.live/contact",
  },

  openGraph: {
    title: "Contact Us | How to Contact",

    description:
      "Contact How to Contact for technical support, printer solutions, antivirus services, and IT consulting worldwide.",

    url: "https://howtocontact.live/contact",

    siteName: "How to Contact",

    images: [
      {
        url: "https://howtocontact.live/og-image.jpg",
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

    title: "Contact Us | How to Contact",

    description:
      "Contact How to Contact for technical support, printer solutions, antivirus services, and IT consulting worldwide.",

    images: ["https://howtocontact.live/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
    return (
        <div>
            <ContactWrapper />
        </div>
    )
}

export default page
