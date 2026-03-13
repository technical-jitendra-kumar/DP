import app from "./app.js";
import connectDB from "./config/db.js";
import User from "./modules/users/user.model.js";
import Course from "./modules/courses/course.model.js";
import Batch from "./modules/batches/batch.model.js";
import Enrollment from "./modules/enrollments/enrollment.model.js";
import Invoice from "./modules/finance/invoice.model.js";
import Payment from "./modules/finance/payment.model.js";
import Notification from "./modules/notifications/notification.model.js";



console.log("User Model Loaded:", User.modelName);
console.log("Course Model Loaded:", Course.modelName);
console.log("Batch Model Loaded:", Batch.modelName);
console.log("Enrollment Model Loaded:", Enrollment.modelName);
console.log("Invoice Model:", Invoice.modelName);
console.log("Payment Model:", Payment.modelName);
console.log("Notification Model:", Notification.modelName);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});