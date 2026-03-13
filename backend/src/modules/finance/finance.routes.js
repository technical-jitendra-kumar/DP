import express from "express";
import {
  createInvoiceHandler,
  addPaymentHandler,
  getInvoiceByEnrollmentHandler,
  getPaymentsByInvoiceHandler,
} from "./finance.controller.js";

import { protect } from "../../middleware/auth.middleware.js";
import { authorizeRoles } from "../../middleware/role.middleware.js";
import { ROLES } from "../../config/constants.js";

const router = express.Router();

/**
 * @route   POST /api/finance/invoice
 * @desc    Create invoice for enrollment
 * @access  Private (ADMIN, COUNSELOR)
 */
router.post(
  "/invoice",
  protect,
  authorizeRoles(ROLES.ADMIN, ROLES.COUNSELOR),
  createInvoiceHandler
);

/**
 * @route   POST /api/finance/payment
 * @desc    Add payment to invoice
 * @access  Private (ADMIN, COUNSELOR)
 */
router.post(
  "/payment",
  protect,
  authorizeRoles(ROLES.ADMIN, ROLES.COUNSELOR),
  addPaymentHandler
);

/**
 * @route   GET /api/finance/invoice/:enrollmentId
 * @desc    Get invoice by enrollment
 * @access  Private (ADMIN, COUNSELOR, STUDENT)
 */
router.get(
  "/invoice/:enrollmentId",
  protect,
  authorizeRoles(ROLES.ADMIN, ROLES.COUNSELOR, ROLES.STUDENT),
  getInvoiceByEnrollmentHandler
);

/**
 * @route   GET /api/finance/payment/:invoiceId
 * @desc    Get payments by invoice
 * @access  Private (ADMIN, COUNSELOR)
 */
router.get(
  "/payment/:invoiceId",
  protect,
  authorizeRoles(ROLES.ADMIN, ROLES.COUNSELOR),
  getPaymentsByInvoiceHandler
);

export default router;
