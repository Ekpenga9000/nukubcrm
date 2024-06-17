import React from 'react'; 
import dynamic from 'next/dynamic';
import EmployeeDashboard from '@/components/EmployeeDashboard';

const page = () => {
  return (
      <section>
          <EmployeeDashboard />
    </section>
  )
}

export default page