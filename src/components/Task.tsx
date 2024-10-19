import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTheoryById } from "../api/api";

interface Props {
  className?: string;
}

export interface ITask {
  id: number;
  title: string;
  content: string;
}

export interface ITasks {
  id: number;
  title: string;
  content: string;
  tasks: ITask[];
}

export const TAsk: React.FC<Props> = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchTheoryById({ id }); // Вызываем функцию для получения данных
        setData(data); // Устанавливаем данные в состояние
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false); // Завершаем загрузку
      }
    };

    loadUsers();
  }, []); // Пустой массив зависимостей для выполнения только один раз при монтировании компонента

  console.log("done");

  return (
    <div className="bg-[#191930] flex justify-center">
      <div
        className={
          'bg-[url("/task.jpeg")] w-full h-screen bg-center bg-cover bg-no-repeat'
        }
      >
        <div className="p-10 absolute top-1/2 flex flex-col gap-5 min-h-[50%] bg-[#131326] rounded-t-2xl w-full ">
          <div className="w-full p-4 bg-[#191930] rounded-xl">
            <div className="font-bold text-lg">asdasd</div>
            <div className="font-thin text-[12px]">asdasd</div>
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
