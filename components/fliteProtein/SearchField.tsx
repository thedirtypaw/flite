'use client';

import { useState } from 'react';

interface Props {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchField({ onSearch, placeholder = "Search articles..." }: Props) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    // Optional: Real-time search
    // onSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          {/* Magnifying Glass Icon */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 transition-transform duration-200 hover:scale-110">
            <img
              src="/magnifying-glass.svg"
              alt="Search"
              className="w-5 h-5 opacity-60"
            />
          </div>
          
          {/* Search Input */}
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-pink-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-200"
          />
        </div>
      </form>
    </div>
  );
}
