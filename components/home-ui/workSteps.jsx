import React from 'react'

export default function WorkSteps() {
  return (
    <>
    <h3 className='title'>How job gets done </h3>
    <section className='2xl:max-w-screen-2xl max-w-screen-xl mx-auto my-12 mb-24 flex justify-center gap-4 flex-wrap max-md:px-4'>
      <span className='2xl:w-[45rem] w-[30rem] sm:h-32 transition-all duration-500 hover:bg-gradient-to-r from-zinc-300 to-zinc-200 hover:shadow-xl rounded-tl-[3rem] border border-zinc-300 grid place-items-center text-neutral-600 max-lg:w-[22rem] max-md:w-full max-md:rounded-2xl max-md:p-6'>
        <p className='text-5xl font-extralight max-sm:text-2xl'>1. Research</p>
      </span>
      <span className='2xl:w-[45rem] w-[30rem] sm:h-32 transition-all duration-500 hover:bg-gradient-to-r from-zinc-300 to-zinc-200 hover:shadow-xl rounded-tr-[3rem] border border-zinc-300 grid place-items-center text-neutral-600 max-lg:w-[22rem] max-md:w-full max-md:rounded-2xl max-md:p-6'>
        <p className='text-5xl font-extralight max-sm:text-2xl'>2. Planning</p>
      </span>
      <span className='2xl:w-[45rem] w-[30rem] sm:h-32 transition-all duration-500 hover:bg-gradient-to-r from-zinc-300 to-zinc-200 hover:shadow-xl rounded-bl-[3rem] border border-zinc-300 grid place-items-center text-neutral-600 max-lg:w-[22rem] max-md:w-full max-md:rounded-2xl max-md:p-6'>
        <p className='text-5xl font-extralight max-sm:text-2xl'>3. Develop</p>
      </span>
      <span className='2xl:w-[45rem] w-[30rem] sm:h-32 transition-all duration-500 hover:bg-gradient-to-r from-zinc-300 to-zinc-200 hover:shadow-xl rounded-br-[3rem] border border-zinc-300 grid place-items-center text-neutral-600 max-lg:w-[22rem] max-md:w-full max-md:rounded-2xl max-md:p-6'>
        <p className='text-5xl font-extralight max-sm:text-2xl'>4. Finish</p>
      </span>
    </section>
    </>
  )
}
