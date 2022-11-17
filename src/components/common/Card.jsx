import React from "react";

//icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Card = ({ data }) => {
  return (
    <>
      <div className="border border-transparent">
        <div className="relative overflow-hidden w-full h-[35rem] 1150:h-[45rem] 450:!h-[55rem]">
          <img
            src={data.image_url}
            alt="product"
            loading="lazy"
            className="object-fill max-w-full max-h-full h-full w-full transition-all hover:scale-110 hover:origin-[50%_50%]"
          />
        </div>
        <div className="flex justify-between items-start">
          <div className="w-5/6">
            <p className="text-body-4 overflow-hidden whitespace-nowrap text-ellipsis text-black-7 w-full">
              {data.product_name}
            </p>
            <p className="text-body-3 text-black font-6">
              &#8377; {data["original-price"]}
              <span className="line-through text-body-4 text-black-5 ml-3">
                &#8377; {data.price}
              </span>
            </p>
          </div>
          <div className="w-1/5 mt-3">
            <FavoriteBorderIcon
              style={{ fontSize: "2.4rem" }}
              className="text-gray-700 ml-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
