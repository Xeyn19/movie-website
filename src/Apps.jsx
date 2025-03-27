import React from 'react'
import Card from './assets/components2/Card';
import Profile from './assets/components2/Profile';

const Apps = () => {
  return (
    <>
      <div className='flex justify-center flex-col items-center min-h-screen bg-slate-200 max-md:p-10 py-5'>
        <div className='w-[300px] bg-white rounded-md max-md:rounded-2xl shadow-md text-center max-md:w-full max-md:px-10'>
          <br />
          <Card title="Star Wars" author={{author:"Edgar Orosa"}} />
          <Profile name="Edgar Orosa" size={200}/>
          <br />
          <Card title="Wednesday" author={{author:"Vhana Vergara"}} />
          <Card title="The Lion King"/>
        </div>
      </div>
    </>
   
  )
}

export default Apps