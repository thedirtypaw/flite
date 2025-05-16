
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArticleProps } from './types';

export const ArticleBox: React.FC<ArticleProps> = ({
  href,
  title,
  thumb,
  tags,
  description,
}) => {

  console.log('ArticleBox href:', href)
  if (!href) {
    console.error("❌ Missing href for ArticleBox:", title);
    return null;
  }
  
  console.log("🧪 thumb prop received:", thumb);


  return (
    <Link
      href={href}
      className="
        flex flex-col w-[45%]
        border shadow-lg
        m-4 p-4
        bg-white
        hover:scale-105 transition-transform
        cursor-pointer
      "
    >
      {thumb ? (
        <Image
          src={`/blog/images/${thumb}`}
          alt={title}
          width={320}
          height={180}
          className="object-cover w-full h-40"
        />
      ) : (
        <div className="w-full h-40 flex items-center justify-center bg-gray-200">
          No image
        </div>
      )}
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <p className="my-3 flex flex-wrap justify-start text-lg text-gray-500">
        {tags?.join(', ')}
      </p>
    </Link>
  );
};
