import {
  createInvoice,
  addPayment,
  getInvoiceByEnrollment,
  getPaymentsByInvoice,
} from "./finance.service.js";

export const createInvoiceHandler = async (req, res) => {
  try {
    const invoice = await createInvoice(req.body, req.user._id);

    res.status(201).json({
      success: true,
      message: "Invoice created successfully",
      data: invoice,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addPaymentHandler = async (req, res) => {
  try {
    const payment = await addPayment(req.body, req.user._id);

    res.status(201).json({
      success: true,
      message: "Payment added successfully",
      data: payment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getInvoiceByEnrollmentHandler = async (req, res) => {
  try {
    const invoice = await getInvoiceByEnrollment(req.params.enrollmentId);

    res.status(200).json({
      success: true,
      data: invoice,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPaymentsByInvoiceHandler = async (req, res) => {
  try {
    const payments = await getPaymentsByInvoice(req.params.invoiceId);

    res.status(200).json({
      success: true,
      data: payments,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
