import React from "react";
import Master from "../assets/images/masters-leadership.webp"
import Coaching from "../assets/images/coaching.webp"
import Dancing from "../assets/images/dancing.webp"



function Services() {
  return (
    <section id="services">
      <div className="py-20 max-w-6xl w-full mx-auto">
        <div class="flex mx-auto w-2/3  items-center flex-col justify-center">
          <h5 class="text-green-500 uppercase tracking-wider font-semibold mb-2">
            How We Work
          </h5>
          <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            What I Do
          </h2>
          <p class="text-gray-600 text-center italic text-lg leading-relaxed">
            Phasellus facilisis malesuada blandit. Morbi hendrerit eu elit sit
            amet euismod. Nam a efficitur nulla. Duis placerat urna in ex
            pulvinar aliquet.
          </p>
        </div>

        <div class="md:px-10 lg:px-0 ">
          <div class="relative px-10">
            <img
              alt="Sevil velsha"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              className="rounded-2xl"
              src={Master}
            />
            <span
              class="bg-[#FF6E68] text-xs md:text-sm md:tracking-wider  font-medium rounded-xl rounded-bl-none text-white
          md:px-15 md:py-3  py-2
          px-5
          
          absolute bottom-2 md:bottom-5 right-1 md:-right-5
         "
            >
              Keynote Speaking
            </span>
          </div>
          <div class="my-4">
            <h2 class="font-bold  mx-auto w-3/4 text-xl text-center">
              Dynamic talks on voice power, performance under pressure,
              communication science, and the emotional art of speech.
            </h2>
            <div class="grid text-gray-500 px-4 md:grid-cols-2 gap-5 py-5">
              <p class="text-center py-3 md:py-5 px-4 rounded-xl border-[1px] border-red-400 ">
                The Science of Charisma
              </p>
              <p class="text-center py-3 md:py-5 px-4 rounded-xl border-[1px] border-red-400 ">
                How to Persuade with Your Voice
              </p>
              <p class="text-center py-3 md:py-5 px-4 rounded-xl border-[1px] border-red-400 ">
                Sounding Confident When You're Not
              </p>
              <p class="text-center py-3 md:py-5 px-4 rounded-xl border-[1px] border-red-400 ">
                Voice as Leadership: Tone, Trust &amp; Timing
              </p>
            </div>
          </div>
        </div>

        <div class="md:px-10 lg:px-0 ">
          <div class="relative px-10">
            <img
              alt="Coaching &amp; Workshops"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              class="rounded-2xl"
              src={Coaching}
            />
            <span
              class="bg-[#79D779] text-xs md:text-sm md:tracking-wider  font-medium rounded-xl rounded-bl-none text-white
          md:px-15 md:py-3  py-2
          px-5
          
          absolute bottom-2 md:bottom-5 left-1 md:-left-5
         "
            >
              1:1 Coaching &amp; Workshops
            </span>
          </div>
          <div class="my-4">
            <h2 class="font-bold  mx-auto w-3/4 text-xl text-center">
              Bespoke training for professionals, executives, actors, and
              academics in:
            </h2>
            <div class="grid  text-gray-500 px-4 md:grid-cols-2 gap-5 py-5">
              <p class="text-center py-3 md:py-5 px-4 rounded-xl border-[1px] border-[#79D779]">
                Negotiation &amp; Presentation Voice Control{" "}
              </p>
              <p class="text-center py-3 md:py-5 px-4 rounded-xl border-[1px] border-[#79D779]">
                High-Stakes Speaking: Interviews, TEDx, Pitches
              </p>
              <p class="text-center py-3 md:py-5 px-4 rounded-xl border-[1px] border-[#79D779]">
                Accent Shaping &amp; Intonation Mastery
              </p>
              <p class="text-center py-3 md:py-5 px-4 rounded-xl border-[1px] border-[#79D779]">
                Emotional Expression through Voice
              </p>
            </div>
          </div>
        </div>

        <div class="md:px-10 lg:px-0 ">
          <div class="relative px-10">
            <img
              alt="Sevil velsha"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              class="rounded-2xl"
              src={Dancing}
            />
            <span
              class="bg-[#EFEA53] text-xs md:text-sm md:tracking-wider  font-medium rounded-xl rounded-bl-none text-white
          md:px-15 md:py-3  py-2
          px-5
          
          absolute bottom-2 md:bottom-5 right-1 md:-right-5
         "
            >
              Author &amp; Researcher
            </span>
          </div>
          <div class="my-4">
            <h2 class="font-bold  mx-auto w-3/4 text-xl text-center">
              Author of the upcoming textbook:
            </h2>
            <div class="grid text-gray-500 px-4 md:grid-cols-2 gap-5 py-5">
              <p class="text-center col-span-2 py-3 md:py-5 px-4 rounded-xl border-[1px] border-[#EFEA53] ">
                Published in international journals on prosody, articulation,
                and expressive acoustics.
              </p>
              <p class="text-center py-3 col-span-2 md:col-span-1 md:py-5 px-4 rounded-xl border-[1px] border-[#EFEA53] ">
                An acoustic and emotional approach to classical theatre and
                powerful speech delivery.
              </p>
              <p class="text-center py-3 col-span-2 md:col-span-1 md:py-5 px-4 rounded-xl border-[1px] border-[#EFEA53] ">
                “Warming the Voice, Waking the Text”
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
