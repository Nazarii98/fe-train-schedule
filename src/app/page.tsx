"use client";

import { Watch } from "react-loader-spinner";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-start rounded-3xl bg-gray-800 bg-opacity-90 border-white border-2  overflow-y-auto">
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
    </div>
  );
}
