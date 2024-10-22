   import Image from 'next/image';
   
   export default function AboutPage() {
     return (
       <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col justify-between">
   
         {/* Header */}
         <header className="bg-blue-600 text-white py-4">
           <div className="container mx-auto text-center">
             <h1 className="text-3xl font-bold">Welcome to My Website</h1>
             <nav className="mt-2">
               <a href="#" className="text-white hover:text-gray-300 mx-4">Home</a>
               <a href="#" className="text-white hover:text-gray-300 mx-4">About</a>
               <a href="#" className="text-white hover:text-gray-300 mx-4">Services</a>
               <a href="#" className="text-white hover:text-gray-300 mx-4">Contact</a>
             </nav>
           </div>
         </header>
   
         {/* Hero Section */}
         <section className="bg-blue-100 py-10 flex-grow">
           <div className="container mx-auto text-center">
             <h2 className="text-2xl font-semibold mb-4">Your Journey Begins Here</h2>
             <p className="mb-6">Discover our amazing services and get started with us today!</p>
             <div className="relative w-full h-64">
               <Image
                 src="/images/placeholder-image.jpg" // Replace this with your image path
                 alt="Placeholder Image"
                 layout="fill"
                 objectFit="cover"
                 className="rounded shadow-lg"
               />
             </div>
           </div>
         </section>
   
         {/* Services Section */}
         <section className="py-10">
           <div className="container mx-auto text-center">
             <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white p-6 rounded-lg shadow-lg">
                 <h3 className="text-xl font-bold mb-2">Service One</h3>
                 <p>Provide a brief description of the service offered.</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-lg">
                 <h3 className="text-xl font-bold mb-2">Service Two</h3>
                 <p>Provide a brief description of the service offered.</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-lg">
                 <h3 className="text-xl font-bold mb-2">Service Three</h3>
                 <p>Provide a brief description of the service offered.</p>
               </div>
             </div>
           </div>
         </section>
   
         {/* Footer */}
         <footer className="bg-blue-600 text-white py-4">
           <div className="container mx-auto text-center">
             <p>&copy; 2024 My Website. All Rights Reserved.</p>
           </div>
         </footer>
   
       </div>
     );
   }
   
