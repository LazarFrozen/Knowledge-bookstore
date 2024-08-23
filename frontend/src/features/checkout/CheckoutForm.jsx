import { useLocation, useNavigate } from "react-router-dom";
import { addToOrders } from "../../services/apiOrders";

function CheckoutForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || {
    cartItems: [],
    totalPrice: 0,
  };

  return (
    <form
      onSubmit={(event) => addToOrders(event, navigate, cartItems, totalPrice)}
      className="mb-10 flex h-formHeight w-formWidth flex-col rounded-lg bg-primaryColor p-8"
    >
      <div className="flex w-full justify-between gap-4">
        <div className="flex w-2/4 flex-col">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name..."
            className="p-2"
            required
          />
        </div>
        <div className="flex w-2/4 flex-col">
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name..."
            className="p-2"
            required
          />
        </div>
      </div>
      <label className="pt-4">Address and street number</label>
      <input
        type="text"
        name="streetAndNumber"
        placeholder="Enter your addres and street number"
        className="p-2"
        required
      />
      <div className="flex w-full justify-between gap-4 pt-4">
        <div className="flex w-2/4 flex-col">
          <label>City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter your city name"
            className="p-2"
            required
          />
        </div>
        <div className="flex w-2/4 flex-col">
          <label>Postal code</label>
          <input
            type="number"
            name="postalCode"
            placeholder="Enter your postal code"
            className="p-2"
            required
          />
        </div>
      </div>
      <div className="flex w-full justify-between gap-4 pt-4">
        <div className="flex w-2/4 flex-col">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            className="p-2"
            required
          />
        </div>
        <div className="flex w-2/4 flex-col">
          <label>Date of birth</label>
          <input
            type="date"
            name="birthDate"
            placeholder="Enter your date of birth"
            className="p-2"
            required
          />
        </div>
      </div>
      <label className="pt-4">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        className="p-2"
        required
      />
      <input
        type="submit"
        value="Order"
        className="mt-5 h-7 w-24 cursor-pointer rounded-md bg-secondaryColor text-white disabled:opacity-75"
      ></input>
      <p className="mt-5">You pay order upon arrival!</p>
    </form>
  );
}

export default CheckoutForm;
