// import { mongoose } from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});
//스키마 만드는것.
exports.Post = mongoose.model('Post', PostSchema);
// exports.Post;
