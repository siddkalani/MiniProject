import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeFromCart } from "../../store/slices/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [bookingMessage, setBookingMessage] = useState(""); // State for booking confirmation

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleBookPackage = (id) => {
    // Simulate booking action
    setBookingMessage("Your health package has been successfully booked!");

    // Remove the booked package from the cart
    dispatch(removeFromCart(id));

    // Optionally, clear the booking message after a few seconds (e.g., 3 seconds)
    setTimeout(() => {
      setBookingMessage("");
    }, 3000);
  };

  return (
    <section className="cart-page bg-[#F8F9FC] lg:pt-[var(--section-padding)] pb-[var(--section-padding)]">
      <div className="container-custom flex flex-col gap-[5rem] items-center">
        <h2 className="text-3xl font-bold">Your Cart</h2>

        {/* Display booking confirmation message */}
        {bookingMessage && (
          <div className="w-[90%] bg-green-100 text-green-700 p-4 rounded-md">
            {bookingMessage}
          </div>
        )}

        <div className="w-[90%] max-h-[500px] rounded-xl flex flex-col gap-3 overflow-y-auto">
          {cartItems.length > 0 ? (
            cartItems.map((hospital) => (
              <div
                key={hospital._id}
                className="w-full h-[200px] border border-black rounded-md p-4"
              >
                <h3>{hospital.name}</h3>
                <p>City: {hospital.city}</p>
                <p>Treatment: {hospital.treatment}</p>
                <p>Budget: {hospital.budget}</p>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleRemoveFromCart(hospital._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Remove from Cart
                  </button>

                  <button
                    onClick={() => handleBookPackage(hospital._id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >
                    Book Package
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No items in the cart</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartPage;
