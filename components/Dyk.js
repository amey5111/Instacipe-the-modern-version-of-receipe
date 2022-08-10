import React from "react";
import Image from "next/image";
import img from "../public/yellow_bulb.png";
export default function Dyk() {
  return (
    <div className="bg-yellow-500 rounded-lg border-purple-500 mt-3 border-3 flex h-24 w-1/3">
      <span className="text-2xl font-extrabold my-auto ml-11 -mr-5">
        DID YOU KNOW ?
      </span>
      <Image src={img} alt="???" height={165} width={165} />
    </div>
  );
}
