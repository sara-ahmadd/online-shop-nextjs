import Image from "next/image";
import Intro from "./components/Intro";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="page min-h-screen min-w-screen flex flex-col justify-between items-center">
      <Intro />
      <Feedback />
      <Footer />
    </main>
  );
}
