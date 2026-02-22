import Header from "./Header";
import NavBar from "./NavBar";
import FloatingDots from "./FloatingDots";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <FloatingDots />
      <Header />
      <NavBar />
      <main className="flex-1 relative z-10 flex items-center justify-center py-10 px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
