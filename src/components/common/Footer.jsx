import React from "react";
//icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <>
      <footer className="bg-footer text-white">
        <div className="contain flex flex-wrap justify-between gap-y-10 850:justify-center 850:items-center">
          <div className="850:basis-1/2 850:text-center 450:!basis-full">
            <div className="text-head-1 font-7 tracking-widest">StyleOut</div>
            <div className="flex justify-between mt-5 850:w-[60%] 850:ml-auto 850:mr-auto">
              <div>
                <a
                  href="https://www.instagram.com/virat.kohli/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon style={{ fontSize: "2rem" }} />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/virat.kohli/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon style={{ fontSize: "2rem" }} />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/virat.kohli/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon style={{ fontSize: "2rem" }} />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/virat.kohli/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon style={{ fontSize: "2rem" }} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 850:basis-1/2 850:text-center 450:!basis-full">
            <div className="text-body-1">Men</div>
            <div className="text-body-3 text-gray-300">Topwear</div>
            <div className="text-body-3 text-gray-300">Topwear</div>
            <div className="text-body-3 text-gray-300">Topwear</div>
            <div className="text-body-3 text-gray-300">Topwear</div>
          </div>
          <div className="flex flex-col gap-y-5 850:basis-1/2 850:text-center 450:!basis-full">
            <div className="text-body-1">Women</div>
            <div className="text-body-3 text-gray-300">Topwear</div>
            <div className="text-body-3 text-gray-300">Topwear</div>
            <div className="text-body-3 text-gray-300">Topwear</div>
            <div className="text-body-3 text-gray-300">Topwear</div>
          </div>
          <div className="flex flex-col gap-y-7 basis-1/4 850:basis-1/2 850:text-center 450:!basis-full">
            <div className="flex items-center gap-x-5">
              <div>
                <AlternateEmailIcon style={{ fontSize: "2rem" }} />
              </div>
              <div>info@styleout.com</div>
            </div>
            <div className="flex items-start gap-x-5">
              <div>
                <MailIcon style={{ fontSize: "2rem" }} />
              </div>
              <div>
                420, Sumsham gali, Khatra Mahel, Opposite Morgue, New Mumbai
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[.3rem] w-full mb-5"></div>
        <div className="text-center pb-10">@CopyRight 2022, StyleOut.com</div>
      </footer>
    </>
  );
};

export default Footer;
