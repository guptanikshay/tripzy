import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
// import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container flex flex-col items-center gap-9 sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <img src="/logo.png" className="mt-2" />
      <h1
        className="font-extrabold text-[35px] text-center mt-2"
        style={{ background: "rgba(255, 255, 255, 0.5)", borderRadius: "16px" }}
      >
        Your very own AI trip planner! <br /> Provides you with handcrafted
        itineraries in seconds!
      </h1>
      <p
        className="font-extrabold text-xl text-center p-2"
        style={{ background: "rgba(255, 255, 255, 0.5)", borderRadius: "16px" }}
      >
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
