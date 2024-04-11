import { useState } from "react";
import { Link } from "react-router-dom";
import { check } from "../assets";
import {
  branchContent,
  subjectContent,
  university,
  universityContent,
} from "../constants";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";
import { RiArrowLeftLine } from "react-icons/ri";
import { RiArrowDownLine } from "react-icons/ri";
import Footer from "./Footer";

const SelectUniversity = () => {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [noSubjectsWarning, setNoSubjectsWarning] = useState(false);

  const handleReset = () => {
    setSelectedUniversity("");
    setSelectedBranch("");
    setSelectedSubject("");
    setSubmitted(false);
    setErrors({});
    setNoSubjectsWarning(false); // Clear the warning message
  };

  const handleSubmit = () => {
    // Form validation
    const errors = {};
    if (!selectedUniversity) {
      errors.university = true;
    }
    if (!selectedBranch) {
      errors.branch = true;
    }
    if (!selectedSubject) {
      errors.subject = true;
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Form submission logic
    setSubmitted(true);
  };

  const handleUniversityChange = (value) => {
    setSelectedUniversity(value);
    setSelectedBranch(""); // Reset branch when university changes
    setErrors((prevErrors) => ({ ...prevErrors, university: false }));
    setNoSubjectsWarning(false); // Reset warning message
    setSelectedSubject(""); // Reset selected subject when university changes
  };

  const handleBranchChange = (value) => {
    setSelectedBranch(value);
    setErrors((prevErrors) => ({ ...prevErrors, branch: false }));

    // Check if there are no subjects for the selected university and branch
    const subjects = getSubjectsForUniversityAndBranch(
      selectedUniversity,
      value
    );
    setNoSubjectsWarning(subjects.length === 0); // Show warning message if no subjects available
    setSelectedSubject(""); // Reset selected subject when branch changes
  };

  const handleSubjectChange = (value) => {
    setSelectedSubject(value);
    setErrors((prevErrors) => ({ ...prevErrors, subject: false }));
  };

  // Function to filter subjects based on selected university and branch
  const getSubjectsForUniversityAndBranch = (university, branch) => {
    return subjectContent.filter(
      (subject) =>
        subject.university === university && subject.branch === branch
    );
  };

  // Check if all forms are filled and subjects are available
  const allFormsFilled =
    selectedUniversity &&
    selectedBranch &&
    selectedSubject &&
    !noSubjectsWarning;

  return (
    <div className="flex flex-col min-h-screen">
      <Link
        to="/"
        className="flex items-center text-color-5 mt-4 ml-4 text-lg lg:ml-10 lg:mb-2"
      >
        <RiArrowLeftLine className="w-12 h-12  hover:text-color-2" />
      </Link>
      <Section id="#selectuniversity" crosses>
        <div className="container lg:flex">
          <div className="lg:w-1/2 mr-8">
            <Heading
              title="Prepare for Your University Exam"
              className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            />
            <ul className="max-w-[22rem] mb-10 md:mb-14">
              {university.map((item) => (
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
          </div>

          <div className="lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start bg-primary-50 p-8 rounded-lg">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Select Options
              </h2>
              <select
                className={`text-lg md:text-base font-code w-full m-[0.5rem] md:mb-4 font-bold tracking-wider uppercase border-[0.1rem] h-10 md:h-12 hover:text-color-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.university ? "border-red-500" : ""
                }`}
                value={selectedUniversity}
                onChange={(e) => handleUniversityChange(e.target.value)}
              >
                <option disabled value="" selected={!selectedUniversity}>
                  {errors.university
                    ? "Please select a university"
                    : "Select University"}
                </option>
                {universityContent.map((uni) => (
                  <option key={uni.id} value={uni.title}>
                    {uni.title}
                  </option>
                ))}
              </select>
              <RiArrowDownLine className="w-8 h-8 text-primary-500 mx-auto my-4" />
              <select
                className={`text-lg md:text-base font-code w-full m-[0.5rem] md:mb-4 font-bold tracking-wider uppercase border-[0.1rem] h-10 md:h-12 hover:text-color-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.branch && !selectedBranch ? "border-red-500" : ""
                }`}
                value={selectedBranch}
                onChange={(e) => handleBranchChange(e.target.value)}
              >
                <option disabled value="" selected={!selectedBranch}>
                  {errors.branch && !selectedBranch
                    ? "Please select a branch"
                    : "Select Branch"}
                </option>
                {selectedUniversity &&
                  branchContent
                    .filter(
                      (branch) => branch.university === selectedUniversity
                    )
                    .map((branch) => (
                      <option key={branch.id} value={branch.title}>
                        {branch.title}
                      </option>
                    ))}
              </select>
              <RiArrowDownLine className="w-8 h-8 text-primary-500 mx-auto my-4" />
              <select
                className={`text-lg md:text-base font-code w-full m-[0.5rem] md:mb-4 font-bold tracking-wider uppercase border-[0.1rem] h-10 md:h-12 hover:text-color-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.subject && !selectedSubject ? "border-red-500" : ""
                }`}
                value={selectedSubject}
                onChange={(e) => handleSubjectChange(e.target.value)}
                disabled={noSubjectsWarning}
              >
                {noSubjectsWarning && (
                  <option disabled value="">
                    No subjects Available
                  </option>
                )}
                <option disabled value="" selected={!selectedSubject}>
                  {errors.subject && !selectedSubject
                    ? "Please select a subject"
                    : "Select Subject"}
                </option>
                {selectedUniversity &&
                  selectedBranch &&
                  getSubjectsForUniversityAndBranch(
                    selectedUniversity,
                    selectedBranch
                  ).map((subject) => (
                    <option key={subject.id} value={subject.title}>
                      {subject.title}
                    </option>
                  ))}
              </select>
              <div className="text-red-500 text-sm mt-2">
                {noSubjectsWarning &&
                  "No subjects available for the selected university and branch"}
              </div>
              <div className="flex flex-col md:flex-row items-center md:gap-2 mt-6">
                <Button
                  className="w-full md:w-auto"
                  onClick={handleSubmit}
                  disabled={!allFormsFilled}
                >
                  {`Let's Go`}
                </Button>
                <Button
                  white
                  className="w-full md:w-auto mt-4 md:mt-0 md:ml-5"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
              {submitted && <p className="text-green-500 mt-4">Here you go!</p>}
            </div>
          </div>
        </div>
      </Section>
      <Footer className="mt-auto" />
    </div>
  );
};

export default SelectUniversity;
