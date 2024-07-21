import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosSend } from "react-icons/io";

const InfoSection = ({ trip }) => {
  return (
    <div>
      <img
        src="/clouds.jpg"
        className="w-full h-[340px] object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.city}, {trip?.userSelection?.state},{" "}
            {trip?.userSelection?.country}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 font-semibold rounded-full text-gray-500 text-xs md:text-md">
              {trip.userSelection?.days} days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 font-semibold rounded-full text-gray-500 text-xs md:text-md">
              {trip.userSelection?.budget} budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 font-semibold rounded-full text-gray-500 text-xs md:text-md">
              {trip.userSelection?.travelers} trip
            </h2>
          </div>
        </div>
        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
