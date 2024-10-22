// src/app/page.tsx
import Image from 'next/image';
import Header from '../components/Header/header';
import Hero from '../components/Hero/hero';
import Services from '@/components/Services/service';
import Footer from '../components/Footer/footer'

import Link from 'next/link'

export default function Home() {
  return (
    <div> 
      <div>
    <Header></Header>
    </div>

    <div  className='bg-blue-100'>
    <Hero></Hero>
    </div>

    <div>
    <Services></Services>
    </div>

    <div>
      <Footer></Footer>
    </div>
    </div>
       
  );
}
