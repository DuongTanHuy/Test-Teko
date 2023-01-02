import React from "react";

const ListItem = ({ data }) => {
  return (
    <div className="border border-gray-300 rounded-sm p-3 max-w-[160px] max-h-[338px]">
      <div className="w-full overflow-hidden shadow-sm">
        <img src={data.image} alt="" className="w-full h-full object-cover" />
      </div>
      <p title="Laptop Lenovo (14 4GB/128GB SSD/Intel UHD)">{data.name}</p>
      <p className="text-orange-300">Còn {data.availableQuantity} sản phẩm</p>
      <p className="text-red-500 font-bold text-lg">
        {data.price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
      </p>
      {data.discountPercent ? (
        <p className="text-gray-400 text-xs relative inline-block">
          {(data.price * (1 + data.discountPercent)).toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
          <hr className="absolute bg-black w-[calc(100%-20%)] top-1/2" />
          <span className="text-xs text-red-500">-{data.discountPercent}%</span>
        </p>
      ) : (
        <p className="h-[24px]"></p>
      )}
      <button className="w-full mt-auto h-[30px] text-red-400 border border-red-400 rounded-sm hover:bg-slate-600 hover:text-gray-100">
        Thêm vào giỏ
      </button>
    </div>
  );
};

export default ListItem;
