"use client";

import { EditBlock } from "@/components/EditBlock";
import { useTypedDispatch, useTypedSelector } from "@/store/store";
import { formatDateString } from "@/utils/functions";
import { Schedule } from "@/utils/types";
import { FC, useState } from "react";
import { deleteSchedule, uppdateScheduleItem } from "../actions/schedule";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { DateTimePicker } from "@mui/x-date-pickers";
import Select from "react-select";
import { FormInputs, SelectValues } from "./types/types";

interface Props {
  schedule: Schedule;
  stationsSelectData: SelectValues[];
  trainsSelectData: SelectValues[];
}

export const ScheduleItem: FC<Props> = ({
  schedule,
  stationsSelectData,
  trainsSelectData,
}) => {
  const { handleSubmit, control } = useForm<FormInputs>();
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

  const handleDelete = () => {
    if (schedule.id) dispatch(deleteSchedule(schedule.id));
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("data", data);
    if (data.arrivalStation) {
      const scheduleData: Schedule = {
        id: schedule.id,
        departureDate: data.departureDate,
        departureStationId: +data.departureStation.value,
        arrivalDate: data.arrivalDate,
        arrivalStationId: +data.arrivalStation.value,
        trainId: +data.trainId.value,
      };

      dispatch(uppdateScheduleItem(scheduleData));

      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <form
          className="relative grid grid-flow-col grid-cols-10 pr-20 pl-10 gap-2 text-black pt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-start-1 col-end-2 self-center text-white">
            {schedule.id}
          </div>
          <div className="col-start-2 col-end-4 self-center">
            <Controller
              control={control}
              name="departureStation"
              defaultValue={stationsSelectData.find(
                (item) => +item.value === schedule.departureStationId
              )}
              render={({ field }) => (
                <Select {...field} options={stationsSelectData} />
              )}
            />
          </div>

          <div className="col-start-4 col-end-6 h-full self-center">
            <Controller
              control={control}
              name="departureDate"
              render={({ field }) => (
                <div className="bg-white rounded">
                  <DateTimePicker
                    slotProps={{
                      textField: { color: "error" },
                    }}
                    label="Departure Date"
                    value={field.value}
                    onChange={(newValue) => field.onChange(newValue)}
                  />
                </div>
              )}
            />
          </div>

          <div className="col-start-6 col-end-8 self-center">
            <Controller
              control={control}
              name="arrivalStation"
              defaultValue={stationsSelectData.find(
                (item) => +item.value === schedule.arrivalStationId
              )}
              render={({ field }) => (
                <Select {...field} options={stationsSelectData} />
              )}
            />
          </div>

          <div className="col-start-8 col-end-10 self-center">
            <Controller
              control={control}
              name="arrivalDate"
              render={({ field }) => (
                <div className="bg-white rounded">
                  <DateTimePicker
                    slotProps={{
                      textField: { color: "error" },
                    }}
                    label="Arrival Date"
                    value={field.value}
                    onChange={(newValue) => field.onChange(newValue)}
                  />
                </div>
              )}
            />
          </div>

          <div className="col-start-10 col-end-11 self-center">
            <Controller
              control={control}
              name="trainId"
              defaultValue={trainsSelectData.find(
                (item) => +item.value === schedule.trainId
              )}
              render={({ field }) => (
                <Select {...field} options={trainsSelectData} />
              )}
            />
          </div>
          {userRole === "admin" && (
            <div className="absolute right-4 self-center text-white">
              <EditBlock
                isEditing={isEditing}
                onOpenEdit={handleOpenEdit}
                onCloseEdit={handleCloseEdit}
                onSubmit={onSubmit}
                onDelete={handleDelete}
              />
            </div>
          )}
        </form>
      ) : (
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
            <div className="absolute right-4 self-center">
              <EditBlock
                isEditing={isEditing}
                onOpenEdit={handleOpenEdit}
                onCloseEdit={handleCloseEdit}
                onSubmit={onSubmit}
                onDelete={handleDelete}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
