"use client";
import { useContext, useEffect, useState } from "react";
import { Context as CartContext } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import Pot from "@/public/pot.gif";
import { FaCreditCard } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import logo from "@/public/logo2.png";
import axios from "axios";
import { createClient } from "@/app/utils/supabase/client";

const ConfirmationPage = () => {
  const {
    state: {
      order: { data },
    },
  } = useContext(CartContext);

  // const [serverSideData, setServerSideData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const getServerData = async () => {
  //   try {
  //     const orderData = await axios.get(`/api/order/${data.id}`);
  //     setServerSideData(orderData.data);
  //     axios.post("/api/email", orderData.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getServerData();
  // }, []);

  const supabase = createClient();
  const [newInvoices, setNewInvoices] = useState([]);
  const [serverSideData, setServerSideData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getInvoices = async () => {
    try {
      const { data: restaurantOrder } = await supabase
        .from("restaurantOrder")
        .select("*")
        .eq("id", data.id);
      setServerSideData(restaurantOrder[0]);
      await axios.post("/api/email", restaurantOrder[0]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const subscribeToChanges = async () => {
    supabase
      .channel("supabase_realtime")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "restaurantOrder" },
        (payload) => {
          setNewInvoices(payload);
        }
      )
      .subscribe();
  };

  subscribeToChanges();

  useEffect(() => {
    getInvoices();
  }, [newInvoices]);

  const {
    id,
    fullName,
    phoneNumber,
    address,
    email,
    landmark,
    deliveryInstructions,
    status,
    deliveryCharges,
    orderType,
    city,
    area,
    items,
    total,
    grandTotal,
    createdAt,
    accepted,
  } = serverSideData || [];

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center mx-auto">
        <span className="loading loading-dots loading-lg bg-red-500" />
      </div>
    );

  return (
    <div>
      <Link href="/">
        <Image
          className="w-screen my-1 h-36 object-cover flex justify-center items-center bg-white"
          src={logo}
          alt="Shoes"
          width={100}
          height={0}
          sizes="100"
          priority
        />
      </Link>
      <div className="max-w-[700px] min-w-48 px-4 pb-4 mx-auto bg-gray-100  rounded-lg">
        <div className="flex justify-end items-center h-60 flex-col mb-16">
          <Image src={Pot} alt="" />
          <span>Your order is being prepared</span>
        </div>
        <div className="bg-white flex flex-col rounded-2xl px-3 font-semibold text-lg text-gray-700 py-2 my-4">
          <div className="border-b-2 py-2 flex items-center">
            Your Order is
            {!accepted ? (
              <span className="badge bg-red-400 p-3 rounded-lg text-white font-semibold ml-1 text-md">
                Pending
              </span>
            ) : (
              <span className="badge bg-green-500 p-3 rounded-lg text-white font-semibold ml-1 text-md">
                Accepted
              </span>
            )}
            <div className="blob inline-block" />
          </div>
          <div className="py-2">Order No: {id}</div>
        </div>
        <div className="bg-white flex flex-col rounded-2xl px-3 font-semibold text-lg text-gray-700 py-2 my-4">
          <div className="border-b-2 py-2 text-2xl flex justify-start items-center">
            <FaLocationDot className="text-red-500" />
            <span className="ml-1">Order Information</span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2 text-wrap gap-2">
            <span>Customer Name</span>
            <span className="font-bold">{fullName}</span>
          </div>
          <div className="grid grid-cols-2 justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2 text-wrap gap-2">
            <span>Delivery Address</span>
            <span className="text-right font-bold text-xs">
              {address}, {area}, {city}
            </span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2">
            <span>Type</span>
            <span className="font-bold">{orderType}</span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2 ">
            <span>Mobile Number</span>
            <span className="font-bold">{phoneNumber}</span>
          </div>
          <div className="grid grid-cols-2 justify-between text-gray-800 font-light text-sm items-center  p-2 text-wrap gap-2">
            <span>Order Date</span>
            <span className="text-right font-bold ">
              {new Date(createdAt).toUTCString()}
            </span>
          </div>

          <div className="border-b-2 mt-4 py-2 text-2xl flex justify-start items-center">
            <FaCreditCard className="text-red-500" />
            <span className="ml-2">Payment</span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2">
            <span>Total</span>
            <span className="font-bold">Rs. {total}</span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2">
            <span>Delivery Fee</span>
            <span className="font-bold">Rs. {deliveryCharges}</span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2">
            <span>Grand Total</span>
            <span className="font-bold">Rs. {grandTotal}</span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center p-2">
            <span>Payment Type</span>
            <span className="font-bold">Cash</span>
          </div>
          <div className="border-b-2 mt-4 py-2 text-2xl flex justify-start items-center">
            <FaCartShopping className="text-red-500" />
            <span className="ml-2">Product</span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center p-2">
            <div className="overflow-x-auto rounded-lg">
              <table className="table w-fit flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2">
                {/* head */}
                <thead className="bg-gray-200">
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {items?.map(({ quantity, price, name, id }) => {
                    return (
                      <tr className="font-bold" key={id}>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>Rs. {price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col p-4 text-nowrap">
          <h1 className="font-extrabold text-xl">Need Help?</h1>
          <span className="text-xs mt-2">
            Questions regarding your order?
            <span className="ml-1 font-bold text-xs">
              Call us: 021-111-555-555
            </span>
          </span>
          <button className="mt-6 btn bg-red-500 text-white font-light">
            <Link href="/">Place another order</Link>
          </button>
          <div className="mt-8">
            <span className="font-medium">POWERED BY</span>
            <span className="underline ml-1 font-extrabold">
              Usama Bhakrani
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmationPage;
