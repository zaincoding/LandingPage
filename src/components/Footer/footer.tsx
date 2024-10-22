
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer(){

  return(
    <div   className='flex justify justify-between items-center py-8  px-4'>
      
        <p  className='text-gray-400 font-semibold  border-t border-blue-300 text-2xl'>$copy ZK, {new Date().getFullYear()}. All right reserved.</p>
    
  <div  className='flex gap-8 text-indigo-500'>  

       <Link className="hover:text-green-300" href="https://facebook.com">
       <FaFacebook />
       </Link>

       <Link className="hover:text-green-300" href="https://Twitter.com">
       <FaTwitter />
       </Link>

       <Link className="hover:text-green-300" href="https://Linkedin.com">
       <FaLinkedin />
       </Link>
      </div>
    </div>
  )
}