"use client";

import { useTypedDispatch, useTypedSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { Watch } from "react-loader-spinner";
import { fetchSchedule } from "../actions/schedule";
import { ScheduleList } from "./schedule/scheduleList";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { fetchStations } from "@/actions/stations";
import { fetchTrains } from "@/actions/trains";

export default function Home() {
  const schedule = useTypedSelector((state) => state.schedule);

  const dispatch = useTypedDispatch();

  const [orderDirection, setOrderDirection] = useState<"asc" | "desc">();
  const [orderField, setOrderField] = useState<string>("");
  const [searchField, setSearchField] = useState<string>("");
  const [searchValue, setSearchValue] = useState<number | string>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const pagination = {
      where: {
        [searchField]: searchValue,
      },
      orderBy: {
        [orderField]: orderDirection,
      },
      page,
    };
    dispatch(fetchSchedule(pagination));
  }, [dispatch, orderDirection, searchValue, page, searchField, orderField]);

  useEffect(() => {
    dispatch(fetchStations({}));
    dispatch(fetchTrains({}));
  }, [dispatch]);

  const handleSetSortBy = (value: string) => {
    if (value === orderField) {
      orderDirection === "asc"
        ? setOrderDirection("desc")
        : setOrderDirection("asc");
    } else {
      setOrderField(value);
      setOrderDirection("desc");
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-start rounded-3xl bg-gray-800 bg-opacity-90 border-white border-2  overflow-y-auto">
      {schedule.isLoading || !schedule.schedule ? (
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ScheduleList
            onSetSort={handleSetSortBy}
            schedule={schedule.schedule}
          />
        </LocalizationProvider>
      )}
    </div>
  );
}
