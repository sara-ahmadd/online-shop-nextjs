import Intro from "./components/Intro";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";

export default async function Home() {
  return (
    <main
      className={`max-w-screen flex flex-col justify-between items-center min-h-screen`}
    >
      <Intro />
      <div
        id="products"
        className="w-full flex flex-col items-center gap-3 pt-5 pb-10 px-0 sm:px-1"
      >
        <div className="w-full pt-10 flex flex-col items-center gap-5">
          <ProductsList />
        </div>
      </div>
      <Footer />
    </main>
  );
}
