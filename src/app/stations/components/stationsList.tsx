import { Station } from "@/utils/types";
import { FC } from "react";
import { StationsItem } from "./stationsItem";

interface Stations {
  stations: Station[];
}

export const StationsList: FC<Stations> = ({ stations }) => {
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
      {stations.map((station, index) => {
        return <StationsItem key={index} station={station} />;
      })}
    </div>
  );
};
