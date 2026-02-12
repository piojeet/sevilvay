import React from "react";
import { IoIosLink } from "react-icons/io";
import { MdCall, MdMailOutline } from "react-icons/md";

function Newsletter() {
  return (
    <section id="contact">
      <div class="max-w-7xl  mx-auto py-20 px-5 lg:px-0 ">
        <h6 class="uppercase tracking-widest text-lg mb-5 font-semibold text-primary">
          Order
        </h6>
        <div class="space-y-4">
          <h2 class="text-4xl">Book Sevil to speak</h2>
          <p class="text-gray-600 text-lg font-bold">
            Whether it's a keynote, masterclass, or panel—Sevil brings passion,
            precision, and practical insight to every stage.
          </p>
        </div>
        <div class="grid mt-5  sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="flex items-center gap-2">
            <span class="text-2xl">
            <MdMailOutline />
            </span>
            <h2 class="text-base text-gray-500 font-semibold">
              Let's Talk - Book Sevil
            </h2>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-2xl">
            <IoIosLink />
            </span>
            <h2 class="text-base text-gray-500 font-semibold">
              [Download Speaker One Sheet (PDF)]
            </h2>
          </div>
          <div class="flex gap-2  items-center">
            <span class="text-2xl text-gray-600">
            <MdCall />
            </span>
            <h2 class="text-base text-gray-500 font-semibold">
              Available for events worldwide | Based in Vancouver, Canada
            </h2>
          </div>
        </div>
        <form class="my-5 flex flex-col md:flex-row gap-5 ">
          <input
            type="text"
            required=""
            placeholder="Your Full name"
            class="border-gray-200 rounded-xl rounded-tl-none border p-3 bg-gray-50 h-12 cursor-pointer md:w-1/2 w-full focus:outline-2 outline-blue-900 "
            name="name"
            value=""
          />
          <div class="w-full md:w-1/2 h-12 relative">
            <input
              type="email"
              required=""
              placeholder="Your Email"
              class="border-gray-200 rounded-xl rounded-br-none border p-3 bg-gray-50  cursor-pointer  w-full focus:outline-2 outline-blue-900 "
              name="email"
              value=""
            />
            <button
              type="submit"
              class="absolute right-2 bottom-1 top-1 bg-[#8BEB8B] active:scale-105 hover:bg-[#78e378] cursor-pointer  px-4 py-2 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
