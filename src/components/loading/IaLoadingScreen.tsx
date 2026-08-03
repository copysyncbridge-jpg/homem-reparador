"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IA_LOADING_MESSAGES } from "@/lib/mock-data";

const TOTAL_DURATION_MS = 30000;
const MESSAGE_INTERVAL_MS = 3000;

export function IaLoadingScreen({
  userName,
  onComplete,
}: {
  userName: string;
  onComplete: () => void;
}) {
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef<number | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    let raf: number;

    function tick(now: number) {
      if (startRef.current === null) startRef.current = now;
      const delta = now - startRef.current;
      setElapsed(Math.min(delta, TOTAL_DURATION_MS));

      if (delta >= TOTAL_DURATION_MS) {
        if (!doneRef.current) {
          doneRef.current = true;
          setTimeout(onComplete, 1000);
        }
        return;
      }
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pct = Math.min(100, Math.round((elapsed / TOTAL_DURATION_MS) * 100));

  // 0-3s: intro fixo. 3-30s: cicla pelas 9 mensagens intermediárias. 100%: mensagem final.
  const cyclingMessages = IA_LOADING_MESSAGES.slice(0, -1);
  const finalMessage = IA_LOADING_MESSAGES[IA_LOADING_MESSAGES.length - 1];

  let messageKey: string;
  let message: string;
  if (elapsed >= TOTAL_DURATION_MS) {
    messageKey = "final";
    message = finalMessage;
  } else if (elapsed < MESSAGE_INTERVAL_MS) {
    messageKey = "intro";
    message = "Preparando seu protocolo...";
  } else {
    const idx = Math.min(
      Math.floor((elapsed - MESSAGE_INTERVAL_MS) / MESSAGE_INTERVAL_MS),
      cyclingMessages.length - 1
    );
    messageKey = `msg-${idx}`;
    message = cyclingMessages[idx].replace("[nome]", userName);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6">
      <div className="relative flex size-[180px] items-center justify-center">
        <motion.div
          className="absolute size-[180px] rounded-full border"
          style={{ borderColor: "rgba(201,168,76,0.2)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute size-[130px] rounded-full border"
          style={{ borderColor: "rgba(201,168,76,0.4)" }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute flex size-20 items-center justify-center rounded-full border bg-gold/15"
          style={{ borderColor: "rgba(201,168,76,0.6)" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-display text-[28px] font-black text-gold">HR</span>
        </motion.div>
      </div>

      <div className="mt-8 h-8 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageKey}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="font-display text-[22px] font-bold text-text"
          >
            {message}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex w-[280px] flex-col items-center gap-2">
        <div className="h-1 w-full overflow-hidden rounded-full bg-surface2">
          <div className="h-full rounded-full bg-gold" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-[13px] text-muted">{pct}%</span>
      </div>

      <AnimatePresence>
        {pct >= 50 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 max-w-[260px] text-center text-sm text-muted"
          >
            Seu protocolo masculino está sendo calibrado com base nas suas respostas
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
