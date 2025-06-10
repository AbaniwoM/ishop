import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className="foot container mx-auto flex items-center justify-between px-4 py-4">
            <Link href="/" className="hover:text-blue-600 font-bold text-[1.5rem]">iShop</Link>
            <div className='flex flex-col'>
            <div className="md:flex space-x-6">
              <Link href="/">Home</Link>
              <Link href="/products" className="hover:text-blue-600">Products</Link>
              <Link href="/checkout" className="hover:text-blue-600">Checkout</Link>
           </div>
           <div className='pt-1'>All rights reserved &copy; 2025</div>
           </div>
           <div className='flex-col'>
              <p>ishop@gmail.com</p>
              <p>+234-111-1111-111</p>
              <p>Victoria Island, Lagos, Nigeria</p>
           </div>
        </div>
    </div>
  )
}
