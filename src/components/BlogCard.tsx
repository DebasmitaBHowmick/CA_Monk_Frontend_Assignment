import React from 'react'
import { blogType } from '../types/blog';
import { Card , CardContent} from './ui/card';


interface Props{
    blog: blogType,
    onClick: ()=>void
}

const BlogCard = ({blog, onClick}: Props) => {
  return (
    <Card className="cursor-pointer bg-gray-50 hover:bg-gray-100 border-0" onClick={onClick}>


      <CardContent className="p-4">
        <p className="text-xs text-blue-600 font-semibold">
          {blog.category.join(", ")}
        </p> 
        <h3 className="font-semibold mt-1">{blog.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {blog.description} 
        </p>
      </CardContent>
    </Card>
  )
}

export default BlogCard