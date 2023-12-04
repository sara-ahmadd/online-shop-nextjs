import Intro from "./components/Intro";
import Footer from "./components/Footer";
import ProductsList from "./components/ProductsList";
import BaseCollectionSection from "./components/BaseCollectionSection";
import NewCollectionSection from "./components/NewCollectionSection";
import SpringSection from "./components/SpringSection";
import SubscribeSection from "./components/SubscribeSection";
import SaleProducts from "./components/SaleProducts";
import ImagesSection from "./components/ImagesSection";

export default async function Home() {
  return (
    <main
      className={`max-w-screen flex flex-col justify-between items-center min-h-screen gap-5`}
    >
      <Intro />
      <div
        id="products"
        className="w-full flex flex-col items-center gap-3 pt-5 pb-10 px-0 sm:px-1"
      >
        <div className="w-full pt-10 flex flex-col items-center gap-5">
          <ProductsList
            text_1={"WINTER COLLECTION"}
            text_2={"Popular Shirts"}
          />
        </div>
      </div>
      <BaseCollectionSection />
      <NewCollectionSection />
      <SpringSection />
      <SaleProducts
        text_1={"WINTER COLLECTION"}
        text_2={"On Sale Collection"}
      />
      <div className="w-full flex justify-center items-center gap-3">
        <ImagesSection gender="men" />
        <ImagesSection gender="women" />
      </div>
    </main>
  );
}
