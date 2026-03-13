import {
  enrollStudent,
  getAllEnrollments,
  getEnrollmentsByStudent,
  updateEnrollment,
  deleteEnrollment,
} from "./enrollment.service.js";

export const enrollStudentHandler = async (req, res) => {
  try {
    console.log("📝 enrollStudentHandler - Request body:", req.body);
    
    // Schema expects: student, batch (not studentId, batchId)
    const enrollmentData = {
      studentId: req.body.student, // Schema field is 'student'
      batchId: req.body.batch,     // Schema field is 'batch'
    };

    console.log("📝 enrollStudentHandler - Processed data:", enrollmentData);

    const enrollment = await enrollStudent(enrollmentData, req.user._id);

    res.status(201).json({
      success: true,
      message: "Student enrolled successfully",
      data: enrollment,
    });
  } catch (error) {
    console.error("❌ enrollStudentHandler error:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllEnrollmentsHandler = async (req, res) => {
  try {
    console.log("📖 getAllEnrollmentsHandler");
    const enrollments = await getAllEnrollments();

    res.status(200).json({
      success: true,
      data: enrollments,
    });
  } catch (error) {
    console.error("❌ getAllEnrollmentsHandler error:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyEnrollmentsHandler = async (req, res) => {
  try {
    console.log("📖 getMyEnrollmentsHandler - Student ID:", req.user._id);
    const enrollments = await getEnrollmentsByStudent(req.user._id);

    res.status(200).json({
      success: true,
      data: enrollments,
    });
  } catch (error) {
    console.error("❌ getMyEnrollmentsHandler error:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateEnrollmentHandler = async (req, res) => {
  try {
    console.log("✏️ updateEnrollmentHandler - ID:", req.params.id);
    console.log("✏️ updateEnrollmentHandler - Request body:", req.body);
    
    // Schema expects: student, batch, status
    const updateData = {
      student: req.body.student,
      batch: req.body.batch,
      status: req.body.status,
    };

    console.log("✏️ updateEnrollmentHandler - Processed data:", updateData);

    const enrollment = await updateEnrollment(req.params.id, updateData);

    console.log("✏️ updateEnrollmentHandler - Success:", enrollment._id);

    res.status(200).json({
      success: true,
      message: "Enrollment updated successfully",
      data: enrollment,
    });
  } catch (error) {
    console.error("❌ updateEnrollmentHandler error:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteEnrollmentHandler = async (req, res) => {
  try {
    console.log("🗑️ deleteEnrollmentHandler - ID:", req.params.id);
    
    const result = await deleteEnrollment(req.params.id);

    console.log("🗑️ deleteEnrollmentHandler - Success:", result._id);

    res.status(200).json({
      success: true,
      message: "Enrollment removed successfully",
      data: null,
    });
  } catch (error) {
    console.error("❌ deleteEnrollmentHandler error:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};