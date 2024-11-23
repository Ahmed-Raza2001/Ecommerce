import { Context as CartContext } from "@/app/context/CartContext";
import { useContext } from "react";

const ClearCartModal = () => {
  const { clearCart, getCartTotal } = useContext(CartContext);
  return (
    <>
      <button
        className="btn hidden"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      ></button>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Clear Cart</h3>
          <p className="py-2">Are you sure you want to clear your cart?</p>
          <label htmlFor="" className="flex justify-end items-center mt-4">
            <button
              onClick={() => document.getElementById("my_modal_5").close()}
              className="py-2 px-3 border text-black mx-2 rounded-lg border-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                clearCart();
                getCartTotal();
                document.getElementById("my_modal_5").close();
              }}
              className="py-2 px-3 border text-white mx-2 rounded-lg border-red-500 bg-red-500"
            >
              Delete
            </button>
          </label>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ClearCartModal;
