import Section from "./Section";
import { stars } from "../assets";
import Heading from "./Heading";
// import { LeftLine, RightLine } from "./design/Pricing";

const About = () => {
  return (
    <Section className="overflow-hidden" id="about">
      <div className="container relative z-2">
        <div className="relative justify-center mb-[2rem] lg:flex">
          <Heading title="About Us" />
          <div
            className="relative mt-[2rem] 
          lg:absolute lg:mt-[6rem]"
          >
            <p className="color-n-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              suscipit quod voluptates?
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

        <Heading
          tag="Get started with EQuality"
          title="Make Preparation Easy."
        />

        <div className="relative">
          {/* <LeftLine />
          <RightLine /> */}
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default About;
