import React from 'react'
import signature from '../image/signature_pandadoc.png'
import Image from 'next/image'
const Contact = () => {
  return (
   <section className='py-10'>
    <Image src={signature} alt='signature' width={200} height={300}/>

   </section>
  )
}

export default Contact