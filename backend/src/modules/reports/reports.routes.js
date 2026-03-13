import express from "express";
import { getAdminDashboardHandler } from "./reports.controller.js";
import { getTrainerDashboardHandler } from "./reports.controller.js";
import { getCounselorDashboardHandler } from "./reports.controller.js";
import { getStudentDashboardHandler } from "./reports.controller.js";


import { protect } from "../../middleware/auth.middleware.js";
import { authorizeRoles } from "../../middleware/role.middleware.js";
import { ROLES } from "../../config/constants.js";

const router = express.Router();

/**
 * @route   GET /api/reports/admin-dashboard
 * @desc    Get admin dashboard analytics
 * @access  Private (ADMIN only)
 */
router.get(
  "/admin-dashboard",
  protect,
  authorizeRoles(ROLES.ADMIN),
  getAdminDashboardHandler
);

/**
 * @route   GET /api/reports/trainer-dashboard
 * @desc    Get trainer dashboard analytics
 * @access  Private (TRAINER only)
 */
router.get(
  "/trainer-dashboard",
  protect,
  authorizeRoles(ROLES.TRAINER),
  getTrainerDashboardHandler
);

/**
 * @route   GET /api/reports/counselor-dashboard
 * @desc    Get counselor dashboard analytics
 * @access  Private (COUNSELOR only)
 */
router.get(
  "/counselor-dashboard",
  protect,
  authorizeRoles(ROLES.COUNSELOR),
  getCounselorDashboardHandler
);

/**
 * @route   GET /api/reports/student-dashboard
 * @desc    Get student dashboard analytics
 * @access  Private (STUDENT only)
 */
router.get(
  "/student-dashboard",
  protect,
  authorizeRoles(ROLES.STUDENT),
  getStudentDashboardHandler
);


export default router;
