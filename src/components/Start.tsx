import React from "react";

interface Props {
  userName: string;
}

export const Start: React.FC<Props> = ({ userName }) => {
  return (
    <div
      className={
        "flex justify-center items-center bg-gradient-to-r from-[#12121A] to-[#010027] h-screen w-full overflow-hidden"
      }
    >
      <div className="w-full flex flex-col items-center gap-5">
        <div className="w-80 h-80 rounded-xl overflow-hidden">
          <img
            src="./start.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center font-bold text-white text-2xl">
          Здравсвуйте, {userName} <br /> готовы начать обучение?
        </div>
        <div className="cursor-pointer mt-20 text-lg font-semibold text-white bg-[#2C28AB] w-36 h-12 rounded-full flex justify-center items-center">
          <a href="home">Начать</a>
        </div>
      </div>
    </div>
  );
};
