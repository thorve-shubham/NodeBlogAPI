const {Blog} = require("../models/blog");
const generateResponse = require('../Libs/stdResponse');
const shortid = require('shortid');
async function getAllBlogs(req,res){
    const blogData = await Blog.find().select("-_id-__v");
    if(blogData.length == 0) return res.status(404).send(generateResponse(true,"No Blogs Found",404,null));


    return res.send(generateResponse(false,"Data Retrieved Successfully",200,blogData)); 
}

async function createBlog(req,res){

    if(req.body.tags == "") console.log("write at least one tag");

    const tags = (req.body.tags != "" && req.body.tags != null && req.body.tags != undefined) ? req.body.tags.split(","): [];

    const blog = new Blog({
        title : req.body.title,
        blogId : shortid.generate(),
        description : req.body.description,
        bodyHtml : req.body.bodyHtml,
        views : 0,
        isPublished : false,
        category : req.body.category,
        author : req.body.author,
        tags : tags
    });

    await blog.save();
    res.send(generateResponse(false,"Blog posted successfully",200,blog));
}

async function viewBlogById(req,res){
    const blog = await Blog.find({blogId : req.params.blogId}).lean();

    if(blog.length == 0) return res.status(404).send(generateResponse(true,"No blog Found",404,null));

    return res.send(generateResponse(false,"Found the blog",200,blog));
}

async function viewBlogByCategory(req,res){
    const blog = await Blog.find({category : req.params.category}).lean();

    if(blog.length == 0) return res.status(404).send(generateResponse(true,"No blog Found",404,null));

    return res.send(generateResponse(false,"Found the blog",200,blog));
}
async function viewBlogByAuthor(req,res){
    const blog = await Blog.find({author : req.params.author}).lean();

    if(blog.length == 0) return res.status(404).send(generateResponse(true,"No blog Found",404,null));

    return res.send(generateResponse(false,"Found the blog",200,blog));
}

async function updateBlog(req,res){
    const newData = req.body;  //whatever that is passed
    const blog = await Blog.updateOne({blogId : req.params.blogId},newData,{new : true});   //2nd parameter as new DAta mongoose check what has been passed and will update automatically only those fields which are passed

    return res.send(generateResponse(false,"Updated the blog",200,blog));
}

async function increaseBlogCount(req,res){
    const blog = await Blog.findOne({blogId : req.params.blogId});
    blog.views += 1;

    await blog.save();
    return res.send(generateResponse(false,"increased the cound",200,null));
}

async function deleteBlog(req,res){
    const blog = await Blog.findOneAndRemove({blogId : req.params.blogId});
    if(!blog) return res.status(404).send(generateResponse(true,"No blog Found",404,null));
    return res.send(generateResponse(false,"Deleted the blog",200,blog));
}

module.exports.getAllBlogs = getAllBlogs;
module.exports.createBlog = createBlog;
module.exports.viewBlogById = viewBlogById;
module.exports.viewBlogByCategory = viewBlogByCategory;
module.exports.viewBlogByAuthor = viewBlogByAuthor;
module.exports.updateBlog = updateBlog;
module.exports.increaseBlogCount = increaseBlogCount;
module.exports.deleteBlog = deleteBlog;