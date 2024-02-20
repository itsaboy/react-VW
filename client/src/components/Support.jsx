import { useState } from "react";

import BugReport from "./BugReport";
import ContactMe from "./ContactMe";
import Donate from "./Donate";

export default function Support() {
  const [contactMeOpen, setContactMeOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <div className="bg-gradient-to-t from-gray-950 to-red-950 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="font-medieval text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">
              Support
            </h2>
            <p className="mt-12 text-xl leading-8 text-gray-200">
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
              euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus
              sit eu in id.
            </p>
            <img
              src="/images/void-king.webp"
              alt="An old king in space"
              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-900 object-cover lg:aspect-auto lg:h-[34.5rem] shadow-lg shadow-red-500 transition duration-300 hover:ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-500"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Support section</h3>
            <BugReport />
            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <button
                onClick={() => setContactMeOpen(true)}
                className="text-sm font-semibold leading-6 text-red-200 hover:text-red-400"
              >
                Contact me <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <button
                onClick={() => setDonateOpen(true)}
                className="text-sm font-semibold leading-6 text-red-200 hover:text-red-400"
              >
                Donate <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <ContactMe
          contactMeOpen={contactMeOpen}
          setContactMeOpen={setContactMeOpen}
        />
        <Donate donateOpen={donateOpen} setDonateOpen={setDonateOpen} />
      </div>
    </div>
  );
}
