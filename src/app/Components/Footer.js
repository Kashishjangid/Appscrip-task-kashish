"use client"

import Logo from "../../../public/Logo.png";
import usa from "../../../public/usa.png";
import {FaHeart, FaDotCircle, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { useState } from 'react';
import { FaAngleDown,} from "react-icons/fa";
import Image from 'next/image';
import GPay from '../../../public/gpay.png'
import Mastrecard from '../../../public/Mastercard.jpg'
import Paypal from '../../../public/paypal.webp'
import Amex from '../../../public/amex.svg'
import Applepay from '../../../public/apple.png'



function Footer() {
    const [show, setShow]=useState(false)
    const [quick, setQuick]=useState(false)
    const [follow, setFollow]=useState(false)

   
    return (
        <>
            <div className='w-full h-fit bg-black flex lg:flex-row flex-col'>
                <div className='lg:w-1/2 w-full h-full flex flex-col text-white lg:space-y-16 space-y-12 lg:pl-36 pl-4 lg:py-24 py-8'>
                    <div className='space-y-6'>
                        <h2 className='lg:text-3xl text-xl font-bold'>BE THE FIRST TO KNOW</h2>
                        <p className='lg:text-lg text-sm'>Sign up for updates metta muse</p>
                    </div>
                    <div className='flex gap-2'>
                        <input className='border-2 bg-white lg:w-96 w-44 lg:h-16 h-12 px-4' type='text' placeholder='Enter your e-mail...'></input>
                        <button className='bg-black border-2 lg:w-40 w-28 lg:h-16 h-12'>Subscribe</button>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full h-full flex flex-col text-white space-y-8 lg:px-36 px-4 lg:py-16 py-4'>
                    <div className='space-y-2'>
                        <h2 className='lg:text-3xl text-xl font-bold'>CONTACT US</h2>
                        <p className='lg:text-lg text-sm'>+44 221 133 5360</p>
                        <p className='lg:text-lg text-sm'>customercare@mettamuse.com</p>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='lg:text-3xl text-xl font-bold'>CURRENCY</h2>
                        <div className='flex items-center gap-2'>
                            {/* <img className='lg:h-12 h-8 lg:w-12 w-8 rounded-full' src={usa} alt="icon" /> */}
                            <Image src={usa} className="rounded-full h-12 w-12" ></Image>

                            <FaDotCircle />
                            <p className='lg:text-3xl text-xl font-bold'>USA</p>
                        </div>
                        <p className='lg:text-lg text-sm'>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className='w-full h-fit bg-black flex lg:flex-row flex-col'>
                <div className='lg:w-1/2 w-full h-full flex justify-between lg:flex-row flex-col lg:space-y-0 space-y-8 text-white  lg:pl-36 pl-4 lg:py-12 py-8'>
                    <div className='space-y-6'>
                        <div className='flex justify-between pr-4'>
                            <h1 className='lg:text-3xl text-xl font-bold' onClick={() => setShow(!show)}>metta muse</h1>
                            <p className='lg:hidden block' onClick={() => setShow(!show)}><FaAngleDown/></p>
                        </div>
                        <ul className='space-y-3 lg:block hidden cursor-pointer'>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                            <li>Join as a Seller</li>
                        </ul>
                        {show &&
                            <div>
                            <ul className='space-y-3 cursor-pointer'>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                            <li>Join as a Seller</li>
                        </ul>
                        </div>}
                    </div>
                    <div className='lg:hidden block h-0.5 w-11/12 bg-white'>

                    </div>
                    <div className='space-y-6'>
                    <div className='flex justify-between pr-4'>
                            <h1 className='lg:text-3xl text-xl font-bold' onClick={() => setQuick(!quick)}>QUICK LINKS</h1>
                            <p className='lg:hidden block' onClick={() => setQuick(!quick)}><FaAngleDown/></p>
                        </div>
                        <ul className='space-y-3 lg:block hidden cursor-pointer'>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                            <li>Join as a Seller</li>
                        </ul>
                        {quick &&
                            <div>
                            <ul className='space-y-3 cursor-pointer'>
                            <li>About Us</li>
                            <li>Stories</li>
                            <li>Artisans</li>
                            <li>Boutiques</li>
                            <li>Contact Us</li>
                            <li>EU Compliances Docs</li>
                            <li>Join as a Seller</li>
                        </ul>
                        </div>}
                    </div>
                </div>
                <div className='lg:hidden block h-0.5 w-11/12  bg-white mx-auto'>

                </div>
                <div className='lg:w-1/2 w-full h-full flex flex-col text-white space-y-16 lg:px-36 px-4 lg:py-12 py-0 lg:mt-0 mt-6'>
                    <div className='space-y-6'>
                    <div className='flex justify-between'>
                            <h1 className='lg:text-3xl text-xl font-bold' onClick={() => setFollow(!follow)}>FOLLOW US</h1>
                            <p className='lg:hidden block' onClick={() => setFollow(!follow)}><FaAngleDown/></p>
                        </div>
                        <div className='lg:flex gap-2 hidden cursor-pointer'>
                            <div className='w-12 h-12 rounded-full border-2 flex items-center justify-center'>
                            <AiFillInstagram className="h-7 w-7"/>
                            </div>
                            <div className='w-12 h-12 rounded-full border-2 flex items-center justify-center'>
                                <AiFillLinkedin className="h-7 w-7"/>
                            </div>
                        </div>
                        {follow &&
                            <div className='flex gap-2 cursor-pointer'>
                            <div className='w-12 h-12 rounded-full border-2 flex items-center justify-center'>
                                <AiFillInstagram className="h-7 w-7"/>
                            </div>
                            <div className='w-12 h-12 rounded-full border-2 flex items-center justify-center'>
                            <AiFillLinkedin className="h-7 w-7"/>
                            </div>
                        </div>
                        }
                    </div>
                    <div className='lg:hidden block h-0.5 w-full bg-white mx-auto'>

                    </div>
                    <div className='space-y-4 px-0' >
                        <h2 className='lg:text-2xl text-xl font-bold'>metta muse ACCEPTS</h2>
                        <div className='flex gap-2'>
                            <Image className="rounded-lg h-12 w-16" src={GPay}  ></Image>
                            <Image className="rounded-lg h-12 w-16" src={Mastrecard}  ></Image>
                            <Image className="rounded-lg h-12 w-16" src={GPay} ></Image>
                            <Image className="rounded-lg h-12 w-16" src={GPay}  ></Image>
                            <Image className="rounded-lg h-12 w-16 lg:block hidden" src={GPay}  ></Image>
                            <Image className="rounded-lg h-12 w-16 lg:block hidden" src={GPay}  ></Image>
                           
                        </div>
                    </div>
                    
                </div>
                

            </div>
                <div className='w-full h-12 flex items-center justify-center bg-black lg:px-0 px-2 text-center py-8'>
                    <p className='text-white lg:text-lg text-sm'> Copyright © 2023 mettamuse. All rights reserved.</p>
                </div>

        </>
    );
}

export default Footer;

