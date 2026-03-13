import Course from "./course.model.js";

export const createCourse = async (courseData, adminId) => {
  const { title, description, durationInMonths, fees } = courseData;

  // Check if course already exists
  const existingCourse = await Course.findOne({ title });

  if (existingCourse) {
    throw new Error("Course with this title already exists");
  }

  const course = await Course.create({
    title,
    description,
    durationInMonths,
    fees,
    createdBy: adminId,
  });

  return course;
};

export const getAllCourses = async () => {
  return await Course.find().populate("createdBy", "name email role");
};

export const getCourseById = async (id) => {
  const course = await Course.findById(id).populate(
    "createdBy",
    "name email role"
  );

  if (!course) {
    throw new Error("Course not found");
  }

  return course;
};

export const updateCourse = async (id, updateData) => {
  const { title, description, durationInMonths, fees } = updateData;

  // Check if course exists
  const course = await Course.findById(id);
  if (!course) {
    throw new Error("Course not found");
  }

  // Check if new title already exists (excluding current course)
  if (title && title !== course.title) {
    const existingCourse = await Course.findOne({ title });
    if (existingCourse) {
      throw new Error("Course with this title already exists");
    }
  }

  // Update course
  const updatedCourse = await Course.findByIdAndUpdate(
    id,
    {
      title: title || course.title,
      description: description || course.description,
      durationInMonths: durationInMonths || course.durationInMonths,
      fees: fees || course.fees,
    },
    { new: true, runValidators: true }
  ).populate("createdBy", "name email role");

  return updatedCourse;
};

export const deleteCourse = async (id) => {
  const course = await Course.findById(id);

  if (!course) {
    throw new Error("Course not found");
  }

  await Course.findByIdAndDelete(id);
  return course;
};