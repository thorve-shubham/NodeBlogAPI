const express = require('express');
const blogController = require('../controller/blogs');
const route = express.Router();

route.get('/all',blogController.getAllBlogs);
route.post('/create',blogController.createBlog);
route.get('/blogId/:blogId',blogController.viewBlogById);
route.get('/category/:category',blogController.viewBlogByCategory);
route.get('/author/:author',blogController.viewBlogByAuthor);
route.put('/update/:blogId',blogController.updateBlog);
route.get('/:blogId/count/view',blogController.increaseBlogCount);
route.delete('/delete/:blogId',blogController.deleteBlog);

module.exports = route;