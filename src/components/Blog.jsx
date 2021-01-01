import React from 'react';
import blogPosts from '../data/blog-posts.json';

function Blog(props) {
    console.log(blogPosts)
    const posts = blogPosts.posts
    return (
        <div className="container mt-5">
            <div className="jumbotron jumbotron-fluid mt-4">
                <div className="container">
                    <h1 className="display-4">Bootcamp Blog:</h1>
                    <p className="lead">I really enjoyed my bootcamp experience at <a href="https://www.awesomeinc.org/" target="_blank">Awesome Inc</a>! As part of our coursework we kept up with weekly blog posts chronicling our learning process. Enjoy my ramblings about my coding struggles:</p>
                </div>
            </div>

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