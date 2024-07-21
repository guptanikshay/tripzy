import React from "react";

const Hotels = ({ trip }) => {
  return (
    <div>
      <h2 className="font-extrabold text-xl mt-5">Hotel Recommendations</h2>
      <div className="flex flex-col gap-5 p-5">
        {trip?.tripData?.hotelOptions?.map((hotel, index) => (
          <div
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              borderRadius: "16px",
            }}
            className="flex gap-10 p-2"
            key={index}
          >
            <img src="/hotel.png" className="rounded-xl h-[100px] pt-5" />
            <div className="my-2 flex flex-col gap-2 justify-center">
              <h2 className="font-medium">{hotel?.hotelName}</h2>
              <h2 className="text-xs text-gray-500">{hotel?.hotelAddress}</h2>
              <h2 className="text-sm">{hotel?.price}</h2>
              <h2 className="text-sm">{hotel?.rating} ⭐</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
