
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SpellCard from "./SpellCard"
const SpellTab = () => {
  return (
<Tabs defaultValue="All" className="">
  <TabsList className="w-full h-[40px] mb-4 py-1.5 ">
  <div className="flex flex-wrap  w-full ">
    <TabsTrigger className="w-1/3   mx-auto px-3" value="All">All Spells</TabsTrigger>
    <TabsTrigger className="w-1/3  mx-auto px-3" value="Charms">Charms</TabsTrigger>
    <TabsTrigger className="w-1/3  mx-auto px-3" value="curses">Curses</TabsTrigger>
</div>


  </TabsList>
  <TabsContent value="All"><div className="grid grid-cols-3 gap-3"><SpellCard/><SpellCard/><SpellCard/></div> </TabsContent>
  <TabsContent value="Charms"></TabsContent>
  <TabsContent value="curses"></TabsContent>


</Tabs>
  )
}

export default SpellTab
