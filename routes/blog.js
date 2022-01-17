const express = require('express')
const path = require('path')
const blogs = require(path.join(__dirname, '../data/blogs.js'))

module.exports = function(app){
    app.use(express.static('public'));

    app.get('/', (req, res) => {
        let img_path = '/images/blog.jpg';
        res.render(path.join(__dirname, '../views/home.handlebars'), {blogs:blogs, img_path:img_path});
    });

    app.get('/blog-post/:slug', (req, res) => {
        // console.log(req.params);
        let slug = req.params.slug;
        let blog = blogs.filter((e)=>{
            return e.slug == slug;
        })[0];
        res.render(path.join(__dirname, '../views/blogPost.handlebars'), {img_path:'/images/blog.jpg', title: blog.title, content: blog.content});
    });

    app.get('/new-blog', (req, res) => {
        res.render(path.join(__dirname, '../views/newBlog.handlebars'));
    });
}