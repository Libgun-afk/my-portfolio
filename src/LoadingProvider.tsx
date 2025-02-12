/** @format */
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LoadingContext = createContext<{ loaded: boolean }>({ loaded: false });

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 🟢 Бүх asset (зураг, CSS, JS) ачаалсныг шалгах
    const handleAssetsLoad = () => {
      console.log("🎨 Бүх asset ачаалсан!");
      setTimeout(() => setLoaded(true), 500); // Жижиг хоцрогдол оруулж болно
    };

    if (document.readyState === "complete") {
      handleAssetsLoad();
    } else {
      window.addEventListener("load", handleAssetsLoad);
    }

    return () => {
      window.removeEventListener("load", handleAssetsLoad);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ loaded }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
