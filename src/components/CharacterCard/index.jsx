function CharacterCard({character}) {
        return ( 
            <div class="card-block">
                <div class="card-img">
                    <img src={'http://localhost:3000/static/'+ character.image} alt=''/> 
                </div>

                <div class="card-text">

                    <div>
                        <h3>{character.name}</h3>
                        <p>age: {character.age}</p>

                    </div>
                
            
                </div>
            </div>
     );
}

export default CharacterCard;