import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { data } from "../data";
import ListItem from "./ListItem";
const Item = () => {
  return (
    <div>
      <div className="w-full h-[260px] overflow-hidden">
        <img src={data.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <p className="text-red-500 font-bold text-lg">
          {data.price.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </p>
        <p className="text-gray-400 text-xs inline-block relative">
          {(data.price * (1 + data.discountPercent)).toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
          <hr className="absolute bg-black w-[calc(100%-20%)] top-1/2" />
          <span className="text-xs text-red-500">-{data.discountPercent}%</span>
        </p>
        <h3>{data.name}</h3>
        <p className="text-gray-400 text-xs">
          By <span className="text-blue-400">{data.seller}</span>
        </p>
        <p className="mt-6 mb-4 font-bold text-lg">Sản phẩm liên quan</p>
        <Swiper grabCursor={"true"} slidesPerView={2}>
          {data &&
            data?.relatedProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ListItem data={product}></ListItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Item;
