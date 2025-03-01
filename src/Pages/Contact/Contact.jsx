import Header from "../../Components/Header";
import Footer from "../../components/Footer";
import Navigation from "../../Components/Navigation";
import Details from "./Components/Details";
import ContactDetails from "./Components/ContactDetails";
import Form from "./Components/Form";

const Contact = () => {
  return (
    <div>
      <Header />
      <Navigation label="Contact" />
      <div className="flex flex-col p-[20px] gap-[40px] max-w-[1200px] m-auto transition-all transform opacity-0  duration-900 ease-out animate-[fadeInFromBottom_1s_ease-out_forwards]">
        <Details />
        <div className="flex flex-col gap-[40px] lg:flex-row lg:justify-between lg:gap-[100px]">
          <ContactDetails />
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
