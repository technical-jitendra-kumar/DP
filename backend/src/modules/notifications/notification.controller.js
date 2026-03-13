import {
  getUserNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from "./notification.service.js";

export const getMyNotificationsHandler = async (req, res) => {
  try {
    const notifications = await getUserNotifications(req.user._id);

    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const markAsReadHandler = async (req, res) => {
  try {
    const notification = await markNotificationAsRead(
      req.params.id,
      req.user._id
    );

    res.status(200).json({
      success: true,
      message: "Notification marked as read",
      data: notification,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const markAllAsReadHandler = async (req, res) => {
  try {
    const result = await markAllNotificationsAsRead(req.user._id);

    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
