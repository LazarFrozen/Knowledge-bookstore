import ContactFaq from "../ui/ContactFaq";
import ContactForm from "../ui/ContactForm";

function Contact() {
  return (
    <section className="flex w-2/3 flex-col items-center justify-center">
      <ContactFaq />
      <ContactForm />
    </section>
  );
}

export default Contact;
