const mongoose = require("mongoose");
const validator = require("validator");
const postSchema = new mongoose.Schema(
  {
    user_id: String,
    content: {
      type: String,
      validate(value) {
        if (!validator.isLength(value, { min: 0, max: 300 })) {
          throw Error("Length of the content should be between 0-300 words");
        }
      },
    },
    likes: { type: Number, trim: true, default: 0 },
  },
  {
    versionKey: false,
    timestamps: {
      created_at: "created_at", // Use `created_at` to store the created date
      updated_at: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

const PostModel = mongoose.model("posts", postSchema);
module.exports = { PostModel };
