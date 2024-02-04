"use client";

import { useTypedDispatch, useTypedSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { fetchStations } from "../actions/stations";
import { StationsList } from "./components/stationsList";

const Stations = () => {
  const stations = useTypedSelector((state) => state.stations);
  const dispatch = useTypedDispatch();
  const [pagination, setPagination] = useState({ take: 10, skip: 0 });
  useEffect(() => {
    dispatch(fetchStations(pagination));
  }, [pagination, dispatch]);

  console.log("isLoading", stations.isLoading);
  console.log("stations", stations.stations);
  return (
    <>
      <div className="flex flex-1 flex-col justify-around rounded-3xl bg-gray-800 bg-opacity-90 border-white border-2  overflow-y-auto">
        {stations.stations && <StationsList stations={stations.stations} />}
      </div>
    </>
  );
};

export default Stations;
