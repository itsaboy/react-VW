import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-red-950">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-red-950 to-gray-950 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-gradient-to-b from-gray-800 to-gray-950 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="font-medieval max-w-2xl text-4xl font-bold tracking-tight text-gray-400 sm:text-6xl lg:col-span-2 xl:col-auto">
              Void Warrior
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-200">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt
                sunt. Qui irure qui lorem cupidatat commodo.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/downloads"
                  className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Download
                </Link>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-400"
                >
                  Changelog <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              src="/images/void-warrior.webp"
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 shadow-lg shadow-red-500 transition duration-300 hover:ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-red-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
