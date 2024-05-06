import { FC } from "react";

import { StationsList } from "./components/stationsList";

const Stations: FC = () => {
  return (
    <div className="flex flex-1 flex-col justify-start rounded-3xl bg-gray-800 bg-opacity-90 border-white border-2  overflow-y-auto">
      <StationsList />
    </div>
  );
};

export default Stations;
