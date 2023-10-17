const mongoose = require('mongoose')
const postSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        summary: { type: String, required: true },
        author: { type: String, required: true },
        content: { type: String, required: true },
        coverImage: { type: String },
        contentImage: { type: String },
    },
    {
        timestamps: true
    }
);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;