import { useState, useEffect } from "react";
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
} from "./types"; // Импорт типов

import {
  getTasks,
  getThemes,
  getThemesNames,
  createTask,
  createTheme,
  createTheory,
} from "./api"; // Импортируйте функции API

// Хук для получения задач
export const useTasks = (params: GetTasksRequest) => {
  const [data, setData] = useState<GetTasksResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getTasks(params);
        setData(response);
      } catch (err) {
        setError("Ошибка при получении задач");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [params]);

  return { data, loading, error };
};

// Хук для получения тем
export const useThemes = () => {
  const [data, setData] = useState<GetThemesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThemes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getThemes();
        setData(response);
      } catch (err) {
        setError("Ошибка при получении тем");
      } finally {
        setLoading(false);
      }
    };

    fetchThemes();
  }, []);

  return { data, loading, error };
};

// Хук для получения названий тем
export const useThemesNames = () => {
  const [data, setData] = useState<GetThemesNamesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThemesNames = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getThemesNames();
        setData(response);
      } catch (err) {
        setError("Ошибка при получении названий тем");
      } finally {
        setLoading(false);
      }
    };

    fetchThemesNames();
  }, []);

  return { data, loading, error };
};

// Хук для создания задачи
export const useCreateTask = () => {
  const [data, setData] = useState<CreateTaskResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createNewTask = async (taskData: CreateTaskRequest) => {
    setLoading(true);
    setError(null);
    try {
      const response = await createTask(taskData);
      setData(response);
    } catch (err) {
      setError("Ошибка при создании задачи");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, createNewTask };
};

// Хук для создания темы
export const useCreateTheme = () => {
  const [data, setData] = useState<CreateThemeResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createNewTheme = async (themeData: CreateThemeRequest) => {
    setLoading(true);
    setError(null);
    try {
      const response = await createTheme(themeData);
      setData(response);
    } catch (err) {
      setError("Ошибка при создании темы");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, createNewTheme };
};

// Хук для создания теории
export const useCreateTheory = () => {
  const [data, setData] = useState<CreateTheoryResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createNewTheory = async (theoryData: CreateTheoryRequest) => {
    setLoading(true);
    setError(null);
    try {
      const response = await createTheory(theoryData);
      setData(response);
    } catch (err) {
      setError("Ошибка при создании теории");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, createNewTheory };
};
