'use client';

import { HeroText } from "./HeroText";
import KnowledgeHeaderImage from "./KnowledgeHeaderImage";
import Link from "next/link";
import { getLimitedArticles } from "../../lib/articles";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default async function KnowledgePage() {
  const articles = await getLimitedArticles(8);

  const rawTags = articles.flatMap((article) => Array.isArray(article.tags) ? article.tags : []) as string[];
  const uniqueTags: string[] = Array.from(new Set(rawTags)).sort();

  const sortingOptions = ["Most Used", "Newest First", "Alphabetical"];

  return (
    <div className="flex w-full overflow-hidden flex-col bg-[#f8f8f1]">
      {/* Hero section with 2-column split */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-[5%] py-16 gap-8">
        <div className="text-center md:text-left">
          <HeroText 
            title="Knowledge Base"
            heading="Fuel your gut with facts"
            subheading="Explore science, research, and application"
          />
        </div>
        <div className="flex justify-center">
          <KnowledgeHeaderImage />
        </div>
      </div>

      {/* Tag bar */}
      <TagBar uniqueTags={uniqueTags} sortingOptions={sortingOptions} />

      {/* Article grid section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-[5%] py-10">
        {articles.map((article) => (
          <Link
            href={`/blog/${article.slug}`}
            key={article._id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
          >
            <img
              src={`/blog/images/${article.thumbImage}`}
              alt={article.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
            />
            <div className="p-4">
              <div className="text-xs font-medium text-green-700 uppercase mb-1">
                {Array.isArray(article.tags) ? article.tags.join(", ") : ""}
              </div>
              <div className="text-xs text-gray-500 mb-2">
                {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }) : ""}
              </div>
              <h3 className="text-lg font-bold mb-1 text-gray-900">
                {article.title}
              </h3>
              <p className="text-sm text-gray-700 line-clamp-3">
                {article.excerpt || ""}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

function TagBar({ uniqueTags, sortingOptions }: { uniqueTags: string[]; sortingOptions: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-3 px-[5%] py-4 overflow-x-auto whitespace-nowrap relative">
      <span className="text-sm text-[#949494] font-semibold mr-2">Popular Tags:</span>
      {uniqueTags.map((tag: string, index: number) => (
        <span
          key={`tag-${index}`}
          className="text-base text-[#949494] hover:text-[#f771aa] transition-colors cursor-pointer"
        >
          {tag}
        </span>
      ))}
      <button
        title="Sort tags"
        onClick={() => setOpen(!open)}
        className="ml-auto text-[#949494] hover:text-[#f771aa] transition-colors cursor-pointer"
      >
        <SlidersHorizontal className="w-8 h-8" />
      </button>
      {open && (
        <div className="absolute right-5 top-10 bg-white border border-gray-200 rounded shadow-md z-10 w-48">
          {sortingOptions.map((option, idx) => (
            <div key={`sort-${idx}`} className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
