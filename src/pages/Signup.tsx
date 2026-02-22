import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Phone, KeyRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Layout from "@/components/Layout";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register:", form);
  };

  return (
    <Layout>
      <div className="w-full max-w-lg bg-card rounded-lg shadow-lg p-8 relative z-10">
        <h2 className="text-2xl font-bold text-center text-link mb-6">Register Now</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input placeholder="Name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="pl-10" />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input type="email" placeholder="E-mail" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="pl-10" />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input placeholder="WhatsApp" value={form.whatsapp} onChange={(e) => handleChange("whatsapp", e.target.value)} className="pl-10" />
          </div>

          <div className="relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input type="password" placeholder="Password" value={form.password} onChange={(e) => handleChange("password", e.target.value)} className="pl-10" />
          </div>

          <div className="relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={(e) => handleChange("confirmPassword", e.target.value)} className="pl-10" />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="terms"
              checked={form.agreeTerms}
              onCheckedChange={(checked) => handleChange("agreeTerms", checked === true)}
            />
            <label htmlFor="terms" className="text-sm cursor-pointer">
              I agree the{" "}
              <Link to="/terms" className="text-link font-semibold hover:underline">
                Terms & Policy
              </Link>
            </label>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Register
          </Button>

          <p className="text-center text-sm">
            Already have account?{" "}
            <Link to="/" className="text-link font-semibold hover:underline">
              Login
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

export default Signup;
