import React from "react";

//Components
import Card from "../common/Card";

//data
import { store } from "../../data/Store";

const ClothingStore = ({ type }) => {
  return (
    <>
      <div className="contain 1200:p-[2%]">
        <div className="capitalize font-7 text-head-4 text-black-9 relative after:content-[''] after:absolute after:left-0 after:top-full after:w-[12%] after:h-[.3rem] after:bg-yellow after:rounded-xl">
          {type} Clothing <span className="text-black-7">(1000)</span>
        </div>

        <div className="mt-10">
          <div
            className="w-1/5  top-10 z-10 inline-block font-6 850:hidden"
            style={{
              position: "-webkit-sticky",
              position: "sticky",
            }}
          >
            <p className="text-body-3 text-black-9">Filters</p>
          </div>

          <div className="w-9/12 ml-[25%] 850:w-full 850:ml-auto">
            <div className="flex flex-wrap justify-between gap-y-10">
              {store.map((s, index) => {
                return <ClothCard key={index} s={s} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ClothCard = ({ s }) => {
  return (
    <>
      <div className="w-[33%] 1150:w-[49%] 450:!w-full">
        <Card data={s} />
      </div>
    </>
  );
};

export default ClothingStore;
