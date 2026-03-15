import API from "./axiosInstance";

// POST /api/users/register
export const registerUser = async (userData) => {
  // userData: { name, email, password, role }
  const res = await API.post("/users/register", userData);
  return res.data;
};

// POST /api/users/login
export const loginUser = async (credentials) => {
  // credentials: { email, password }
  const res = await API.post("/users/login", credentials);

  // Save token and user info in localStorage
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.data));
  }

  return res.data;
};

// GET /api/users/me
export const getMe = async () => {
  const res = await API.get("/users/me");
  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
