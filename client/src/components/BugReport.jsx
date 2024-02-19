import { Fragment, useState } from "react";
import { BugAntIcon } from "@heroicons/react/24/outline";

export default function BugReport() {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <BugAntIcon className="h-8 w-8 text-red-400" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <form action="#" className="relative">
          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-red-600">
            <label htmlFor="report" className="sr-only">
              Report a bug
            </label>
            <textarea
              rows={3}
              name="report"
              id="report"
              className="block w-full resize-none border-0 bg-transparent py-1.5 px-2 text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Report a bug..."
              defaultValue={""}
            />

            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-gray-200 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
