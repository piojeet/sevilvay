import React from "react";
import Img from "../assets/images/sevil-about.webp";
import Icon1 from "../assets/images/icon-1.webp";
import Icon2 from "../assets/images/icon-2.webp";
import Icon3 from "../assets/images/icon-3.webp";

function About() {
  return (
    <section className="" id="about">
      <div className="min-h-screen max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row p-10 md:p-2 gap-10 items-center">
          <div className="flex-1">
            <img src={Img} alt="about-img" decoding="async" loading="lazy" />
          </div>
          <div class="flex-1 space-y-3">
            <h4 class="uppercase text-xl text-green-700 tracking-widest font-semibold">
              About Me
            </h4>
            <h2 class="text-3xl">Voice as Identity</h2>
            <p class="text-gray-500 tracking-wide font-medium mt-10">
              I’m Sevil Velsha, wrote a Phd&nbsp; in Intonation and Acoustics,
              voice and communication expert, and creator of The Voice Studio. I
              help professionals, leaders, educators, and performers unlock the
              power of their voice—so they can speak with clarity, authority,
              and emotional impact. Whether you're presenting on stage, leading
              a team, negotiating a deal, or preparing for TED, your voice is
              your instrument of influence.And yes—you can train it.
            </p>
          </div>
        </div>

        <div>
          <div class="flex flex-col mt-2 mb-3  md:flex-row items-center p-4 lg:p-0 gap-5 ">
            <div
              class="flex-1   space-y-2  h-52   rounded-xl  relative border px-8 py-14 border-gray-300
    rounded-bl-none
    "
            >
              <img
                alt="Science + Soul"
                loading="lazy"
                decoding="async"
                data-nimg="1"
                class="absolute w-10 h-10 -top-4"
                src={Icon1}
              />
              <h3 class="text-xl text-gray-800 font-semibold">
                Science + Soul
              </h3>
              <p class="text-gray-500 text-lg">
                I blend cutting-edge linguistic research with embodied
                performance techniques
              </p>
            </div>
            <div
              class="flex-1   space-y-2  h-52   rounded-xl  relative border px-8 py-14 border-gray-300
    rounded-tl-none
    "
            >
              <img
                alt="Actor’s Discipline"
                loading="lazy"
                decoding="async"
                data-nimg="1"
                class="absolute w-10 h-10 -top-4"
                src={Icon2}
              />
              <h3 class="text-xl text-gray-800 font-semibold">
                Actor’s Discipline
              </h3>
              <p class="text-gray-500 text-lg">
                Trained in classical theatre vocality &amp; expressive delivery
              </p>
            </div>
            <div
              class="flex-1   space-y-2  h-52   rounded-xl  relative border px-8 py-14 border-gray-300
    rounded-br-none
    "
            >
              <img
                alt="Voice as Identity"
                loading="lazy"
                decoding="async"
                data-nimg="1"
                class="absolute w-10 h-10 -top-4"
                src={Icon3}
              />
              <h3 class="text-xl text-gray-800 font-semibold">
                Voice as Identity
              </h3>
              <p class="text-gray-500 text-lg">
                Your voice is your story. Your power. Let’s make it heard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
