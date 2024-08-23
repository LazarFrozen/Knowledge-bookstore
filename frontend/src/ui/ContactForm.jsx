import { useState } from "react";
import { onSubmit } from "../services/apiContactForm";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    setIsSubmitting(true);
    await onSubmit(event);
    setIsSubmitting(false);
  }

  return (
    <div>
      <h3 className="text-center text-2xl">
        If you have more questions, contact us through contact form below!
      </h3>
      <form
        onSubmit={handleSubmit}
        className="mb-10 mt-5 flex flex-col rounded-lg bg-primaryColor p-8"
      >
        <div className="flex w-full justify-between gap-4">
          <div className="flex w-2/4 flex-col">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter your first name..."
              className="p-2"
              required
            />
          </div>
          <div className="flex w-2/4 flex-col">
            <label>Last name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter your last name..."
              className="p-2"
              required
            />
          </div>
        </div>
        <label className="pt-4">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address..."
          className="p-2"
          required
        />
        <label from="description" className="pt-4">
          Comment
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Write something..."
          className="h-48 p-2"
          required
        />
        <input
          type="submit"
          value={isSubmitting ? "Submitting..." : "Submit"}
          className="mt-5 h-7 w-24 cursor-pointer rounded-md bg-secondaryColor text-white disabled:opacity-75"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
}

export default ContactForm;
