import API from "./axiosInstance";

export const enrollStudent = async (enrollmentData) => {
  const res = await API.post("/enrollments", enrollmentData);
  return res.data;
};

export const getAllEnrollments = async () => {
  const res = await API.get("/enrollments");
  return res.data;
};

export const getMyEnrollments = async () => {
  const res = await API.get("/enrollments/my");
  return res.data;
};

export const updateEnrollment = async (id, data) => {
  const res = await API.put(`/enrollments/${id}`, data);
  return res.data;
};

export const deleteEnrollment = async (id) => {
  const res = await API.delete(`/enrollments/${id}`);
  return res.data;
};
