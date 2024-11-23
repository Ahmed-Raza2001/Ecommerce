"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect, useState } from "react";
import { Context as CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/public/logo2.png";
import axios from "axios";
import { createClient } from "@/app/utils/supabase/client";

const schema = yup.object({
  fullName: yup.string().required("Name is Required to Complete Order"),
  address: yup.string().required("Address is Required to Complete Order"),
  phoneNumber: yup
    .string()
    .length(11, "11 Digits Required")
    .required("Phone Number is Required to Complete Order"),
  email: yup.string().email(),
  landmark: yup.string(),
  instructions: yup.string(),
});

const CheckOutPage = () => {
  const supabase = createClient();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
    landmark: "",
    deliveryInstructions: "",
    status: "Pending",
  });

  const {
    state: {
      items,
      total,
      location: { deliveryCharges, orderType, city, area },
    },
    removeTotalItemFromCart,
    getCartTotal,
    clearCart,
    setCompleteOrder,
  } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  // const onSubmit = async (data) => {
  //   try {
  //     setLoading(true);
  //     await axios
  //       .post("/api/order", {
  //         ...order,
  //         ...data,
  //         items,
  //         total,
  //         grandTotal: deliveryCharges + total,
  //         deliveryCharges,
  //         orderType,
  //         city,
  //         area,
  //       })
  //       .then((finalData) => setCompleteOrder(finalData))
  //       .then(() => toast.success("Your Order has Been Submitted"))
  //       .then(() => {
  //         setLoading(false);
  //         setTimeout(() => {
  //           router.push("/confirm");
  //         }, 3000);
  //       });
  //   } catch (error) {
  //     toast.error("There was a problem proceeding. Please try again");
  //     setTimeout(() => {
  //       setLoading(false);
  //       router.push("/");
  //     }, 3000);
  //   }
  // };

  const onSubmitSupabase = async (data1) => {
    try {
      setLoading(true);
      // const { data: data2, error: error2 } = await supabase.auth
      //   .signUp({
      //     email: data1.email,
      //     password: "12345678910",
      //   })
      const { data, error } = await supabase
        .from("restaurantOrder")
        .insert({
          ...order,
          ...data1,
          items,
          total,
          grandTotal: deliveryCharges + total,
          deliveryCharges,
          orderType,
          city,
          area,
          // customer_id: data2.user.id,
        })
        .select();
      await setCompleteOrder({ data: data[0] })
        .then(() => toast.success("Your Order has Been Submitted"))
        .then(() => {
          setLoading(false);
          setTimeout(() => {
            router.push("/confirm");
          }, 3000);
        });
    } catch (error) {
      toast.error("There was a problem proceeding. Please try again");
      setTimeout(() => {
        setLoading(false);
        router.push("/");
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitSupabase)}>
      <div className="max-w-[600px] min-w-48 px-4 mx-auto mb-28">
        <Link href="/">
          <Image
            className="mt-6 rounded-lg w-screen h-32 object-cover flex justify-center items-center"
            src={logo}
            alt="Shoes"
            width={0}
            height={0}
            sizes="100"
            priority
          />
        </Link>
        <div className="my-6 border rounded-2xl bg-gray-50">
          <div className="flex flex-col justify-center items-center">
            <h1 className="pt-4 px-4 text-sm font-semibold ">
              This is a
              <span className="font-bold text-sm ml-1 uppercase">{orderType} ORDER</span>
            </h1>
            <h3 className="text-sm font-semibold">
              Please enter your complete details:
            </h3>
          </div>
          <div className="flex flex-col p-2 mx-2 mt-8">
            <label
              className="text-xs font-semibold mb-1 text-gray-900"
              htmlFor=""
            >
              Full Name
            </label>
            <input
              placeholder="Full Name"
              {...register("fullName")}
              className="border-gray-300 border p-3 rounded-lg outline-none shadow-lg hover:bg-gray-100 hover:shadow-none hover:z-0 text-xs font-normal hover:border-0"
            />
            <p className="text-red-500 text-xs mt-1 pl-3 font-semibold">
              {errors.fullName?.message}
            </p>
          </div>
          <div className="flex flex-col p-2 mx-2 my-1">
            <label
              className="text-xs font-semibold mb-1 text-gray-900"
              htmlFor=""
            >
              Mobile Number
            </label>
            <input
              type="number"
              placeholder="03xxxxxxxxx"
              {...register("phoneNumber")}
              className="border-gray-300 border p-3 rounded-lg outline-none shadow-lg hover:bg-gray-100 hover:shadow-none hover:z-0 text-xs font-normal hover:border-0"
            />
            <p className="text-red-500 text-xs mt-1 pl-3 font-semibold">
              {errors.phoneNumber?.message}
            </p>
          </div>
          <div className="flex flex-col p-2 mx-2 my-1">
            <label
              className="text-xs font-semibold mb-1 text-gray-900"
              htmlFor=""
            >
              Delivery Address
            </label>
            <input
              placeholder="Delivery Address"
              {...register("address")}
              className="border-gray-300 border p-3 rounded-lg outline-none shadow-lg hover:bg-gray-100 hover:shadow-none hover:z-0 text-xs font-normal hover:border-0"
            />
            <p className="text-red-500 text-xs mt-1 pl-3 font-semibold">
              {errors.address?.message}
            </p>
          </div>
          <div className="flex flex-col p-2 mx-2 my-1">
            <label
              className="text-xs font-semibold mb-1 text-gray-900"
              htmlFor=""
            >
              Email Address
            </label>
            <input
              placeholder="Email Address"
              {...register("email")}
              className="border-gray-300 border p-3 rounded-lg outline-none shadow-lg hover:bg-gray-100 hover:shadow-none hover:z-0 text-xs font-normal hover:border-0"
            />
            <p className="text-red-500 text-xs mt-1 pl-3 font-semibold">
              {errors.email?.message}
            </p>
          </div>
          <div className="flex flex-col p-2 mx-2 my-1">
            <label
              className="text-xs font-semibold mb-1 text-gray-900"
              htmlFor=""
            >
              Nearest Landmark
            </label>
            <input
              placeholder="famous nearby place"
              {...register("landmark")}
              className="border-gray-300 border p-3 rounded-lg outline-none shadow-lg hover:bg-gray-100 hover:shadow-none hover:z-0 text-xs font-normal hover:border-0"
            />
            <p className="text-red-500 text-xs mt-1 pl-3 font-semibold">
              {errors.landmark?.message}
            </p>
          </div>
          <div className="flex flex-col p-2 mx-2 my-1">
            <label
              className="text-xs font-semibold mb-1 text-gray-900"
              htmlFor=""
            >
              Delivery Instructions
            </label>
            <input
              {...register("deliveryInstructions")}
              className="border-gray-300 border p-3 rounded-lg outline-none shadow-lg hover:bg-gray-100 hover:shadow-none hover:z-0 text-xs font-normal hover:border-0"
            />
            <p className="text-red-500 text-xs mt-1 pl-3 font-semibold">
              {errors.deliveryInstructions?.message}
            </p>
          </div>
        </div>
        <div className="mt-6 border rounded-2xl bg-gray-50 px-2">
          {items.map(({ id, name, quantity, price }) => {
            return (
              <div
                key={id}
                className="mt-2 flex justify-between border-b-2 border-gray-200 p-2"
              >
                <div className="text-xl text-black font-light flex flex-col justify-start items-start">
                  <span>
                    {quantity}x {name}
                  </span>
                  <span
                    onClick={() => {
                      removeTotalItemFromCart(id);
                      getCartTotal();
                    }}
                    className="font-semibold text-sm text-indigo-500"
                  >
                    Remove
                  </span>
                </div>
                <div>
                  <div className="flex flex-col justify-between items-end text-right">
                    <div className="text-black text-lg">Rs. {price}</div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <span className="text-black font-light text-lg">Total</span>
              <span className="text-black font-light text-lg">
                Rs. {total || 0}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-black font-light text-lg">
                Delivery Charges
              </span>
              <span className="text-black font-light text-lg">
                Rs. {deliveryCharges}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-black font-light text-lg">Grand Total</span>
              <span className="text-black font-light text-lg">
                Rs. {total + deliveryCharges || 0}
              </span>
            </div>
            <div className="flex justify-center items-center flex-col">
              <button
                type="submit"
                className="btn bg-red-500 text-white mt-10 px-10"
              >
                Submit Order
                {loading && (
                  <span className="loading loading-bars loading-md"></span>
                )}
              </button>
            </div>
            <Link
              href="/"
              className="text-blue-700 font-semibold my-2  flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 inline-flex text-blue-700"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">go back to cart</span>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};
export const dynamic = "force-dynamic";

export default CheckOutPage;
