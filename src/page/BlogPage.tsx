import React, {  useEffect, useState } from 'react';
import BlogDetails from '../components/BlogDetails';
import BlogList from '@/components/BlogList';
import { useSearchParams } from 'react-router-dom';


const BlogPage = () => {

const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
const [searchParams] = useSearchParams();
const blogIdFromUrl = searchParams.get("blogId");


useEffect(() => {
  if (blogIdFromUrl) {
    setSelectedBlogId(blogIdFromUrl)
  }
}, [blogIdFromUrl])


  return (
 <div className="min-h-screen">
  {/* Hero Section */}
  <section className="bg-white">
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        CA Monk Blog
      </h1>

      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        Stay updated with the latest trends in finance, accounting, and career
        growth
      </p>
    </div>
  </section>

  {/* Content Section */}
  <section className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <aside className="md:col-span-1 mr-4">
      <h2 className="font-semibold mb-4 text-lg">
        Latest Articles
      </h2>
      <BlogList onSelectBlog={setSelectedBlogId} />
    </aside>

    <main className="md:col-span-2 space-y-6">
      <BlogDetails blogId={selectedBlogId} setSelectedBlogId={setSelectedBlogId}/>
    </main>

  </section>
</div>
  )
}

export default BlogPage