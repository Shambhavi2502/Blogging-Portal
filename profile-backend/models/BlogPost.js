const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  files: [{ type: String }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
