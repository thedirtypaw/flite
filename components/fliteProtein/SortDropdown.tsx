'use client'

type Props = {
  sort: 'latest' | 'oldest' | 'az' | 'za' | 'views'
  setSort: (sort: Props['sort']) => void
}

export default function SortDropdown({ sort, setSort }: Props) {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value as Props['sort'])}
      className="border text-sm px-3 py-2 rounded-md bg-white text-green-900 cursor-pointer"
    >
      <option value="latest">Latest</option>
      <option value="oldest">Oldest</option>
      <option value="views">Popularity</option>
      <option value="az">A–Z</option>
      <option value="za">Z–A</option>
    </select>
  )
}
