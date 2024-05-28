import React from 'react';
import Link from 'next/link';

const Newsletter = () => {
  return (
      <section className='bg-slate-200 flex flex-col items-center justify-center py-40'>
          <h2 className='text-4xl font-semibold text-secondary mb-4'>Experience the power of Acme CRM</h2>
          <p className='text-lg text-center text-slate-600'>Sign up for a free trial and see how Acme CRM can help you streamline your sales and marketing processes.</p>
          <form className='flex gap-2 mt-4'>
              <input type="email" id='email' placeholder='Enter your email' className='border rounded text-sm py-2 px-4'/>
              <button className='bg-primary text-white rounded text-sm py-2 px-4'>Start Free Trial</button>
          </form>
          <p className='text-xs text-slate-600 mt-4'>By signing up, you agree to our <span className='text-primary underline'>Terms & Conditions</span></p>
    </section>
  )
}

export default Newsletter;