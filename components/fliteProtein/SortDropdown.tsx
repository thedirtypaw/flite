// components/fliteProtein/SortDropdown.tsx

'use client'

export default function SortDropdown() {
  return (
    <select
      className="border border-green-300 rounded-md px-3 py-2 text-sm text-green-900 bg-white hover:border-green-600"
      disabled
    >
      <option>Newest First</option>
      <option>Oldest First</option>
      <option>A–Z</option>
      <option>Z–A</option>
    </select>
  )
}
