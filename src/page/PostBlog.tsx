import React from 'react'
import CreateBlogs from '../components/CreateBlogs'

const PostBlog = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 ">Create Blog</h1>
      <CreateBlogs />
    </div>
  )
}

export default PostBlog