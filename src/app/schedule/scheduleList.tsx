import { Schedule } from "@/utils/types";
import { FC, useState } from "react";
import { ScheduleItem } from "./scheduleItem";
import { useTypedDispatch, useTypedSelector } from "@/store/store";
import Select from "react-select";

import { ImPlus } from "react-icons/im";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { createScheduleItem } from "../actions/schedule";
import { DateTimePicker } from "@mui/x-date-pickers";
import { FormInputs, SelectValues } from "./types/types";

interface Props {
  schedule: Schedule[];
  onSetSort: (value: string) => void;
}

export const ScheduleList: FC<Props> = ({ schedule, onSetSort }) => {
  const { handleSubmit, control } = useForm<FormInputs>();
  const [isCreating, setIsCreating] = useState(false);
  const dispatch = useTypedDispatch();
  const userRole = useTypedSelector((state) => state.user.user?.role);
  const stations = useTypedSelector((state) => state.stations.stations);
  const trains = useTypedSelector((state) => state.trains.trains);

  const stationsSelectData: SelectValues[] = stations
    ? stations.map((item) => ({
        value: String(item.id),
        label: item.name,
      }))
    : [];

  const trainsSelectData: SelectValues[] = trains
    ? trains.map((item) => ({
        value: String(item.id),
        label: item.name,
      }))
    : [];

  const handleOpenCreating = () => {
    setIsCreating(!isCreating);
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("data", data);
    const schedule: Schedule = {
      departureDate: data.departureDate,
      departureStationId: +data.departureStation.value,
      arrivalDate: data.arrivalDate,
      arrivalStationId: +data.arrivalStation.value,
      trainId: +data.trainId.value,
    };

    dispatch(createScheduleItem(schedule));

    setIsCreating(false);
  };
  return (
    <div>
      <div className="sticky top-0 grid grid-flow-col grid-cols-10 border-b-2 pr-20 pl-10 bg-gray-800">
        {!isCreating && (
          <div
            className="col-start-1 col-end-2 cursor-pointer hover:text-orange-600"
            onClick={() => onSetSort("id")}
          >
            ID
          </div>
        )}

        <div className="col-start-2 col-end-3 text-center">From</div>
        <div
          className="col-start-4 col-end-6 cursor-pointer text-center hover:text-orange-600"
          onClick={() => onSetSort("arrivalDate")}
        >
          Departure Date
        </div>
        <div className="col-start-6 col-end-8 text-center">To</div>
        <div
          className="col-start-8 col-end-10 text-center cursor-pointer hover:text-orange-600"
          onClick={() => onSetSort("departureDate")}
        >
          Arrival Date
        </div>
        <div
          className="col-start-10 col-end-11 text-center cursor-pointer hover:text-orange-600"
          onClick={() => onSetSort("trainId")}
        >
          Train Id
        </div>
        {userRole === "admin" && (
          <button
            onClick={handleOpenCreating}
            className="absolute right-4 top-1 hover:text-orange-600"
          >
            <ImPlus />
          </button>
        )}
      </div>
      {isCreating ? (
        <form
          className="grid grid-flow-col grid-cols-10 pr-20 pl-10 gap-2 text-black pt-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="col-start-2 col-end-4 self-center">
            <Controller
              control={control}
              name="departureStation"
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
              render={({ field }) => (
                <Select {...field} options={trainsSelectData} />
              )}
            />
          </div>

          <button
            className="bg-orange-600 rounded-2xl text-white"
            type="submit"
          >
            Create
          </button>
        </form>
      ) : (
        schedule.map((scheduleItem, index) => {
          return (
            <ScheduleItem
              stationsSelectData={stationsSelectData}
              trainsSelectData={trainsSelectData}
              key={index}
              schedule={scheduleItem}
            />
          );
        })
      )}
    </div>
  );
};
