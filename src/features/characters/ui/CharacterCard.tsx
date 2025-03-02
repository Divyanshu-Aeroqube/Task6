import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

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
const CharacterCard:React.FC<{character:CharacterType ,index:number}> = ({character,index}) => {


  function getFirstAndLastName(nickname:string,fullname?: string): string {
    if (!fullname || typeof fullname !== "string") {
        return nickname; 
    }

    let parts = fullname.trim().split(/\s+/);

    if (parts.length > 2) {
        return `${parts[0]} ${parts[parts.length - 1]}`;
    }
    return fullname;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

  return (
    <Card key={index} className="rounded-xl border shadow-sm overflow-hidden py-0 gap-6">
      <div className={`h-2 house-${character.hogwartsHouse.toLowerCase()}`}></div>
      <CardHeader className="flex flex-row items-center gap-4 ">
        <div className={`relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 house-${character.hogwartsHouse.toLowerCase()} text-white`}>
          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">{getInitials(character.nickname)}</div>
        </div>
        <div>
          <CardTitle className="text-lg">{getFirstAndLastName(character.nickname,character.fullname)}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-foreground">{character.hogwartsHouse}</span>
            <span className="text-xl">.</span>
            <span>Student</span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <p className="text-sm text-muted-foreground">The Boy Who Lived, known for his lightning scar and being the chosen one to defeat Lord Voldemort.</p>
      </CardContent>
      <CardFooter className="flex items-center pb-4">
        <div className="text-xs text-muted-foreground">Blood status: Half-blood</div>
      </CardFooter>
    </Card>
  )
}

export default CharacterCard
