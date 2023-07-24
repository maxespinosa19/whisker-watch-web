import SingleCard from "./SingleCard";

async function getSingleCard(){
  const response = await fetch(' http://127.0.0.1:5002/animalForms')
  return response.json()
}

export default async function StrayLists(){
  const allAnimalCards = await getSingleCard()
  
  return (
    <>
    {allAnimalCards.map(animalCards => (
      <SingleCard animalCards={animalCards} key = {animalCards.id} />
    ))}
    </>
  )
}