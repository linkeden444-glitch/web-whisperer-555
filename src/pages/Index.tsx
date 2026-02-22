import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, KeyRound, LogIn } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password, remember });
  };

  return (
    <Layout>
      <div className="w-full max-w-lg bg-card rounded-lg shadow-lg p-8 relative z-10">
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={remember}
                onCheckedChange={(checked) => setRemember(checked === true)}
              />
              <label htmlFor="remember" className="text-sm font-medium cursor-pointer">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm font-semibold text-foreground hover:underline">
              Forgot password
            </Link>
          </div>

          <Button type="submit" className="w-full" size="lg">
            <LogIn size={18} />
            Login
          </Button>

          <p className="text-center text-sm text-foreground">
            Don't have account yet?{" "}
            <Link to="/signup" className="text-link font-semibold hover:underline">
              Sign Up
            </Link>
          </p>

          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center gap-2 border border-border rounded-full px-5 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Index;
