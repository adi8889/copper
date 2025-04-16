import React from 'react'

const HeroText = () => {
  return (
    <div className="flex flex-col justify-start gap-4">
      <h1 className="text-6xl font-black">
        <span className="text-blue-500">Hono</span>
        <br />
        Web application
        <br />
        framework
      </h1>
      <p className="text-2xl text-slate-400 mt-4">
        Fast, lightweight, built on Web Standards. Support for any JavaScript
        runtime.
      </p>
      <div className="flex flex-row justify-start mt-8 gap-4">
        <button className="btn btn-lg rounded-full bg-blue-500 hover:bg-orange-700">
          Get Started
        </button>
        <button className="btn btn-soft bg-blue-500 btn-lg rounded-full ">
          View on Github
        </button>
      </div>
    </div>
  );
}

export default HeroText