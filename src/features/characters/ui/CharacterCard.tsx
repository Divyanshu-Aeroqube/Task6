import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
const CharacterCard = () => {
  return (
    <Card className="rounded-xl border shadow-sm overflow-hidden py-0 gap-6">
      <div className="h-2 bg-red-600"></div>
      <CardHeader className="flex flex-row items-center gap-4 ">
        <div className="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12 bg-red-600 text-white">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">HP</div>
        </div>
        <div>
          <CardTitle className="text-lg">Harry Potter</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-foreground">Gryffindor</span>
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
