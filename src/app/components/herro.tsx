/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

import Image from "next/image"
import Link from 'next/link';
function Herro(){
    return(
        <div className="w-full flex justify-center items-center">
            <div className="sm:w-full md:w-full lg:w-[80%] flex justify-evenly">
                {/* left side */}
                <div className='border-r-2 border-neutral-100 p-5 sm:hidden md:block  pb-0 '>
                    <ul>
                        <li className='leading-loose hover:underline cursor-pointer'>Woman&apos;s Fashion  <FontAwesomeIcon icon={faChevronRight} className='text-xs ml-2'></FontAwesomeIcon></li>
                        <li className='leading-loose hover:underline cursor-pointer'>Men&apos;s Fashion  </li>
                        <li className='leading-loose hover:underline cursor-pointer'>Electronics</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Home & Lifestyle</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Medicine</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Sports & Outdoor</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Baby&apos;s & Toys</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Groceries & Pets</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Health & Beauty</li>
                        
                    </ul>
                </div>
                {/* right side */}
                <div className='sm:w-full md:w-[650px] lg:w-[650px]  sm:mt-0 md:mt-6 sm:h-[250] md:h-[280px] bg-gray-950 flex justify-between pt-6 rounded-es-3xl rounded-se-3xl '>
                     {/* left side */}
                     <div className='text-white w-200 pt-4 ml-5'>
                          {/* icon div */}
                          <div className='flex gap-x-2 items-center'>
                            <span> <FontAwesomeIcon icon={faApple} className="text-white sm:text-2xl md:text-4xl" /> </span>
                            <span className='sm:text-[10px] md:text-xs'>iPhone 14 Series</span>
                          </div>
                          <h1 className='sm:text-md md:text-4xl font-bold my-5'>Up to 10% off Voucher</h1>
                         <Link href={"#products"} className=' underline underline-offset-4 hover:font-bold'>Shop Now-&gt;</Link>
                          {/* <button className=' underline underline-offset-8 hover:font-bold'>Shop Now-&gt;</button> */}
                     </div>

                     {/* right side */}
                     <div className='mr-4'>
                        <Image src={"/images/hero/iphone.avif"}
                        width={550}
                        height={200}
                        alt='hero iamges'></Image>
                     </div>
                 </div>
            </div>
        </div>
    )
}
export default Herro