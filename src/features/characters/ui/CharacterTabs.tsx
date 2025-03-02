import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import CharacterCard from "./CharacterCard";
type CharacterType = {
  fullname: string;
  nickname: string;
  hogwartsHouse: string;
  interpretedBy: string;
  children: string[];
  image: string;
  birthDate: string;
  index: number;
};
const CharacterTabs:React.FC<{characters:CharacterType[]}> = ({characters}) => {
  const [selectedTab, setSelectedTab] = useState("All");
  return (
<Tabs defaultValue="All" onValueChange={setSelectedTab} className=" md:min-h-[800px] lg:min-h-[500px]">
  <TabsList className="w-full h-[40px] mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide relative">
    <div className="flex w-full">
      <TabsTrigger className=" cursor-pointer px-4 md:w-1/5  md:mx-auto md:px-3 flex-shrink-0" value="All">All</TabsTrigger>
      <TabsTrigger className=" cursor-pointer px-4 md:w-1/5  md:mx-auto md:px-3 flex-shrink-0" value="Gryffindor">Gryffindor</TabsTrigger>
      <TabsTrigger className=" cursor-pointer px-4 md:w-1/5  md:mx-auto md:px-3 flex-shrink-0" value="Slytherin">Slytherin</TabsTrigger>
      <TabsTrigger className=" cursor-pointer px-4 md:w-1/5  md:mx-auto md:px-3 flex-shrink-0" value="Ravenclaw">Ravenclaw</TabsTrigger>
      <TabsTrigger className=" cursor-pointer px-4 md:w-1/5  md:mx-auto md:px-3 flex-shrink-0" value="Hufflepuff">Hufflepuff</TabsTrigger>
    </div>
  </TabsList>

  {/* Tab Content */}

  <TabsContent value={selectedTab}>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {characters
      .filter(characters => selectedTab === "All" || characters.hogwartsHouse === selectedTab)
      .map((character) => (
        <CharacterCard index={character.index} character={character} />
      ))}
  </div>
</TabsContent>

</Tabs>




  )
}

export default CharacterTabs
