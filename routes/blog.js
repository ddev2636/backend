import express, { Router } from "express";
import { postBlogs, getBlogs, getSingleBlog } from "../controllers/blog.js";

const router = express.Router();

router.post("/posts", postBlogs);
router.get("/getPosts", getBlogs);
router.get("/posts/:id", getSingleBlog);

export default router;
