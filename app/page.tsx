import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Textbox from "@/components/Textbox";

export default function Home() {
  return (
    <div className="bg-black h-full flex flex-col justify-center relative">
      
      <Header />
      <Textbox />
      <About />
      {/* <Footer /> */}
    </div>
  );
}
