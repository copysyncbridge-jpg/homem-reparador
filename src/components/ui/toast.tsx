"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastType = "success" | "info" | "error";

type ToastItem = {
  id: number;
  message: string;
  type: ToastType;
};

type ToastContextValue = {
  showToast: (message: string, type?: ToastType) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const typeStyles: Record<ToastType, { icon: typeof CheckCircle2; classes: string }> = {
  success: { icon: CheckCircle2, classes: "border-success/40 text-success" },
  info: { icon: Info, classes: "border-gold/40 text-gold" },
  error: { icon: XCircle, classes: "border-danger/40 text-danger" },
};

let idCounter = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const id = ++idCounter;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex flex-col items-center gap-2 md:left-auto md:right-4 md:items-end">
        <AnimatePresence>
          {toasts.map((toast) => {
            const { icon: Icon, classes } = typeStyles[toast.type];
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "pointer-events-auto flex items-center gap-2 rounded-xl border bg-surface2 px-4 py-3 text-sm shadow-2xl",
                  classes
                )}
              >
                <Icon className="size-4 shrink-0" />
                <span className="text-text">{toast.message}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
