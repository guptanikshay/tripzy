import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-9 mx-56">
      <img src="/logo.png" className="mt-14" />
      <h1 className="font-extrabold text-[40px] text-center mt-5">
        Your very own AI Trip Planner <br /> Provides you with Handcrafted
        Itineraries in seconds
      </h1>
      <p className="text-xl text-gray-500 text-center]">
        Your personalized trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started</Button>
      </Link>
      <img src="/landing.png" className="pb-10" />
    </div>
  );
}

export default Hero;
