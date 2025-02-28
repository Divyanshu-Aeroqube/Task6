import CharacterCard from "./CharacterCard"

const CardSection = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <CharacterCard/>
      <CharacterCard/>
      <CharacterCard/>
      <CharacterCard/>
      <CharacterCard/>
      <CharacterCard/>
      <CharacterCard/>
      <CharacterCard/>
    </div>
  )
}

export default CardSection
