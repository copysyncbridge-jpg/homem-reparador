"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Progress({
  value,
  className,
  trackClassName,
  fillClassName,
}: {
  value: number;
  className?: string;
  trackClassName?: string;
  fillClassName?: string;
}) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      className={cn("h-1 w-full overflow-hidden rounded-full bg-surface2", trackClassName, className)}
    >
      <motion.div
        className={cn("h-full rounded-full bg-gold", fillClassName)}
        initial={{ width: 0 }}
        animate={{ width: `${clamped}%` }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>
  );
}
