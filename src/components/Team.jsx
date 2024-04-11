import { useState } from "react";
import Heading from "./Heading";
import Section from "./Section";
import Footer from "./Footer";
import { teamSocials } from "../constants";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import { stars } from "../assets";

const Team = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Link
        to="/"
        className="flex items-center text-color-5 mt-4 ml-4 text-lg lg:ml-10 lg:mb-2"
      >
        <RiArrowLeftLine className="w-12 h-12  hover:text-color-2" />
      </Link>
      <Section>
        <div className="container mx-auto py-12">
          <Heading title="Our Team" id="founders" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {teamSocials.map((founder) => (
              <div
                key={founder.id}
                className="bg-gray-800 border-[0.1rem] p-5 rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 relative"
              >
                <img
                  src={founder.imageUrl}
                  alt={founder.name}
                  className="object-cover w-26 h-28 mx-auto my-auto rounded-full"
                />
                <div className="p-6">
                  <h3 className="text-white text-lg font-semibold mb-2 text-center">
                    {founder.name}
                  </h3>
                  <div className="highlighted-header">
                    <p className="text-gray-100 font-extralight">
                      {founder.jobTitle}
                    </p>
                  </div>
                  <p className="text-gray-300 text-center">
                    {showFullDescription
                      ? founder.description
                      : `${founder.description
                          .split(" ")
                          .slice(0, 50)
                          .join(" ")}${
                          founder.description.split(" ").length > 50
                            ? "..."
                            : ""
                        }`}
                    {founder.description.split(" ").length > 50 && (
                      <span
                        className="text-color-1 cursor-pointer"
                        onClick={toggleDescription}
                      >
                        {showFullDescription ? " Read Less" : " Read More"}
                      </span>
                    )}
                  </p>
                  <div className="flex justify-center mt-4">
                    {founder.social.map((link) => (
                      <a
                        key={link.title}
                        href={link.url}
                        className=" mr-4 flex items-center transition duration-300 ease-in-out transform hover:scale-150"
                      >
                        <img
                          src={link.iconUrl}
                          alt={link.title}
                          className="w-8 h-8 mr-1 bg-white rounded-xl"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Footer className="mt-auto" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <img src={stars} className="w-full h-full" alt="Stars" />
      </div>
    </div>
  );
};

export default Team;
