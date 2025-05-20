import React, { useContext } from "react";
import TiltleSection from "../Commponents/TitleSection";
import { ShopContext } from "../Context/ShopContex";
import { date } from "yup";
const Orders = () => {
  const { products, currencySymbol } = useContext(ShopContext);
  const productCpy = products.slice(0, 10);
  const DateHandler = (rawDate) => {
    const unFormatedDate = rawDate;
    const date = new Date(unFormatedDate);
    const monthNum = date.getMonth() + 1;
    let day = date.getDay()
    let year = date.getFullYear()
    let monthE = "";
    switch (monthNum) {
      case 1:
        monthE = "Jan";
        break;
      case 2:
        monthE = "Feb";
        break;
      case 3:
        monthE = "March";
        break;
      case 4:
        monthE = "April";
        break;
      case 5:
        monthE = "May";
        break;
      case 6:
        monthE = "June";
        break;
      case 7:
        monthE = "July";
        break;
      case 8:
        monthE = "August";
        break;
      case 9:
        monthE = "Sep";
        break;
      case 10:
        monthE = "Oct";
        break;
      case 11:
        monthE = "Nov";
        break;
      case 12:
        monthE = "December";
        break;
      default:
        monthE = "";
        break;
    }
    const OrderDate = `${String(day).padStart(2,0)} ${monthE} ${year} `
    return OrderDate
  };
  // console.log(RandomIndex)
  return (
    <div className="border-t border-gray-300 pt-20">
      <div className="text-2xl sm:text-3xl">
        <TiltleSection text1={"My"} text2={"Orders"} />
      </div>
      <div>
        {productCpy.map((item, index) => {
          const RandomIndex = Math.floor(Math.random() * 3) + 1;
          return (
            <div
              key={index}
              className="py-4 border-t border-gray-400 flex flex-col md:flex-row items-center md:justify-between my-2 "
            >
              {/* 1st image and other part div */}
              <div className="flex gap-10 w-1/3 " >
                <img src={item.image[0]} className="max-w-30 h-30 " alt="" />
                <div>
                  <p className="text-base" >{item.name}</p>
                  <div className="flex justify-between" >
                    <p>
                      {currencySymbol}
                      {item.price}
                    </p>
                    <p>Quantity: 3 </p>
                    <p>
                      Size:{" "}
                      {item.sizes[RandomIndex]
                        ? item.sizes[RandomIndex]
                        : item.sizes[0]}
                    </p>
                  </div>
                  <div className="flex gap-2" >
                    <p>Date:</p>
                    <p className="text-gray-500" >{DateHandler(item.date)}</p>
                  </div>
                  <div className="flex  gap-2" >
                    <p>Payment:</p>
                    <p className="text-gray-500" >COD</p>
                  </div>
                </div>
              </div>
              {/* order placed div */}
              <div className="flex items-center gap-2" >
                <p className="w-3 h-3 rounded-full  bg-green-400" ></p>
                <p>Order Placed</p>
              </div>
              {/* track order div */}
              <div className="px-4 py-2 border border-gray-300 cursor-pointer  " >
                <p>Track Order</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
