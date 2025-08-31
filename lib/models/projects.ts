const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Residential", "Commercial", "Mixed-Use", "Other"],
      required: true,
    },
    status: {
      type: String,
      enum: [ "Ongoing", "Completed"],
      default: "Ongoing",
    },
    image: {
      type: String,
      default: "",
    },
    shortdesc: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    completion: {
      type: String, // e.g., "Q2 2025" or "Completed 2025"
      required: true,
    },
    units: {
      type: Number,
      default: 0,
    },
    floors: {
      type: Number,
      default: 0,
    },
    bhk: {
      type: Number,
      default: null, // null means not applicable
    },
    amenities: {
      type: [String],
      default: [],
    },
    price: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    images: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

module.exports = Project;
