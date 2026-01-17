import { blogType } from "@/types/blog";

const API_URL = 'http://localhost:3001/blogs';

//getting blogs from json server
export const fetchBlogs = async (): Promise<blogType[]> => {
    const response = await fetch(API_URL);

    if(!response.ok) {
        throw new Error('Failed to fetch blogs');
    }
    return await response.json();
};

//getting single blog by id from json server

export const fetchBlogById = async(id: string): Promise<blogType> => {
    const res = await fetch(`${API_URL}/${id}`);

    if(!res.ok) {
        throw new Error('Failed to fetch blog');
    }

    return await res.json();
};

//create blog
export const createBlog = async (blog: Omit<blogType, "id">) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    });

    if(!response.ok) {
        throw new Error('Failed to create blog');
    }

    const data = await response.json()
    return data
};

//delete blog
export const deleteBlog = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    if(!response.ok) {
        throw new Error('Failed to delete blog');
    }

    return true;

};