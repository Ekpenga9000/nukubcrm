import React from 'react';
import Image from 'next/image';
import CRM from "@/public/images/crm.png";

const Crmexplanation = () => {
  return (
      <section className='lg:flex justify-center items-center gap-4'>
          <div className='w-full lg:w-1/2'>
              <Image src={CRM} alt={"CRM explanations"} style={{
                  height:"100%", width:"100%", objectFit:"cover"
              }}/>  
          </div>
          <div className=''>
              <h2 className='text-4xl font-semibold'>Stages of Sales Cycle</h2>
              <p>Customer relationship management</p>
          </div>
    </section>
  )
}

export default Crmexplanation