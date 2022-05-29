import React from "react";

const GetIntouch = () => {
  return (
    <div className="my-5 bg-base-200 py-10 px-5">
      <h1 className="text-center text-3xl">Get in touch with us_____</h1>
      <form class="w-full max-w-sm mx-auto">
        <div class="flex items-center border-b border-b-slate-900 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div class="flex items-center border-b border-b-slate-900 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div class="flex items-center border-b border-b-slate-900 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div class="flex items-center border-b border-b-slate-900 py-2">
          <textarea
            class="appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="message"
          />
        </div>
      </form>
      <div class="text-center">
        <button class="mx-auto mt-3 btn btn-primary text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default GetIntouch;
