import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Does BlueSky accept insurance?",
        answer: "Yes, use your  Blue Cross Blue Shield, Cigna, Aetna, Optum, and United Healthcare insurance plans to cover treatmen from licensed BlueSky mental health care providers.or you can pay out-of-pocket.",
  },
 
  {
      question: "Does BlueSky have in-person and virtual appointments available? ",
    answer:
      "ABlueSky is 100% online. All psychiatric evaluations and appointments are conducted via online video telehealth sessions.",
  },
  {
      question: "What states does BlueSky provide psychiatric care? ",
    answer:
      "BlueSky serves patients in 12 states: Arizona, Colorado, Connecticut,Kentucky, Illinois, Maryland, Massachusetts,  Minnesota, New Mexico, North Carolina, Ohio, Oregon, Texas, and Washington.",
  },
];

export default Faq;