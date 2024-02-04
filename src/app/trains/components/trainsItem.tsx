/* eslint-disable @next/next/no-img-element */
import { Train } from "@/utils/types";
import { FC, useState } from "react";

interface Props {
  train: Train;
}

export const TrainsItem: FC<Props> = ({ train }) => {
  return (
    <div className="grid grid-flow-col grid-cols-5 hover:bg-orange-600 p-2 px-20 cursor-pointer">
      <div className="col-start-1 col-end-2">{train.id}</div>
      <div className="col-start-2 col-end-4 text-center">{train.name}</div>
      <div className="col-start-4 col-end-6 text-center">{train.color}</div>
    </div>
  );
};
