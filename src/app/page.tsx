import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Welcome
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Select one of our platforms to get started
        </p>

        <div className="flex flex-col gap-4">
          <Link href="/papi">
            <div className="border border-blue-200 hover:border-blue-400 bg-white rounded-lg p-5 flex items-center justify-between shadow-sm hover:shadow transition-all duration-200">
              <div>
                <h2 className="text-xl font-medium text-blue-700">Papi</h2>
                <p className="text-gray-500 text-sm mt-1">
                  Access the Papi platform
                </p>
              </div>
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </Link>

          <Link href="/dedot">
            <div className="border border-blue-200 hover:border-blue-400 bg-white rounded-lg p-5 flex items-center justify-between shadow-sm hover:shadow transition-all duration-200">
              <div>
                <h2 className="text-xl font-medium text-blue-700">Dedot</h2>
                <p className="text-gray-500 text-sm mt-1">
                  Explore the Dedot interface
                </p>
              </div>
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
