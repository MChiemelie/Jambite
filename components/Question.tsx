'use client';

import React from 'react'

const Question: React.FC = () => {
  return (
    <>
    <div
    className='m-16 md:m-4'
    >
    <h1
    className='font-Bold text-4xl m-4 p-4'>
      Question 1/50
    </h1>
    <p
    className='font-Bold text-4xl m-4 p-4'
    >Where is Nigeria&apos;s Capital?</p>
    <div>
    <input
        id="Lagos"
        className="peer/lagos m-7"
        type="radio"
        name="status"
      />
      <label
      htmlFor="lagos"
      className="peer-checked/lagos:text-sky-500  text-3xl"
      >
      Lagos
      </label>
    </div>
    
    <div>
    <input
        id="Abuja"
        className="peer/Abuja m-7"
        type="radio"
        name="status"
      />
      <label
      htmlFor="Abuja"
      className="peer-checked/lagos:text-sky-500 text-3xl"
      >
      Abuja
      </label>
    </div>

    <div>
    <input
        id="Kano"
        className="peer/kano m-7"
        type="radio"
        name="status"
      />
      <label
      htmlFor="Kano"
      className="peer-checked/kano:text-sky-500 text-3xl"
      >
      Kano
      </label>
    </div>

    <div>
    <input
        id="Onitsha"
        className="peer/onitsha m-7"
        type="radio"
        name="status"
      />
      <label
      htmlFor="Onitsha"
      className="peer-checked/onitsha:text-sky-500 text-3xl"
      >
      Onitsha
      </label>
    </div>

    <div
    className='flex justify-between'>
    <button
    className='m-8 p-4 bg-emerald-900 rounded'>Back</button>
    <button
    className='m-8 p-4 bg-emerald-900 rounded'>Next</button>
    </div>
    </div>
    </>
    
  )
};

export default Question;
