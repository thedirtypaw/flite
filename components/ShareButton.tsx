'use client';
import React from 'react';

export default function ShareButton() {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(window.location.href)}
      className="mt-8 self-start px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Share this article
    </button>
  );
}
