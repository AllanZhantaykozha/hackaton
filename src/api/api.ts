import axios from "axios";
import {
  GetTasksRequest,
  GetTasksResponse,
  CreateTaskRequest,
  CreateTaskResponse,
  CreateThemeRequest,
  CreateThemeResponse,
  GetThemesResponse,
  GetThemesNamesResponse,
  CreateTheoryRequest,
  CreateTheoryResponse,
} from "./types"; // Путь к типам

const URL = "https://6dc7-178-91-99-111.ngrok-free.app/api-clever-coin";

//---------------------------------------------------------------------------------------------------

{
  /* ПОЛУЧЕНИЕ */
}

// СПИМСОК ЗАДАЧ
export const getTasks = async (
  params: GetTasksRequest
): Promise<GetTasksResponse> => {
  const response = await axios.post<GetTasksResponse>(`${URL}/getTasks`, null, {
    params: {
      difficult: params.difficultId,
      themeId: params.themeId,
    },
  });
  return response.data;
};

// СПИСОК ТЕМ С СОДЕРЖИМЫМ
export const getThemes = async (): Promise<GetThemesResponse> => {
  const response = await axios.post<GetThemesResponse>(`${URL}/getThemes`);
  return response.data;
};

// СПИСОК НАЗВАНИЙ ТЕМ
export const getThemesNames = async (): Promise<GetThemesNamesResponse> => {
  const response = await axios.get<GetThemesNamesResponse>(
    `${URL}/getThemesNames`
  );
  return response.data;
};

export const getTheory = async () => {
  const response = await axios.post(`${URL}/getTheories`);
  return response.data;
};

export const getTheoryById = async (id: number) => {
  const response = await axios.post(`${URL}/getTheory?theoryId=${id}`);
  return response.data;
};

// ------------------------------------------------------------------------------------------

{
  /* СОЗДАНИЕ */
}

// ТЕМА
export const createTheme = async (
  themeData: CreateThemeRequest
): Promise<CreateThemeResponse> => {
  const response = await axios.post<CreateThemeResponse>(
    `${URL}/createTheme`,
    themeData
  );
  return response.data;
};

// ТЕОРИЯ
export const createTheory = async (
  theoryData: CreateTheoryRequest
): Promise<CreateTheoryResponse> => {
  const response = await axios.post<CreateTheoryResponse>(
    `${URL}/createTheory`,
    theoryData
  );
  return response.data;
};

// ЗАДАЧА
export const createTask = async (
  taskData: CreateTaskRequest
): Promise<CreateTaskResponse> => {
  const response = await axios.post<CreateTaskResponse>(
    `${URL}/createTask`,
    taskData
  );
  return response.data;
};
