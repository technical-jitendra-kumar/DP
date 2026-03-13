import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "./course.service.js";

export const createCourseHandler = async (req, res) => {
  try {
    const course = await createCourse(req.body, req.user._id);

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllCoursesHandler = async (req, res) => {
  try {
    const courses = await getAllCourses();

    res.status(200).json({
      success: true,
      data: courses,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCourseByIdHandler = async (req, res) => {
  try {
    const course = await getCourseById(req.params.id);

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCourseHandler = async (req, res) => {
  try {
    const course = await updateCourse(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: course,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCourseHandler = async (req, res) => {
  try {
    await deleteCourse(req.params.id);

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};