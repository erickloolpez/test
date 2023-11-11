import React from 'react'
import { myContext } from '../petContext'
import { PetItem } from '../PetItem'
function PetDelete(){
    const { item,updatePet, deletePet } = React.useContext(myContext)
    return(
        <div className='grid-item'>
            <ul>
                {item.map((pet, index) => (
                    <PetItem
                        key={index}
                        name={pet.name}
                        owner={pet.owner}
                        age={pet.age}
                        breed={pet.breed}
                        onUpdatePet={()=>updatePet(pet.owner)}
                        onDeletePet={()=>deletePet(pet.owner)}
                    />
                ))}
            </ul>

        </div>
    )
}

export{PetDelete}