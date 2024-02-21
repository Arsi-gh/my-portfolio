import React from 'react'

export default function Contact() {
  return (
    <section className='2xl:max-w-screen-2xl max-w-screen-xl mx-auto flex flex-col items-center mt-14'>
        <div className='w-[55rem] bg-white rounded-xl overflow-hidden shadow-2xl flex'>
            <ContactForm/>
            <div className='flex-1 bg-gradient-to-br from-neutral-800 to-neutral-600'></div>
        </div>
    </section>
  )
}

const ContactForm = () => {
    return (
        <form className='w-[35rem] p-4 flex flex-col gap-y-2 text-neutral-800'>
            <label htmlFor="">Write your name</label>
            <input type="text"/>
            <label htmlFor="">Write your email</label>
            <input type="email"/>
            <label htmlFor="">Select category</label>
            <select id="">
                <option value="">meet in person</option>
                <option value="">Project reservation</option>
                <option value="">Found a bug</option>
            </select>
            <label htmlFor="">Write your message</label>
            <textarea id="" className='h-52'></textarea>
            <button className='p-3 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-600 text-white'>Send request</button>
        </form>
    )
}