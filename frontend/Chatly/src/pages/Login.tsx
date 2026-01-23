import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore.js";
import { useTheme } from "@/hooks/useTheme.js";
import { Button } from "@/components/ui/button.js";
import { Input } from "@/components/ui/input.js";
import { Label } from "@/components/ui/label.js";
import { ThemeToggle } from "@/components/ui/ThemeToggle.js";
import AnimatedBackground from "@/components/ui/AnimatedBackground.js";
import { MessageCircle, Mail, Lock, Loader2, Sparkles } from "lucide-react";
import { useAuthTypingSound } from "@/hooks/useAuthTypingSound.js";

const Login = () => {
  const { playTypingSound } = useAuthTypingSound();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoggingIn, user } = useAuthStore();
  const { initTheme } = useTheme();

  useEffect(() => {
    return initTheme();
  }, [initTheme]);

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      <AnimatedBackground />

      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Left branding */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 relative">
        <div className="text-center animate-fade-in relative z-10">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-28 h-28 rounded-full glass-strong flex items-center justify-center float">
              <MessageCircle className="w-14 h-14 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Welcome Back</span> 
          </h1>

          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            ⚙️Connect with friends and family.Start meaningful conversations that matter.🔗
          </p>
          <br/>
          <br/>
          <br/>
          <span className="text-muted-foreground text-lg max-w-md leading-relaxed">
             🔒end to end encrypted
          </span>

        </div>
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="glass-strong rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Sign in</h2>
            </div>

            <p className="text-muted-foreground mb-8">
              Enter your credentials to access your account
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <Label>Email</Label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary" />
                  <Input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      playTypingSound();
                    }}
                    className="pl-12 h-12 glass border-border/50 focus:border-primary/50 input-glow"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label>Password</Label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary" />
                  <Input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      playTypingSound();
                    }}
                    className="pl-12 h-12 glass border-border/50 focus:border-primary/50 input-glow"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 gradient-primary glow rounded-xl"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>

            <p className="text-center text-muted-foreground mt-6">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-primary font-semibold hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
