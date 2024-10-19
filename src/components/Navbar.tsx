import React from "react";

interface Props {
  className?: string;
}

export const NAvbar: React.FC<Props> = ({}) => {
  return (
    <div className="w-full justify-center flex">
      <div
        className={
          "fixed px-10 w-[85%] bottom-10 bg-[#191930] py-5 rounded-full flex items-center justify-between"
        }
      >
        <div className="">
          <img src="/search.svg" alt="" className="w-full cursor-pointer" />
        </div>
        <div className="">
          <img src="/Home.svg" alt="" className="w-full cursor-pointer" />
        </div>
        <div className="">
          <img src="/Video.svg" alt="" className="w-full cursor-pointer" />
        </div>
        <div className="">
          <img src="/Account.svg" alt="" className="w-full cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
