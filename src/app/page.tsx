/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/jsx-key */
'use client'
import React from 'react'
// import getProductData from './getProductData';
import StripeCheckOutButton from './Checkout';



export default async function Home() {
  return (
    <>



      <center>
        <h1 className='text-4xl'></h1>
      </center><br /><br />
      <div className="text-center p-10 grid grid-cols-[repeat(2,auto)] justify-center gap-x-10">
        <StripeCheckOutButton />
      </div>
    </>
  )
}

