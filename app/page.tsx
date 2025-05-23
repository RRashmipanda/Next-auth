import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-600 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Learn without limits</span>
              <span className="block text-black">with CoForce</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-900 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Access high-quality courses, expert instructors, and a supportive community to help you achieve your learning goals.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/courses"
                className="px-6 py-3 text-white bg-yellow-300 hover:bg-yellow-500 rounded-lg text-lg font-semibold transition"
              >
                Explore Courses
              </Link>
              <button
                className="px-6 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-lg text-lg font-semibold transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

    

      
    </div>
  );
}
