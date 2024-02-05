import { Train } from "@/utils/types";
import { FC } from "react";
import { TrainsItem } from "./trainsItem";

interface Props {
  trains: Train[];
}

export const TrainsList: FC<Props> = ({ trains }) => {
  return (
    <div>
      <div className="sticky top-0 grid grid-flow-col grid-cols-5 border-b-2 px-20 bg-gray-800">
        <div className="col-start-1 col-end-2">ID</div>
        <div className="col-start-2 col-end-4 text-center">Name</div>
        <div className="col-start-4 col-end-6 text-center">Color</div>
      </div>
      {trains.map((train, index) => {
        return <TrainsItem key={index} train={train} />;
      })}
    </div>
  );
};
