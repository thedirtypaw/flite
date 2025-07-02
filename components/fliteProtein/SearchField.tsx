// Updated components/fliteProtein/SearchField.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface Props {
  onSearch: (query: string) => void
  placeholder?: string
  initialValue?: string
}

interface SearchSuggestion {
  articles: Array<{
    _id: string
    title: string
    slug: { current: string }
    tags: string[]
  }>
  tags: string[]
}

function SearchField({ onSearch, placeholder = "Search articles...", initialValue = '' }: Props) {
  const [query, setQuery] = useState(initialValue)
  const [suggestions, setSuggestions] = useState<SearchSuggestion>({ articles: [], tags: [] })
  const [isLoading, setIsLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null)
  
  const router = useRouter()
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Update local state when initialValue changes
  useEffect(() => {
    setQuery(initialValue)
  }, [initialValue])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Fetch suggestions with debounce
  const fetchSuggestions = async (searchQuery: string) => {
    if (searchQuery.length < 2) { // Changed from 3 to 2 letters
      setSuggestions({ articles: [], tags: [] })
      setShowDropdown(false)
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch(`/api/search-suggestions?q=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      setSuggestions(data)
      setShowDropdown(true)
    } catch (error) {
      console.error('Failed to fetch suggestions:', error)
      setSuggestions({ articles: [], tags: [] })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)

    // Clear existing timer
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }

    // Set new timer for debounced search
    const timer = setTimeout(() => {
      fetchSuggestions(newQuery)
    }, 300)
    
    setDebounceTimer(timer)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
      setShowDropdown(false)
    }
  }

  const handleTagClick = (tag: string) => {
    const encodedTag = tag.replace(/\s+/g, '-').toLowerCase()
    router.push(`/knowledge/${encodedTag}`) // Navigate to tag page directly
    setShowDropdown(false)
    setQuery('')
  }

  const handleArticleClick = (slug: string) => {
    router.push(`/article/${slug}`)
    setShowDropdown(false)
  }

  const handleSuggestionSearch = (searchTerm: string) => {
    setQuery(searchTerm)
    onSearch(searchTerm)
    setShowDropdown(false)
  }

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 relative" ref={dropdownRef}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 transition-transform duration-200">
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-pink-300 border-t-pink-600 rounded-full animate-spin"></div>
            ) : (
              <img
                src="/magnifying-glass.svg"
                alt="Search"
                className="w-5 h-5 opacity-60 hover:scale-110 transition-transform duration-200"
              />
            )}
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-pink-300 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors duration-200"
            autoComplete="off"
          />
        </div>
      </form>

      {/* Dropdown with suggestions */}
      {showDropdown && (suggestions.articles.length > 0 || suggestions.tags.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-pink-200 rounded-2xl shadow-lg z-50 max-h-96 overflow-y-auto">
          
          {/* Categories section - Full width clickable */}
          {suggestions.tags.length > 0 && (
            <div className="border-b border-gray-100">
              <h4 className="text-sm font-semibold text-gray-600 mb-2 px-4 pt-4">Categories</h4>
              <div className="pb-4">
                {suggestions.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className="w-full text-left px-4 py-3 hover:bg-pink-50 transition-colors duration-200 flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0"></span>
                    <span className="text-pink-700 font-medium">#{tag}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Articles section */}
          {suggestions.articles.length > 0 && (
            <div className="p-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">Articles</h4>
              <div className="space-y-2">
                {suggestions.articles.map((article) => (
                  <div key={article._id} className="group">
                    <button
                      onClick={() => handleArticleClick(article.slug.current)}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="font-medium text-gray-800 group-hover:text-pink-600 transition-colors duration-200">
                        {article.title}
                      </div>
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Search option */}
          {query.length >= 2 && ( // Changed from 3 to 2
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={() => handleSuggestionSearch(query)}
                className="w-full text-left p-3 rounded-lg hover:bg-pink-50 transition-colors duration-200 flex items-center gap-3"
              >
                <img src="/magnifying-glass.svg" alt="Search" className="w-4 h-4 opacity-60" />
                <span className="text-gray-700">
                  Search for "<span className="font-medium text-pink-600">{query}</span>"
                </span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchField
