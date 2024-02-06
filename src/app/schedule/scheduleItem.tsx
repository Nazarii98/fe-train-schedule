"use client";

import { EditBlock } from "@/components/EditBlock";
import { useTypedDispatch, useTypedSelector } from "@/store/store";
import { formatDateString } from "@/utils/functions";
import { Schedule } from "@/utils/types";
import { FC, useState } from "react";
import { deleteSchedule } from "../actions/schedule";

interface Props {
  schedule: Schedule;
}

export const ScheduleItem: FC<Props> = ({ schedule }) => {
  const stations = useTypedSelector((state) => state.stations.stations);
  const userRole = useTypedSelector((state) => state.user.user?.role);

  const dispatch = useTypedDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const stationName = (stationId: number) => {
    return stations?.find((item) => item.id === stationId)?.name;
  };

  const handleOpenEdit = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  const handleSubmit = () => {};

  const handleDelete = () => {
    if (schedule.id) dispatch(deleteSchedule(schedule.id));
  };

  return (
    <div className="relative grid grid-flow-col grid-cols-10 hover:bg-orange-600 p-2 pr-20 pl-10">
      <div className="col-start-1 col-end-2">{schedule.id}</div>
      <div className="col-start-2 col-end-4">
        {stationName(schedule.departureStationId)}
      </div>
      <div className="col-start-4 col-end-6 text-center">
        {formatDateString(schedule.departureDate)}
      </div>
      <div className="col-start-6 col-end-8 text-center">
        {stationName(schedule.arrivalStationId)}
      </div>
      <div className="col-start-8 col-end-10 text-center">
        {formatDateString(schedule.arrivalDate)}
      </div>
      <div className="col-start-10 col-end-11 text-center">
        {schedule.trainId}
      </div>
      {userRole === "admin" && (
        <div className="absolute right-4 top-3">
          <EditBlock
            isEditing={isEditing}
            onOpenEdit={handleOpenEdit}
            onCloseEdit={handleCloseEdit}
            onSubmit={handleSubmit}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
};
