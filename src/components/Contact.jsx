import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z98kpf6", "template_jwhxnpk", form.current, {
        publicKey: "2BoY3ZncUyZD-3GWC",
      })
      .then(
        () => {
          console.log("SUCCESS");
        },
        (error) => {
          console.log("Failled...", error.text);
        }
      );
  };
  return (
    <div className="bg-primary-200 w-full py-20 text-secondary-100  self-center text-special">
      <div className="max-w-[1440px] mx-5 lg:mx-auto lg:px-5 ">
        <h1 className="text-center  text-heading-3">Have an Idea</h1>
        <h1 className="text-center text-heading-3">
          Let's work together to realize
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex my-10 gap-4">
            <input
              className="border-b border-secondary-300 w-full py-1 bg-transparent"
              placeholder=" First Name"
              type="text"
              name="first_name"
            />
            <label htmlFor="Name" />
            <input
              className="border-b border-secondary-300 w-full py-1 bg-transparent "
              placeholder="Last Name"
              name="last_name"
            />
          </div>
          <input
            className="border-b border-secondary-300 w-full py-1 bg-transparent mb-10"
            placeholder="Email"
            name="user_email"
          />
          <input
            className="border-b border-secondary-300 w-full py-1 bg-transparent mb-10"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="border-b border-secondary-300 w-full py-1 bg-transparent mb-10 pb-20 resize-none overflow-hidden"
            name="message"
            placeholder="Message"
          />
          <div className="w-full flex items-center justify-center">

          <button type="submit" value="Send" className="w-fit mx-auto bg-secondary-100 text-secondary-800 px-5 py-2.5 rounded-full text-lg md:text-xl my-20 md:px-10 md:py-5" >
            Send Message
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
