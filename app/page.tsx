import About from "@/components/About";
import Header from "@/components/Header";
import Textbox from "@/components/Textbox";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="bg-black h-full flex flex-col justify-center relative">
      <Header />
      <Textbox />
      <Gallery />
      <About />
    </div>
  );
}
