import express from "express";
import {
  getMyNotificationsHandler,
  markAsReadHandler,
  markAllAsReadHandler,
} from "./notification.controller.js";

import { protect } from "../../middleware/auth.middleware.js";

const router = express.Router();

/**
 * @route   GET /api/notifications
 * @desc    Get logged-in user's notifications
 * @access  Private (All authenticated users)
 */
router.get("/", protect, getMyNotificationsHandler);

/**
 * @route   PATCH /api/notifications/:id/read
 * @desc    Mark single notification as read
 * @access  Private (Owner only)
 */
router.patch("/:id/read", protect, markAsReadHandler);

/**
 * @route   PATCH /api/notifications/read-all
 * @desc    Mark all notifications as read
 * @access  Private (Owner only)
 */
router.patch("/read-all", protect, markAllAsReadHandler);

export default router;
