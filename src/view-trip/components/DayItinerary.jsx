import React from "react";

const DayItinerary = ({ day, data }) => {
  return (
    <div
      style={{ background: "rgba(255, 255, 255, 0.8)", borderRadius: "16px" }}
      className="my-4 p-4 border rounded-lg"
    >
      <h2 className="font-bold text-xl">{day.replace("day", "Day ")}</h2>
      <p className="italic text-orange-600">
        Best time to visit: {data.bestTimeToVisit}
      </p>
      <div className="mt-4">
        {data.plan.map((place, index) => (
          <div key={index} className="my-2 p-2 border-b">
            <h3 className="font-semibold text-xl">{place.placeName}</h3>
            <p>{place.placeDetails}</p>
            <p>Rating: {place.rating}</p>
            <p>Ticket Pricing: {place.ticketPricing}</p>
            <p>Time to Travel: {place.timeToTravel}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayItinerary;
