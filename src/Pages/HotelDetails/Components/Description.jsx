import React from "react";
import { useApiContext } from "../../../context/ApiContext";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Description = () => {
  const { details, randomPics, savedHotels, setSavedHotels } = useApiContext();
  //handle form
  const [email, setEmail] = useState("");
  const refForm = useRef(null);
  const [isMessage, setIsMessage] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    //email handle
    emailjs
      .sendForm("service_ly0rxnv", "template_46kcd1o", refForm.current, {
        publicKey: "Pihw7RL30d1g_sQBq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEmail("");
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
    <div className="flex flex-col p-[10px] gap-[5px] max-w-[1100px] m-auto">
      <div className="border border-gray-500/50 bg-white w-[150px] h-[49px] flex items-center justify-center">
        <div className="font-sans">Hotel Description</div>
      </div>
      <div className="border border-gray-500/50 bg-white min-w-[290px] font-sans flex flex-col gap-[30px] p-[20px]">
        <p>
          Welcome to {details?.name}, a prime destination for relaxation,
          adventure, and ultimate comfort. Nestled in the heart of the city,
          this modern yet serene property offers a wide range of amenities
          including spacious rooms, stunning views, and world-class service.
          Whether you’re here for business, leisure, or a combination of both,
          Grand Horizon Hotel has everything you need for an unforgettable stay.
          From the moment you walk through our doors, our friendly team will
          ensure that every detail of your stay is taken care of. From signature
          cocktails at the rooftop bar to indulgent meals at our five-star
          restaurant, you will be immersed in a truly exceptional experience.
        </p>

        <p>
          Our rooms are designed with your comfort in mind, featuring sleek
          modern designs and luxurious furnishings. Choose from an array of
          accommodations, including deluxe rooms, suites, and penthouses, each
          equipped with the latest technology, stunning views, and
          state-of-the-art facilities. Enjoy amenities like 24-hour room
          service, high-speed internet, and fully equipped minibars. For those
          who prefer a more active experience, the hotel offers an onsite
          fitness center, an outdoor swimming pool, and guided tours of the
          nearby attractions. The hotel's tranquil atmosphere allows you to
          unwind and recharge, providing a perfect retreat from the hustle and
          bustle of the city.
        </p>
        <img src={details?.image} alt="poolImg" className="min-w-[260px]" />
        <p>
          In addition to our impeccable accommodations, we provide an array of
          services to ensure that your stay is as seamless as possible. From
          concierge services to event hosting, our team is always ready to go
          the extra mile. The Grand Horizon Hotel also boasts impressive meeting
          rooms, perfect for conferences, business meetings, and private events.
          Whether hosting a grand wedding, corporate function, or a more
          intimate gathering, our experienced event coordinators will ensure
          everything runs smoothly. The expansive banquet halls are beautifully
          decorated and can accommodate both small and large groups, with
          customized catering options tailored to your specific needs.
        </p>

        <p>
          For guests looking to explore the local culture, the Grand Horizon
          Hotel is ideally located near many cultural landmarks, shopping
          districts, and entertainment venues. Our hotel is just minutes away
          from the best local attractions, making it an ideal base for tourists.
          Whether you're planning a day of sightseeing or a relaxing afternoon
          in our gardens, the possibilities are endless. At the Grand Horizon
          Hotel, we strive to provide exceptional service and experiences that
          exceed expectations. Book your stay with us today and discover why we
          are the destination of choice for travelers from around the world.
        </p>
        <button
          className={` bg-[#dd3842] text-white rounded-[5px] w-[100px] h-[40px] font-sans hover:cursor-pointer transition-colors duration-300 ease-in-out  hover:bg-white hover:text-black hover:outline hover:outline-gray-500/70`}
          onClick={() => {
            setIsSaved(true);

            setSavedHotels((prev) =>
              prev.some((h) => h.name === details.name)
                ? prev
                : [...prev, details]
            );
            setTimeout(() => {
              setIsSaved(false);
            }, 4000);
          }}
        >
          Save Hotel
        </button>
        <div
          className={`text-[#dd3842] text-[20px] font-sans transition-opacity duration-1000 ease-out ${
            isSaved ? "opacity-100" : "opacity-0"
          } `}
        >
          Hotel Saved!
        </div>
        {/* form */}
        <form
          onSubmit={handleForm}
          ref={refForm}
          className="flex flex-col gap-[20px]"
        >
          <label htmlFor="Email" className="font-[700]">
            Submit your email to learn more about this hotel!
          </label>
          <input type="hidden" name="hotelName" value={details?.name} />
          <input
            type="text"
            placeholder="Email"
            name="Email"
            value={email}
            required
            className="font-sans text-[18px] font-[500] placeholder:font-sans placeholder:text-[18px] placeholder:font-[500] placeholder:text-black border-b border-gray-600/50 pb-[20px] outline-hidden"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className={` bg-[#dd3842] text-white rounded-[5px] w-[100px] h-[40px] font-sans hover:cursor-pointer transition-colors duration-300 ease-in-out  hover:bg-white hover:text-black hover:outline hover:outline-gray-500/70`}
          >
            Submit
          </button>
          <div
            className={`text-[#dd3842] text-[20px] font-sans transition-opacity duration-1000 ease-out ${
              isMessage ? "opacity-100" : "opacity-0"
            } `}
          >
            Email Sent!
          </div>
        </form>
      </div>
    </div>
  );
};

export default Description;
