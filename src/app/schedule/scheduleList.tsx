import { Schedule, Station } from "@/utils/types";
import { FC } from "react";
import { ScheduleItem } from "./scheduleItem";

interface Props {
  schedule: Schedule[];
}



export const ScheduleList: FC<Props> = ({ schedule }) => {
  return (
    <div>
      <div className="sticky top-0 grid grid-flow-col grid-cols-10 border-b-2 px-20 bg-gray-800">
        <div className="col-start-1 col-end-2">ID</div>
        <div className="col-start-2 col-end-4">To</div>
        <div className="col-start-4 col-end-6">Arrival Date</div>
        <div className="col-start-6 col-end-8">From</div>
        <div className="col-start-8 col-end-10 text-center">Departure Time</div>
        <div className="col-start-10 col-end-11">Train Id</div>
      </div>
      {schedule.map((scheduleItem, index) => {
        return <ScheduleItem key={index} schedule={scheduleItem} />;
      })}
    </div>
  );
};
