import Blog from "../models/Blog.js";

export const postBlogs = async (req, res) => {
  try {
    const { firstName, lastName, email, password, picture } = req.body;

    const newBlog = new Blog({
      firstName,
      lastName,
      email,
      password,
      picture,
    });

    const savedPost = await newBlog.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// console.log(blogs);
