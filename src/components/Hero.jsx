import React from "react";

function Hero() {
  return (
    <div className=" mt-6 max-md:max-w-[420px] mx-auto  md:w-5/6 md:mb-24">
      <h3
        className="text-black font-medium mb-4 md:text-center md:text-xl"
        id="aboutus"
      >
        Welcome to EventTribe, the home of events
      </h3>
      <div className="flex flex-col gap-4 items-center md:flex-row">
        <div className="  md:w-1/2">
          <img
            src="/events.jpeg"
            alt="about us"
            className="w-full h-full border-2"
          />
        </div>
        <div className="text-[15px] space-y-4 md:w-1/2">
          <p>
            Discover and book the best events in town with ease. Whether you're
            looking for live meetups, thrilling workshops, or captivating
            hackathons, we've got you covered. <br /> Browse our curated
            selection of events, explore detailed listings, and secure your spot
            with just a few clicks. Get ready to create unbreakable network and
            immerse yourself in the world of programming.
            <br />
            Start your adventure today! Explore, book, and experience the magic
            of events with <span className="font-bold">EventTribe</span>.
          </p>
          {/* <ClickForward label="Our services" buttonType="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
