import { Link, useLocation } from "react-router-dom";
import { LogIn, List, Share2, UserPlus, Star, Info, BookOpen, Mail, Shield, HelpCircle } from "lucide-react";

const navItems = [
  { path: "/", label: "Login", icon: LogIn },
  { path: "/services", label: "Services", icon: List },
  { path: "/api", label: "API", icon: Share2 },
  { path: "/signup", label: "Signup", icon: UserPlus },
  { path: "/reviews", label: "Reviews", icon: Star },
  { path: "/terms", label: "Terms", icon: Info },
  { path: "/blog", label: "Blog", icon: BookOpen },
  { path: "/contact", label: "Contact us", icon: Mail },
  { path: "/cookie-policy", label: "Cookie policy", icon: Shield },
  { path: "/faqs", label: "FAQs", icon: HelpCircle },
];

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-nav border-b border-border px-4 py-1 flex flex-wrap gap-1">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              isActive
                ? "bg-nav-active text-nav-active-foreground"
                : "text-nav-foreground hover:bg-muted"
            }`}
          >
            <Icon size={14} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
