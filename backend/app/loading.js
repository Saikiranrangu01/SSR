export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="relative flex flex-col items-center">
        {/* Spinner Glow */}
        <div className="w-16 h-16 border-4 border-gray-700 border-t-white rounded-full animate-spin" />

        {/* Fancy Glow Effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full blur-2xl opacity-30 animate-pulse" />

        {/* Text */}
        <p className="mt-6 text-gray-200 text-sm font-medium tracking-wide animate-pulse">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
