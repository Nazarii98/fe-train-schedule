"use client";

import { Audio, Watch } from "react-loader-spinner";

import { useTypedDispatch, useTypedSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { fetchStations } from "../actions/stations";
import { StationsList } from "./components/stationsList";

const Stations = () => {
  const stations = useTypedSelector((state) => state.stations);
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
    dispatch(fetchStations(pagination));
  }, [dispatch, orderDirection, searchValue, page, searchField, orderField]);

  return (
    <>
      <div className="flex flex-1 flex-col justify-start rounded-3xl bg-gray-800 bg-opacity-90 border-white border-2  overflow-y-auto">
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
          <StationsList stations={stations.stations} />
        )}
      </div>
    </>
  );
};

export default Stations;
