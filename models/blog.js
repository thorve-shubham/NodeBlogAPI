const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    blogId : {
        type : String,
        unique : true
    },
    description : {
        type : String,
        required : true
    },
    bodyHtml : {
        type : String,
        required : true
    },
    views : {
        type : Number,
        default : 0
    },
    isPublished : {
        type : Boolean,
        default : false
    },
    category : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    tags : [],
    created : {
        type : Date,
        default : Date.now 
    },
    lastModified : {
        type : Date,
        default : Date.now
    }
});

const Blog = mongoose.model("Blog",blogSchema);

module.exports.Blog = Blog;