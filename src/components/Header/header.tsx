import Link from 'next/link';
import Image from 'next/image'
import WelcomeMesssage from '../Header-Animation/Header-Animation';

function Header(){

    return(
<div>
       <header  className='bg-blue-600  py-4 px-20'>
       <div  className='flex items-center'>
        
        <Image src='/images/logo.PNG' alt='Logo' width='50' height='50'/>
        
<div  className='flex-grow text-center'>


      <WelcomeMesssage></WelcomeMesssage>
</div>
       </div>
      
      <nav  className='flex justify-center mt-0.5'>
        <ul  className='flex space-x-5 text-white  text-center'>
          <li><Link href="/">Home</Link></li>
          <li className='border-l-4  border-blue-800 pl-5 -m-4 -mt-0.5 '><Link href="/">About</Link></li>
          <li className='border-l-4 border-blue-800 pl-5 -m-4 -mt-0.5'><Link href="/">Contact</Link></li>
          <li className='border-l-4 border-blue-800 pl-5 -m-4 -mt-0.5'><Link href="/">Service</Link></li> 
        </ul>
      </nav>

       </header>
</div>
    )
}

export default Header;
