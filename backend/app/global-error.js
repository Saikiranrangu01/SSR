'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to monitoring service if needed
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md text-center">
        {/* Icon */}
        <div className="text-6xl mb-4">⚠️</div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900">
          Oops! Something went wrong
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-gray-600">
          An unexpected error occurred. Please try again or return to the home page.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="rounded-xl bg-gray-900 px-4 py-2 text-white text-sm font-medium hover:bg-black active:scale-95"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 active:scale-95"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
