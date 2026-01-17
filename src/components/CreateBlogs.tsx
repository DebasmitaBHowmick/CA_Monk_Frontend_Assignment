import React, {useState} from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBlog } from '../api/blogAPI';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { useNavigate } from 'react-router-dom';


const CreateBlogs = () => {
const queryClient = useQueryClient();
const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("");


const mutation = useMutation({
  mutationFn: createBlog,
  onSuccess: (createdBlog) => {
  //console.log("Created blog:", createdBlog)

    queryClient.invalidateQueries({ queryKey: ["blogs"] })

    setTitle("")
    setDescription("")
    setContent("")
    setCoverImage("")
    setCategory("")

    if (createdBlog?.id) {
      navigate(`/?blogId=${createdBlog.id}`)
    }
  },
})


const handleSubmit =(e: React.FormEvent) =>{
  e.preventDefault();

    mutation.mutate({title, description, content, coverImage, 
    category: category.split(",").map(tag => tag.trim()), date: new Date().toISOString()})
   
};



  return (
    <form className="space-y-3 mt-6">
      <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <Input placeholder="Cover Image" value={coverImage} onChange={(e) => setCoverImage(e.target.value)}  required/>
      <Input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}required />
      <Textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
    

      <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSubmit} disabled={mutation.isPending}>
        {mutation.isPending ? "Posting..." : "Create Blog"}
      </Button>
    </form>
  )
}

export default CreateBlogs