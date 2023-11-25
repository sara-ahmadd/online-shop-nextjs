import Intro from "./components/Intro";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import Categories from "./components/Categories";
import Searchbar from "./components/Searchbar";
import ProductsList from "./components/ProductsList";

export default function Home() {
  return (
    <main
      className={`page w-screen flex flex-col justify-between items-center min-h-screen`}
    >
      <Intro />
      <div
        id="products"
        className="mx-auto flex flex-col items-center gap-5 pt-5 pb-10 px-0 sm:px-1"
      >
        <div className="pt-16 flex flex-col items-center gap-5">
          <ProductsList />
        </div>
      </div>
      <Feedback />
      <Footer />
    </main>
  );
}
