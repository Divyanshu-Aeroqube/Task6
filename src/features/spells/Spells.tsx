import api from "@/api/api";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input"
import SpellTab from "./ui/SpellTab";

const Spells = () => {
    const [spells,setSpells]=useState([]);
    const [loading,setLoading]=useState(true);
    const [err,setErr]=useState("");



    useEffect(() => {
        const getSpells=async()=>{
            setLoading(true);
            setErr("");
            try {
                const bookResponse=await api.get('/spells');
                setSpells(bookResponse.data);
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
    
        getSpells();
    }, [])
    
    if(loading) return <p>Loading.....</p>
    if(err) return <h1>Something Went Wrong</h1>
    console.log(spells) 


  return (
    <section className="w-[90%] mx-auto py-10 px-8 " >
    <article className='flex flex-col items-center text-center mb-12'>
    <h1 className='text-3xl tracking-tight font-bold lg:text-4xl mb-4'>Magical Spells</h1>
    <p className=' tracking-wide text-lg text-muted-foreground max-w-[700px] mb-8 '>Discover the incantations and effects of spells from the wizarding world.</p>
    <div className="w-full max-w-md">
    <Input  placeholder="Search spells..." className="h-[40px]"/>
    </div>

    </article>
    <article className='w-full'>
      <SpellTab/>
    </article>
    </section>
  )
}

export default Spells
