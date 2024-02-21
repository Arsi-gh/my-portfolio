import { useRefs } from '@/context/refsProvider'
import React , {forwardRef} from 'react'

export default function Services() {
  
  const serviceRef = useRefs().servicesRef

  return (
   <section className='2xl:max-w-screen-2xl max-w-screen-xl mx-auto grid place-items-center p-12 my-12 text-neutral-700'>
    <Title ref={serviceRef}/>
    <div className='w-[60rem] h-[40rem] p-3 grid grid-cols-6 grid-rows-6 gap-3'>
      <div className='bg-white  shadow-lg rounded-xl row-start-1 row-end-4 col-start-1 col-end-3'></div>
      <div className='bg-white  shadow-lg rounded-xl row-start-4 row-end-7 col-start-1 col-end-3'></div>
      <div className='bg-white  shadow-lg rounded-xl row-start-1 row-end-3 col-start-3 col-end-5'></div>
      <div className='bg-white  shadow-lg rounded-xl row-start-3 row-end-5 col-start-3 col-end-5'></div>
      <div className='bg-white  shadow-lg rounded-xl row-start-5 row-end-7 col-start-3 col-end-5'></div>
      <div className='bg-white  shadow-lg rounded-xl row-start-1 row-end-7 col-start-5 col-end-7'></div>
    </div>
   </section>
  )
}

const Title = forwardRef(function PageTitle(props , ref){
  return (
    <h3 ref={ref} className='title mb-12'>Services</h3>
  )
})