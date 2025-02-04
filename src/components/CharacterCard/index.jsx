import { useEffect, useState } from "react";

function CharacterCard({character}) {
    const [schoolName, setschool] = useState('');
    useEffect(() => {
        fetch(`http://localhost:3000/schools/${character.schoolId}`)
        .then(res => res.json())
        .then(data => setschool(data.name));
    }, [character.schoolId]);
        return ( 
            <div class="card-block">
                <div class="card-img">
                    <img src={'http://localhost:3000/static/'+ character.image} alt=''/> 
                </div>

                <div class="card-text">

                    <div>
                        <h3>{character.name}</h3>
                        <p>age: {character.age}</p>
                        <p>School: {schoolName}</p>
                    </div>
                
            
                </div>
            </div>
     );
}

export default CharacterCard;