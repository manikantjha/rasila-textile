/* eslint-disable @next/next/no-img-element */
import { objFounder } from "@/data/data";

export default function FounderCard() {
  return (
    <div className="max-w-md grid grod-rows-[1fr_auto] gap-4 place-items-center bg-white border border-gray-300 p-8">
      <div className="w-[175px] h-[175px] rounded-full overflow-hidden border-4 border-accent">
        <img
          src={objFounder.imgSrc}
          alt={objFounder.imgAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-rows-[auto_auto] gap-2 text-center">
        <div>
          <h2 className="text-2xl font-semibold">{objFounder.name}</h2>
          <p className="text-lg">{objFounder.designation}</p>
        </div>
        <div>
          <p className="text-base text-gray-500">{objFounder.description}</p>
        </div>
      </div>
    </div>
  );
}
