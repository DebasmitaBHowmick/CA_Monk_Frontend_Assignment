//left off at src/components/BlogList.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from '@/api/blogAPI';
import BlogCard from './BlogCard';
import LoadingSkeleton from './LoadingSkeleton';

interface Props{
    onSelectBlog: (id: string) => void
}

const BlogList = ({onSelectBlog}: Props) => {

const{data, isLoading, isError} = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs
});

if(isLoading){
    return <LoadingSkeleton/>
}

if(isError){
    return <p>Error loading blogs</p>
}


  return (
    <div className="space-y-3">
      {data?.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onClick={() => onSelectBlog(blog.id)}
        />
      ))}
    </div>
  )
}

export default BlogList