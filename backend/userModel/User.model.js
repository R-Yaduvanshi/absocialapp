const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserID",
    },
    name: { type: String, required: true, minLength: 0, maxLength: 50 },
    email: { type: String, required: true, unique: true },
    bio: { type: String },
  },
  {
    versionKey: false,
    timestamps: {
      created_at: "created_at", // Use `created_at` to store the created date
      updated_at: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

const Users = mongoose.model("users", userSchema);

module.exports = { Users };
