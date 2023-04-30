import React from "react";

export default function FounderCard() {
  return (
    <div className="max-w-md grid grod-rows-[1fr_auto] gap-4 place-items-center bg-white border border-gray-300 p-8">
      <div className="w-[175px] h-[175px] rounded-full overflow-hidden border-4 border-accent">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sidhu_Moose_Wala.jpg/1200px-Sidhu_Moose_Wala.jpg"
          alt="founder"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-rows-[auto_auto] gap-2 text-center">
        <div>
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-lg">Founder</p>
        </div>
        <div>
          <p className="text-base text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sed excepturi repellat quis soluta, sunt nihil hic cumque
            perspiciatis necessitatibus aut facilis animi aperiam? Molestias,
            quasi ut numquam ab eligendi amet molestiae porro voluptatibus vel
            reprehenderit facere sint itaque ipsum perspiciatis, dolorem sit
            alias cupiditate dolores, deleniti praesentium dolore. Illo.
          </p>
        </div>
      </div>
    </div>
  );
}
