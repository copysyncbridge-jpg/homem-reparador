"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Input, Label } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/hooks/useUserStore";
import { getRedirectPath } from "@/lib/auth-guard";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const name = email.split("@")[0] || "Membro";
      login(name.charAt(0).toUpperCase() + name.slice(1), email);
      const redirect = getRedirectPath("user") ?? "/quiz";
      router.push(redirect);
    }, 1500);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-4">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full opacity-[0.06] blur-[100px]"
        style={{
          background: "radial-gradient(circle, #C9A84C 0%, #7B5CF0 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-full max-w-[380px] sm:w-[90%]"
      >
        <div className="flex flex-col items-center">
          <Logo />
          <p className="mt-3 text-center text-sm text-muted">
            Seu protocolo masculino personalizado
          </p>
        </div>

        <div className="my-8 h-px w-full bg-border" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              required
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div>
            <Label>Senha</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-text"
                aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </button>
            </div>
          </div>

          <Button type="submit" loading={loading} className="mt-2 w-full">
            {loading ? "Entrando..." : "Acessar meu protocolo"}
          </Button>
        </form>

        <p className="mt-5 text-center text-xs text-muted">Acesso exclusivo para membros.</p>
      </motion.div>
    </div>
  );
}
