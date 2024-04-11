import Section from "./Section";
import { stars } from "../assets";
import Heading from "./Heading";
import { Link } from "react-router-dom";
// import { LeftLine, RightLine } from "./design/Pricing";

const About = () => {
  return (
    <Section className="overflow-hidden" id="about">
      <div className="container relative z-2">
        <div className="relative justify-center mb-[2rem] lg:flex">
          <Heading className="mx-auto text-center" title="About" />\
          <div
            className="relative mt-[2rem] 
          lg:absolute lg:mt-[6rem]"
          >
            <p className="color-n-4 text-center">
              {`Hey there, fellow knowledge seeker! 🚀 Our grand mission? To whisk
              you away from the dull, dusty textbooks and guide you toward the
              shining realm of skills and innovation! 🌟 Forget the nail-biting
              stress of cramming for semester exams – we've got your back on
              that front! 📚 Our secret sauce? We sprinkle just the right amount
              of exam prep magic to keep your academic journey smooth sailing.
              So, hop aboard the learning train, friend! The adventure awaits!
              🚂💨`}
            </p>
          </div>
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

        <div className="relative">
          {/* <LeftLine />
          <RightLine /> */}
        </div>

        <div className="flex justify-center mt-20">
          <Link
            className="text-sm font-code font-bold tracking-wider uppercase border-b"
            to="/founders"
          >
            {`Our Team->`}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default About;
