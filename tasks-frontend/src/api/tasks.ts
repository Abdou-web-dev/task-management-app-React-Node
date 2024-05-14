import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getTasks = async (token: string) => {
  // making an authenticated request to this backend endpoint
  // tasks is a protected route, meaning only autehnticated users can access it.
  // each user has its own unique list of associated tasks.
  const response = await axios.get(`${API_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createTask = async (title: string, description: string, status: string, token: string) => {
  const response = await axios.post(
    `${API_URL}/tasks`,
    { title, description, status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
