import Image from 'next/image'

const Hero = ()=>{

   
    return(
        <section className="bg-blue-100 py-40  flex-grow ml-40">
        <div className="container max-auto text-center">
        <h2 className="text-4xl mb-4 text-blue-100">Your Jurney Begin Here</h2>
         <p  className='text-blue-100'>
         Discover our amazing services and get started with us today!
         </p>
         <div className="relative w-full h-96">
               <Image
                src="/images/herobg.png"
                 alt="Hero-image"
                 layout="fill"
                 objectFit="cover"

               />
             
       </div>
       </div>
        </section>
    )
}

export default Hero;