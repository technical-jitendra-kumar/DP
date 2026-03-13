import express from "express";
import {
  createCourseHandler,
  getAllCoursesHandler,
  getCourseByIdHandler,
  updateCourseHandler,
  deleteCourseHandler,
} from "./course.controller.js";

import { protect } from "../../middleware/auth.middleware.js";
import { authorizeRoles } from "../../middleware/role.middleware.js";
import { ROLES } from "../../config/constants.js";

const router = express.Router();

/**
 * @route   POST /api/courses
 * @desc    Create a new course (Admin only)
 * @access  Private (ADMIN)
 */
router.post(
  "/",
  protect,
  authorizeRoles(ROLES.ADMIN),
  createCourseHandler
);

/**
 * @route   GET /api/courses
 * @desc    Get all courses
 * @access  Private (All logged-in users)
 */
router.get("/", protect, getAllCoursesHandler);

/**
 * @route   GET /api/courses/:id
 * @desc    Get single course by ID
 * @access  Private (All logged-in users)
 */
router.get("/:id", protect, getCourseByIdHandler);

/**
 * @route   PUT /api/courses/:id
 * @desc    Update a course (Admin only)
 * @access  Private (ADMIN)
 */
router.put(
  "/:id",
  protect,
  authorizeRoles(ROLES.ADMIN),
  updateCourseHandler
);

/**
 * @route   DELETE /api/courses/:id
 * @desc    Delete a course (Admin only)
 * @access  Private (ADMIN)
 */
router.delete(
  "/:id",
  protect,
  authorizeRoles(ROLES.ADMIN),
  deleteCourseHandler
);

export default router;