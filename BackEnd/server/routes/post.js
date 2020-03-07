const posts = require("express").Router()

const {  getAllPosts, getPostByUser, createPost, deletePost } = require("../queries/posts");



// posts.get("/comments/:id", getAllCommentsByPost)

posts.get("/", getAllPosts);

posts.get("/:id", getPostByUser);

 posts.post("/", createPost);

 posts.delete("/:id", deletePost)

module.exports = posts;