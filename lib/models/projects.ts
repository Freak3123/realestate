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
      enum: ["Planned", "Ongoing", "Completed", "On Hold"],
      default: "Planned",
    },
    image: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      required: true,
    },
    completion: {
      type: String, 
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
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

module.exports = Project;
