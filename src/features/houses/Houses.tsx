import api from '@/api/api';
import { useEffect, useState } from 'react'
import HouseCard from './ui/HouseCard';

const Houses = () => {
            const [houses,setHouses]=useState([]);
            const [loading,setLoading]=useState(true);
            const [err,setErr]=useState("");
    
            useEffect(() => {
                const getHouses=async()=>{
                    setLoading(true);
                    setErr("");
                    try {
                        const bookResponse=await api.get('/houses');
                        setHouses(bookResponse.data);
                    } catch (error) {
                        if (error instanceof Error) {
                            console.log(error.message);
                          } else {
                            console.log("Unknown error", error);
                          }
                    }finally{
                        setLoading(false);
                    }
                }
            
                getHouses();
            }, [])
            
            if(loading) return <p>Loading.....</p>
            if(err) return <h1>Something Went Wrong</h1>
            console.log(houses) 
  return (
<section className="w-[90%] mx-auto py-10 px-8 " >
    <article className='flex flex-col items-center text-center mb-12'>
    <h1 className='text-3xl tracking-tight font-bold lg:text-4xl mb-4'>Hogwarts Houses</h1>
    <p className=' tracking-wide text-lg text-muted-foreground max-w-[700px] mb-8 '>Learn about the four houses of Hogwarts School of Witchcraft and Wizardry.</p>
    </article>
    <article className='grid gap-8'>
      <HouseCard/>
      <HouseCard/>
      <HouseCard/>
      <HouseCard/>

    </article>
  </section>
  )
}

export default Houses
