import React, { useState } from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  imageUrl: string;
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, content, date, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const fullContent = content || `${excerpt}\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

  return (
    <>
      <div className="group border border-white/10 rounded-lg overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 mb-4">{excerpt}</p>
          <button 
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            Read More <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-2xl w-full bg-black border border-white/10 rounded-lg p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="aspect-video mb-6 overflow-hidden rounded-lg">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <Calendar size={16} />
              <span>{date}</span>
            </div>
            <Dialog.Title className="text-2xl font-bold mb-4">{title}</Dialog.Title>
            <div className="prose prose-invert max-w-none">
              {fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-300">{paragraph}</p>
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default BlogPost;