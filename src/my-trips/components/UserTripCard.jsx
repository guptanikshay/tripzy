import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "sonner";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";

const UserTripCard = ({ trip, onDelete }) => {
  const handleDelete = async () => {
    try {
      const itineraryDocRef = doc(db, "AITrips", trip?.id);
      await deleteDoc(itineraryDocRef);
      onDelete(trip.id); // Pass the trip id to onDelete function
    } catch (error) {
      console.error("Error deleting itinerary: ", error);
      toast("Some error occured while deleting from DB");
    }
  };

  return (
    <div
      style={{ background: "rgba(255, 255, 255, 0.6)", borderRadius: "16px" }}
      className="border rounded-lg"
    >
      <h2 className="font-bold text-md p-5 pb-3">
        {trip.userSelection?.city}, {trip.userSelection?.state},<br />
        {trip.userSelection?.country}
      </h2>
      <div className="flex flex-col pl-5 pb-5">
        <h2>{trip.userSelection?.days} Days</h2>
        <h2>
          {trip.userSelection?.budget} budget, {trip.userSelection?.travelers}{" "}
          Trip
        </h2>
      </div>
      <div className="flex text-4xl items-center justify-between">
        <Link to={"/view-trip/" + trip.id}>
          <Button className="ml-5 mb-3">Show Itinerary</Button>
        </Link>
        <RiDeleteBin6Line
          className="mr-5 mb-2 cursor-pointer hover:text-[40px]"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default UserTripCard;
