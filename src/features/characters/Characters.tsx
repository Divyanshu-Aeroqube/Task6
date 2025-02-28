import api from '@/api/api';
import { useEffect, useState } from 'react'
import CharacterTabs from './ui/CharacterTabs';

const Characters = () => {
        const [characters,setCharacters]=useState([]);
        const [loading,setLoading]=useState(true);
        const [err,setErr]=useState("");



        useEffect(() => {
            const getCharacters=async()=>{
                setLoading(true);
                setErr("");
                try {
                    const bookResponse=await api.get('/characters');
                    setCharacters(bookResponse.data);
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
        
            getCharacters();
        }, [])
        
        if(loading) return <p>Loading.....</p>
        if(err) return <h1>Something Went Wrong</h1>
        console.log(characters) 
  return (
    <section className="w-[90%] md:w-[90%] mx-auto py-10 px-auto " >
<article className='flex flex-col items-center text-center mb-12'>
<h1 className='text-3xl tracking-tight font-bold lg:text-4xl mb-4'>Harry Potter Characters</h1>
<p className=' tracking-wide text-lg text-muted-foreground max-w-[700px] font-[18px] '>Meet the witches, wizards, and magical creatures from the wizarding world.</p>
</article>
<article className='w-full'>
  <CharacterTabs/>
</article>
</section>
  )
}

export default Characters
