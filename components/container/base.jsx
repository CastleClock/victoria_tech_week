//COMPONENTS
import Navigation from "./navigation";
import Footer from "./footer";

export default function Base({ children }) {
  return (
    <div className="bg-[#FFFCF1] h-screen">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
