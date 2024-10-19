import axios from "axios";

export const fetchTheory = async () => {
  try {
    const response = await axios.post(
      `https://6dc7-178-91-99-111.ngrok-free.app/api-clever-coin/getTheories`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status !== 200) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    throw new Error("Ошибка при получении данных: " + error.message);
  }
};

export const fetchTheoryById = async ({ id }: { id: number }) => {
  try {
    const response = await axios.post(
      `https://6dc7-178-91-99-111.ngrok-free.app/api-clever-coin/getTheory?theoryId=${id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    console.log(response.data);
    return response.data;
  } catch (error: any) {
    throw new Error("Ошибка при получении данных: " + error.message);
  }
};
