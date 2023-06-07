"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <br />
      <br />
      <button
        onClick={() => {
          router.push("/test-page-context");
        }}
      >
        Go to page with context
      </button>
      <br />
      <br />
    </main>
  );
}
