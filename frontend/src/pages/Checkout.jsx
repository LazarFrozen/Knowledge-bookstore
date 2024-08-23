import CheckoutData from "../features/checkout/CheckoutData";
import CheckoutForm from "../features/checkout/CheckoutForm";

function Checkout() {
  return (
    <section className="mb-10 mt-16 flex justify-center gap-10">
      <CheckoutForm />
      <CheckoutData />
    </section>
  );
}

export default Checkout;
