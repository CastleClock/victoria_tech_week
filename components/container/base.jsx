//COMPONENTS
import Navigation from "./navigation";
import Footer from "./footer";

export default function Base({ children }) {
  return (
    <div className="bg-[#FFFCF1]">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
