//Right side of the webpage
import React from "react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { fetchBlogById, deleteBlog } from "../api/blogAPI";
import { Button } from "./ui/button";
import { Share2 } from "lucide-react";

interface Props {
  blogId: string | null;
  setSelectedBlogId: (id: string | null) => void;
}

const BlogDetails = ({ blogId, setSelectedBlogId }: Props) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => fetchBlogById(blogId),
    enabled: blogId !== null,
  });

  //logic for deleting blog
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setSelectedBlogId(null);
      alert("Article deleted successfully");
    },
  });


  if (!blogId) {
    return (
      <p className="text-xl font-sans-serif mt-4">
        Please select a blog to view details.
      </p>
    );
  }
  if (isLoading) {
    return <p className="text-xl font-bold mt-4">Loading your blogs...</p>;
  }

  if (isError || !data) {
    return <p>Error loading blog details</p>;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: data?.title,
        text: data?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard");
    }
  };

  const readTime = Math.max(
    1,
    Math.ceil(data!.content.split(" ").length / 200)
  );

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this article?"
    );

    if (data) {
      deleteMutation.mutate(data.id);
    }
  };

  return (
    <div className="space-y-4">
      <img
        src={data?.coverImage}
        alt={data?.title}
        className="w-full h-64 object-cover rounded-lg"/>

      <h1 className="text-2xl font-bold mt-2"> {data?.title} </h1>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <Button
          onClick={handleShare}
          className="mt-4 text-white bg-blue-600 hover:bg-blue-700 flex items-center gap-2 cursor-pointer">
        
          <Share2 size={16} />
          Share Article
        </Button>

        <Button className="mt-4 border border-red-50 bg-red-600 text-white hover:bg-red-700 over:text-white cursor-pointer"
          variant="destructive"
          onClick={handleDelete}
          disabled={deleteMutation.isPending} >
          Delete
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-lg bg-gray-100 bg-muted p-4 text-center">
          <p className="text-xs text-muted-foreground">CATEGORY</p>
          <p className="font-medium mt-1">{data?.category.join(" & ")}</p>
        </div>

        <div className="rounded-lg bg-gray-100 bg-muted p-4 text-center">
          <p className="text-xs text-muted-foreground">READ TIME</p>
          <p className="font-medium mt-1">{readTime} Mins</p>
        </div>

        <div className="rounded-lg bg-gray-100 bg-muted p-4 text-center">
          <p className="text-xs text-muted-foreground">DATE</p>
          <p className="font-medium mt-1">
            {new Date(data!.date).toLocaleDateString()}
          </p>
        </div>
      </div>
      {/* Content */}
      <p className="pt-4 text-gray-700 leading-relaxed">{data?.content}</p>
    </div>
  );
};

export default BlogDetails;
