import { useState } from "react";

import {
  FolderArrowDownIcon,
  CursorArrowRippleIcon,
  MapIcon
} from "@heroicons/react/20/solid";

import Install from "./Install";
import Controls from "./Controls";
import Roadmap from "./Roadmap";

export default function Info() {
  const [installOpen, setInstallOpen] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);
  const [roadmapOpen, setRoadmapOpen] = useState(false);

  return (
    <div className="bg-gradient-to-t from-gray-950 to-red-950 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8 text-gray-700">
          <h1 className="font-medieval max-w-2xl text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl lg:col-span-2 xl:col-auto">
            Information
          </h1>
          <div className="max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="mt-6 text-xl leading-8 text-gray-200">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas (description of game).
            </p>
            <div className="mt-10 max-w-2xl">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id. (Lore)
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-400">
                <li className="flex gap-x-3">
                  <FolderArrowDownIcon
                    className="mt-1 h-5 w-5 flex-none text-gray-600"
                    aria-hidden="true"
                  />
                  <span>
                    <button
                      className="font-semibold text-red-600"
                      onClick={() => setInstallOpen(true)}
                    >
                      Installation guide
                    </button>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CursorArrowRippleIcon
                    className="mt-1 h-5 w-5 flex-none text-gray-600"
                    aria-hidden="true"
                  />
                  <span>
                    <button
                      className="font-semibold text-red-600"
                      onClick={() => setControlsOpen(true)}
                    >
                      Game controls
                    </button>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <MapIcon
                    className="mt-1 h-5 w-5 flex-none text-gray-600"
                    aria-hidden="true"
                  />
                  <span>
                    <button
                      className="font-semibold text-red-600"
                      onClick={() => setRoadmapOpen(true)}
                    >
                      Roadmap info
                    </button>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <img
            className="place-self-start mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-12 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-8 shadow-lg shadow-red-500 transition duration-300 hover:ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-500 bg-gray-900"
            src="/images/void-barb.webp"
            alt="A warrior in space"
          />
        </div>
        <Install installOpen={installOpen} setInstallOpen={setInstallOpen} />
        <Controls
          controlsOpen={controlsOpen}
          setControlsOpen={setControlsOpen}
        />
        <Roadmap roadmapOpen={roadmapOpen} setRoadmapOpen={setRoadmapOpen} />
      </div>
    </div>
  );
}
