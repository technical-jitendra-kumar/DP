import express from "express";
import userRoutes from "../modules/users/user.routes.js";
import courseRoutes from "../modules/courses/course.routes.js";
import batchRoutes from "../modules/batches/batch.routes.js";
import enrollmentRoutes from "../modules/enrollments/enrollment.routes.js";
import financeRoutes from "../modules/finance/finance.routes.js";
import reportsRoutes from "../modules/reports/reports.routes.js";
import notificationRoutes from "../modules/notifications/notification.routes.js";



const router = express.Router();

router.use("/users", userRoutes);
router.use("/courses", courseRoutes);
router.use("/batches", batchRoutes);
router.use("/enrollments", enrollmentRoutes);
router.use("/finance", financeRoutes);
router.use("/reports", reportsRoutes);
router.use("/notifications", notificationRoutes);


export default router;