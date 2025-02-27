import React from 'react';
import BlogPost from '../components/BlogPost';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "The Future of AI Automation",
      excerpt: "Discover how AI is revolutionizing business automation and what it means for your company.",
      date: "March 15, 2024",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
      slug: "future-of-ai-automation"
    },
    {
      title: "Streamlining Workflows with Make.com",
      excerpt: "Learn how to optimize your business processes using Make.com's powerful automation features.",
      date: "March 10, 2024",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
      slug: "streamlining-workflows-make"
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-16">Latest Insights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;