"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") return null;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-2xl font-bold mb-4">Welcome To Dashbroad</h1>
      <p className="mb-4 text-gray-700">Email: {session?.user?.email}</p>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
