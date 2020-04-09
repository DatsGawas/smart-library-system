const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  author: { type: String, required: true },
  published: { type: String, required: true },
  publisher: { type: String, required: true },
  description: { type: String, required: true },
  pages: { type: String, required: true },
  website: { type: String, required: true },
  imagePath: { type: String, required: false }
});

module.exports = mongoose.model("Books", bookSchema);
