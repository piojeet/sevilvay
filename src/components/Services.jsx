import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Master from "../assets/images/masters-leadership.webp";
import Coaching from "../assets/images/coaching.webp";
import Dancing from "../assets/images/dancing.webp";

gsap.registerPlugin(ScrollTrigger);

const SERVICE_SECTIONS = [
  {
    image: Master,
    imageAlt: "Keynote speaking",
    tag: "Keynote Speaking",
    tagColor: "bg-[#FF6E68]",
    tagPosition: "right-3 sm:right-4 md:right-5",
    borderColor: "border-[#FF6E68]",
    title:
      "Dynamic talks on voice power, performance under pressure, communication science, and the emotional art of speech.",
    points: [
      "The Science of Charisma",
      "How to Persuade with Your Voice",
      "Sounding Confident When You're Not",
      "Voice as Leadership: Tone, Trust and Timing",
    ],
  },
  {
    image: Coaching,
    imageAlt: "Coaching and workshops",
    tag: "1:1 Coaching and Workshops",
    tagColor: "bg-[#79D779]",
    tagPosition: "left-3 sm:left-4 md:left-5",
    borderColor: "border-[#79D779]",
    title:
      "Bespoke training for professionals, executives, actors, and academics in:",
    points: [
      "Negotiation and Presentation Voice Control",
      "High-Stakes Speaking: Interviews, TEDx, Pitches",
      "Accent Shaping and Intonation Mastery",
      "Emotional Expression through Voice",
    ],
  },
  {
    image: Dancing,
    imageAlt: "Author and researcher",
    tag: "Author and Researcher",
    tagColor: "bg-[#EFEA53]",
    tagPosition: "right-3 sm:right-4 md:right-5",
    borderColor: "border-[#EFEA53]",
    title: "Author of the upcoming textbook:",
    points: [
      "Published in international journals on prosody, articulation, and expressive acoustics.",
      "An acoustic and emotional approach to classical theatre and powerful speech delivery.",
      "\"Warming the Voice, Waking the Text\"",
    ],
  },
];

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray("[data-service-card]");

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              autoAlpha: 0,
              x: Number(card.dataset.offsetX) || 0,
              y: Number(card.dataset.offsetY) || 16,
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.72,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            },
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    media.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set("[data-service-card]", { autoAlpha: 1, x: 0, y: 0 });
    });

    return () => media.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef}>
      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 sm:py-28 md:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h5 className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-500 sm:text-base">
            How We Work
          </h5>
          <h2 className="mb-4 text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl">
            What I Do
          </h2>
          <p className="text-base italic leading-relaxed text-gray-600 sm:text-lg">
            Phasellus facilisis malesuada blandit. Morbi hendrerit eu elit sit
            amet euismod. Nam a efficitur nulla. Duis placerat urna in ex
            pulvinar aliquet.
          </p>
        </div>

        <div className="mt-10 space-y-12 md:mt-12 md:space-y-20">
          {SERVICE_SECTIONS.map((section, index) => {
            const singleLastItem = section.points.length % 2 === 1;

            return (
              <article key={index} className="space-y-5 md:space-y-10">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    alt={section.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-[260px] w-full object-cover sm:h-[320px] md:h-[380px] lg:h-[460px]"
                    src={section.image}
                  />
                  <span
                    className={`absolute bottom-3 ${section.tagPosition} rounded-xl rounded-bl-none ${section.tagColor} px-4 py-2 text-[11px] font-medium tracking-wide text-white sm:bottom-4 sm:px-5 sm:text-xs md:px-6 md:py-2.5 md:text-sm`}
                  >
                    {section.tag}
                  </span>
                </div>

                <div className="space-y-5 md:space-y-6">
                <h3 className="mx-auto max-w-4xl px-2 text-center text-lg font-bold leading-snug text-gray-800 sm:text-xl md:text-2xl">
                  {section.title}
                </h3>

                <div className="grid gap-4 text-gray-600 md:grid-cols-2 md:gap-8">
                  {section.points.map((point, pointIndex) => {
                    const isLastSingle =
                      singleLastItem && pointIndex === section.points.length - 1;
                    const startsFromLeft = pointIndex % 2 === 0;
                    const offsetX = isLastSingle ? 0 : startsFromLeft ? -18 : 18;
                    const offsetY = isLastSingle ? 20 : 14;

                    return (
                      <p
                        key={pointIndex}
                        data-service-card
                        data-offset-x={offsetX}
                        data-offset-y={offsetY}
                        className={`rounded-xl border px-4 py-3 text-center text-sm leading-relaxed sm:text-base md:px-5 md:py-4 ${section.borderColor} ${
                          isLastSingle ? "md:col-span-2" : ""
                        }`}
                      >
                        {point}
                      </p>
                    );
                  })}
                </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
