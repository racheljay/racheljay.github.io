import React from 'react';
import blogPosts from './data/blog-posts.json';

function Blog(props) {
    console.log(blogPosts)
    const posts = blogPosts.posts
    return (
        <div className="container">
            <h1>Rachel's Code Blog</h1>
            {posts.map((item, index) => {
                return (
                    <div key={index}>
                        <h2>{item.week}</h2>
                        <h3>{item.date}</h3>
                        {item.content.map((item, index) => {
                            return <p key={index}>{item}</p>
                        })}
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Blog;