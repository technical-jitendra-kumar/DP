import User from "../users/user.model.js";
import Course from "../courses/course.model.js";
import Batch from "../batches/batch.model.js";
import Enrollment from "../enrollments/enrollment.model.js";
import Invoice from "../finance/invoice.model.js";
import { ROLES } from "../../config/constants.js";
import Payment from "../finance/payment.model.js";

// admin dashboard stats
export const getAdminDashboardStats = async () => {
  // 1️⃣ Total Students
  const totalStudents = await User.countDocuments({
    role: ROLES.STUDENT,
  });

  // 2️⃣ Total Courses
  const totalCourses = await Course.countDocuments();

  // 3️⃣ Active Batches
  const activeBatches = await Batch.countDocuments({
    isActive: true,
  });

  // 4️⃣ Total Enrollments
  const totalEnrollments = await Enrollment.countDocuments();

  // 5️⃣ Finance Aggregation
  const financeStats = await Invoice.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$amountPaid" },
        totalPending: {
          $sum: { $subtract: ["$totalAmount", "$amountPaid"] },
        },
      },
    },
  ]);

  const totalRevenueCollected =
    financeStats.length > 0 ? financeStats[0].totalRevenue : 0;

  const totalPendingRevenue =
    financeStats.length > 0 ? financeStats[0].totalPending : 0;

  // 6️⃣ Monthly Revenue
  const monthlyRevenue = await Payment.aggregate([
    {
      $group: {
        _id: { $month: "$createdAt" },
        revenue: { $sum: "$amount" },
      },
    },
    {
      $sort: { "_id": 1 },
    },
  ]);

  const monthNames = [
    "", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const formattedMonthlyRevenue = monthlyRevenue.map((item) => ({
    month: monthNames[item._id],
    revenue: item.revenue,
  }));

  return {
    totalStudents,
    totalCourses,
    activeBatches,
    totalEnrollments,
    totalRevenueCollected,
    totalPendingRevenue,
    monthlyRevenue: formattedMonthlyRevenue,
  };
};

// trainer dashboard stats
export const getTrainerDashboardStats = async (trainerId) => {
  // 1️⃣ Find assigned batches
  const batches = await Batch.find({ trainer: trainerId });

  const batchIds = batches.map((b) => b._id);

  // 2️⃣ Count total students in assigned batches
  const totalStudents = await Enrollment.countDocuments({
    batch: { $in: batchIds },
  });

  // 3️⃣ Active batches
  const activeBatches = batches.filter((b) => b.isActive).length;

  // 4️⃣ Batch-wise student count
  const batchWiseStats = await Enrollment.aggregate([
    {
      $match: { batch: { $in: batchIds } },
    },
    {
      $group: {
        _id: "$batch",
        studentCount: { $sum: 1 },
      },
    },
  ]);

  return {
    totalAssignedBatches: batches.length,
    activeBatches,
    totalStudents,
    batchWiseStats,
  };
};

// Counselor dashboard stats
export const getCounselorDashboardStats = async () => {
  // 1️⃣ Total enrollments
  const totalEnrollments = await Enrollment.countDocuments();

  // 2️⃣ Enrollments this month
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const enrollmentsThisMonth = await Enrollment.countDocuments({
    createdAt: { $gte: startOfMonth },
  });

  // 3️⃣ Pending invoices
  const pendingInvoices = await Invoice.countDocuments({
    status: { $ne: "PAID" },
  });

  // 4️⃣ Revenue stats
  const financeStats = await Invoice.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$amountPaid" },
      },
    },
  ]);

  const totalRevenueCollected =
    financeStats.length > 0 ? financeStats[0].totalRevenue : 0;

  return {
    totalEnrollments,
    enrollmentsThisMonth,
    pendingInvoices,
    totalRevenueCollected,
  };
};

// Student dashboard stats
export const getStudentDashboardStats = async (studentId) => {
  // 1️⃣ Get enrollment
  const enrollment = await Enrollment.findOne({ student: studentId })
    .populate({
      path: "batch",
      populate: { path: "course", select: "title durationInMonths fees" },
    });

  if (!enrollment) {
    return {
      message: "No enrollment found",
    };
  }

  // 2️⃣ Get invoice
  const invoice = await Invoice.findOne({
    enrollment: enrollment._id,
  });

  // 3️⃣ Get payments
  const payments = invoice
    ? await Payment.find({ invoice: invoice._id })
    : [];

  const totalPaid = invoice ? invoice.amountPaid : 0;
  const totalAmount = invoice ? invoice.totalAmount : 0;
  const remainingBalance = totalAmount - totalPaid;

  return {
    enrollment,
    invoiceStatus: invoice ? invoice.status : "NO_INVOICE",
    totalAmount,
    totalPaid,
    remainingBalance,
    payments,
  };
};