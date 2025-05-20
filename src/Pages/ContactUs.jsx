import React from "react";
import NewsLetter from "../Commponents/NewsLetter";
import TitleSection from "../Commponents/TitleSection";
import { assets } from "../assets/frontend_assets/assets";

const ContactUs = () => {
  return (
    <div className="border-t border-gray-300 py-10 ">
      <div className="text-center text-2xl md:text-3xl ">
        <TitleSection text1="Contact" text2="Us" />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className=" w-full max-w-[480px] " alt="" />
        <div className="flex flex-col justify-center items-start gap-6  ">
          <b className="text-xl text-gray-600" >Our Store</b>
          <p className="text-base text-gray-600">
           Gari Shahu Near Shimla Hill <br />
            Gari Shahu Lahore,Punjab Pakistan
          </p>
          <p className="text-base text-gray-600">
            Tel: +92 332 9658652 <br/>
            Email: admin@forever.com
          </p>
          <b className="text-xl text-gray-600" >Carrers at Forever</b>
          <p className="text-base text-gray-600">
            Learn more about our teams and job openings.
          </p>
          <button className="border py-2 px-4 hover:text-white hover:bg-black transition-all duration-500 " >Explore Jobs</button>
        </div>
      </div>
      {/* newsletter section */}
      <NewsLetter />
    </div>
  );
};

export default ContactUs;
