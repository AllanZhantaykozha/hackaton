import { useState, useEffect } from "react";
import { getTasks, getTheoryById } from "../api/api";
import { GetTasksResponse, GetThemesResponse } from "../api/types";
import { useParams } from "react-router-dom";

function Theory() {
  const { id } = useParams();

  const [data, setData] = useState<GetThemesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [data1, setData1] = useState<GetTasksResponse | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getTasks({ difficultId: 1, themeId: 5 });
        setData1(response);
      } catch (err) {
        setError("Ошибка при получении задач");
      } finally {
        setLoading(false);
      }
    };

    const fetchThemes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getTheoryById(id);
        setData(response);
      } catch (err) {
        setError("Ошибка при получении тем");
      } finally {
        setLoading(false);
      }
    };

    fetchThemes();
    fetchTasks();
  }, []);

  console.log(data1);

  return (
    <div className="App h-screen">
      {loading ? (
        <div className="">Loading</div>
      ) : (
        <div className="App-header">
          <nav className="navbar navbar-inverse">
            <img
              src="/vectors/vector1.png"
              alt="left-arrow"
              className="navbar-arrow"
            />
            <p className={"Nav-logo"}> Задание </p>
            <img
              src="/vectors/vector-2.png"
              alt="right-arrow"
              className="navbar-arrow"
            />
          </nav>

          <header></header>
          <h1 className="pb-3 text-center px-10 text-2xl font-black">
            {data.title}
          </h1>
          <p className="pb-4 offset-1 col-10">{data.content}</p>
          <img
            className={" offset-1 pb-4 col-10"}
            src="/ilyas.png"
            alt="Ilyas"
          />
          <div className="px-10">
            {data1?.map((obj: any) => (
              <div className="">
                <div className="">{obj.question}</div>
              </div>
            ))}
          </div>
          <header></header>
        </div>
      )}
      <header></header>
    </div>
  );
}

export default Theory;
