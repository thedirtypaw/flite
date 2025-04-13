import React from 'react';
import Image from 'next/image';
import { ArticleProps } from './types';
// Define the props for the ArticleBox


export const ArticleBox: React.FC<ArticleProps> = ({
  title,
  thumb,
  tags,
  description,
}) => {
  return (
    <div className="flex flex-wrap justify-start w-[45%] border rounded-lg shadow-lg m-4 p-4 bg-white hover:scale-105 transition-transform">
      {/* Display thumbnail image */}
        {thumb ? (
          <Image
            src={thumb}
            alt={title}
            width={750}
            height={190}
            className="rounded-lg"
          />
        ) : (
          <div className="w-[750px] h-[190px] bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-400">
            No image
          </div>
        )}
      {/* Display the article title */}
      <h3 className=" mt-5 text-xl font-semibold">{title}</h3>
      {/* Display the description */}
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      {/* Display the tags */}
      <p className=" my-3 flex flex-wrap justify-start text-lg text-gray-500">
      {tags?.join(', ') || ''}
      </p>
    </div>
  );
};
