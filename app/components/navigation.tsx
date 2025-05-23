"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Navigation = () => {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    if (params.get("modal") === "profile" && session) {
      setShowModal(true);
    }
  }, [params, session]);

  const closeModal = () => {
    setShowModal(false);
    
    router.replace("/", { scroll: false });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-400 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-16">
        <Link href="/" className="text-2xl font-bold text-gray-900 mr-8">
          CoForce
        </Link>

        <div className="hidden sm:flex flex-1 justify-center space-x-8">
          <Link href="/" className="text-sm font-medium text-gray-800 hover:text-black">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-800 hover:text-black">
            About
          </Link>
          <Link href="/courses" className="text-sm font-medium text-gray-800 hover:text-black">
            Courses
          </Link>
        </div>

        <div className="ml-auto space-x-3">
          {session ? (
            <button
              onClick={() => setShowModal(true)}
              className="px-3 py-1 rounded bg-white text-green-700 font-medium hover:bg-gray-200"
            >
              Profile
            </button>
          ) : (
            <>
              <Link
                href="/auth/signin"
                className="px-3 py-1 rounded bg-white text-green-700 font-medium hover:bg-gray-200"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="px-3 py-1 rounded bg-white text-green-700 font-medium hover:bg-gray-200"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* //profile */}
      {showModal && session && (
        <div className="fixed inset-0 bg-green-400 bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg space-y-4 w-80 text-center">
           
            {session.user?.image ? (
              <img
                src={session.user.image}
                alt="User Avatar"
                className="w-20 h-20 rounded-full mx-auto"
              />
            ) : (
              <div className="w-20 h-20 rounded-full mx-auto bg-green-200 flex items-center justify-center text-3xl font-bold text-green-800">
                {session.user?.email?.[0] || "U"}
              </div>
            )}

            <h2 className="text-lg font-bold">
              Welcome
            </h2>
            <p className="text-gray-600">{session.user?.email}</p>

            <button
              onClick={() => {
                closeModal();
                router.push("/dashboard");
              }}
              className="w-full bg-green-600 text-white py-2 rounded"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => {
                signOut();
                closeModal();
              }}
              className="w-full bg-red-500 text-white py-2 rounded"
            >
              Logout
            </button>
            <button
              onClick={closeModal}
              className="w-full text-sm text-gray-600 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
