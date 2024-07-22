import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate instead of useNavigation
import UserTripCard from "./components/UserTripCard";

const MyTrips = () => {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    GetUserTrips();
  }, []);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
      return;
    }
    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );

    const querySnap = await getDocs(q);
    setUserTrips([]);
    querySnap.forEach((doc) => {
      setUserTrips((prevVal) => [...prevVal, { id: doc.id, ...doc.data() }]);
    });
  };

  const onDelete = (id) => {
    setUserTrips(userTrips.filter((trip) => trip.id !== id));
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl mb-5">My Trips</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {userTrips?.length > 0 ? (
          userTrips.map((trip) => (
            <UserTripCard trip={trip} onDelete={onDelete} />
          ))
        ) : (
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-xl">
              Awww! No trips yet.
              <br />
              Plan one today!
            </h2>
            <h2 className="text-gray-600">
              Life is too short to avoid a trip!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTrips;
