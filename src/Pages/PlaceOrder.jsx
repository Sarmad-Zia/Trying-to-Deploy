import React, { useContext } from "react";
import TitleSection from "../Commponents/TitleSection";
import CartTotal from "../Commponents/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../Context/ShopContex";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const { Navigate } = useContext(ShopContext);

  const onSubmit = (values) => {
    console.log("Form submitted with values:", values); // Log values on submit
    Navigate('/orders');
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "First Name must be at least 2 characters")
      .max(50, "First Name cannot exceed 50 characters")
      .required("First Name is required"),
    LastName: Yup.string()
      .min(2, "Last Name must be at least 2 characters")
      .max(50, "Last Name cannot exceed 50 characters")
      .required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    street: Yup.string()
      .min(5, "Street must be at least 5 characters")
      .max(100, "Street cannot exceed 100 characters")
      .required("Street is required"),
    city: Yup.string()
      .min(2, "City must be at least 2 characters")
      .max(50, "City cannot exceed 50 characters")
      .required("City is required"),
    state: Yup.string()
      .min(2, "State must be at least 2 characters")
      .max(50, "State cannot exceed 50 characters")
      .required("State is required"),
    zipCode: Yup.string()
      .required("Zip Code is required")
      .matches(
        /^\d{5}(-\d{4})?$/,
        "Invalid zip code format (e.g., 12345 or 12345-6789)"
      ),
    country: Yup.string()
      .min(2, "Country must be at least 2 characters")
      .max(50, "Country cannot exceed 50 characters")
      .required("Country is required"),
    PhoneNumber: Yup.string()
      .required("Phone Number is required")
  });

  const PlaceOrderHandler = () => {
    if ((Object.keys(formik.errors).length > 0 || !formik.dirty)) {
      toast.error('Please fill in all required fields correctly.');
    } else {
      Navigate('/orders');
      // console.log(formik.values)
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      LastName: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      PhoneNumber: "",
    },
    onSubmit,
    validationSchema,
  });

  return (
    <div className="flex flex-col sm:flex-row w-full py-10 sm:py-20 px-5 border-t border-gray-300 min-h-[80vh] justify-between gap-4  ">
      {/* input fields div's */}
      <div className="w-full sm:max-w-[480px]">
        <div className=" mb-10 text-2xl sm:text-3xl">
          <TitleSection text1="Delivery" text2="Information" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              id=""
              className="px-4 py-2 border rounded-[5px] border-gray-300 w-full"
              placeholder="Enter your First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName} // Bind value to Formik state
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>
                <p className="text-red-800">{formik.errors.firstName}</p>
              </div>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="LastName"
              id=""
              className="px-4 py-2 border rounded-[5px] border-gray-300 w-full"
              placeholder="Enter your Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.LastName} // Bind value to Formik state
            />
            {formik.touched.LastName && formik.errors.LastName ? (
              <div>
                <p className="text-red-800">{formik.errors.LastName}</p>
              </div>
            ) : null}
          </div>
          <div className="col-span-2">
            <input
              type="email"
              name="email"
              id=""
              className="px-4 py-2 border rounded-[5px] border-gray-300 w-full"
              placeholder="Email Address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email} // Bind value to Formik state
            />
            {formik.touched.email && formik.errors.email ? (
              <div>
                <p className="text-red-800">{formik.errors.email}</p>
              </div>
            ) : null}
          </div>
          {/* ... similarly update other input fields */}
          <div className="col-span-2">
            <input
              type="text"
              name="street"
              id=""
              className="px-4 py-2 border rounded-[5px] border-gray-300 w-full"
              placeholder="Street"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street}
            />
            {formik.touched.street && formik.errors.street ? (
              <div>
                <p className="text-red-800">{formik.errors.street}</p>
              </div>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="city"
              id=""
              className="px-4 py-2 border rounded-[5px] border-gray-300 w-full"
              placeholder="City"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city ? (
              <div>
                <p className="text-red-800">{formik.errors.city}</p>
              </div>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="state"
              id=""
              className="px-4 py-2 border rounded-[5px] border-gray-300 w-full"
              placeholder="State"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            />
            {formik.touched.state && formik.errors.state ? (
              <div>
                <p className="text-red-800">{formik.errors.state}</p>
              </div>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="zipCode"
              id=""
              className="px-4 py-2 border rounded-[5px] border-gray-300 w-full"
              placeholder="Zip Code"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zipCode}
            />
            {formik.touched.zipCode && formik.errors.zipCode ? (
              <div>
                <p className="text-red-800">{formik.errors.zipCode}</p>
              </div>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="country"
              id=""
              className="px-4 py-2 border rounded-[5px] border-gray-300 w-full"
              placeholder="Country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />
            {formik.touched.country && formik.errors.country ? (
              <div>
                <p className="text-red-800">{formik.errors.country}</p>
              </div>
            ) : null}
          </div>
          <div className="col-span-2">
            <input
              type="tel"
              name="PhoneNumber"
              id=""
              className="px-4 py-2 border rounded-[5px] border-gray-300 w-full"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.PhoneNumber}
            />
            {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? (
              <div>
                <p className="text-red-800">{formik.errors.PhoneNumber}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="w-full sm:max-w-[600px] flex flex-col justify-center">
        <CartTotal />
        <div className="mt-10 text-lg">
          <TitleSection text1="PAYMENT " text2="METHODS" />
        </div>
        {/* payment methods div */}
        <div className="flex flex-col gap-3 lg:flex-row ">
          <div className="border border-gray-300 px-3 py-2 flex items-center  gap-3 ">
            <p className="border min-w-3.5 h-3.5 rounded-full"></p>
            <img src={assets.razorpay_logo} className="h-5 max-4 " alt="" />
          </div>
          <div className="border border-gray-300 px-3 py-2 flex items-center  gap-3  ">
            <p className="border min-w-3.5 h-3.5 rounded-full"></p>
            <img src={assets.stripe_logo} className="h-5 max-4 " alt="" />
          </div>
          <div className="border border-gray-300 px-3 py-2 flex items-center  gap-3 ">
            <p className="border min-w-3.5 h-3.5 rounded-full bg-green-400 "></p>
            <p className="text-base">CASH ON DELIVERY</p>
          </div>
        </div>
        <div className="mt-20 flex justify-end">
          <button
            className="bg-black text-white text-center px-15 py-2  "
            onClick={() => PlaceOrderHandler()}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;