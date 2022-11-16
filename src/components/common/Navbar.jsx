import React, { useState } from "react";
import { Link } from "react-router-dom";

//icons
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [menHover, setMenHover] = useState(false);
  const [womenHover, setWomenHover] = useState(false);
  return (
    <>
      <nav className="bg-white min-h-[8rem] border-b border-b-black">
        <div className="flex items-center justify-between pl-14 pr-14 900:flex-col">
          <div className="text-head-4 hidden">
            <MenuIcon fontSize="inherit" />
          </div>
          <Link to="/">
            <div className="logo pt-5 pb-5 text-head-1 font-7 tracking-wider">
              StyleOut
            </div>
          </Link>
          <div className="text-gray-700 flex items-center gap-x-10 capitalize 900:flex-col">
            <div
              className="text-body-3"
              onClick={() => {
                setMenHover(!menHover);
                setWomenHover(false);
              }}
            >
              <p>
                <Link to={{ pathname: "/clothing/men" }}>men </Link>
                <KeyboardArrowDownOutlinedIcon
                  className={`${menHover ? "rotate-180" : ""}`}
                />
              </p>
              {menHover ? (
                <>
                  <div className="absolute border border-black flex flex-col bg-white z-10 gap-y-10 p-10 mt-5 text-gray-500 w-[15%]">
                    <div className="w-min hover:border-b hover:border-gray-400">
                      TopWear
                    </div>
                    <div className="w-min hover:border-b hover:border-gray-400">
                      TopWear
                    </div>
                    <div className="w-min hover:border-b hover:border-gray-400">
                      TopWear
                    </div>
                    <div className="w-min hover:border-b hover:border-gray-400">
                      TopWear
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <div
              className="text-body-3"
              onClick={() => {
                setMenHover(false);
                setWomenHover(!womenHover);
              }}
            >
              <p>
                <Link to={{ pathname: "/clothing/women" }}>women </Link>
                <KeyboardArrowDownOutlinedIcon
                  className={`${womenHover ? "rotate-180" : ""}`}
                />
              </p>
              {womenHover ? (
                <>
                  <div className="absolute border border-black flex flex-col bg-white z-10 gap-y-10 p-10 mt-5 text-gray-500 w-[15%]">
                    <div className="w-min hover:border-b hover:border-gray-400">
                      TopWear
                    </div>
                    <div className="w-min hover:border-b hover:border-gray-400">
                      TopWear
                    </div>
                    <div className="w-min hover:border-b hover:border-gray-400">
                      TopWear
                    </div>
                    <div className="w-min hover:border-b hover:border-gray-400">
                      TopWear
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="text-gray-700 flex items-center gap-x-10 capitalize">
            <div className="flex justify-center items-center rounded-lg bg-gray-200 p-3 900:hidden">
              <SearchIcon
                style={{ fontSize: "2.4rem" }}
                className="text-gray-600 ml-3"
              />
              {/*  */}
              <input
                type="text"
                className="border-none outline-none bg-gray-200 pl-5 pr-5 text-body-3 placeholder:font-montserrat placeholder:text-body-3"
                placeholder="search by product"
              />
            </div>
            <div className="text-body-3 font-6">
              <Link to={{ pathname: "/signin" }}>Login</Link>
            </div>
            <div>
              <FavoriteBorderIcon
                style={{ fontSize: "2.4rem" }}
                className="text-gray-700 ml-3"
              />
            </div>
            <div>
              <LocalMallOutlinedIcon
                style={{ fontSize: "2.4rem" }}
                className="text-gray-700 ml-3"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
