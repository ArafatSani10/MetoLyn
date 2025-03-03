import { useEffect, useState } from "react";
import FetchMitolynCard from "./FetchMitolynCard/FetchMitolynCard";

const FetchMitolyn = () => {
    const [metolyn, setMitolyn] = useState([]);

    useEffect(() => {
        fetch('/Mitolyn.json')  
        .then(res => res.json()) 
        .then(data => {
            setMitolyn(data);
          
        })
       
    }, []);

    return (
        <div className="lg:w-[1200px] mx-auto">
            <div className="text-center font-oswald mt-5 space-y-2">
                <h3 className="md:text-5xl text-3xl text-blue-300">Inside every Mitolyn capsule You'll find :</h3>
                <p className="md:text-4xl">A Unique proprietary blend of 6 rare ingredients that promote <br /></p>
                <p className="md:text-3xl"><span className="font-bold">Calorie-burning</span> Mitochondria!</p>

           
               <div className="grid grid-cols-2 md:grid-cols-3 ">
               {
                    metolyn.map(mitolyn => <FetchMitolynCard mitolyn={mitolyn}></FetchMitolynCard>)
                }
               </div>
            </div>
        </div>
    );
};

export default FetchMitolyn;
