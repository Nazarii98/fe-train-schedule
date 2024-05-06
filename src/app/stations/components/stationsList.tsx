"use client";

import { FC, useEffect } from "react";
import { StationsItem } from "./stationsItem";
import { useTypedDispatch, useTypedSelector } from "@/store/store";
import { fetchStations } from "@/actions/stations";
import { Watch } from "react-loader-spinner";

export const StationsList: FC = () => {
  const stations = useTypedSelector((state) => state.stations);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchStations());
  }, [dispatch]);

  return (
    <div>
      <div className="sticky top-0 grid grid-flow-col grid-cols-9 border-b-2 px-20 bg-gray-800">
        <div className="col-start-1 col-end-2">ID</div>
        <div className="col-start-2 col-end-4">Name</div>
        <div className="col-start-4 col-end-6">City</div>
        <div className="col-start-6 col-end-8">Oblast</div>
        <div className="col-start-8 col-end-10 text-center">
          Number of platform
        </div>
      </div>
      {stations.isLoading || !stations.stations ? (
        <div className="m-auto">
          <Watch
            visible={true}
            height="100%"
            width="160"
            radius="48"
            color="#c74822"
            ariaLabel="watch-loading"
          />
        </div>
      ) : (
        stations.stations.map((station, index) => {
          return <StationsItem key={index} station={station} />;
        })
      )}
    </div>
  );
};
