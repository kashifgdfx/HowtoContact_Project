import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full bg-[#193315]">
      <div className="flex flex-col lg:flex-row">
        {/* LEFT SECTION */}
        <div className="lg:w-10/12 w-full">
          <div className="text-white text-sm py-2 px-4 overflow-hidden">
            {/* marquee is deprecated but keeping SAME behavior */}
            <marquee direction="left">
              Our business hours are Monday to Friday from 8.00 am to 7.00 pm
              MST.
            </marquee>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:w-2/12 w-full">
          <div className="flex justify-center lg:justify-end items-center h-full px-4">
            <ul className="flex gap-4 items-center text-white">
              <li>
                <a
                  href="https://www.facebook.com/"
                  
                  rel="noreferrer"
                  className="hover:text-[#1877F2]"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/"
                 
                  rel="noreferrer"
                  className="hover:text-[#1DA1F2]"
                >
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a
                  href="#"
              
                  rel="noreferrer"
                  className="hover:text-[#0A66C2]"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="flex items-center gap-1 bg-red-600 px-2 py-1 rounded">
                <a
                  href="https://www.youtube.com/"
              
                  rel="noreferrer"
                  className="flex items-center gap-1"
                >
                  <FaYoutube />
                  <span className="text-xs font-medium">YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
