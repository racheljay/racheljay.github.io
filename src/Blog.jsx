import React from 'react';
import  blogPosts from './data/blog-posts.json';

function Blog(props) {
console.log(blogPosts)
    const posts = blogPosts.posts
    return (
        <div className="container">
        <h1>Rachel's Code Blog</h1>
        {posts.map((item, index) => {
            return (
                <>
            <h2 key={item}>{item.week}</h2>
            <h3 key={item}>{item.date}</h3>
            {item.content.map((item, index) => {
               return <p key={item}>{item}</p>
            })}
            <hr/>
            </>
            )
        })}
        </div>
    )
}

export default Blog;