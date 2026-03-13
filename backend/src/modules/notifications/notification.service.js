import Notification from "./notification.model.js";

export const createNotification = async ({
  recipient,
  title,
  message,
  type = "GENERAL",
  relatedEntity = null,
}) => {
  return await Notification.create({
    recipient,
    title,
    message,
    type,
    relatedEntity,
  });
};

export const getUserNotifications = async (userId) => {
  return await Notification.find({ recipient: userId })
    .sort({ createdAt: -1 });
};

export const markNotificationAsRead = async (notificationId, userId) => {
  const notification = await Notification.findOne({
    _id: notificationId,
    recipient: userId,
  });

  if (!notification) {
    throw new Error("Notification not found");
  }

  notification.isRead = true;
  await notification.save();

  return notification;
};

export const markAllNotificationsAsRead = async (userId) => {
  await Notification.updateMany(
    { recipient: userId, isRead: false },
    { isRead: true }
  );

  return { message: "All notifications marked as read" };
};