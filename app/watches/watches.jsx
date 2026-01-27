"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { MdLocalFireDepartment } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import Link from 'next/link';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const ProductCardSkeleton = () => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-200">
      {/* Image area */}
      <Box sx={{ position: 'relative', aspectRatio: '1 / 1', bgcolor: 'grey.100' }}>
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height="100%" 
          animation="wave" 
        />
      </Box>

      {/* Content area */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <Skeleton variant="text" width="85%" height={28} />
        
        {/* Price */}
        <Skeleton variant="text" width="50%" height={32} />
        
        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="text" width="60%" height={20} />
        </Box>
        
        {/* Badge / Fire text */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="text" width="70%" height={20} />
        </Box>

        {/* Add to cart button placeholder */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Skeleton variant="circular" width={52} height={52} />
        </Box>

        {/* Preview button area (hidden normally) */}
        <Skeleton variant="rectangular" width="100%" height={44} sx={{ borderRadius: 1 }} />
      </div>
    </div>
  );
};

const Watches = () => {
            const [loading, setLoading] = useState(true);
    
             useEffect(() => {
                const timer = setTimeout(() => {
                  setLoading(false);
                }, 1800); // ~1.8 seconds — feels natural
            
                return () => clearTimeout(timer);
              }, []);
            
            
               // definning how many skeletons to show (match your real grid count)
              const skeletonCount = 10;
  return (
    <main className="min-h-screen bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 xl:px-32 2xl:px-40">
       <div className="max-w-8xl mx-auto">
        {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {loading ? (
             // Show skeletons while loading
            Array.from({ length: skeletonCount }).map((_, index) => (
              <ProductCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
             <>
             <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRvEFMCO0yhqyAwNsYTEz-0vP_0UwhSwTP2lUX89d84gqs0D5ZzseLdMytAagyCGoSElKdXgIQ3TXggUFcOKL-9yquVFjrD2y2_5hJKsw&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Generic - S10 Ultra 22 Full Touch Screen Smart Watch - For Andriod IOS'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 120
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.5 | 100+ sold</p>
              </div>
                <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails1"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>


           <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_PpaLDAonfk_zP0ZHQFf9D9jOxIY04WukowbhLUsOJOGiyj60uoI_ZceXcRyfeEyTZveUawOyeJ1eiNVHEry31gv5LbgqrFTbChxJT2yRicO2MwkAaEamoPmKfoSmNN8O&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {"REDMI Watch 6 2.07'' Bluetooth Smartwatch For Android 8.0 & iOS 14.0 5ATM NFC"}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 150.09
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 500 sold</p>
              </div>
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails2"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>


          <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQGIqg96HSPYGIWcBrx3AVMRtHXbkIe3BQ-g221az3EnaTPBq0S1s51IA9QmoHVqXPz5JpsZvZaKjYgBzWp895mXta5fVUmFgjLqtBmWMLcTAA8WGxFMJI7_tFsIv1yIv8-0T4UBw&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Smartwatch Waterproof Fitness Sleep & Heart Rate Monitor for iPhone 14 Pro'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 94.99
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 200 sold</p>
              </div>
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails3"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>


           <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQgFXjcO1kxF1qD24dNrmFM3oC-VkceSLNK5aWGUUzALtejcJWA093yJBnBdzECWdPbJ4wEjGJwVAL3bYB-q6TvAFZpttIvi4gVc6FVmAVIR3acE6-46HhYXb3JWLPGoyRqQwdepw&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Stella XS Smartwatch'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 99.00
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 100 sold</p>
              </div>
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails4"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>
          

          <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRDSpT7gGez_bXggMv00Wmb4vqgvxw1GbHVCV8HTpqfY75Fgok30XGlxsAp5XY13J4DWyUQgJKiTAawc358XqNH3lHIv4PwOjUOxmXPOQ7JitWqxJSLj0UgbZ2RgSG4F39dWaxjIg&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Men Smart Watch 4G Large Screen Unlocked Phone with Camera Women Fitness Tracker'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 168.25
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.0 | 20 sold</p>
              </div>
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails5"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>


           <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQFYGX3lrpVwAoVO5Qi7erovN4OARY_1IsT0IZ9D95Q7_NC44EeT9SHJzYzSH2777cOm-Ao134jGTyflEOIsOZYV442MBzGOeztIqpRzvMb&usqp=CAc"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {"2025 new Men's outdoor multifunctional sports smartwatch, fitness tracker, three different watch straps, wireless calling, message notification, high-definition full touch screen, flashlight, pedometer"}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 99.00
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>5.0 | 14 sold</p>
              </div>
              <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails6"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>


           <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSgwpE_UHqeEZbYA_lxT1xdX3FFIm3g59UCPijdjMs8xVr7l4mzRWbk-myjEkmIdr2hfKusZsxXdwIMoXb-7ZHRcPDKqcKgvG3yQUhQvZWF&usqp=CAc"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Generic - 1.65-inch IP67 waterproof full touch smartwatch with Bluetooth calling'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 7.20
              </p>
              <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails7"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>


           <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTaDt1z4OSMU9zJi6fRGWIT0Aues_uS85vwVu1a-_6ijZEJQJRAOJdMZ9534JJn8s3uGvkRbzOurZqGuOmGvX9V3M2SG2GjUYFtjN1o8pH4naVuMqtAQT4aKllrsbA0SAX7AhG0Dbv5Kw&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'The Samsung Galaxy Watch 8 (2025) Comes in 40/44Mm Sizes And Features Galaxy AI for Fitness Tracking, a Sport Band, Sleep Coaching, And Wireless Connectivity. Its Cushion Design Makes It Both Comfortable And Stylish, Available in Graphite/Silver'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 426.00
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.3 | 232 sold</p>
              </div>
              <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails8"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>

          
           <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQSaAFesRvm862IHlWzVYbv67BOB05Rw58_NE197cwaUVzD2LN5sCFtQQR_Bx3frd4Nw_G72Trc3k2D9Rl6phXVoNfnfJqgcRreiQ3FQmZzk1K0WaffQaoH4jiKlvi4yMgv4lV3Wg&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'S8 Ultra 4g Smartwatch Ultra smart watch with 7 straps, Ocean Sport Bands for The for apple Watch Ultra 2 And Other Models'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 12.30
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.4 | 402 sold</p>
              </div>
              <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails9"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>


           <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSNfDF7w2mySeK2zCY3HJ6MtY6wI8kXi7CjWIDovJZMq6wgnIBZf3s3_aosfgEBzmB5HBhRUaDR7IsxwAXSZ8e_kRCCGRt-I1sfdJZzy2kwUOGCLBEXmkPU7TAmgBnz&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {"Sports smartwatch with wireless calling, music management, information push and read, various exercise modes, pedometer, USB rechargeable lithium battery, and high-definition display screen - compatible with iPhone and Android, Men's and Women's"}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 11.32
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.5 | 892 sold</p>
              </div>
              <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails10"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>


           <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTaIVlQpLopb3sdHNvBUNz8gU26Nj7CyXHSaZLgu3eIQi3Aom_1MwCfeNPs6FT9FJVxZFRQkUlnbrmlN5r6gGgZLqU2u7LSOOKd6h8GMQgd5Y5RhZGE0CXv&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Smartwatch Apple The 2025 New Model of Sports Fashion Smart Watch Features a Fully Touch-Sensitive High-Definition Display, Supports Wireless Calling (Answering/Making Calls), Message Notifications, Multiple Sports Modes/Pedometer/Ai Voice Control/Camera Control/Mus'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 17.97
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.9 | 178 sold</p>
              </div>
              <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails11"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>


           <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQkoNO5rDOxFvNDsRc4O4dtOBIjwLoFbSX8LJwBkQp0KmDCUrAjG0uvKNlGg4R2EJVldq4E7sg8bjrWCIkYqx_7r_s_fxLvBVatKvPTLJfiAxi0_JtnRyT6S-Ub1Q&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'1.91-inch HD Large-Screen Smart watch by SENOBONO: Packed with Features - Camera, Album, Recording, Dynamic Dials, Wireless Call, Message Notifications, Multiple Sport Modes, Local Music, Alarm Clock Watch'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 41.00
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.5 | 640 sold</p>
              </div>
              <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails12"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>


           <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQW46154sCvPEnyKyInyd6myjbG_dWKUg7GgeITEEk2WWwns-fJaEPNpbt17BVcfLW7j6CZstjCgfErBirfekwYIQv4n3ehrogVab-3gqlBm7sXKx9T547D&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'2025 new 1000mAh battery smart watch, same for men and women, 1.85-inch HD display, wireless call/voice assistant, weather, High Quality smart watch, more than 100 sports modes, fitness tracker'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 31.96
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.7 | 1.2k+ sold</p>
              </div>
              <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails13"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>


           <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTw-WXPEfWKbLIVZG8rBXjWLSeyCuMKhoU9dskXgA27eUvXT2SojeVV7JieLIR9AYQLTLQrT3zSPleJz-Crq2fq21rCQA8hf-1ayVXHPkyuV_mdwP9nANSjsjXp8bryvWfVOj7gbA&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Redmi watch Smartwatch smartwatch for men, 1.85-inch Smart Fashion Sports Watch | AMOLED Color Screen, Wireless Calling, Weather Forecast, Multiple Sports Modes, Multiple Dial Options, Compatible with iPhone and Android, Non, USB Charging, Silicone Strap'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 45.70
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.7 | 80 sold</p>
              </div>
              <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails14"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>


           <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://af.cwa.sellercloud.com/images/products/1203618.jpg"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Apple Watch Series 10 46mm GPS/LTE Silver Case Denim Band MWX13LW/A M/L'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 351.99
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 100 sold</p>
              </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/watches/watchdetails/watchdetails15"}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>
              </>
          )}
</div>
        </div>
      
    </main>
  )
}

export default Watches
