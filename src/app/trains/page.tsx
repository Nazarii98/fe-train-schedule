"use client";

import { useTypedDispatch, useTypedSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { fetchTrains } from "../actions/trains";
import { TrainsList } from "./components/trainsList";
import { Watch } from "react-loader-spinner";

const Stations = () => {
  const trains = useTypedSelector((state) => state.trains);
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
    dispatch(fetchTrains(pagination));
  }, [dispatch, orderDirection, searchValue, page, searchField, orderField]);
  return (
    <div className="flex flex-1 flex-col justify-start rounded-3xl bg-gray-800 bg-opacity-90 border-white border-2  overflow-y-auto">
      {trains.isLoading || !trains.trains ? (
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
        <TrainsList trains={trains.trains} />
      )}
    </div>
  );
};

export default Stations;
