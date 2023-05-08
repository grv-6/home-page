import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  let storeRef = useRef();
  const [store, setstore] = useState(false);
  //   const showStore = () => {};

  useEffect(() => {
    let handler = (e) => {
      console.log(storeRef.current);
      if (!storeRef.current.contains(e.target)) {
        setstore(false);
      }
    };
    document.body.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="w-full px-16 flex justify-between bg-blue-200 py-4">
      <div className="font-semibold text-blue-900 text-2xl">Logo</div>
      <div className="-ml-96">
        <ul className="flex items-center gap-8 text-lg">
          <li>Home</li>
          <li
            onClick={() => setstore(!store)}
            className="relative px-4 cursor-pointer"
            ref={storeRef}
          >
            <div className="flex items-center gap-1">
              <span>Store</span>
              <div className={store ? "rotate-180" : ""}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <ul
              className={
                store
                  ? "flex flex-col absolute top-12 bg-blue-200 left-0 w-fit"
                  : "hidden"
              }
            >
              <li className="border-b border-gray-600 px-4 py-2 w-fit flex hover:bg-blue-300">
                store1
              </li>
              <li className="border-b border-gray-600 px-4 py-2 w-fit flex hover:bg-blue-300">
                store2
              </li>
              <li
                className="border-b border-gray-600 px-4 py-2 w-fit flex relative hover:bg-blue-300"
                id="store3"
              >
                <div className="flex items-center gap-1">
                  <span>Store3</span>
                  <div >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>

                <ul className="">
                  <li className="border-b border-gray-600 py-2 px-3 hover:bg-blue-300">
                    Substore1
                  </li>
                  <li className="border-b border-gray-600 py-2 px-3 hover:bg-blue-300">
                    Substore2
                  </li>
                  <li className="border-b border-gray-600 py-2 px-3 hover:bg-blue-300">
                    Substore3
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search"
          className="rounded focus:outline-blue-400 px-2"
        />
        <button
          type="submit"
          className="border border-red-600 text-red-600 rounded-lg px-3 hover:bg-red-600 hover:text-white"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
