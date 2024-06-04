"use client";

import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return mounted ? <>{children}</> : <Loading />;
}
