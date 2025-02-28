
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CardSection from "./CardSection"
import { Book } from "lucide-react"

const CharacterTabs = () => {
  return (
<Tabs defaultValue="All" className="">
  {/* Make the tab list scrollable */}
  <TabsList className="w-full h-[40px] mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide relative">
    <div className="flex w-full">
      <TabsTrigger className="px-4 md:w-1/5  md:mx-auto md:px-3 flex-shrink-0" value="All">All</TabsTrigger>
      <TabsTrigger className="px-4 md:w-1/5  md:mx-auto md:px-3 flex-shrink-0" value="Gryffindor">Gryffindor</TabsTrigger>
      <TabsTrigger className="px-4 md:w-1/5  md:mx-auto md:px-3 flex-shrink-0" value="Slytherin">Slytherin</TabsTrigger>
      <TabsTrigger className="px-4 md:w-1/5  md:mx-auto md:px-3 flex-shrink-0" value="Ravenclaw">Ravenclaw</TabsTrigger>
      <TabsTrigger className="px-4 md:w-1/5  md:mx-auto md:px-3 flex-shrink-0" value="Hufflepuff">Hufflepuff</TabsTrigger>
    </div>
  </TabsList>

  {/* Tab Content */}
  <TabsContent value="All">
    <CardSection />
  </TabsContent>
  <TabsContent value="Gryffindor"><Book /></TabsContent>
  <TabsContent value="Slytherin"><Book /></TabsContent>
  <TabsContent value="Ravenclaw"><Book /></TabsContent>
  <TabsContent value="Hufflepuff"><Book /></TabsContent>
</Tabs>




  )
}

export default CharacterTabs
