import express from "express";
import {
  enrollStudentHandler,
  getAllEnrollmentsHandler,
  getMyEnrollmentsHandler,
  updateEnrollmentHandler,
  deleteEnrollmentHandler,
} from "./enrollment.controller.js";

import { protect } from "../../middleware/auth.middleware.js";
import { authorizeRoles } from "../../middleware/role.middleware.js";
import { ROLES } from "../../config/constants.js";

const router = express.Router();

/**
 * @route   POST /api/enrollments
 * @desc    Enroll student into batch
 * @access  Private (ADMIN, COUNSELOR)
 */
router.post(
  "/",
  protect,
  authorizeRoles(ROLES.ADMIN, ROLES.COUNSELOR),
  enrollStudentHandler
);

/**
 * @route   GET /api/enrollments
 * @desc    Get all enrollments
 * @access  Private (ADMIN only)
 */
router.get(
  "/",
  protect,
  authorizeRoles(ROLES.ADMIN),
  getAllEnrollmentsHandler
);

/**
 * @route   GET /api/enrollments/my
 * @desc    Get logged-in student's enrollments
 * @access  Private (STUDENT)
 */
router.get(
  "/my",
  protect,
  authorizeRoles(ROLES.STUDENT),
  getMyEnrollmentsHandler
);

/**
 * @route   PUT /api/enrollments/:id
 * @desc    Update enrollment (change student or batch)
 * @access  Private (ADMIN, COUNSELOR)
 */
router.put(
  "/:id",
  protect,
  authorizeRoles(ROLES.ADMIN, ROLES.COUNSELOR),
  updateEnrollmentHandler
);

/**
 * @route   DELETE /api/enrollments/:id
 * @desc    Remove enrollment (unenroll student)
 * @access  Private (ADMIN, COUNSELOR)
 */
router.delete(
  "/:id",
  protect,
  authorizeRoles(ROLES.ADMIN, ROLES.COUNSELOR),
  deleteEnrollmentHandler
);

export default router;