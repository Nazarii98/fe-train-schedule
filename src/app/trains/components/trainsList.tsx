"use client";

import { FC, useEffect } from "react";
import { TrainsItem } from "./trainsItem";
import { fetchTrains } from "@/actions/trains";
import { useTypedSelector, useTypedDispatch } from "@/store/store";
import { Watch } from "react-loader-spinner";

export const TrainsList: FC = () => {
  const { isLoading, trains } = useTypedSelector((state) => state.trains);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchTrains());
  }, [dispatch]);

  const renderContent = () => {
    if (isLoading || !trains) {
      return (
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
      );
    } else {
      return trains.map((train) => <TrainsItem key={train.id} train={train} />);
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="sticky top-0 grid grid-flow-col grid-cols-5 border-b-2 px-20 bg-gray-800">
        <div className="col-start-1 col-end-2">ID</div>
        <div className="col-start-2 col-end-4 text-center">Name</div>
        <div className="col-start-4 col-end-6 text-center">Color</div>
      </div>
      {renderContent()}
    </div>
  );
};
