/* eslint-disable react/prop-types */

const BlogPost = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 ">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.description}</p>
        <div className="flex items-center text-gray-600">
          <span className="text-sm">{post.author}</span>
          <span className="mx-2">•</span>
          <span className="text-sm">{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;