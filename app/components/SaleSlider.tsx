"use client";
import React, { ReactElement, useEffect, useState } from "react";
import SpecialHeading from "./SpecialHeading";
import Searchbar from "./Searchbar";
import FilterCategories from "./FilterCategories";
import useGetSearchedProducts from "@/hooks/useGetSearchedProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { ProductType } from "@/types";

const SaleSlider = ({ products }: { products: ProductType[] }) => {
  const [width, setWidth] = useState(1024);
  useEffect(() => {
    (() => {
      const initWidth = window.innerWidth;
      setWidth(initWidth);
    })();
    const handleWindowWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);

  return (
    <div className="w-full flex flex-col justify-center gap-4 items-start lg:px-2">
      {products &&
      products.length > 0 &&
      products.every((p) => p.title !== "") ? (
        <div className="container-box p-0" id="container-box">
          <div className="small-container p-0">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={
                width <= 468 ? 1 : width <= 768 ? 2 : width <= 1024 ? 3 : 4
              }
              spaceBetween={2}
              className="mySwiper"
            >
              {products?.map((item): ReactElement => {
                const {
                  _id,
                  category,
                  title,
                  image,
                  description,
                  price,
                  newProduct,
                  sale,
                } = item;
                return (
                  <SwiperSlide
                    key={item._id?.toString()}
                    className="w-80 flex justify-center min-h-max items-center pt-10 px-10"
                  >
                    <ProductCard
                      product={{
                        _id: _id?.toString(),
                        category,
                        title,
                        image,
                        description,
                        price,
                        newProduct,
                        sale,
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
};

export default SaleSlider;
