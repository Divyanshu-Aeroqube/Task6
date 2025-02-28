import { Button } from "@/components/ui/button"
import { BookOpen, Castle, User, WandSparkles } from "lucide-react"
import HomeCard from "./ui/HomeCard"

const Home = () => {
  return (
<div className="w-[90%] mx-auto mb-8">
<div className="py-10 ">
<div className="flex flex-col gap-4 justify-center items-center ">
      <div className="rounded-full p-6 shadow-[0_0_20px_hsl(263.4,70%,50.4%)] text-4xl">⚡</div>
      <h1 className=" mx-auto text-center text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">Potter API Explorer</h1>

      <p className="text-xl w-[55%] mb-6 text-center text-muted-foreground mx-auto">Discover the magical world of Harry Potter through our interactive API explorer. Browse books, characters, spells, and houses from the wizarding world.</p>


<article className="gap-x-4 flex">      <Button size={"lg"}><BookOpen size={20} className="inline" /> Explore Books</Button>
<Button size={"lg"} variant={"outline"}><User size={20} className="inline" /> Meet Characters</Button></article>
    </div>
</div>

<div className="grid grid-cols-4 mx-auto gap-x-4">
<HomeCard   title="Books"
  description="Explore the Harry Potter book series"
  content="Discover details about all seven books in the Harry Potter series, including summaries and publication dates."
  footer="View Books"
  icon={<BookOpen size={20} className="inline" />}
   />

<HomeCard   title="Characters"
  description="Meet the wizards and witches"
  content="Browse through the characters from the Harry Potter universe, including their backgrounds and affiliations."
  footer="View Characters" 
  icon={<User size={20} className="inline" />}
  />

<HomeCard   title="Spells"
  description="Learn magical incantations"
  content="Discover the various spells used in the wizarding world, their effects, and how they're cast."
  footer="View Spells" 
  icon={<WandSparkles size={20} className="inline" mb-8/>}
  />

<HomeCard   title="Houses"
  description="Explore Hogwarts houses"
  content="Learn about the four houses of Hogwarts School of Witchcraft and Wizardry and their unique traits."
  footer="View Houses" 
  icon={<Castle size={20} className="inline" />}
  
  />

</div>
</div>
  )
}

export default Home
