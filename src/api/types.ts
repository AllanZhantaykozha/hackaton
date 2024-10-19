// Типизация для получения списка задач
export interface GetTasksRequest {
  difficultId?: number;
  themeId?: number;
}

export interface Task {
  question: string;
  answers: string[];
  correctAnswer: string;
  difficult: number;
  themeName: string;
}

export interface GetTasksResponse {
  tasks: Task[];
}

// Типизация для создания задачи
export interface CreateTaskRequest {
  question: string;
  answers: string[];
  correctAnswer: string;
  difficult: number;
  themeName: string;
}

export interface CreateTaskResponse {
  success: boolean;
  message: string;
}

// Типизация для создания темы
export interface CreateThemeRequest {
  themeName: string;
}

export interface CreateThemeResponse {
  success: boolean;
  message: string;
}

// Типизация для получения списка тем с содержимым
export interface ThemeContent {
  themeName: string;
  tasks: Task[];
  theory: Theory[];
}

export interface Theory {
  title: string;
  content: string;
  difficult: number;
}

export interface GetThemesResponse {
  themes: ThemeContent[];
}

// Типизация для получения списка названий тем
export interface GetThemesNamesResponse {
  themeNames: string[];
}

// Типизация для создания теории
export interface CreateTheoryRequest {
  themeId: number;
  title: string;
  content: string;
  difficult: number;
  themeName: string;
}

export interface CreateTheoryResponse {
  success: boolean;
  message: string;
}
