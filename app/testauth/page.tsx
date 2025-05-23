"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function TestAuth() {
  const { data: session } = useSession();

  return (
    <div className="p-8">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <button
        onClick={() => signIn()}
        className="px-4 py-2 bg-green-500 text-white rounded mr-2"
      >
        Login
      </button>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Logkkkk
      </button>
    </div>
  );
}
