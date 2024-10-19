import React from "react";
import { NAvbar } from "./Navbar";

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = ({}) => {
  return (
    <div className={"bg-[#131326] flex justify-center w-screen h-screen"}>
      <div className="w-full py-10 px-8 flex flex-col gap-10">
        <div className="scrollbar first:pl-10 grid grid-flow-col gap-5 overflow-x-auto">
          <div className="relative bg-[#191930] rounded-xl w-32 h-32">
            <div className="p-3 font-medium text-sm">Игра в угадайку</div>
            <div className="absolute w-16 right-2 bottom-2">
              <img src="/pen.png" alt="" />
            </div>
          </div>
          <div className="relative bg-[#191930] rounded-xl w-32 h-32">
            <div className="p-3 font-medium text-sm">Игра в угадайку</div>
            <div className="absolute w-16 right-2 bottom-2">
              <img src="/pen.png" alt="" />
            </div>
          </div>
          <div className="relative bg-[#191930] rounded-xl w-32 h-32">
            <div className="p-3 font-medium text-sm">Игра в угадайку</div>
            <div className="absolute w-16 right-2 bottom-2">
              <img src="/pen.png" alt="" />
            </div>
          </div>
          <div className="relative bg-[#191930] rounded-xl w-32 h-32">
            <div className="p-3 font-medium text-sm">Игра в угадайку</div>
            <div className="absolute w-16 right-2 bottom-2">
              <img src="/pen.png" alt="" />
            </div>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="w-full p-5 bg-[#191930] rounded-xl">
            <div className="font-semibold text-sm">Игра в угадайку</div>
            <div className="font-thin text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
              nemo.
            </div>
          </div>
          <div className="w-full p-5 bg-[#191930] rounded-xl">
            <div className="font-semibold text-sm">Игра в угадайку</div>
            <div className="font-thin text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
              nemo.
            </div>
          </div>
        </div>
        <NAvbar />
      </div>
    </div>
  );
};
