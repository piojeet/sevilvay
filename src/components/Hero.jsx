import React from "react";
import Img from "../assets/images/hero-img.webp";

function Hero() {
  return (
    <section id="home" className="bg-bgColor">
      <div className="max-w-7xl w-full mx-auto p-5  md:p-20 flex flex-col md:flex-row gap-10">
        <div class="flex flex-1 flex-col  gap-8 justify-center">
          <div class="space-y-4">
            <h3 class="text-green-400 uppercase tracking-wider">
              Ph.D. in intonation and acoustics
            </h3>
            <h1 class="text-6xl">Sevil Velsha Voice of Influence</h1>
          </div>
          <div>
            <span class="text-gray-500">
              Speaker | Author | Vocal Dynamics Coach | Presentation Strategist
            </span>
          </div>
          <div class="mt-5">
            <a
              class="inline-block px-14 cursor-pointer font-semibold py-4 rounded-full rounded-tr-none bg-[#81e281] hover:bg-[#74d574] transition-colors text-center"
              href="/booking"
            >
              Book a Free Voice Assessment
            </a>
          </div>
        </div>

        <div className="flex-1">
          <img src={Img} alt="image" decoding="async" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
