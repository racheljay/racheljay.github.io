import React, { useContext, useEffect } from 'react';
import AppContext from '../utilities/AppContext';
import newBlog from '../data/post-blogs.json'

function NewBlog() {

    const { currentPage, setCurrentPage } = useContext(AppContext);

    useEffect(() => {
        setCurrentPage('blogs')
    }, [])
    const posts = newBlog.posts
    return (
        <div className="container mt-5">
            <div className="jumbotron jumbotron-fluid mt-4">
                <div className="container">
                    <h1 className="display-4">Post Work:</h1>
                    <p className="lead">What have I been up to since bootcamp?</p>
                </div>
            </div>

            {posts.map((item, index) => {
                return (
                    <div key={index}>
                        <h2>{item.title}</h2>
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

export default NewBlog