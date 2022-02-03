import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1 className='text-2xl font-bold tracking-wide my-8'>Halo, User!</h1>
      <div className='w-full bg-yellow-400 p-4 my-5 rounded-md'>
        <h1 className='font-bold mb-4'>Menu Kuis</h1>
        <div className='flex flex-row items-center justify-evenly gap-4'>
          <Link
            to={"/buat"}
            className='h-24 w-full bg-white border-1 border-gray-200 rounded-md'
          >
            <div className='flex flex-col items-center justify-center h-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='36'
                height='36'
                viewBox='0 0 24 24'
                style={{ color: "currentcolor" }}
              >
                <path d='M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z'></path>
              </svg>
              <legend className='text-sm font-bold'>Buat</legend>
            </div>
          </Link>
          <button className='h-24 w-full bg-white border-1 border-gray-200 rounded-md'>
            <div className='flex flex-col items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='36'
                height='36'
                viewBox='0 0 24 24'
                style={{ color: "currentcolor" }}
              >
                <path d='M12 8v5h5v-2h-3V8z'></path>
                <path d='M21.292 8.497a8.957 8.957 0 0 0-1.928-2.862 9.004 9.004 0 0 0-4.55-2.452 9.09 9.09 0 0 0-3.626 0 8.965 8.965 0 0 0-4.552 2.453 9.048 9.048 0 0 0-1.928 2.86A8.963 8.963 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 0 1 1.195-3.913 7.066 7.066 0 0 1 1.891-1.892 7.034 7.034 0 0 1 2.503-1.054 7.003 7.003 0 0 1 8.269 5.445 7.117 7.117 0 0 1 0 2.824 6.936 6.936 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 0 1-2.225 1.501 6.98 6.98 0 0 1-1.313.408 7.117 7.117 0 0 1-2.823 0 6.957 6.957 0 0 1-2.501-1.053 7.066 7.066 0 0 1-1.037-.855l-1.414 1.414A8.985 8.985 0 0 0 13 21a9.05 9.05 0 0 0 3.503-.707 9.009 9.009 0 0 0 3.959-3.26A8.968 8.968 0 0 0 22 12a8.928 8.928 0 0 0-.708-3.503z'></path>
              </svg>
              <legend className='text-sm font-bold'>Riwayat</legend>
            </div>
          </button>
          <button className='h-24 w-full bg-white border-1 border-gray-200 rounded-md'>
            <div className='flex flex-col items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='36'
                height='36'
                viewBox='0 0 24 24'
                style={{ color: "currentcolor" }}
              >
                <path d='M5 22h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5c-1.103 0-2 .897-2 2v15c0 1.103.897 2 2 2zM5 5h2v2h10V5h2v15H5V5z'></path>
                <path d='m11 13.586-1.793-1.793-1.414 1.414L11 16.414l5.207-5.207-1.414-1.414z'></path>
              </svg>
              <legend className='text-sm font-bold'>Kerjakan!</legend>
            </div>
          </button>
        </div>
      </div>
      <div
        className='w-full p-4 my-5 rounded-md'
        style={{ backgroundColor: "#4a1b9d" }}
      >
        <h1 className='font-bold mb-4 text-white'>Riwayat</h1>
        <div className='flex flex-col items-center justify-evenly gap-4 overflow-auto max-h-72'>
          <button className='h-24 w-full bg-white rounded-md p-4 border-1 font-bold text-left border-gray-200'>
            Kuisioner Internal!
          </button>
          <button className='h-24 w-full bg-white rounded-md p-4 border-1 font-bold text-left border-gray-200'>
            Kuisioner Internal!
          </button>
          <button className='h-24 w-full bg-white rounded-md p-4 border-1 font-bold text-left border-gray-200'>
            Kuisioner Internal!
          </button>
          <button className='h-24 w-full bg-white rounded-md p-4 border-1 font-bold text-left border-gray-200'>
            Kuisioner Internal!
          </button>
          <button className='h-24 w-full bg-white rounded-md p-4 border-1 font-bold text-left border-gray-200'>
            Kuisioner Internal!
          </button>
          <button className='h-24 w-full bg-white rounded-md p-4 border-1 font-bold text-left border-gray-200'>
            Kuisioner Internal!
          </button>
          <button className='h-24 w-full bg-white rounded-md p-4 border-1 font-bold text-left border-gray-200'>
            Kuisioner Internal!
          </button>
          <button className='h-24 w-full bg-white rounded-md p-4 border-1 font-bold text-left border-gray-200'>
            Kuisioner Internal!
          </button>
          <button className='h-24 w-full bg-white rounded-md p-4 border-1 font-bold text-left border-gray-200'>
            Kuisioner Internal!
          </button>
          <button className='h-24 w-full bg-white rounded-md p-4 border-1 font-bold text-left border-gray-200'>
            Kuisioner Internal!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
