
import { useEffect } from "react";
import blogData from "../../../public/jsonData/BlogData";
import BlogPost from "./BlogPost";

const BlogPage = () => {
    useEffect(() => {
      document.title = `Blog Page - IAR Career Counselling`;
    }, []);
  return (
    <div className=" mx-auto px-4 py-8 max-w-10/12 ">
      <h1 className="text-4xl font-bold text-center mb-8">Career Counseling Blog</h1>
      <div className="grid grid-cols-1 ">
        {blogData.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;