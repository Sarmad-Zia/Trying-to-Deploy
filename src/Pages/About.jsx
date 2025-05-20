import React from "react";
import NewsLetter from "../Commponents/NewsLetter";
import TitleSection from "../Commponents/TitleSection";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <div className="border-t border-gray-300 py-10 ">
      <div className="text-center text-2xl md:text-3xl ">
        <TitleSection text1="About" text2="Us" />
      </div>
      <div className="flex flex-col justify-center md:flex-row gap-8 my-10  ">
        <img src={assets.about_img} className="w-full max-w-[480px] " alt="" />
        <div className="flex flex-col justify-center items-start gap-6  ">
          <p className="text-base text-gray-600">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="text-base text-gray-600">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b>Our Mission</b>
          <p className="text-base text-gray-600">
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      {/* why choose us section */}

      <div className="mb-20">
        <div className="text-xl md:text-2xl my-10 ">
          <TitleSection text1={"Why"} text2={"Choose Us"} />
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="border border-gray-300 px-15 py-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600 mt-5">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="border border-gray-300 px-15 py-5">
            <b>Conveniece:</b>
            <p className="text-gray-600 mt-5">
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="border border-gray-300 px-15 py-5">
            <b>Execptional Customer Service:</b>
            <p className="text-gray-600 mt-5">
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>

      {/* newsletter section */}
      <NewsLetter />
    </div>
  );
};

export default About;
