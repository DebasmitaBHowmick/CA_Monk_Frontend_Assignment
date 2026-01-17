import BlogPage from '@/page/BlogPage';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostBlog from '@/page/PostBlog';

const AllRoutes = () => {
  return (
    <main>
    <Routes>
        <Route path='/' element={<BlogPage/>}/>
        <Route path='/post-blog' element={<PostBlog/>}/>
    </Routes>
    </main>
  )
}

export default AllRoutes