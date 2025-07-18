const express = require('express');
const { createPost, getPosts } = require('../controllers/post.controller');
const router = express().router;


router.post("/post",createPost)
router.get("/get",getPosts)

module.exports = router