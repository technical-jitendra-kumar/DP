import API from "./axiosInstance";

export const getAllBatches = async () => {
  const res = await API.get("/batches");
  return res.data;
};

export const getBatchById = async (id) => {
  const res = await API.get(`/batches/${id}`);
  return res.data;
};

export const createBatch = async (batchData) => {
  const res = await API.post("/batches", batchData);
  return res.data;
};

export const updateBatch = async (id, batchData) => {
  const res = await API.put(`/batches/${id}`, batchData);
  return res.data;
};

export const deleteBatch = async (id) => {
  const res = await API.delete(`/batches/${id}`);
  return res.data;
};
