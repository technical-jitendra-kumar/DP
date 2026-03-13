import { getAdminDashboardStats } from "./reports.service.js";
import { getTrainerDashboardStats } from "./reports.service.js";
import { getCounselorDashboardStats } from "./reports.service.js";
import { getStudentDashboardStats } from "./reports.service.js";

// admin dashboard
export const getAdminDashboardHandler = async (req, res) => {
  try {
    const stats = await getAdminDashboardStats();

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// trainer dashboard
export const getTrainerDashboardHandler = async (req, res) => {
  try {
    const stats = await getTrainerDashboardStats(req.user._id);

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// counselor dashboard
export const getCounselorDashboardHandler = async (req, res) => {
  try {
    const stats = await getCounselorDashboardStats();

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// student dashboard
export const getStudentDashboardHandler = async (req, res) => {
  try {
    const stats = await getStudentDashboardStats(req.user._id);

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


