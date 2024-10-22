"use client";

import { useEffect, useState } from "react";

export default function WelcomeMesssage(){

    
        const [showWelcome, setShowWelcome] = useState(false)
        const [showServices, setShowServices] = useState(false);
    


useEffect(() =>{

    const st1 =  setInterval(() =>{
        
        setShowWelcome((prev) => !prev);
        setShowServices(false);
    }, 4000);

    const st2 = setInterval(() =>{

        setShowServices((prev) => !prev);
        setShowWelcome(false)
    },6000)

    return() =>{

        clearInterval(st1)
        clearInterval(st2)
    }

}, [])

return (
    <div>
        {showWelcome && (
            <span className="text-gray-800 text-4xl  font-semibold">Welcome to my Awesome Website.</span>
        )}

    {showServices && (

        <span className="text-gray-800 text-4xl  font-semibold">We are providing quality services.</span>
    )}
    </div>
)


}