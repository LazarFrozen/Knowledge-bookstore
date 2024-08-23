import Accordion from "./Accordion";
import Heading from "./Heading";

function ContactFaq() {
  return (
    <div className="mb-10 mt-20 flex flex-col items-center">
      <Heading heading="FAQ" />
      <div className="w-full rounded-lg bg-primaryColor p-4">
        <Accordion
          title="1. What payment methods do you accept?"
          answer="We accept a variety of payment methods including major credit cards (Visa, MasterCard, American Express), PayPal."
        />
        <Accordion
          title="2. What should I do if I receive a damaged or incorrect item?"
          answer="If you receive a damaged or incorrect item, please contact our customer service team immediately. Provide your order number and details about the issue, and we will arrange for a replacement or a refund."
        />
        <Accordion
          title="3. Can I order books that are out of stock or not listed on your website?"
          answer="If a book is out of stock or not listed on our website, please contact us with the details. We will do our best to source the book for you or provide an estimated restock date."
        />
        <Accordion
          title="4. How can I contact customer service?"
          answer="Our customer service team is available to assist you. You can reach us via email at Knowledgebookstore@support.com or through our online contact form on the Contact page."
        />
        <Accordion
          title="5. Can I cancel or modify my order after it has been placed?"
          answer="If you need to cancel or make changes to your order, please contact our customer service team as soon as possible. We will do our best to accommodate your request if the order has not yet been processed."
        />
      </div>
    </div>
  );
}

export default ContactFaq;
