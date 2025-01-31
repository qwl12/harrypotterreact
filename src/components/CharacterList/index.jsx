import CharacterCard from '../CharacterCard';



function CharacterList({characters}) {
    return ( 
      <>
        <div class="cards">
            {
               characters && characters.map((character) => {
                  return <CharacterCard character={character}/>
               })
            }
        </div>
      </>
     );
}

export default CharacterList;