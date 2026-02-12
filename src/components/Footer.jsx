import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoIosArrowForward, IoLogoInstagram } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";

function Footer() {
  return (
    <footer id="blogs">
      <div className="bg-bgColor px-10 pt-10 md:px-0 md:pt-40">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col gap-16 md:flex-row">
            <div className="space-y-5 md:w-1/3">
              <h2 className="text-3xl font-semibold">Sevil Velsha</h2>
              <p className="font-semibold text-gray-400">
                Unlock the power of your voice, speak with clarity, authority,
                and emotional impact. Whether you're presenting on stage,
                leading a team, negotiating a deal, or preparing for TED, your
                voice is your instrument of influence.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-2xl font-semibold">Quick Links</h3>
              <ul>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-green-600">
                  <IoIosArrowForward />
                  </span>
                  <a className="text-gray-500 hover:underline" href="">Ph.D. in intonation and acoustics</a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="font-bold text-green-600">
                  <IoIosArrowForward />
                  </span>
                  <a className="text-gray-500 hover:underline" href="">My story</a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="font-bold text-green-600">
                  <IoIosArrowForward />
                  </span>
                  <a className="text-gray-500 hover:underline" href="">
                    About me
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="font-bold text-green-600">
                  <IoIosArrowForward />
                  </span>
                  <a className="text-gray-500 hover:underline" href="">
                    How We Work
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="font-bold text-green-600">
                  <IoIosArrowForward />
                  </span>
                  <a className="text-gray-500 hover:underline" href="">
                    Testimonial
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="font-bold text-green-600">
                  <IoIosArrowForward />
                  </span>
                  <a className="text-gray-500 hover:underline" href="">
                    Order
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-2xl font-semibold">Opening Hours</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <a
                    href="https://www.youtube.com/@VoiceStudio-t7j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-400 hover:underline"
                  >
                    YouTube: [The Voice Studio - Sevil Velsha]
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    className="text-gray-500 hover:text-gray-400 hover:underline"
                    href=""
                  >
                    Instagram: @sevil.velsha
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    className="text-gray-500 hover:text-gray-400 hover:underline"
                    href="/blog/voice-ui-design-art"
                  >
                    Blog: Sound &amp; Presence - Reflections on Speaking, Voice
                    &amp; Performance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-b text-gray-200"></div>

          <div className="flex items-center justify-between pb-5 pt-5">
            <p className="text-base font-semibold text-gray-600">
              Copyright (c) 2025 Sevil Velsha
            </p>

            <div className="flex items-center gap-2">
              <span className="cursor-pointer bg-[#EFEA53] p-2 text-2xl text-gray-800 hover:text-gray-500">
                <a href="">
                <FaFacebookF />
                </a>
              </span>

              <span className="cursor-pointer bg-[#EFEA53] p-2 text-2xl text-gray-800 hover:text-gray-500">
                <a href="">
                <FaTwitter />
                </a>
              </span>

              <span className="cursor-pointer bg-[#EFEA53] p-2 text-2xl text-gray-800 hover:text-gray-500">
                <a href="">
                <LuInstagram />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
