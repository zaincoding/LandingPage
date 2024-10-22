import Link from 'next/link';
export default function Services(){

    return(

        <div  className="bg-blue-100   pl-36  pr-12 pb-10">
            <div>
             <h1 className='text-4xl font-semibold'>Our services</h1>
             </div>
        <div className="grid grid-cols-3 gap-3 mb-8 ">
        <div  className="bg-blue-200 p-4 shadow-md rounded-lg">
        <Link href="/">    
        <h1  className="text-indigo-600">SEO Optimization</h1>
        <p>Boost your brand with expert SEO optimization for higher visibility.
        </p>
        </Link>
        </div>
        <div className=" bg-blue-200 p-4 shadow-sd rounded-lg">
        <Link href="/">
        <h1 className="text-indigo-600">Grahpic Design</h1>
        <p>Elevate your brand with professional graphic design for visual impact.
        </p>
        </Link>
        </div>
        <div className="bg-blue-200  p-4 shadow-sm  rounded-lg">
        <Link href="/">
        <h1 className="text-indigo-600">Web Design</h1>
        <p>Elevate your brand with professional web design for online success.
        </p>
        </Link>
        </div>
        </div>


        </div>
    )
}