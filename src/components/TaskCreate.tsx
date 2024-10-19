import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ilyas.css";
import { useState } from "react";
import { createTask } from "../api/api";
import { CreateTaskResponse, CreateTaskRequest } from "../api/types";

// Схема валидации для Yup
const validationSchema = Yup.object({
  question: Yup.string().required("Required"),
});

function TaskCreate() {
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

  return (
    <div className="h-screen flex flex-col items-center">
      <header></header>
      <h1 className="min text-center">
        <h1>Создать задание</h1>
      </h1>
      <Formik
        initialValues={{
          question: "",
          answers: ["", ""],
          correctAnswer: "",
          difficulty: 1,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          createNewTask({ ...values, themeName: "Математика" });
        }}
      >
        {({ values }) => (
          <Form>
            <div className={"flex flex-col-reverse items-center min"}>
              <Field name="question" placeholder="Вопрос" />
              <ErrorMessage name="question" component="div" className="error" />
            </div>

            <div>
              <h1 className="text-center min">Ответ:</h1>
              <FieldArray name="answers">
                {({ push, remove }) => (
                  <div>
                    {values.answers.map((answer, index) => (
                      <div key={index}>
                        <label className={"man"}>Ответ {index + 1}:</label>
                        <Field
                          name={`answers.${index}`}
                          placeholder={`Вариант ${index + 1}`}
                        />
                        <ErrorMessage
                          name={`answers.${index}`}
                          component="div"
                          className="error"
                        />
                        {values.answers.length > 2 && (
                          <button type="button" onClick={() => remove(index)}>
                            Remove Answer
                          </button>
                        )}
                      </div>
                    ))}

                    <div className={"min-2"}>
                      <button
                        type="button"
                        className="button px-10 py-3 text-white"
                        onClick={() => push("")}
                      >
                        <a>Добавить </a>
                      </button>
                    </div>
                  </div>
                )}
              </FieldArray>
            </div>

            <div className={"min "}>
              <label className="text-center min">Правильные ответы:</label>
              <Field as="select" name="correctAnswer">
                {values.answers.map((answer, index) => (
                  <option key={index} value={answer}>
                    {`Answer ${index + 1}`}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="correctAnswer"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label className="  man">Сложность (1-10):</label>
              <Field
                type="number"
                name="difficulty"
                min="1"
                max="10"
                placeholder="Select difficulty"
              />
              <ErrorMessage
                name="difficulty"
                component="div"
                className="error"
              />
            </div>

            <button type="submit" className="button text-white">
              <a className={"btm"}>Отправить</a>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskCreate;
