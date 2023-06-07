"use client";

import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Go Back to Index
      </button>
    </div>
  );
}
