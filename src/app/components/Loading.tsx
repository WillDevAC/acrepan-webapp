"use client";

import { BarLoader, BeatLoader, ClipLoader, PulseLoader, SyncLoader } from "react-spinners";

export function Loading() {
  return (
    <div className="p-5 mt-5 flex w-full items-center justify-center flex-1 ">
    <SyncLoader color="#EAA85C" size={10} />
    </div>
  );
}
