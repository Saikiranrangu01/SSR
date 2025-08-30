import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md text-center">
        {/* Icon */}
        <div className="text-7xl font-bold text-gray-900 mb-4">404</div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800">
          Page Not Found
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3 justify-center">
          <Link
            href="/"
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black active:scale-95"
          >
            Go Home
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 active:scale-95"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
