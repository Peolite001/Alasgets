'use client'
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

const Tablets = () => {
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
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPjQd6wyktjobXPh4Zc1vyLd_B9BdYK-MekyNTXN7iscJRswRQcdTGgCt5ZBJ5GPHIy3Pv5kDu3H3XTPcEEE1sxJPd7CqJtqoH5-fyBwqZRVfKyffrKEaxNbHvB3ztMFY1RKUt1eSRxA&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {' Samsung Galaxy Tab S10+ Plus/S9+/S9 FE+/S8+/S7+/S7 FE Keyboard Case 12.4“ Ma'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 118.99
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
              <Link href={"/tablets/tabletdetails/detail1"}>
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
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxAIQJ5D6q2I7v7H9QCkZOvsVFuBIvGazoek-QBgkUp5k0Lwt9GlWFsMojkfOkWq2dcXjXy5IX95CAw07kFaSYYXOb9XaIMtRlHYvcITZUA-OuTBgfGKZ7aJxqHwcgjtCx-DPNtm8&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Samsung Galaxy Tab S10+ / S9+ / S8+ / S7+ Case with Keyboard, 12.4'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 163.16
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.9 | 90 sold</p>
              </div>
              <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail2"}>
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
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDT4lnzTIk7CKF6c_9d3-KGrf0Pr6MUQLYCa-JkP1uDa1nN28FfBsbrmTDQwIoF9cgIm8PLdRmevHgFodvkwzHWUz1z3OdV8byJcdyaBqt4FvqM2QYbUmDzp7e8sQxMbChv5EJ0w&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Qetupa 10.1 Inch Android 14 Tablet PC, MTK 6762 Octa-Core 2.0GHz Processor, 8GB RAM+256GB ROM/4GB RAM+128GB ROM, 802.11ax Wi-Fi 6, Bluetooth 5.4, Incell HD (1280*800) IPS Touchscreen, 5MP+13MP Dual Cameras, 6000mAh Battery, Support 512GB Expansion, Type-C Port, No SIM Card Support'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 106.80
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>2.0 | 40 sold</p>
              </div>       
                <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail3"}>
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
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRewG1NUg-e686flmC7GLOID9zTt4MsV5HjxKlT188zDGIP3VxTKdDe5KeEPevUoD1CTr6nyeNlrYHC10KLEUQ-3TQyvIDnJc_LxoSLdF4x5ZmqdeyLWoA-xLbvglnLm_5yvs0FxT1y&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'CRELANDER Android 14 Tablet Featuring a 10.1 Inch Unisoc T606 Processor, with a Resolution of 1920X1200 on an IPS Display And a Refresh Rate of 90Hz. It Comes with 4GB of RAM, 8GB of Storage, 256GB of Internal Memory, 13MP And 8MP Cameras'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 141.51
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.5 | 50 sold</p>
              </div> 
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail4"}>
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
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSUZSPAIEk_Mh6TVhxqx-2_41STyVDo-4qqydSgjpa3qLGTonLxWCOOxFTXlLQ0J8q1hUDHOUpvX1ntnoRZ3CcZ0XMRSymSmXJaHtCL6tSk&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Android Tablet, 2025 Tablet 10 Inch Android 15 Tablets, Quad Core Processor 12(3+9)GB RAM 64GB ROM | 6000mAh Battery, 1TB Expand |1280 * 800 HD IPS Touchscreen | WiFi 6 | 2+8MP, 2in 1 Tablet with Keyboard, Mouse, Pen, Protective Case'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$  113.88
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.7 | 100 sold</p>
              </div>
               <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail5"}>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTiLeof7hVIxEcN7o60sOrTc2lmURJI2JCLwUu_bAAzmlJJ7f6KfaLaNyoQsZplLopB57TPXQjIZhH5v8fzCSjLcIiprWCck-hMF4_sF58alEZRWzuwR8wqF4YU5W7Gl8rf8Z01GOE&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Tablet 8GB+256GB 10.1 Inch Screen 5G Calling Snapdragon 888 Processor'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ $125.00
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.0 | 20 sold</p>
              </div>

              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail6"}>
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
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhjoARrningbiys_k8s6b3QeFlRqLsYDVpUvkZ8U0Npb_6mnGR3f2hcFWLkT1ZMxjkh5zpABNo5Ec2YCD2O1Ld0rKhoTvqhcR-O24GJiHRWtR8Ka2wOSMe&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Latest Android 15 Tablet, 11.6-inch 2-in-1 Tablet with Keyboard & Protective Case, 8GB RAM + 256GB Storage, 4000mAh Battery, 5G WiFi, 24MP+32MP Dual Cameras, 1280×800 FHD IPS Display'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 146.51
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.2 | 80 sold</p>
              </div>
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail7"}>
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
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS21wmqIkDE-o5hd8iOPzy69hpmFRLw9cjg6d3CCw2ff6PUdZ3xs9ZMA6ZPX0NMNHZtFYkbNvL0o21K1uwrfwO5WIlYytKrkcM829A0juOwkJfigq0yUq93XawYsPWVrN0xXXulnzs&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'2025 New Tablet, I-Atar 10.1-inch Android Tablet, 4GB RAM + 64GB ROM Storage; 6000mAh Large Capacity Battery; Stylish Design, 2MP+5MP Dual Camera Configuration; Sleek Internet Connectivity with Type-C Charging Cable Included'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 88.80
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>2.5 | 40 sold</p>
              </div>
                <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail8"}>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSxz6a72WrMHpSEa6CHHr3C5R47ZPQx1WKK3ox4pGLCQFJARmqBDUoMOR5soOna44tZc1iimPvkukpZdpLstrmt-8Gf8-lRxoTLIIbNSO_Ew4ZTLwaIWDszEeDAlVpK-Myxtm19ADI4&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Android 12 Tablet, 4GB RAM + 64GB ROM, Expandable Up to 128GB Via SD Card, Offering Ample Storage. 6000Mah Battery, Supports Wi-Fi 6 And Bittorrent 5.0. A Gaming Tablet, Multimedia Consumer Tablet, Stylish Tablet, Compact Design'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 86.90
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.0 | 90 sold</p>
              </div>
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"tablets/tabletdetails/detail9"}>
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
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS5wDUNxZCQYIv8OLvpG9PP9nNA4GrXIKsUYFHElJmkQjwqOqtAq9k2ehbvMWZi_ULw4TLjI_nxGEBdyYqeSHmBM3UQ_o_Sd9HjZvS2q-GDN1NMw2-GzBuJ9PWZIpYl8vZWLu7dnlCiBQA&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'NANNEE-10.1 Inch Global New Tablet Pad9Ultra, with 8GB RAM And 128GB ROM, Supports Wifi 5 And GPS, Features 8MP And 16MP Cameras, Runs on Android 15, And Comes with a Keyboard, Stylus, Mouse, And Leather Case'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 134.00
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.0 | 100 sold</p>
              </div>
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail10"}>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnCjQUp7nWjMS0xHATvld2pCbpeSPlWSA7KLL5YqNMZDun5kYkUgzpuwTTkaYjwnTxSJtt2SHr8BJ9YKFV3o5GK6AkB8R9l7hfxTmpDy3TRyCmd3tzA874KQj6S9Zg2BAWLbiJF75udg&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'8GB (4G+4G Expansion) RAM 64GB ROM Android 13 System Equipped with 8-core Chip Intelligent Calling Tablet 10.1-inch 1280*800 IPS Display 6000mAh Large Battery BDF H39 Accessories: (data Cable, Card Pin, OTG, Protective Film, Bracket, Touch Screen'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 109.10
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 90 sold</p>
              </div>
                <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablet/tabletdetails/detail11"}>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfHNiIBlfQLXUaMTWDq1xPYqHJcU8Phw-X3-FocrqEa39Frvf6HKlLTfRiREcSQA2zvJwQAiJQSIyjz1bzaXCsYGtF3eTnbDK8GlmHZA77zRHFXGKOhtKMWe-GSkL7Q-Mha8I2Yg&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Tablet Running Android with a Keyboard, Featuring 512GB of Storage, 8GB of RAM, 4G LTE Capability, Android 14, Dual SIM Support, an Octa-Core Processor, And a 2-In-1 Design. It Has a 10.1-Inch Display And Comes with a Case, Stylus'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 150.00
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.8 | 65 sold</p>
              </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail12"}>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGALwl6qaKNgod4uC3nrfOLNI6r19mZYpMmX1qTwURyqQN_qEmncDuKi44_aNoetUBO_UUUvR07fXeWB2SGRHzwW5FwmTaoLorqpFK01rkul6P4eFGGmDtkL2imFwDNixGmp1juQ&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'NANNEE-10.1 Inch Global New Tablet Pad9Ultra, with 8GB RAM And 128GB ROM, Supports Wifi 5 And GPS, Features 8MP And 16MP Cameras, Runs on Android 15, And Comes with a Keyboard, Stylus, Mouse, And Leather Case'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 133.00
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>2.0 | 53 sold</p>
              </div>
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail13"}>
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
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ6ALVOvqG3gwnClKPlVww1YogLgr9OiwV5uylNpQms6biI9gENfnS43fBb-KqaT5oMz8k9SOXOimd2GC5G5uOgFB3nYpUpXd5ogl8ngAQ-SVcx1yNY5c5Lm-o0mFq00wj-oScQGLA&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'NANNEE 10.1-inch Tablet Pad10 Ultra, 8GB RAM + 128GB ROM, Built-in GPS, 8MP + 16MP Camera, Android 15, Includes Keyboard, Stylus, Mouse, Charging Cable, and Leather Case'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 135.50
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.0 | 30 sold</p>
              </div>
              <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail14"}>
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
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ6Tf5GReiLsvWnHfqbjYKvSOomffC8jRJ2hTAFcK1s_jrwHtYbe_Eg29vWlM4D4mL3OOIvoUe887T-4ZGVwU6fwcYihEdLBIujYi5k9eUM0T7FE770b_gqcWZc8s79r3bK5qcqJCI&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Teclast P33 New Tablet, Android 15 10.1-Inch IPS, 1280X800 Resolution, Allwinner A333 Five Core, 9GB * (3GB+6GB Virtual Expansion) 64GB Storage Space, WIFI, 6000Mah Type-C Charging, Rear 5MP And Front 2MP Dual HD Cameras, Offer Tablet Case, Table'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 115.00
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.7 | 494 sold</p>
              </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail15"}>
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
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRpYzeJSl4q0EYfvnKr5yDlLCRXXaYjyKT7R37KfG4Tgalxjqk28pFLq8OL8xrLZWzpPCymTuIJBZ2IWoztgFoqWg_9emF4YnxrJh1tTUn5aNlhZRKA7DYFL9J8R5HHyGIACuyuEnjS&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'10.1 Inch Tablet 4GB RAM 64GB ROM Android Tablet PC with Eight cores Processor, 5000mAh HD IPS Display, Dual Camera, WiFi, Tablet with Case'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 145.00
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>5.0 | 18 sold</p>
              </div>
                <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"tablets/tabletdetails/detail16"}>
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
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQn0vgayEDx5g2Dnxwas28zJYy9oIFKjPBRsM77xg_nRLkm8YkFhX6y2ziLjAWl-mTD7XfMtdtiZavb_WeXVbRHo17yumuDAVOA1h1h3RJaXDCV6kuaobo8hp1AVEUhzVM56-Nx6XLHqg&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'PEICHENG 10 Inch Pad Android 15 Tablet, RK3326S 4-Core 8(3+5)GB RAM 32GB ROM, 10.1 Inch Tablet, FHD IPS Touch Screen, 2MP Front 8MP Back Camera, Type-C Tablete G-sensor, 6000mAh Larger Battery'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ $87.36 
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.6 | 40 sold</p>
              </div>   
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail17"}>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTcPm9swbFxWCSLKAUl2I2U0OO-XNVNB2TcAD9_Pi8PGQqv7OqGBQahWb2ajaYIssAOrQE1A5Wde_Jg5Vle7RyQcDaHtrX97cIlDjvVctJotjlntU4zChZVLgLyCqA2xWY-SmSvlg&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'10.1-inch Android 13 Tablet 8 (4G+4G expansion) GB RAM 256GB ROM, 5MP13MP Dual camera, Supports 4G calls, 1280 * 800IPS High-Definition screen 6000mAh Battery Supports 1TB Expansion (no adapter) multi-color selection black/white/blue/green'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ $111.10
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>2.9 | 100 sold</p>
              </div>   
               <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail18"}>
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
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqiim0Spz5Ilj2y_8qeIX_X9Mey2Xo5vEa6aREawJXi747tdTvW0hXKkdP1eDCZAJakhfg8LgSIIH9-Y54mzh47mn1hbQ9YIHPwIAUWiXG0oIrMsEI0QshtLKK6CtXrEn9UvtvaA&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Android 14 6GB RAM 128GB ROM Tablet | Dual SIM Dual Standby, WiFi 2.4/5G, Wireless 5.0, Dual Camera 5+8MP, 10.1-inch IPS Display, Includes Data Cable, Card Pin, OTG, Manual, Bracket, Touch Pen, Tablet, Pad'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ $113.00
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.5 | 50 sold</p>
              </div>
                <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tables/tabletdetails/detail19"}>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTCNeWDeqzlrTn3GS1rqjN3UwK2mip-nJ38lc4TUliW0K0MSQ08VZPXb12DqWFal4XDigkNPQ3fOty8yXFsb9GUH_4IHhgFXtRGY7hMGPehNOczGbwcxF0CBGdm8RZ_JA0i3jweqoNKVGM&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'10.1-inch Android 13 Tablet, 4GB RAM 64GB ROM Tablet, 1920*1200, 5MP+8MP Dual Camera, Wifi & Bluetooth, Applicable to Multiple Scenarios Office School'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ $91.00
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.0 | 10 sold</p>
              </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail20"}>
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
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTU3wGVjnIEGvnGaZqo-uOI71eQXyMXjoYSze07GJgE1y56YoCyuD88D9DICaSHByADLZPzwAy_Kc0ROIslpa1pU13iao-SWwvzRwREYG0k9HtVYlzqOt3VGLZt8sNRdJJ2fwI0W5msun4&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'High Tech MacPad Air S25 Ultra 10.1" Incell 16GB RAM 1TB Storage 10,000mAh Bat Android 13 FREE Keyboard, Mouse & Stylus'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ $177.00
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.8 | 80 sold</p>
              </div>
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail21"}>
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
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRsUR5XG6jyQV4lQmg_HnbwgbEPGtE9FGLDHRhzlfRZsF7dnFeUj8KHGvJY2ElVu3WOxqyigHng-JLdsbO3kuNoflBqiKmPzF-btUdh3v1pjRPInJQRI5ETKePj_2tknF8pSr7IGRwsj-o&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Teclast P33 New Tablet, Android 15 10.1-Inch IPS, 1280X800 Resolution, Allwinner A333 Five Core, 9GB * (3GB+6GB Virtual Expansion) 64GB Storage Space, WIFI, 6000Mah Type-C Charging, Rear 5MP And Front 2MP Dual HD Cameras, Offer Tablet Case, Tablet Brand: TECLAST'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ $113.78
              </p>
              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.0 | 50 sold</p>
              </div>
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>
              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/tablets/tabletdetails/detail22"}>
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

export default Tablets
