import React, { useRef, useState } from "react";

//component
import Card from "../common/Card";

//icons
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { store } from "../../data/Store";

const ProductCard = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const ref = useRef();

  const scrollToTop = (index) => {
    if (index < 0 || index >= data.gallery.length) {
      return;
    }
    setCurrentImage(index);
    document.querySelector(`#product-${index}`).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
      top: ref.current.offsetTop,
    });
  };
  return (
    <>
      <div className="contain">
        <div className="flex justify-between flex-wrap gap-y-10">
          <div className="basis-[6%] max-h-[50rem] flex flex-col justify-evenly items-center 850:basis-full 850:flex-row 850:overflow-scroll">
            <div
              className="cursor-pointer text-gray-400 850:hidden"
              onClick={() => {
                scrollToTop(currentImage - 1);
              }}
            >
              <ArrowDropUpIcon style={{ fontSize: "3rem" }} />
            </div>

            <div
              className="flex flex-col gap-y-5 items-center h-full overflow-hidden max-h-[95%] 850:flex-row 850:gap-x-5 850:overflow-scroll"
              ref={ref}
            >
              {data.gallery.map((img_url, index) => {
                return (
                  <Image
                    img_url={img_url}
                    key={index}
                    currentImage={currentImage}
                    setCurrentImage={scrollToTop}
                    index={index}
                  />
                );
              })}
            </div>

            <div
              className="cursor-pointer text-gray-400  850:hidden"
              onClick={() => {
                scrollToTop(currentImage + 1);
              }}
            >
              <ArrowDropDownIcon style={{ fontSize: "3rem" }} />
            </div>
          </div>
          <div className="basis-[40%]  850:basis-full">
            <div className="h-[60rem] 1000:h-[50rem]">
              <img
                src={data.gallery[currentImage]}
                alt="product"
                className="object-fill h-full w-full max-w-full max-h-full"
              />
            </div>
          </div>
          <div className=" basis-[45%] pl-10  850:basis-full">
            <div className="text-body-1">{data.product_name}</div>
            <div className="font-7">
              <div className="text-head-4 tracking-widest">
                <span className="text-body-3 ">&#8377;</span>
                {data["original-price"]}{" "}
                <span className="text-body-3 tracking-widest text-gray-500 line-through">
                  &#8377; {data.price}
                </span>{" "}
                <span className="text-body-3 tracking-wide text-green-600">
                  {Math.round(
                    ((data.price - data["original-price"]) * 100) /
                      data["price"]
                  )}
                  {"% OFF "}
                </span>{" "}
              </div>
            </div>
            <div className="text-body-3 text-black-5">Inclusive all taxes</div>
            <div className="w-[80%] h-[.3rem] bg-gray-200 mt-5 mb-5"></div>
            <div>
              <p className="text-body-2 font-bold ">Select Size</p>
              <div className="mt-5 flex items-center gap-x-10 flex-wrap gap-y-5">
                {data.sizes.map((size, index) => {
                  return (
                    <div
                      className="border border-black rounded h-[5rem] w-[5rem] flex justify-center items-center"
                      key={index}
                    >
                      {size}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-20 flex gap-x-10">
              <div className="bg-light-yellow pt-2 pb-2 basis-1/3 flex items-center justify-center gap-x-3 1000:basis-2/5">
                <LocalMallOutlinedIcon style={{ fontSize: "2rem" }} />
                <div className="1000:text-body-3">Add To Bag</div>
              </div>
              <div className="border border-gray-400 text-gray-400 basis-1/3 pt-2 pb-2 flex items-center justify-center gap-x-3 1000:basis-2/5">
                <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
                <div className="1000:text-body-3">Wishlist</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="font-bold">View More</div>
          <div className="flex flex-wrap justify-between gap-y-10 mt-10">
            {store.slice(0, 4).map((s, index) => {
              return <ClothCard key={index} s={s} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const Image = ({ img_url, currentImage, setCurrentImage, index }) => {
  return (
    <>
      <div
        className={`h-[15%] w-full flex-grow-0 850:w-[10rem] 850:h-[10rem] 850:flex-shrink-0 850:flex-grow ${
          currentImage === index ? "border border-light-yellow p-1" : ""
        }`}
        id={`product-${index}`}
        onClick={() => {
          setCurrentImage(index);
        }}
      >
        <img
          src={img_url}
          alt="product"
          className="object-fill h-full w-full max-w-full max-h-full"
        />
      </div>
    </>
  );
};

const ClothCard = ({ s }) => {
  return (
    <>
      <div className="basis-[24%] 1150:basis-[48%] 500:!basis-full">
        <Card data={s} />
      </div>
    </>
  );
};

export default ProductCard;
