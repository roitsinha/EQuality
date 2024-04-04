import { check } from "../assets";
import { universityContent, universityText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const SelectUniversity = () => {
  return (
    <Section id="#selectuniversity" crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          {" "}
          <h2 className="h2 mb-4 md:mb-8">Select the Unviersity to Prepare</h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {universityContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {universityText}
          </p>
        </div>
      </div>

      <LeftCurve />
      <RightCurve />
    </Section>
  );
};

export default SelectUniversity;
