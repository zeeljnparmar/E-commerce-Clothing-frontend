import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//Card
import Card from "../common/Card";

//Data
import { store } from "../../data/Store";

const responsive = {
  desktop: {
    breakpoint: { max: 1440, min: 700 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 700, min: 0 },
    items: 2,
  },
};

const Cart = () => {
  return (
    <>
      <section className="contain">
        <div className="font-bold">
          My Bag <span className="font-normal"> 1 Item</span>
        </div>
        <div className="flex justify-between flex-wrap items-start mt-20 gap-y-14">
          <div className="w-[65%] flex flex-col gap-y-10 950:basis-full">
            <div className="border border-gray-300 rounded-md pl-[3%] pr-[3%] pt-[3%]">
              <div className="flex justify-between items-start">
                <div className="w-3/4 flex flex-col gap-y-3">
                  <div>{store[0].product_name}</div>
                  <div className="font-extrabold">
                    &#8377; 1598{" "}
                    <span className="font-normal line-through ml-3 text-body-4">
                      &#8377; 1598{" "}
                    </span>{" "}
                  </div>
                  <div className="font-extrabold text-[#1D8822] text-body-3">
                    You Saved &#8377; 1598{" "}
                  </div>
                </div>

                <div className="w-1/4 h-[14rem]">
                  <img
                    src={store[0].image_url}
                    alt={store[0].product_name}
                    className="max-h-full max-w-full w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              <div className="h-[.1rem] w-[98%] ml-auto mr-auto bg-gray-300 mt-10"></div>
              <div className="flex justify-between items-center pl-[3%] pr-[3%]">
                <div className="pt-4 pb-4 cursor-pointer text-center basis-1/2 border-r border-r-gray-300">
                  Remove
                </div>

                <div className="pt-4 pb-4 cursor-pointer text-center basis-1/2">
                  Move To WishList
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col red">
              <Carousel
                responsive={responsive}
                autoPlay={false}
                itemClass="pr-5"
              >
                {store.map((s, index) => {
                  return <Card data={s} key={index} />;
                })}
              </Carousel>
            </div>
          </div>

          <div className="basis-[32%]  950:basis-full">
            <div className="pb-20 border border-gray-300 border-collapse">
              <div className="bg-gray-200 font-extrabold text-body-4 uppercase pt-2 pb-2 pl-5">
                Price Summary
              </div>
              <div className="flex justify-between items-center pl-5 pr-5 pt-2 pb-2">
                <div className="text-body-4">Total MRP (Incl. Of Taxes)</div>
                <div className="text-body-4">&#8377; 1598</div>
              </div>
              <div className="flex justify-between items-center pl-5 pr-5 pt-2 pb-2">
                <div className="text-body-4">Shipping Charges</div>
                <div className="text-body-4 text-green-600">Free</div>
              </div>
              <div className="flex justify-between items-center pl-5 pr-5 pt-2 pb-2">
                <div className="text-body-4">Bag Discount</div>
                <div className="text-body-4"> - &#8377;772</div>
              </div>
              <div className="flex justify-between items-center pl-5 pr-5 pt-2 pb-2">
                <div className="text-body-4">Sub Total</div>
                <div className="text-body-4"> - &#8377;826</div>
              </div>
              <div className="bg-gray-200 font-extrabold text-body-4 uppercase pt-2 pb-2 pl-5 ml-auto mr-auto rounded-xl w-[95%] mt-5 text-[#1d8822]">
                You are saving 772 on this order
              </div>
            </div>
            <div className="flex justify-between items-center border border-gray-300 border-collapse border-t-transparent">
              <div className="pl-5 basis-2/5">
                <div className="text-body-4">Total</div>
                <div className="">&#8377; 1598</div>
              </div>
              <div className="basis-3/5 pl-3 pr-3">
                <div className="text-center pt-2 pb-2 rounded-md text-white bg-[#42A2A2]">
                  Add Address
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
