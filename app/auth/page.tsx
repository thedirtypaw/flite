'use client'
import React from 'react'

export default function AuthPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value
    window.location.href = `/?password=${password}`
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl mb-4">Site Under Construction</h1>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Access Site
        </button>
      </form>
    </div>
  )
}