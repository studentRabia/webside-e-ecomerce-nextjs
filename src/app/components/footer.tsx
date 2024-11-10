import Link from "next/link";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faTiktok , faFacebook, faWhatsapp, } from '@fortawesome/free-brands-svg-icons'; // Social icons
import { faArrowCircleRight,faCopyright} from '@fortawesome/free-solid-svg-icons'; // Social icons

export default function Footer(){
    return(
        <main className="bg-gray-900">
        <div className="w-full  sm:h-full lg:h-[350px] bg-gray-900 flex justify-center items-center">
             <div className="sm:pl-[5%] md:pl-[10%] lg:pl-0 w-full gap-y-9 pt-3 sm:pb-6  flex sm:flex-col lg:flex-row justify-evenly text-white">
                   <div className=" w-[200px]">
                    <h1 className="font-bold text-xl mr-4">Exclusive</h1>
                    <ul>
                      <li className="pt-2 cursor-pointer">Subscribe</li>
                      <li className="pt-2 cursor-pointer">Get 20% off your first order</li>
                      <li className="mt-3 cursor-pointer py-1 border flex justify-center">
                        <input type="text" placeholder="Enter your Email" className="bg-gray-900 border-none text-white"/>
                        <FontAwesomeIcon icon={faArrowCircleRight}className="text-xl  sm:hidden md:block" ></FontAwesomeIcon></li>
                    </ul>
                   </div>
                   <div className=" w-[200px]  ">
                    <h1 className="font-bold text-xl">Support</h1>
                    <ul>
                      <li className="pt-1 cursor-pointer">111 Bijoy sarani, Lahore,  DH 1515, Pakistan.</li>
                      <li className="pt-1 cursor-pointer">exclusive@gmail.com</li>
                      <li className="pt-1 cursor-pointer">+92015-855668-9999</li>
                    </ul>
                   </div>
                   <div className=" w-[200px] ">
                    <h1 className="font-bold text-xl">Account</h1>
                    <ul>
                      <li  className="pt-1 cursor-pointer">My Account</li>
                      <li  className="pt-1 cursor-pointer">Login / Register</li>
                      <li  className="pt-1 cursor-pointer">Cart</li>
                      <li  className="pt-1 cursor-pointer">Wishlist</li>
                      <li  className="pt-1 cursor-pointer">Shop</li>
                    </ul>
                   </div>
                   <div className=" w-[200px]">
                    <h1 className="font-bold text-xl">Quick Link</h1>
                    <ul>
                      <li  className="pt-1 cursor-pointer">Privacy Policy</li>
                      <li  className="pt-1 cursor-pointer">Terms Of Use</li>
                      <li  className="pt-1 cursor-pointer">FAQ</li>
                      <li  className="pt-1 cursor-pointer">Contact</li>
                    </ul>
                   </div>
                   <div className="">
            <h1 className="font-bold text-xl pb-4">Social Links</h1>
       <ul className="list-none flex gap-x-3">
     
      <li>
        <Link href="https://youtube.com/"  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className=" text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
        </Link>
      </li>

      <li>
        <Link href="https://www.linkedin.com/"  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className=" text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
        </Link>
      </li>

      <li>
        <Link href="https://www.tiktok.com/ "  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} className=" text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
        </Link>
      </li>
      <li>
        <Link href="https://web.facebook.com/"  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className=" text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
        </Link>
      </li>
      <li>
        <Link href="https://chat.whatsapp.com/"  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className=" text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
        </Link>
       </li>
    </ul>
     </div>
             </div>
        </div>
        <p className="text-white text-center text-sm pb-5">Copyright <FontAwesomeIcon icon={faCopyright}className="text-md " ></FontAwesomeIcon> 2024. All right reserved</p>


        </main>
    )
}

// srf responsive