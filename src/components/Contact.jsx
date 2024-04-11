import { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";
import { socials } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { stars } from "../assets";

const Contact = () => {
  const formRef = useRef();
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_API_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs.send(
      import.meta.env.VITE_SERVICE_KEY,
      import.meta.env.VITE_TEMPLATE_KEY,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }
    );
    alert("Message sent successfully");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Section id="contact" className="overflow-hidden text-white">
      {/* Contact Us Heading */}
      <Heading className="mx-auto text-center" title="Contact Us" />

      {/* Social Links and Form */}
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-12">
        {/* Left Section - Social Links */}
        <div className="flex flex-col items-start justify-center pr-8 mb-8">
          {socials.map((social) => (
            <div key={social.id} className="flex items-center mb-4">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src={social.iconUrl}
                  alt={social.title}
                  className="w-8 h-8 mr-2"
                />
                <div>
                  <h4>{social.title}</h4>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Right Section - Form */}
        <form onSubmit={sendEmail} ref={formRef} className="w-full md:w-1/2">
          <input
            type="text"
            value={formData.name}
            name="name"
            placeholder="Your Full Name"
            required
            onChange={changeHandler}
            className="input-field mb-4 bg-transparent text-lg md:text-base md:mb-4 font-bold  border-[0.1rem] md:h-10 hover:text-color-1 "
          />
          <input
            type="email"
            value={formData.email}
            name="email"
            placeholder="Your Email"
            required
            onChange={changeHandler}
            className="input-field mb-4 lg:m-4 bg-transparent text-lg md:text-base md:mb-4 font-bold  border-[0.1rem] md:h-10 hover:text-color-1 "
          />
          <textarea
            name="message"
            value={formData.message}
            rows="7"
            placeholder="Your Message"
            required
            onChange={changeHandler}
            className="input-field mb-4 w-full bg-transparent border-[0.1rem]"
          ></textarea>
          <Button type="submit" className="btn btn-primary">
            Send Message
          </Button>
        </form>
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img
            src={stars}
            className="w-full"
            width={950}
            height={400}
            alt="Stars"
          />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
