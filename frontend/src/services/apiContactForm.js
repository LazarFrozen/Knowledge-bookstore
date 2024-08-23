import toast from "react-hot-toast";

// Submitting form
export async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "50d86447-daa1-4493-9619-ee6f5bcc9034");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  }).then((res) => res.json());

  if (res.success) {
    toast.success("Form successfully submitted!");

    event.target.reset();
  }
  if (!res.success) {
    toast.error("Form is not submitted!");
  }
}
