import API from "./axiosInstance";

export const getAdminDashboard = async () => {
  const res = await API.get("/reports/admin-dashboard");
  return res.data;
};

export const getTrainerDashboard = async () => {
  const res = await API.get("/reports/trainer-dashboard");
  return res.data;
};

export const getCounselorDashboard = async () => {
  const res = await API.get("/reports/counselor-dashboard");
  return res.data;
};

export const getStudentDashboard = async () => {
  const res = await API.get("/reports/student-dashboard");
  return res.data;
};
