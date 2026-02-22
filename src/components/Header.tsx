import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-header py-3 px-6">
      <h1 className="text-2xl font-extrabold tracking-tight">
        <span className="text-primary-foreground">GET</span>
        <span className="text-yellow-300 text-3xl font-black">Z</span>
        <span className="text-primary-foreground"> SMM</span>
      </h1>
    </header>
  );
};

export default Header;
