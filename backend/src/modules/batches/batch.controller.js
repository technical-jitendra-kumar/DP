import {
  createBatch,
  getAllBatches,
  getBatchById,
  updateBatch,
  deleteBatch,
} from "./batch.service.js";

export const createBatchHandler = async (req, res) => {
  try {
    const batch = await createBatch(req.body, req.user._id);

    res.status(201).json({
      success: true,
      message: "Batch created successfully",
      data: batch,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllBatchesHandler = async (req, res) => {
  try {
    const batches = await getAllBatches();

    res.status(200).json({
      success: true,
      data: batches,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBatchByIdHandler = async (req, res) => {
  try {
    const batch = await getBatchById(req.params.id);

    res.status(200).json({
      success: true,
      data: batch,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBatchHandler = async (req, res) => {
  try {
    const batch = await updateBatch(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Batch updated successfully",
      data: batch,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBatchHandler = async (req, res) => {
  try {
    await deleteBatch(req.params.id);

    res.status(200).json({
      success: true,
      message: "Batch deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};