import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  updateLike,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/like", updateLike);
export default router;
