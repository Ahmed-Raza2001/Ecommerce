import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export const POST = async (request) => {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

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
  } = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_SERVER,
    port: process.env.NEXT_PUBLIC_SMTP_PORT,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: myEmail,
      to: email,
      replyTo: myEmail,
      subject: `Website activity from ${email}`,
      html: `
         <div className="max-w-[700px] min-w-48 px-4 pb-4 mx-auto bg-gray-100  rounded-lg">
        <div className="bg-white flex flex-col rounded-2xl px-3 font-semibold text-lg text-gray-700 py-2 my-4">  
        <div className="py-2">Order No: ${id}</div>
        </div>
        <div className="bg-white flex flex-col rounded-2xl px-3 font-semibold text-lg text-gray-700 py-2 my-4">
          <div className="border-b-2 py-2 text-2xl flex justify-start items-center">
            <FaLocationDot className="text-red-500" />
            <span className="ml-1">Order Information</span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2 text-wrap gap-2">
            <span>Customer Name</span>
            <span className="font-bold">${fullName}</span>
          </div>
          <div className="grid grid-cols-2 justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2 text-wrap gap-2">
            <span>Delivery Address</span>
            <span className="text-right font-bold text-xs">
              ${address}, ${area}, ${city}
            </span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2">
            <span>Type</span>
            <span className="font-bold">${orderType}</span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2 ">
            <span>Mobile Number</span>
            <span className="font-bold">${phoneNumber}</span>
          </div>
          <div className="grid grid-cols-2 justify-between text-gray-800 font-light text-sm items-center  p-2 text-wrap gap-2">
            <span>Order Date</span>
            <span className="text-right font-bold ">
              ${new Date(createdAt).toUTCString()}
            </span>
          </div>

          <div className="border-b-2 mt-4 py-2 text-2xl flex justify-start items-center">
            <FaCreditCard className="text-red-500" />
            <span className="ml-2">Payment</span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2">
            <span>Total</span>
            <span className="font-bold">Rs. ${total}</span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2">
            <span>Delivery Fee</span>
            <span className="font-bold">Rs. ${deliveryCharges}</span>
          </div>
          <div className="flex justify-between text-gray-800 font-light text-sm items-center border-b-2 p-2">
            <span>Grand Total</span>
            <span className="font-bold">Rs. ${grandTotal}</span>
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
                  ${items?.map(({ quantity, price, name, id }) => {
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
        `,
    });
    return NextResponse.json({
      message: "Success: email was sent",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Email not Sent",
      status: 400,
    });
  }
};
