"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getRedirectPath } from "@/lib/auth-guard";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const redirect = getRedirectPath("full") ?? "/dashboard";
    router.replace(redirect);
  }, [router]);

  return <div className="min-h-screen bg-bg" />;
}
