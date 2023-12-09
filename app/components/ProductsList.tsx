"use client";
import React, { ReactElement } from "react";
import ProductCard from "./ProductCard";
import FilterCategories from "./FilterCategories";
import Searchbar from "./Searchbar";
import useGetSearchedProducts from "@/hooks/useGetSearchedProducts";
import SpecialHeading from "./SpecialHeading";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
export default function ProductsList({
  text_1,
  text_2,
}: {
  text_1: string;
  text_2: string;
}) {
  const { products, handleProducts, search, handleSearch } =
    useGetSearchedProducts();

  return (
    <div className="w-full flex flex-col justify-center gap-4 items-start lg:px-2">
      <SpecialHeading text_1={text_1} text_2={text_2} />
      <div className=" w-full flex flex-col justify-center items-start gap-4 p-4">
        <Searchbar search={search} handleSearch={handleSearch} />
        <FilterCategories handleProducts={handleProducts} />
      </div>

      {products &&
      products.length > 0 &&
      products.every((p) => p.title !== "") ? (
        <div className="container-box p-0" id="container-box">
          <div className="small-container p-0">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
              slidesPerView={4}
              spaceBetween={3}
              navigation
            >
              {products?.map((item): ReactElement => {
                return (
                  <SwiperSlide
                    key={`${item._id}`}
                    className="w-full flex justify-center h-max items-center pt-10 px-10"
                  >
                    <ProductCard
                      product={{
                        ...item,
                        _id: item._id,
                      }}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-full h-full">
          <Image src={"/spinner.gif"} alt="products" width={200} height={300} />
        </div>
      )}
    </div>
  );
}
