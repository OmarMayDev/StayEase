import React from "react";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const formRef = useRef(null);
  //delcare form
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });
  const [isMessage, setIsMessage] = useState(false);

  //handle form onchange
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //handle form submit
  const formSubmit = (e) => {
    e.preventDefault();
    setEmail({
      Name: form.Name,
      Email: form.Email,
      Phone: form.Phone,
      Subject: form.Subject,
      Message: form.Message,
    });
    Object.keys(form).forEach((key) => {
      form[key] = "";
    });

    //email handle
    emailjs
      .sendForm("service_k99id2l", "template_qr8kuew", formRef.current, {
        publicKey: "w-uNRoSkPWafM9G23",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsMessage(true);
          setTimeout(() => {
            setIsMessage(false);
          }, 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-[20px] lg:min-w-[660px]"
      onSubmit={formSubmit}
    >
      <div className="flex flex-col  gap-[20px] sm:grid sm:grid-cols-2">
        <input
          type="text"
          placeholder="Name"
          name="Name"
          value={form.Name}
          required
          className="font-sans text-[18px] font-[500] placeholder:font-sans placeholder:text-[18px] placeholder:font-[500] placeholder:text-black border-b border-gray-600/50 pb-[20px] outline-hidden"
          onChange={handleForm}
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          required
          value={form.Email}
          className="font-sans text-[18px] font-[500]  placeholder:font-sans placeholder:text-[18px] placeholder:font-[500] placeholder:text-black border-b border-gray-600/50 pb-[20px] outline-hidden"
          onChange={handleForm}
        />
        <input
          type="number"
          placeholder="Your Phone"
          name="Phone"
          required
          value={form.Phone}
          className="font-sans text-[18px] font-[500] placeholder:font-sans placeholder:text-[18px] placeholder:font-[500] placeholder:text-black border-b border-gray-600/50 pb-[20px] outline-hidden"
          onChange={handleForm}
        />
        <input
          type="text"
          placeholder="Subject"
          name="Subject"
          required
          value={form.Subject}
          className="font-sans text-[18px] font-[500] placeholder:font-sans placeholder:text-[18px] placeholder:font-[500] placeholder:text-black border-b border-gray-600/50 pb-[20px] outline-hidden"
          onChange={handleForm}
        />
      </div>
      <textarea
        type="text"
        placeholder="Message"
        name="Message"
        required
        value={form.Message}
        className="font-sans text-[18px] font-[500] placeholder:font-sans placeholder:text-[18px] placeholder:font-[500] placeholder:text-black border-b border-gray-600/50 pb-[20px] outline-hidden"
        onChange={handleForm}
      ></textarea>
      <button
        type="submit"
        className="bg-[#dd3842] text-white rounded-[5px] w-[100px] h-[40px] font-sans hover:cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white hover:text-black hover:outline hover:outline-gray-500/70"
      >
        Send
      </button>
      <div
        className={`text-[#dd3842] text-[20px] font-sans transition-opacity duration-1000 ease-out ${
          isMessage ? "opacity-100" : "opacity-0"
        } `}
      >
        Email Sent!
      </div>
    </form>
  );
};

export default Form;
