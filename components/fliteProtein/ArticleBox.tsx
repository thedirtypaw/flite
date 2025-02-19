import React from 'react';
import Image from 'next/image';
import { ArticleProps } from './types';
// Define the props for the ArticleBox


export const ArticleBox: React.FC<ArticleProps> = ({
  title,
  image,
  imageAlt,
  thumb,
  tags,
  description,
}) => {
  return (
    <div className="max-w-xs border rounded-lg shadow-lg p-4 bg-white hover:scale-105 transition-transform">
      {/* Display thumbnail image */}
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="rounded-lg"
      />
      {/* Display the article title */}
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      {/* Display the description */}
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      {/* Display the tags */}
      <p className="text-xs text-gray-500">
        {tags.join(', ')}
      </p>
    </div>
  );
};
