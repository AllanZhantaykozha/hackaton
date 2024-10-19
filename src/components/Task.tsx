import React from "react";

interface Props {
  className?: string;
}

export const TAsk: React.FC<Props> = ({}) => {
  return (
    <div className="bg-[#191930] flex justify-center">
      <div
        className={
          'bg-[url("task.jpeg")] w-full h-screen  bg-center bg-cover bg-no-repeat'
        }
      >
        <div className="p-10 flex flex-col gap-5 mt-[80%] md:mt-[65%] bg-[#131326] rounded-t-2xl w-full ">
          <div className="w-full p-4 bg-[#191930] rounded-xl">
            <div className="font-bold text-lg">A</div>
            <div className="font-thin text-[12px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
              nemo.
            </div>
          </div>
          <div className="w-full p-4 bg-[#191930] rounded-xl">
            <div className="font-bold text-lg">B</div>
            <div className="font-thin text-[12px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
              nemo.
            </div>
          </div>
          <div className="w-full p-4 bg-[#191930] rounded-xl">
            <div className="font-bold text-lg">C</div>
            <div className="font-thin text-[12px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
              nemo.
            </div>
          </div>
          <div className="w-full p-4 bg-[#191930] rounded-xl">
            <div className="font-bold text-lg">C</div>
            <div className="font-thin text-[12px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
              nemo.
            </div>
          </div>
          <div className="w-full p-4 bg-[#191930] rounded-xl">
            <div className="font-bold text-lg">C</div>
            <div className="font-thin text-[12px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
              nemo.
            </div>
          </div>
          <div className="w-full p-4 bg-[#191930] rounded-xl">
            <div className="font-bold text-lg">C</div>
            <div className="font-thin text-[12px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
              nemo.
            </div>
          </div>
          <div className="w-full p-4 bg-[#191930] rounded-xl">
            <div className="font-bold text-lg">C</div>
            <div className="font-thin text-[12px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
              nemo.
            </div>
          </div>
        </div>

        <div className="absolute flex items-center justify-between w-full top-0">
          <div className="cursor-pointer w-20 h-20 flex justify-center items-center">
            <img src="/Left.svg" alt="" />
          </div>
          <div className="">Задача</div>
          <div className="cursor-pointer w-20 h-20 flex justify-center items-center">
            <img src="/Right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
