import React from "react";

function Navbar() {
  return (
    <>
      <div
        className='w-full h-24 p-4 rounded-b-md'
        style={{ backgroundColor: "#4a1b9d" }}
      >
        <div className='w-full flex flex-row justify-between items-center gap-2 h-full'>
          <div className='text-2xl font-bold text-white w-full'>Kuisioner!</div>
          <div className='w-full flex flex-row gap-6 justify-end items-center text-white'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='44'
                height='44'
                style={{ fill: "currentcolor" }}
              >
                <path d='M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z'></path>
                <path d='M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
