import API from "./axiosInstance";

export const createInvoice = async (invoiceData) => {
  const res = await API.post("/finance/invoice", invoiceData);
  return res.data;
};

export const addPayment = async (paymentData) => {
  const res = await API.post("/finance/payment", paymentData);
  return res.data;
};

export const getInvoiceByEnrollment = async (enrollmentId) => {
  const res = await API.get(`/finance/invoice/${enrollmentId}`);
  return res.data;
};

export const getPaymentsByInvoice = async (invoiceId) => {
  const res = await API.get(`/finance/payment/${invoiceId}`);
  return res.data;
};
