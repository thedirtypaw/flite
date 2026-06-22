'use client'

import React from 'react'

function AuthPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value
    window.location.href = `/?password=${password}`
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Password form with logo */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo_light.svg"
            alt="Flite Protein Logo"
            className="h-16"
          />
        </div>
        
        <h1 className="text-2xl mb-4 text-center">Site Under Construction</h1>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="border p-2 w-full mb-4 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
          Access Site
        </button>
      </form>
    </div>
  )
}

export default AuthPage
