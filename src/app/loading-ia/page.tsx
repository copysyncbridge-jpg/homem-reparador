"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { IaLoadingScreen } from "@/components/loading/IaLoadingScreen";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { isIaDone, setIaDone } from "@/lib/user-store";

export default function LoadingIaPage() {
  const router = useRouter();
  const { checking, user } = useAuthGuard("quiz");

  useEffect(() => {
    if (!checking && isIaDone()) {
      router.replace("/dashboard");
    }
  }, [checking, router]);

  if (checking) {
    return <div className="min-h-screen bg-bg" />;
  }

  function handleComplete() {
    setIaDone();
    router.replace("/dashboard");
  }

  return <IaLoadingScreen userName={user?.name ?? ""} onComplete={handleComplete} />;
}
