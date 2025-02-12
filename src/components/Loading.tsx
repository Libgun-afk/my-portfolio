/** @format */
"use client";
import { useLoading } from "@/LoadingProvider";

export default function LoadingComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loaded } = useLoading();

  if (!loaded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mb-4"></div>
        </div>
      </div>
    );
  }

  return children;
}
