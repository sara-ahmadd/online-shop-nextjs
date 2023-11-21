import Intro from "./components/Intro";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";


export default function Home() {
  return (
    <main
      className={`page w-screen flex flex-col justify-between items-center min-h-screen`}
    >
      <Intro />
      <Feedback />
      <Footer />
    </main>
  );
}
