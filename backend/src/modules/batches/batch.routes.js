import express from "express";
import {
  createBatchHandler,
  getAllBatchesHandler,
  getBatchByIdHandler,
  updateBatchHandler,
  deleteBatchHandler,
} from "./batch.controller.js";

import { protect } from "../../middleware/auth.middleware.js";
import { authorizeRoles } from "../../middleware/role.middleware.js";
import { ROLES } from "../../config/constants.js";

const router = express.Router();

/**
 * @route   POST /api/batches
 * @desc    Create new batch (Admin only)
 * @access  Private (ADMIN)
 */
router.post(
  "/",
  protect,
  authorizeRoles(ROLES.ADMIN),
  createBatchHandler
);

/**
 * @route   GET /api/batches
 * @desc    Get all batches
 * @access  Private (All authenticated users)
 */
router.get("/", protect, getAllBatchesHandler);

/**
 * @route   GET /api/batches/:id
 * @desc    Get single batch by ID
 * @access  Private (All authenticated users)
 */
router.get("/:id", protect, getBatchByIdHandler);

/**
 * @route   PUT /api/batches/:id
 * @desc    Update batch (Admin only)
 * @access  Private (ADMIN)
 */
router.put(
  "/:id",
  protect,
  authorizeRoles(ROLES.ADMIN),
  updateBatchHandler
);

/**
 * @route   DELETE /api/batches/:id
 * @desc    Delete batch (Admin only)
 * @access  Private (ADMIN)
 */
router.delete(
  "/:id",
  protect,
  authorizeRoles(ROLES.ADMIN),
  deleteBatchHandler
);

export default router;