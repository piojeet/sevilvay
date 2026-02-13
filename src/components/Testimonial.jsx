import React from "react";

const TESTIMONIALS = [
  {
    name: "Hazel Dawson",
    role: "Managing Director",
    quote:
      "Fusce elementum pretium odio eu hendrerit. Donec eu malesuada libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
  },
  {
    name: "Rati Jhaveri",
    role: "Housewife",
    quote:
      "Fusce elementum pretium odio eu hendrerit. Donec eu malesuada libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
  },
  {
    name: "Aditi Nayak",
    role: "Manager",
    quote:
      "Fusce elementum pretium odio eu hendrerit. Donec eu malesuada libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
  },
];

function Testimonial() {
  return (
    <section id="testimonial" className="bg-[#EFF9F0]">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h5 className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-500 sm:text-base">
            Testimonial
          </h5>
          <h2 className="mb-4 text-3xl font-semibold text-gray-800 sm:text-4xl md:text-5xl">
            My clients say
          </h2>
          <p className="text-base italic leading-relaxed text-gray-600 sm:text-lg">
            Phasellus facilisis malesuada blandit. Morbi hendrerit eu elit sit
            amet euismod. Nam a efficitur nulla. Duis placerat urna in ex
            pulvinar aliquet.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-green-600 sm:text-base">
                    {item.role}
                  </p>
                </div>

                <span className="text-3xl leading-none text-green-500 sm:text-4xl">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                  </svg>
                </span>
              </div>

              <p className="text-sm leading-relaxed tracking-wide text-gray-600 sm:text-base">
                {item.quote}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
