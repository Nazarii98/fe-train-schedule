/* eslint-disable @next/next/no-img-element */
import { Station } from "@/utils/types";
import { FC, useState } from "react";

interface Props {
  station: Station;
}

export const StationsItem: FC<Props> = ({ station }) => {
  const [imgHref, setImgHref] = useState("");
  const handleSetImage = () => {
    if (imgHref) {
      setImgHref("");
    } else {
      setImgHref(station.image);
    }
  };

  return (
    <>
      <div
        onClick={handleSetImage}
        className="grid grid-flow-col grid-cols-9 hover:bg-orange-600 p-2 px-20 cursor-pointer"
      >
        <div className="col-start-1 col-end-2">{station.id}</div>
        <div className="col-start-2 col-end-4">{station.name}</div>
        <div className="col-start-4 col-end-6">{station.city}</div>
        <div className="col-start-6 col-end-8">{station.oblast}</div>
        <div className="col-start-8 col-end-10 text-center">
          {station.numberOfPlatforms}
        </div>
      </div>
      {imgHref && (
        <div onClick={handleSetImage} className=" cursor-not-allowed">
          <img
            src={imgHref}
            alt="Main BG"
            className=" left-0 top-0 right-0 bottom-0 w-full h-full"
            width={1088}
            height={608}
          />
        </div>
      )}
    </>
  );
};
